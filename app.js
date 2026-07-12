/* ============ 渲染逻辑 ============ */
const STORAGE_PREFIX = 'pyapi-review:';
const VIEW_COUNTS_KEY = STORAGE_PREFIX + 'viewCounts';

function loadViewCounts() {
  try {
    return JSON.parse(localStorage.getItem(VIEW_COUNTS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveViewCounts() {
  localStorage.setItem(VIEW_COUNTS_KEY, JSON.stringify(viewCounts));
}

let viewCounts = loadViewCounts(); // { topicId: { questionId: 次数 } }

function getViewCount(topicId, qid) {
  return (viewCounts[topicId] && viewCounts[topicId][qid]) || 0;
}

function incrementViewCount(topicId, qid) {
  if (!viewCounts[topicId]) viewCounts[topicId] = {};
  viewCounts[topicId][qid] = (viewCounts[topicId][qid] || 0) + 1;
  saveViewCounts();
}

function setViewCount(topicId, qid, value) {
  if (!viewCounts[topicId]) viewCounts[topicId] = {};
  viewCounts[topicId][qid] = value;
  saveViewCounts();
}

/* 是否显示橙色"看过答案"边框——跟次数统计分开存，这样"清空"才能只清视觉、不清次数 */
const VIEWED_FLAGS_KEY = STORAGE_PREFIX + 'viewedFlags';

function loadViewedFlags() {
  try {
    return JSON.parse(localStorage.getItem(VIEWED_FLAGS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveViewedFlags() {
  localStorage.setItem(VIEWED_FLAGS_KEY, JSON.stringify(viewedFlags));
}

let viewedFlags = loadViewedFlags(); // { topicId: { questionId: true } }

function isViewed(topicId, qid) {
  return !!(viewedFlags[topicId] && viewedFlags[topicId][qid]);
}

function setViewedFlag(topicId, qid, value) {
  if (!viewedFlags[topicId]) viewedFlags[topicId] = {};
  if (value) viewedFlags[topicId][qid] = true;
  else delete viewedFlags[topicId][qid];
  saveViewedFlags();
}

function normalizeAnswer(str) {
  return str
    .trim()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/'/g, '"')
    .replace(/\s+/g, '');
}

/*
 * 通用"可变名字"占位符：在 answer / alt 里用 {name} 标记任何题目没有指定、
 * 用户可以自己起名的部分——变量名、函数名、参数名都行。
 * 同一个 {name} 在同一个答案里出现多次时，要求用户写的也保持一致（比如 lambda x: x[1]）。
 * 不含 {..} 的答案完全不受影响，走原来的精确比对逻辑。
 */
const TEMPLATE_TOKEN_RE = /\{([a-zA-Z_][a-zA-Z0-9_]*)\}/;

function isTemplate(str) {
  return TEMPLATE_TOKEN_RE.test(str);
}

function displayAnswer(str) {
  return str.replace(/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g, '$1');
}

function buildTemplateRegex(template) {
  const tokens = template.split(/(\{[a-zA-Z_][a-zA-Z0-9_]*\})/);
  const seen = {};
  let pattern = '';
  tokens.forEach(tok => {
    const m = tok.match(/^\{([a-zA-Z_][a-zA-Z0-9_]*)\}$/);
    if (m) {
      const name = m[1];
      pattern += seen[name] ? `\\k<${name}>` : `(?<${name}>[A-Za-z_]\\w*)`;
      seen[name] = true;
    } else {
      pattern += tok
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/ /g, '\\s*');
    }
  });
  return new RegExp('^\\s*' + pattern + '\\s*$');
}

function checkAnswer(input, q) {
  const trimmed = input.trim();
  if (trimmed === '') return null;
  const candidates = [q.answer, ...(q.alt || [])];
  return candidates.some(c =>
    isTemplate(c) ? buildTemplateRegex(c).test(trimmed) : normalizeAnswer(c) === normalizeAnswer(input)
  );
}

function escapeHTML(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// 分组：1 注释 / 2 字符串 / 3 常量 / 4 数字 / 5 关键字 / 6 函数名（后面紧跟左括号）
const PY_TOKEN_RE = /(#[^\n]*)|('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*")|\b(True|False|None)\b|\b(\d+\.?\d*)\b|\b(for|in|if|elif|else|while|def|return|class|import|from|as|not|and|or|is|del|pass|break|continue|try|except|finally|raise|with|lambda|yield|global|nonlocal|assert)\b|\b([A-Za-z_][A-Za-z0-9_]*)(?=\()/g;

function highlightPython(code) {
  return escapeHTML(code).replace(PY_TOKEN_RE, (match, comment, string, cons, number, keyword, func) => {
    if (comment) return `<span class="tok-comment">${comment}</span>`;
    if (string) return `<span class="tok-string">${string}</span>`;
    if (cons) return `<span class="tok-const">${cons}</span>`;
    if (number) return `<span class="tok-number">${number}</span>`;
    if (keyword) return `<span class="tok-keyword">${keyword}</span>`;
    if (func) return `<span class="tok-func">${func}</span>`;
    return match;
  });
}

function renderQuizPanel(title, groups, panelKey) {
  let html = `<div class="panel" data-panel-key="${panelKey}">
    <div class="panel-section-title">
      <h2>${title}</h2>
      <button type="button" class="stats-review-btn" data-clear-panel="${panelKey}">清空本页作答</button>
    </div>`;
  groups.forEach(group => {
    html += `<div class="qgroup"><div class="qgroup-heading">${group.heading}</div>`;
    if (group.scenario) {
      html += `<div class="scenario"><span class="scenario-label">情境</span><pre>${escapeHTML(group.scenario)}</pre></div>`;
    }
    group.questions.forEach((q, i) => {
      html += `
        <div class="q" data-qid="${q.id}">
          <div class="q-prompt"><span class="n">${i+1}.</span>${q.prompt}</div>
          <div class="q-code-editor">
            <pre class="q-code-highlight"><code></code></pre>
            <textarea class="q-code-input" spellcheck="false" autocomplete="off" autocapitalize="off" autocorrect="off" rows="1" placeholder="在此输入 Python 代码"></textarea>
          </div>
          <div class="q-toolbar">
            <span class="q-icon"></span>
            <button type="button" class="q-answer-btn">显示答案</button>
            <span class="q-answer-text">${escapeHTML(displayAnswer(q.answer))}</span>
          </div>
        </div>`;
    });
    html += `</div>`;
  });
  html += `</div>`;
  return html;
}

let currentTopic = null;
let currentMode = 'notes'; // 'notes' | 'quiz'
let quizPanelView = 'function'; // 'function' | 'common'
let appView = 'topic'; // 'topic' | 'stats' | 'review'
let reviewTopicId = null;

function renderTopic(topic) {
  appView = 'topic';
  currentTopic = topic;
  currentMode = 'notes';
  quizPanelView = 'function';
  renderCurrentMode();
}

function renderCurrentMode() {
  const topic = currentTopic;
  const main = document.getElementById('main');

  let html = `<div class="topic-header">
      <h1 class="topic-title">${topic.title}</h1>
      <button id="modeToggleBtn" class="mode-toggle-btn${currentMode === 'quiz' ? ' quiz-active' : ''}">${currentMode === 'notes' ? '开始自测' : '返回笔记'}</button>
    </div>
    <div class="topic-sub">${topic.sub}</div>`;

  if (currentMode === 'notes') {
    html += topic.introHTML;
    html += topic.complexityHTML;
    html += topic.outroHTML;
    html += topic.staticFunctionHTML;
    html += topic.staticCommonHTML;
  } else {
    html += `<div class="quiz-tabs">
      <button type="button" class="quiz-tab-btn${quizPanelView === 'function' ? ' active' : ''}" data-panel="function">按功能分类 API 自测</button>
      <button type="button" class="quiz-tab-btn${quizPanelView === 'common' ? ' active' : ''}" data-panel="common">常见 API 自测</button>
    </div>`;
    if (quizPanelView === 'function') {
      html += renderQuizPanel('按功能分类 API 自测', topic.quizGroups.filter(g => g.section === 'function'), 'function');
    } else {
      html += renderQuizPanel('常见 API 自测', topic.quizGroups.filter(g => g.section === 'common'), 'common');
    }
  }

  main.innerHTML = html;

  document.getElementById('modeToggleBtn').addEventListener('click', () => {
    currentMode = currentMode === 'notes' ? 'quiz' : 'notes';
    if (currentMode === 'quiz') quizPanelView = 'function';
    renderCurrentMode();
    window.scrollTo(0, 0);
  });

  if (currentMode === 'quiz') {
    main.querySelectorAll('.quiz-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        quizPanelView = btn.getAttribute('data-panel');
        renderCurrentMode();
        window.scrollTo(0, 0);
      });
    });
    wireQuizInteractions(topic);
  }
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// 光标在最后一行时按 ↓，聚焦并把视口居中滚动到下一题；否则交给浏览器正常处理（多行文本里正常移动光标）
function jumpToNextQuestionOnArrowDown(e, inputEl, main, nextQ) {
  if (e.key !== 'ArrowDown' || !nextQ) return;
  const isLastLine = inputEl.value.indexOf('\n', inputEl.selectionStart) === -1;
  if (!isLastLine) return;
  e.preventDefault();
  const nextQEl = main.querySelector(`.q[data-qid="${nextQ.id}"]`);
  const nextInput = nextQEl.querySelector('.q-code-input, textarea');
  nextInput.focus();
  nextQEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function wireQuizInteractions(topic) {
  const main = document.getElementById('main');
  const allQuestions = topic.quizGroups.flatMap(g => g.questions);
  const questionMeta = {}; // qid -> { render, groupSection }

  allQuestions.forEach((q, idx) => {
    const qEl = main.querySelector(`.q[data-qid="${q.id}"]`);
    const editorEl = qEl.querySelector('.q-code-editor');
    const inputEl = qEl.querySelector('.q-code-input');
    const highlightCode = qEl.querySelector('.q-code-highlight code');
    const iconEl = qEl.querySelector('.q-icon');
    const answerBtn = qEl.querySelector('.q-answer-btn');
    const answerText = qEl.querySelector('.q-answer-text');
    const valueKey = STORAGE_PREFIX + topic.id + ':' + q.id;

    function setVerdict(result) {
      editorEl.classList.remove('correct', 'incorrect', 'viewed');
      iconEl.classList.remove('correct', 'incorrect');
      if (result === true) {
        iconEl.classList.add('correct');
        iconEl.textContent = '✓';
      } else if (result === false) {
        iconEl.classList.add('incorrect');
        iconEl.textContent = '✗';
      } else {
        iconEl.textContent = '';
      }
      // 看过答案的题目框体保持橙色（优先级最高），直到"清空本页"或"重置全部"
      if (isViewed(topic.id, q.id)) {
        editorEl.classList.add('viewed');
      } else if (result === true) {
        editorEl.classList.add('correct');
      } else if (result === false) {
        editorEl.classList.add('incorrect');
      }
    }

    function render() {
      highlightCode.innerHTML = highlightPython(inputEl.value);
      setVerdict(checkAnswer(inputEl.value, q));
      autoResize(inputEl);
    }

    questionMeta[q.id] = { render, inputEl, valueKey };

    const savedValue = localStorage.getItem(valueKey);
    if (savedValue !== null) inputEl.value = savedValue;
    render();

    inputEl.addEventListener('input', () => {
      localStorage.setItem(valueKey, inputEl.value);
      render();
      renderNav();
    });

    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = inputEl.selectionStart;
        const end = inputEl.selectionEnd;
        inputEl.value = inputEl.value.slice(0, start) + '    ' + inputEl.value.slice(end);
        inputEl.selectionStart = inputEl.selectionEnd = start + 4;
        inputEl.dispatchEvent(new Event('input'));
      } else {
        jumpToNextQuestionOnArrowDown(e, inputEl, main, allQuestions[idx + 1]);
      }
    });

    answerBtn.addEventListener('click', () => {
      const shown = answerText.classList.toggle('visible');
      answerBtn.textContent = shown ? '隐藏答案' : '显示答案';
      if (shown) {
        incrementViewCount(topic.id, q.id);
        setViewedFlag(topic.id, q.id, true);
        setVerdict(checkAnswer(inputEl.value, q));
      }
    });
  });

  main.querySelectorAll('[data-clear-panel]').forEach(btn => {
    const panelKey = btn.getAttribute('data-clear-panel');
    btn.addEventListener('click', () => {
      if (!confirm('确定要清空本页所有已填写的答案吗？"显示答案"次数不会受影响。')) return;
      const panelQuestions = topic.quizGroups
        .filter(g => g.section === panelKey)
        .flatMap(g => g.questions);
      panelQuestions.forEach(q => {
        const meta = questionMeta[q.id];
        if (!meta) return;
        meta.inputEl.value = '';
        localStorage.removeItem(meta.valueKey);
        setViewedFlag(topic.id, q.id, false);
        meta.render();
      });
      renderNav();
    });
  });
}

// 某专题的某个自测板块是否"写满"（每题都有内容，不管对错），写满时是否全对
function computeTopicQuizStatus(topic) {
  let anyGreen = false;
  let anyYellow = false;
  ['function', 'common'].forEach(panelKey => {
    const questions = topic.quizGroups.filter(g => g.section === panelKey).flatMap(g => g.questions);
    if (questions.length === 0) return;
    const values = questions.map(q => localStorage.getItem(STORAGE_PREFIX + topic.id + ':' + q.id) || '');
    const allFilled = values.every(v => v.trim() !== '');
    if (!allFilled) return;
    const allCorrect = questions.every((q, i) => checkAnswer(values[i], q) === true);
    if (allCorrect) anyGreen = true;
    else anyYellow = true;
  });
  if (anyYellow) return 'yellow';
  if (anyGreen) return 'green';
  return null;
}

function renderNav() {
  const nav = document.getElementById('nav');
  nav.innerHTML = '';

  const statsLink = document.createElement('a');
  statsLink.className = 'nav-item nav-stats-link' + (appView === 'stats' || appView === 'review' ? ' active' : '');
  statsLink.textContent = '📊 错题统计';
  statsLink.addEventListener('click', () => {
    appView = 'stats';
    renderStatsPage();
    renderNav();
    window.scrollTo(0, 0);
  });
  nav.appendChild(statsLink);

  const divider = document.createElement('div');
  divider.className = 'nav-divider';
  nav.appendChild(divider);

  TOPICS.forEach(topic => {
    const a = document.createElement('a');
    const isActive = appView === 'topic' && currentTopic && currentTopic.id === topic.id;
    a.className = 'nav-item' + (isActive ? ' active' : '');
    const status = computeTopicQuizStatus(topic);
    const statusHTML = status === 'green'
      ? '<span class="nav-status-dot nav-status-green">✓</span>'
      : status === 'yellow'
        ? '<span class="nav-status-dot nav-status-yellow"></span>'
        : '';
    a.innerHTML = `<span class="nav-item-label">${topic.title}</span>${statusHTML}`;
    a.addEventListener('click', () => {
      renderTopic(topic);
      renderNav();
      window.scrollTo(0, 0);
    });
    nav.appendChild(a);
  });
}

function flaggedGroupsForTopic(topic) {
  return topic.quizGroups
    .map(group => ({ ...group, questions: group.questions.filter(q => getViewCount(topic.id, q.id) > 0) }))
    .filter(group => group.questions.length > 0);
}

function renderStatsPage() {
  const main = document.getElementById('main');
  let html = `<h1 class="topic-title">📊 错题统计</h1>
    <div class="topic-sub">按专题查看"显示答案"次数较多的题目，点击"进入错题回顾"可以只针对这些题重考一遍</div>`;

  const topicsWithFlags = TOPICS
    .map(topic => ({ topic, groups: flaggedGroupsForTopic(topic) }))
    .filter(x => x.groups.length > 0);

  if (topicsWithFlags.length === 0) {
    html += `<div class="panel"><p class="stats-empty">目前还没有需要复习的题目，继续刷题吧！</p></div>`;
  } else {
    topicsWithFlags.forEach(({ topic, groups }) => {
      const total = groups.reduce((sum, g) => sum + g.questions.length, 0);
      html += `<div class="panel">
        <div class="panel-section-title">
          <h2>${topic.title}</h2>
          <button type="button" class="stats-review-btn" data-review-topic="${topic.id}">进入错题回顾（${total}）</button>
        </div>
        <table class="ref-table">
          <tr><th>题目</th><th>显示答案次数</th></tr>`;
      groups.forEach(group => {
        group.questions.forEach(q => {
          html += `<tr><td>${q.prompt}</td><td>${getViewCount(topic.id, q.id)}</td></tr>`;
        });
      });
      html += `</table></div>`;
    });
  }

  main.innerHTML = html;

  main.querySelectorAll('[data-review-topic]').forEach(btn => {
    btn.addEventListener('click', () => {
      appView = 'review';
      reviewTopicId = btn.getAttribute('data-review-topic');
      renderReviewPage(reviewTopicId);
      window.scrollTo(0, 0);
    });
  });
}

function renderReviewPage(topicId) {
  const topic = TOPICS.find(t => t.id === topicId);
  const main = document.getElementById('main');
  const groups = flaggedGroupsForTopic(topic);

  let html = `<div class="topic-header">
      <h1 class="topic-title">错题回顾 · ${topic.title}</h1>
      <button id="reviewBackBtn" class="mode-toggle-btn quiz-active">返回统计</button>
    </div>
    <div class="topic-sub">本次不显示答案、不实时判分，全部作答完成后点击底部"提交"才会一次性显示对错</div>
    <div class="panel">`;

  groups.forEach(group => {
    html += `<div class="qgroup"><div class="qgroup-heading">${group.heading}</div>`;
    if (group.scenario) {
      html += `<div class="scenario"><span class="scenario-label">情境</span><pre>${escapeHTML(group.scenario)}</pre></div>`;
    }
    group.questions.forEach((q, i) => {
      html += `
        <div class="q" data-qid="${q.id}">
          <div class="q-prompt"><span class="n">${i+1}.</span>${q.prompt}</div>
          <div class="q-code-editor">
            <pre class="q-code-highlight"><code></code></pre>
            <textarea class="q-code-input" spellcheck="false" autocomplete="off" autocapitalize="off" autocorrect="off" rows="1" placeholder="在此输入 Python 代码"></textarea>
          </div>
          <div class="q-result"></div>
        </div>`;
    });
    html += `</div>`;
  });

  html += `<div class="review-submit-row">
      <button id="reviewSubmitBtn" class="review-submit-btn">提交本次回顾</button>
      <span id="reviewResultSummary" class="review-result-summary"></span>
    </div>`;
  html += `</div>`;

  main.innerHTML = html;

  document.getElementById('reviewBackBtn').addEventListener('click', () => {
    appView = 'stats';
    renderStatsPage();
    renderNav();
    window.scrollTo(0, 0);
  });

  wireReviewInteractions(topic, groups);
}

function wireReviewInteractions(topic, groups) {
  const main = document.getElementById('main');
  const allQuestions = groups.flatMap(g => g.questions);

  allQuestions.forEach((q, idx) => {
    const qEl = main.querySelector(`.q[data-qid="${q.id}"]`);
    const inputEl = qEl.querySelector('.q-code-input');
    const highlightCode = qEl.querySelector('.q-code-highlight code');

    function render() {
      highlightCode.innerHTML = highlightPython(inputEl.value);
      autoResize(inputEl);
    }
    render();

    inputEl.addEventListener('input', render);

    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = inputEl.selectionStart;
        const end = inputEl.selectionEnd;
        inputEl.value = inputEl.value.slice(0, start) + '    ' + inputEl.value.slice(end);
        inputEl.selectionStart = inputEl.selectionEnd = start + 4;
        inputEl.dispatchEvent(new Event('input'));
      } else {
        jumpToNextQuestionOnArrowDown(e, inputEl, main, allQuestions[idx + 1]);
      }
    });
  });

  document.getElementById('reviewSubmitBtn').addEventListener('click', (e) => {
    let correctCount = 0;
    allQuestions.forEach(q => {
      const qEl = main.querySelector(`.q[data-qid="${q.id}"]`);
      const editorEl = qEl.querySelector('.q-code-editor');
      const inputEl = qEl.querySelector('.q-code-input');
      const resultEl = qEl.querySelector('.q-result');
      const result = checkAnswer(inputEl.value, q) === true;

      editorEl.classList.remove('viewed');
      editorEl.classList.add(result ? 'correct' : 'incorrect');
      resultEl.classList.add(result ? 'correct' : 'incorrect');
      resultEl.textContent = result ? '✓ 正确' : `✗ 错误 · 正确答案：${displayAnswer(q.answer)}`;
      inputEl.disabled = true;

      if (result) {
        correctCount++;
        setViewCount(topic.id, q.id, 0);
        setViewedFlag(topic.id, q.id, false);
      } else {
        incrementViewCount(topic.id, q.id);
      }
    });

    document.getElementById('reviewResultSummary').textContent =
      `本次答对 ${correctCount} / ${allQuestions.length} 题`;
    e.target.disabled = true;
  });
}

document.getElementById('resetAllBtn').addEventListener('click', () => {
  if (!confirm('确定要清空当前所有已填写的答案和显示答案记录吗？此操作不可撤销。')) return;
  Object.keys(localStorage)
    .filter(k => k.startsWith(STORAGE_PREFIX))
    .forEach(k => localStorage.removeItem(k));
  viewCounts = {};
  viewedFlags = {};
  if (appView === 'stats' || appView === 'review') {
    appView = 'stats'; // 回顾题目已清空，退回统计页
    renderStatsPage();
  } else {
    renderCurrentMode();
  }
  renderNav();
});

function collectSavedAnswers() {
  const answers = {};
  Object.keys(localStorage)
    .filter(k => k.startsWith(STORAGE_PREFIX) && k !== VIEW_COUNTS_KEY && k !== VIEWED_FLAGS_KEY)
    .forEach(k => { answers[k.slice(STORAGE_PREFIX.length)] = localStorage.getItem(k); });
  return answers;
}

document.getElementById('exportBtn').addEventListener('click', () => {
  const payload = { viewCounts, viewedFlags, answers: collectSavedAnswers() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'python-api-review-progress.json';
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('importBtn').addEventListener('click', () => {
  document.getElementById('importFileInput').click();
});

document.getElementById('importFileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (data && typeof data === 'object' && data.viewCounts) {
        viewCounts = data.viewCounts || {};
        viewedFlags = data.viewedFlags || {};
        Object.keys(localStorage)
          .filter(k => k.startsWith(STORAGE_PREFIX) && k !== VIEW_COUNTS_KEY && k !== VIEWED_FLAGS_KEY)
          .forEach(k => localStorage.removeItem(k));
        Object.entries(data.answers || {}).forEach(([suffix, value]) => {
          localStorage.setItem(STORAGE_PREFIX + suffix, value);
        });
      } else {
        // 兼容旧版本导出的文件（只有次数，没有显示状态）
        viewCounts = (data && typeof data === 'object') ? data : {};
        viewedFlags = {};
      }
      saveViewCounts();
      saveViewedFlags();
      if (appView === 'stats') renderStatsPage();
      else if (appView === 'review') renderReviewPage(reviewTopicId);
      else renderCurrentMode();
      renderNav();
      alert('导入成功');
    } catch (err) {
      alert('导入失败：文件不是有效的 JSON');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
});

function updateThemeToggleIcon() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.getElementById('themeToggleBtn').textContent = isDark ? '☀️' : '🌙';
}

document.getElementById('themeToggleBtn').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('pyapi-theme', next);
  updateThemeToggleIcon();
});
updateThemeToggleIcon();

renderTopic(TOPICS[0]);
renderNav();
