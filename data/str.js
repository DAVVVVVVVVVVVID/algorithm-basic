TOPICS.push({
    id: 'str',
    title: '字符串 String',
    sub: '与数组同源但不可变（Immutable）· 所有操作都返回新字符串',
    introHTML: `
      <div class="panel">
        <h2>概念介绍</h2>
        <p>在 Python 中，字符串使用 <code>str</code> 类型表示，用于存储一串字符，与数组类似——支持索引、遍历、切片。</p>
        <div class="code-block">s = "hello"</div>
        <p>但最大的区别是：<b>字符串不可修改（Immutable）</b>。</p>
        <div class="code-block">s = "hello"
s[0] = "H"      # ❌ 报错</div>
        <p>如果想"修改"字符串，只能重新创建一个新的字符串：</p>
        <div class="code-block">s = "hello"
s = "H" + s[1:]</div>
      </div>
    `,
    complexityHTML: `
      <div class="panel">
        <h2>时间复杂度</h2>
        <table class="ref-table">
          <tr><th>操作</th><th>时间复杂度</th></tr>
          <tr><td>读取 <code>s[i]</code></td><td>O(1)</td></tr>
          <tr><td>获取长度 <code>len(s)</code></td><td>O(1)</td></tr>
          <tr><td>切片 <code>s[a:b]</code></td><td>O(k)</td></tr>
          <tr><td>拼接 <code>a+b</code></td><td>O(n+m)</td></tr>
          <tr><td>查找字符 <code>in</code></td><td>O(n)</td></tr>
        </table>
      </div>
    `,
    outroHTML: `
      <div class="panel">
        <h2>面试前必须熟练到什么程度？</h2>
        <h3>1. 理解字符串</h3>
        <ul>
          <li>理解 Python 字符串本质上是 <code>str</code></li>
          <li>理解字符串不可变（Immutable）</li>
          <li>熟悉字符串各类操作的时间复杂度</li>
        </ul>
        <h3>2. 熟练使用 API（不查文档即可写出）</h3>
        <ul>
          <li>创建字符串 / 索引、遍历、切片</li>
          <li>拼接与翻转 / 查找、替换</li>
          <li>拆分与拼接 / 去除空白字符</li>
          <li>大小写转换 / 判断字符串类型</li>
        </ul>
        <p>并清楚哪些 API 返回<b>新字符串</b>、返回<b>列表</b>、返回<b>布尔值</b>、返回<b>整数</b>。</p>
        <h3>3. 解题能力（看到字符串题能快速判断）</h3>
        <ul>
          <li>是否需要双指针？</li>
          <li>是否需要滑动窗口？</li>
          <li>是否需要哈希表统计字符？</li>
          <li>是否需要使用 <code>split()</code> / <code>join()</code>？</li>
          <li>是否需要利用字符串不可变的特点重新构造字符串？</li>
        </ul>
        <h3>📌 本专题必须牢记（算法刷题最高频）</h3>
        <ul class="star-list">
          <li>字符串是不可变对象（Immutable）</li>
          <li><code>for i, c in enumerate(s):</code></li>
          <li><code>s[::-1]</code></li>
          <li><code>find()</code> 与 <code>index()</code> 的区别</li>
          <li><code>split()</code> 与 <code>"".join()</code> 的配合使用</li>
          <li><code>strip()</code></li>
          <li><code>replace()</code></li>
          <li><code>x in s</code></li>
          <li>字符串操作的时间复杂度</li>
        </ul>
      </div>
    `,
    staticFunctionHTML: `
      <div class="panel">
        <h2>按功能分类 API 参考</h2>
        <div class="note-block">
          <h3>（1）创建字符串</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s = ""</code></td><td>创建空字符串</td></tr>
            <tr><td><code>s = "hello"</code></td><td>创建字符串</td></tr>
            <tr><td><code>s = str(123)</code></td><td>数字转换为字符串</td></tr>
            <tr><td><code>s = "a" * 5</code></td><td>创建 <code>"aaaaa"</code> ⭐⭐⭐⭐⭐ 高频</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（2）索引</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s[0]</code></td><td>第一个字符</td></tr>
            <tr><td><code>s[2]</code></td><td>第三个字符</td></tr>
            <tr><td><code>s[-1]</code></td><td>最后一个字符</td></tr>
            <tr><td><code>s[-2]</code></td><td>倒数第二个字符</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（3）遍历</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>for c in s:</code></td><td>遍历字符</td></tr>
            <tr><td><code>for i in range(len(s)):</code></td><td>遍历索引</td></tr>
            <tr><td><code>for i, c in enumerate(s):</code></td><td>同时遍历索引和值 ⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（4）切片</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s[1:4]</code></td><td>获取 [1,4)</td></tr>
            <tr><td><code>s[:3]</code></td><td>前三个字符</td></tr>
            <tr><td><code>s[2:]</code></td><td>从第三个开始</td></tr>
            <tr><td><code>s[::-1]</code></td><td>字符串翻转 ⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（5）字符串拼接</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s1 + s2</code></td><td>拼接两个字符串</td></tr>
            <tr><td><code>s += "abc"</code></td><td>追加字符串</td></tr>
          </table>
          <p class="note-hint">注意：每次拼接都会创建新的字符串。</p>
        </div>
        <div class="note-block">
          <h3>（6）大小写转换</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s.lower()</code></td><td>全部小写</td></tr>
            <tr><td><code>s.upper()</code></td><td>全部大写</td></tr>
            <tr><td><code>s.capitalize()</code></td><td>首字母大写</td></tr>
            <tr><td><code>s.swapcase()</code></td><td>大小写互换</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（7）查找</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>"a" in s</code></td><td>判断是否存在</td></tr>
            <tr><td><code>s.find("ab")</code></td><td>返回第一次出现位置，不存在返回 -1 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>s.index("ab")</code></td><td>返回第一次出现位置，不存在报错</td></tr>
            <tr><td><code>s.count("a")</code></td><td>统计出现次数</td></tr>
            <tr><td><code>s.startswith("ab")</code></td><td>是否以指定字符串开头</td></tr>
            <tr><td><code>s.endswith("ab")</code></td><td>是否以指定字符串结尾</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（8）替换</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s.replace("a","b")</code></td><td>替换所有字符（返回新字符串）</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（9）去除空白字符</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s.strip()</code></td><td>去除两端空格 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>s.lstrip()</code></td><td>去除左侧空格</td></tr>
            <tr><td><code>s.rstrip()</code></td><td>去除右侧空格</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（10）拆分与拼接</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s.split()</code></td><td>按空格拆分</td></tr>
            <tr><td><code>s.split(",")</code></td><td>按指定字符拆分</td></tr>
            <tr><td><code>",".join(arr)</code></td><td>将列表拼接为字符串 ⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（11）判断类型</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s.isdigit()</code></td><td>是否全部数字</td></tr>
            <tr><td><code>s.isalpha()</code></td><td>是否全部字母</td></tr>
            <tr><td><code>s.isalnum()</code></td><td>是否全部数字或字母</td></tr>
            <tr><td><code>s.isspace()</code></td><td>是否全部为空格</td></tr>
          </table>
        </div>
      </div>
    `,
    staticCommonHTML: `
      <div class="panel">
        <h2>常见 API 参考</h2>
        <table class="ref-table cols-3">
          <tr><th>API</th><th>输出</th><th>功能</th></tr>
          <tr><td><code>len(s)</code></td><td><code>int</code></td><td>返回字符串长度</td></tr>
          <tr><td><code>lower()</code></td><td><code>str</code></td><td>转为小写</td></tr>
          <tr><td><code>upper()</code></td><td><code>str</code></td><td>转为大写</td></tr>
          <tr><td><code>find(x)</code></td><td><code>int</code></td><td>查找字符串，不存在返回 -1</td></tr>
          <tr><td><code>index(x)</code></td><td><code>int</code></td><td>查找字符串，不存在报错（与异常处理有关，力扣用 find 即可）</td></tr>
          <tr><td><code>count(x)</code></td><td><code>int</code></td><td>统计出现次数</td></tr>
          <tr><td><code>replace(a,b)</code></td><td><code>str</code></td><td>替换字符串</td></tr>
          <tr><td><code>split()</code></td><td><code>list</code></td><td>按空格拆分</td></tr>
          <tr><td><code>split(",")</code></td><td><code>list</code></td><td>按指定字符拆分</td></tr>
          <tr><td><code>"sep".join(arr)</code></td><td><code>str</code></td><td>拼接字符串</td></tr>
          <tr><td><code>strip()</code></td><td><code>str</code></td><td>去除两端空白</td></tr>
          <tr><td><code>startswith(x)</code></td><td><code>bool</code></td><td>是否以指定字符串开头</td></tr>
          <tr><td><code>endswith(x)</code></td><td><code>bool</code></td><td>是否以指定字符串结尾</td></tr>
          <tr><td><code>isdigit()</code></td><td><code>bool</code></td><td>是否全部数字</td></tr>
          <tr><td><code>isalpha()</code></td><td><code>bool</code></td><td>是否全部字母</td></tr>
          <tr><td><code>isalnum()</code></td><td><code>bool</code></td><td>是否全部数字或字母</td></tr>
          <tr><td><code>x in s</code></td><td><code>bool</code></td><td>判断是否存在</td></tr>
          <tr><td><code>s[::-1]</code></td><td><code>str</code></td><td>返回翻转后的新字符串</td></tr>
        </table>
        <div class="callout warning">
          <b>⭐⭐ 面试高频易错点：</b><br/>
          字符串不可修改，所有字符串方法都会返回新字符串，不会修改原字符串。<br/>
          <code>find()</code> 找不到返回 -1，<code>index()</code> 找不到会抛出异常。<br/>
          <code>split()</code> 返回的是 list，<code>join()</code> 返回的是 str，二者经常配合使用。<br/>
          <code>+</code> 拼接字符串会创建新对象，大量拼接效率较低；多次拼接时优先考虑收集到列表后使用 <code>"".join(...)</code>。
        </div>
      </div>
    `,
    quizGroups: [
      {
        section: 'function',
        heading: '创建字符串',
        scenario: null,
        questions: [
          { id:'st01', prompt:'创建一个空字符串，变量名为 s', answer:'s = ""' },
          { id:'st02', prompt:'创建字符串 "hello" 赋值给 s', answer:'s = "hello"' },
          { id:'st03', prompt:'把数字 123 转换成字符串赋值给 s', answer:'s = str(123)' },
          { id:'st04', prompt:'创建字符串 "aaaaa"（用重复写法，不要直接写 5 个 a）', answer:'s = "a" * 5' },
        ]
      },
      {
        section: 'function',
        heading: '索引',
        scenario: 's = "hello"',
        questions: [
          { id:'st05', prompt:'获取 s 的第一个字符', answer:'s[0]' },
          { id:'st06', prompt:'获取 s 的第三个字符', answer:'s[2]' },
          { id:'st07', prompt:'获取 s 的最后一个字符', answer:'s[-1]' },
          { id:'st08', prompt:'获取 s 倒数第二个字符', answer:'s[-2]' },
        ]
      },
      {
        section: 'function',
        heading: '遍历',
        scenario: 's = "hello"',
        questions: [
          { id:'st09', prompt:'写出遍历 s 字符的 for 循环开头（变量名任意）', answer:'for {c} in s:' },
          { id:'st10', prompt:'写出遍历 s 索引的 for 循环开头（变量名任意）', answer:'for {i} in range(len(s)):' },
          { id:'st11', prompt:'写出同时遍历索引和字符的 for 循环开头（变量名任意）', answer:'for {i}, {c} in enumerate(s):' },
        ]
      },
      {
        section: 'function',
        heading: '切片',
        scenario: 's = "hello"',
        questions: [
          { id:'st12', prompt:'获取 s 下标 1 到 4（不包含 4）的切片', answer:'s[1:4]' },
          { id:'st13', prompt:'获取 s 前三个字符', answer:'s[:3]' },
          { id:'st14', prompt:'获取 s 从第三个字符开始到末尾', answer:'s[2:]' },
          { id:'st15', prompt:'返回 s 翻转后的新字符串', answer:'s[::-1]' },
        ]
      },
      {
        section: 'function',
        heading: '字符串拼接',
        scenario: 's1 = "hello"\ns2 = "world"',
        questions: [
          { id:'st16', prompt:'拼接 s1 和 s2', answer:'s1 + s2' },
          { id:'st17', prompt:'已知 s = "hello"，把 "abc" 追加到 s 末尾', answer:'s += "abc"' },
        ]
      },
      {
        section: 'function',
        heading: '大小写转换',
        scenario: 's = "Hello World"',
        questions: [
          { id:'st18', prompt:'把 s 转成全部小写', answer:'s.lower()' },
          { id:'st19', prompt:'把 s 转成全部大写', answer:'s.upper()' },
          { id:'st20', prompt:'把 s 首字母大写', answer:'s.capitalize()' },
          { id:'st21', prompt:'把 s 大小写互换', answer:'s.swapcase()' },
        ]
      },
      {
        section: 'function',
        heading: '查找',
        scenario: 's = "hello world"',
        questions: [
          { id:'st22', prompt:'判断 "a" 是否在 s 中', answer:'"a" in s' },
          { id:'st23', prompt:'查找 "ab" 在 s 中第一次出现的位置，不存在返回 -1', answer:'s.find("ab")' },
          { id:'st24', prompt:'查找 "ab" 在 s 中第一次出现的位置，不存在报错', answer:'s.index("ab")' },
          { id:'st25', prompt:'统计 "a" 在 s 中出现的次数', answer:'s.count("a")' },
          { id:'st26', prompt:'判断 s 是否以 "ab" 开头', answer:'s.startswith("ab")' },
          { id:'st27', prompt:'判断 s 是否以 "ab" 结尾', answer:'s.endswith("ab")' },
        ]
      },
      {
        section: 'function',
        heading: '替换',
        scenario: 's = "hello world"',
        questions: [
          { id:'st28', prompt:'把 s 中所有 "a" 替换成 "b"（返回新字符串）', answer:'s.replace("a", "b")' },
        ]
      },
      {
        section: 'function',
        heading: '去除空白字符',
        scenario: 's = "  hello  "',
        questions: [
          { id:'st29', prompt:'去除 s 两端的空格', answer:'s.strip()' },
          { id:'st30', prompt:'去除 s 左侧的空格', answer:'s.lstrip()' },
          { id:'st31', prompt:'去除 s 右侧的空格', answer:'s.rstrip()' },
        ]
      },
      {
        section: 'function',
        heading: '拆分与拼接',
        scenario: 's = "a,b,c"\narr = ["a", "b", "c"]',
        questions: [
          { id:'st32', prompt:'把 s 按空格拆分', answer:'s.split()' },
          { id:'st33', prompt:'把 s 按逗号拆分', answer:'s.split(",")' },
          { id:'st34', prompt:'把 arr 用逗号拼接成字符串', answer:'",".join(arr)' },
        ]
      },
      {
        section: 'function',
        heading: '判断类型',
        scenario: 's = "abc123"',
        questions: [
          { id:'st35', prompt:'判断 s 是否全部是数字', answer:'s.isdigit()' },
          { id:'st36', prompt:'判断 s 是否全部是字母', answer:'s.isalpha()' },
          { id:'st37', prompt:'判断 s 是否全部是数字或字母', answer:'s.isalnum()' },
          { id:'st38', prompt:'判断 s 是否全部是空格', answer:'s.isspace()' },
        ]
      },
      {
        section: 'common',
        heading: '基础操作',
        scenario: 's = "Hello World"',
        questions: [
          { id:'st39', prompt:'返回 s 的长度', answer:'len(s)' },
          { id:'st40', prompt:'转成小写', answer:'s.lower()' },
          { id:'st41', prompt:'转成大写', answer:'s.upper()' },
          { id:'st42', prompt:'查找 "World" 第一次出现的位置，不存在返回 -1', answer:'s.find("World")' },
          { id:'st43', prompt:'查找 "World" 第一次出现的位置，不存在报错', answer:'s.index("World")' },
          { id:'st44', prompt:'统计 "o" 出现的次数', answer:'s.count("o")' },
          { id:'st45', prompt:'把所有 "o" 替换成 "0"', answer:'s.replace("o", "0")' },
          { id:'st46', prompt:'去除两端空白', answer:'s.strip()' },
          { id:'st47', prompt:'判断 s 是否以 "Hello" 开头', answer:'s.startswith("Hello")' },
          { id:'st48', prompt:'判断 s 是否以 "World" 结尾', answer:'s.endswith("World")' },
          { id:'st49', prompt:'判断 "o" 是否在 s 中', answer:'"o" in s' },
          { id:'st50', prompt:'返回 s 翻转后的新字符串', answer:'s[::-1]' },
        ]
      },
      {
        section: 'common',
        heading: '拆分 / 拼接 / 类型判断',
        scenario: 's = "a,b,c"\narr = ["a", "b", "c"]\nnum_s = "123"',
        questions: [
          { id:'st51', prompt:'把 s 按空格拆分', answer:'s.split()' },
          { id:'st52', prompt:'把 s 按逗号拆分', answer:'s.split(",")' },
          { id:'st53', prompt:'把 arr 用逗号拼接成字符串', answer:'",".join(arr)' },
          { id:'st54', prompt:'判断 num_s 是否全部是数字', answer:'num_s.isdigit()' },
          { id:'st55', prompt:'判断 num_s 是否全部是字母', answer:'num_s.isalpha()' },
          { id:'st56', prompt:'判断 num_s 是否全部是数字或字母', answer:'num_s.isalnum()' },
        ]
      },
    ]
});
