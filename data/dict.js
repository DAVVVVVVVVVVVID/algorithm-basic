TOPICS.push({
    id: 'dict',
    title: '字典 Dictionary',
    sub: 'LeetCode 使用频率最高的数据结构 · dict > list > set > deque > heap > tuple',
    introHTML: `
      <div class="panel">
        <h2>概念介绍</h2>
        <div class="rank">重要性排名：dict &gt; list &gt; set &gt; deque &gt; heap &gt; tuple</div>
        <p>字典（Dictionary）是 Python 中的一种<b>键值对（Key-Value）</b>数据结构，LeetCode 中约 <b>40%~50%</b> 的题目都会用到字典。</p>
        <div class="code-block">student = {
    "name": "Tom",
    "age": 20
}</div>
        <ul>
          <li>通过 <b>Key</b> 存储 / 查找数据</li>
          <li>Key 唯一，不可重复；Value 可以重复</li>
          <li>底层基于<b>哈希表（Hash Table）</b>实现</li>
        </ul>
        <p>字典最大的作用：<b>把 O(n) 的查找优化为 O(1)</b>（这也是"两数之和"使用 HashMap 的原因）。</p>
      </div>
    `,
    complexityHTML: `
      <div class="panel">
        <h2>时间复杂度</h2>
        <table class="ref-table">
          <tr><th>操作</th><th>时间复杂度</th></tr>
          <tr><td>查找 <code>dict[key]</code></td><td>O(1)</td></tr>
          <tr><td>插入</td><td>O(1)</td></tr>
          <tr><td>修改</td><td>O(1)</td></tr>
          <tr><td>删除</td><td>O(1)</td></tr>
          <tr><td>判断 Key 是否存在</td><td>O(1)</td></tr>
          <tr><td>遍历</td><td>O(n)</td></tr>
        </table>
        <p style="font-size:12.5px;color:var(--text-soft);">注意：以上都是平均时间复杂度。</p>
      </div>
    `,
    outroHTML: `
      <div class="panel">
        <h2>面试前必须熟练到什么程度？</h2>
        <h3>1. 理解字典</h3>
        <ul>
          <li>理解字典底层是哈希表</li>
          <li>理解字典为什么能够实现 O(1) 查找</li>
          <li>理解 Key 必须唯一且可哈希（Hashable）</li>
        </ul>
        <h3>2. 熟练使用 API（不查文档即可写出）</h3>
        <ul>
          <li>创建字典 / 新增、修改、删除元素</li>
          <li>判断 Key 是否存在 / 遍历 Key、Value、Key-Value</li>
          <li>使用 <code>get()</code> / <code>Counter</code> / <code>defaultdict</code></li>
        </ul>
        <h3>3. 解题能力（看到题目能快速判断）</h3>
        <ul>
          <li>是否需要利用哈希表将查找优化到 O(1)？</li>
          <li>是否需要统计元素出现次数？</li>
          <li>是否需要建立元素到索引的映射？</li>
          <li>是否需要使用 <code>defaultdict(list)</code> 建图？</li>
          <li>是否需要使用 <code>Counter</code> 快速统计频率？</li>
        </ul>
        <h3>📌 本专题必须牢记（算法刷题最高频）</h3>
        <ul class="star-list">
          <li><code>dic = {}</code></li>
          <li><code>dic[key] = value</code></li>
          <li><code>dic.get(key, 0)</code></li>
          <li><code>key in dic</code></li>
          <li><code>for key, value in dic.items():</code></li>
          <li><code>dic[x] = dic.get(x, 0) + 1</code></li>
          <li><code>Counter(nums)</code></li>
          <li><code>defaultdict(list)</code>、<code>defaultdict(int)</code></li>
          <li>字典查找、插入、删除的平均时间复杂度均为 <b>O(1)</b></li>
        </ul>
        <div class="callout">
          <b>💡 条件反射：</b><br/>
          查找是否存在 → 想到 <code>dict</code><br/>
          统计出现次数 → 想到 <code>get()</code> 或 <code>Counter</code><br/>
          元素映射索引 → 想到 <code>dict</code><br/>
          图的邻接表 → 想到 <code>defaultdict(list)</code>
        </div>
      </div>
    `,
    staticFunctionHTML: `
      <div class="panel">
        <h2>按功能分类 API 参考</h2>
        <div class="note-block">
          <h3>（1）创建字典</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>dic = {}</code></td><td>创建空字典 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>dic = {"a":1, "b":2}</code></td><td>创建字典</td></tr>
            <tr><td><code>dic = dict()</code></td><td>创建空字典</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（2）新增元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>dic["Tom"] = 95</code></td><td>新增键值对</td></tr>
            <tr><td><code>dic[3] = "Python"</code></td><td>Key 可以是数字</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（3）访问元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>dic["Tom"]</code></td><td>获取 Value（Key 不存在会报错）</td></tr>
            <tr><td><code>dic.get("Tom")</code></td><td>获取 Value（不存在返回 <code>None</code>）⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>dic.get("Tom", 0)</code></td><td>不存在返回默认值 0 ⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（4）修改元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>dic["Tom"] = 100</code></td><td>修改 Value</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（5）删除元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>dic.pop("Tom")</code></td><td>删除指定 Key，并返回 Value ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>del dic["Tom"]</code></td><td>删除指定 Key</td></tr>
            <tr><td><code>dic.clear()</code></td><td>清空字典</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（6）判断是否存在</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>"Tom" in dic</code></td><td>判断 Key 是否存在 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>"Tom" not in dic</code></td><td>判断 Key 是否不存在</td></tr>
          </table>
          <p class="note-hint">注意：<code>in</code> 判断的是 Key，不是 Value。</p>
        </div>
        <div class="note-block">
          <h3>（7）遍历字典</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>for key in dic:</code></td><td>遍历所有 Key</td></tr>
            <tr><td><code>for key in dic.keys():</code></td><td>遍历所有 Key</td></tr>
            <tr><td><code>for value in dic.values():</code></td><td>遍历所有 Value</td></tr>
            <tr><td><code>for key, value in dic.items():</code></td><td>同时遍历 Key 和 Value ⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（8）获取所有元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>dic.keys()</code></td><td>返回所有 Key</td></tr>
            <tr><td><code>dic.values()</code></td><td>返回所有 Value</td></tr>
            <tr><td><code>dic.items()</code></td><td>返回所有键值对</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（9）统计次数 ⭐⭐⭐⭐⭐</h3>
          <p class="note-hint">算法题超级高频。</p>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>dic[x] = dic.get(x, 0) + 1</code></td><td>统计出现次数（推荐掌握）</td></tr>
          </table>
          <div class="code-block">for x in nums:
    dic[x] = dic.get(x, 0) + 1</div>
          <p class="note-hint">方法二（了解），需要 <code>from collections import Counter</code>：</p>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>Counter(nums)</code></td><td>自动统计出现次数</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（10）默认字典 ⭐⭐⭐⭐⭐</h3>
          <p class="note-hint">需要 <code>from collections import defaultdict</code>：</p>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>defaultdict(int)</code></td><td>默认值为 0</td></tr>
            <tr><td><code>defaultdict(list)</code></td><td>默认值为空列表</td></tr>
            <tr><td><code>defaultdict(set)</code></td><td>默认值为空集合</td></tr>
          </table>
          <div class="code-block">graph = defaultdict(list)

graph[1].append(2)</div>
          <p class="note-hint">算法题（图、DFS、BFS）经常使用。</p>
        </div>
      </div>
    `,
    staticCommonHTML: `
      <div class="panel">
        <h2>常见 API 参考</h2>
        <table class="ref-table cols-3">
          <tr><th>API</th><th>输出</th><th>功能</th></tr>
          <tr><td><code>dic[key]</code></td><td>Value</td><td>获取 Value（Key 不存在报错）</td></tr>
          <tr><td><code>dic.get(key)</code></td><td>Value 或 <code>None</code></td><td>获取 Value，不存在返回 <code>None</code></td></tr>
          <tr><td><code>dic.get(key, default)</code></td><td>Value 或默认值</td><td>获取 Value，不存在返回默认值 ⭐⭐⭐⭐⭐</td></tr>
          <tr><td><code>dic.pop(key)</code></td><td>Value</td><td>删除 Key，并返回对应 Value</td></tr>
          <tr><td><code>del dic[key]</code></td><td>无</td><td>删除指定 Key</td></tr>
          <tr><td><code>dic.clear()</code></td><td><code>None</code></td><td>清空字典</td></tr>
          <tr><td><code>dic.keys()</code></td><td><code>dict_keys</code></td><td>返回所有 Key</td></tr>
          <tr><td><code>dic.values()</code></td><td><code>dict_values</code></td><td>返回所有 Value</td></tr>
          <tr><td><code>dic.items()</code></td><td><code>dict_items</code></td><td>返回所有键值对</td></tr>
          <tr><td><code>key in dic</code></td><td><code>bool</code></td><td>判断 Key 是否存在</td></tr>
          <tr><td><code>len(dic)</code></td><td><code>int</code></td><td>返回键值对数量</td></tr>
          <tr><td><code>Counter(nums)</code></td><td><code>Counter</code></td><td>统计元素出现次数</td></tr>
          <tr><td><code>defaultdict(int)</code></td><td><code>defaultdict</code></td><td>默认值为 0</td></tr>
          <tr><td><code>defaultdict(list)</code></td><td><code>defaultdict</code></td><td>默认值为空列表</td></tr>
        </table>
        <div class="callout warning">
          <b>⭐⭐ 面试高频易错点：</b><br/>
          <code>dic[key]</code>：Key 不存在会报错（KeyError）。<br/>
          <code>dic.get(key)</code>：Key 不存在不会报错，返回 <code>None</code>。<br/>
          <code>dic.get(key, 0)</code>：统计次数时最常见写法。<br/>
          <code>"x" in dic</code> 判断的是 Key 是否存在，而不是 Value。<br/>
          <code>defaultdict(list)</code> 可以省去判断 Key 是否存在的步骤。
        </div>
      </div>
    `,
    quizGroups: [
      {
        section: 'function',
        heading: '创建字典',
        scenario: null,
        questions: [
          { id:'d01', prompt:'创建一个空字典，变量名为 dic', answer:'dic = {}' },
          { id:'d02', prompt:'创建一个字典 dic，包含键值对 "a":1、"b":2', answer:'dic = {"a":1, "b":2}', alt:['dic = {"a": 1, "b": 2}','dic={"a":1,"b":2}'] },
          { id:'d03', prompt:'使用 dict() 函数创建一个空字典 dic', answer:'dic = dict()' },
        ]
      },
      {
        section: 'function',
        heading: '新增元素',
        scenario: 'dic = {}',
        questions: [
          { id:'d04', prompt:'在 dic 中新增一个键 "Tom"，值为 95', answer:'dic["Tom"] = 95' },
          { id:'d05', prompt:'在 dic 中新增一个键为数字 3，值为字符串 "Python"', answer:'dic[3] = "Python"' },
        ]
      },
      {
        section: 'function',
        heading: '访问元素',
        scenario: 'dic = {"Tom": 95, "Jerry": 88}',
        questions: [
          { id:'d06', prompt:'获取 dic 中 key 为 "Tom" 的值（若不存在会报错的写法）', answer:'dic["Tom"]' },
          { id:'d07', prompt:'获取 dic 中 key 为 "Tom" 的值，若不存在返回 None', answer:'dic.get("Tom")' },
          { id:'d08', prompt:'获取 dic 中 key 为 "Lucy" 的值，若不存在返回默认值 0', answer:'dic.get("Lucy", 0)' },
        ]
      },
      {
        section: 'function',
        heading: '修改元素',
        scenario: 'dic = {"Tom": 95, "Jerry": 88}',
        questions: [
          { id:'d09', prompt:'将 dic 中 "Tom" 的值修改为 100', answer:'dic["Tom"] = 100' },
        ]
      },
      {
        section: 'function',
        heading: '删除元素',
        scenario: 'dic = {"Tom": 95, "Jerry": 88}',
        questions: [
          { id:'d10', prompt:'删除 dic 中 key 为 "Tom" 的键值对，并返回被删除的 value', answer:'dic.pop("Tom")' },
          { id:'d11', prompt:'用 del 语句删除 dic 中 key 为 "Tom" 的键值对', answer:'del dic["Tom"]' },
          { id:'d12', prompt:'清空整个字典 dic', answer:'dic.clear()' },
        ]
      },
      {
        section: 'function',
        heading: '判断是否存在',
        scenario: 'dic = {"Tom": 95, "Jerry": 88}',
        questions: [
          { id:'d13', prompt:'判断 "Tom" 是否是 dic 的一个 key', answer:'"Tom" in dic' },
          { id:'d14', prompt:'判断 "Lucy" 是否不是 dic 的一个 key', answer:'"Lucy" not in dic' },
        ]
      },
      {
        section: 'function',
        heading: '遍历字典',
        scenario: 'dic = {"Tom": 95, "Jerry": 88}',
        questions: [
          { id:'d15', prompt:'写出遍历 dic 所有 key 的 for 循环开头（不使用 .keys()，变量名任意）', answer:'for {key} in dic:' },
          { id:'d16', prompt:'写出使用 .keys() 遍历 dic 所有 key 的 for 循环开头（变量名任意）', answer:'for {key} in dic.keys():' },
          { id:'d17', prompt:'写出遍历 dic 所有 value 的 for 循环开头（变量名任意）', answer:'for {value} in dic.values():' },
          { id:'d18', prompt:'写出同时遍历 dic 的 key 和 value 的 for 循环开头（变量名任意）', answer:'for {key}, {value} in dic.items():' },
        ]
      },
      {
        section: 'function',
        heading: '获取所有元素',
        scenario: 'dic = {"Tom": 95, "Jerry": 88}',
        questions: [
          { id:'d19', prompt:'获取 dic 中所有 key（返回视图对象）', answer:'dic.keys()' },
          { id:'d20', prompt:'获取 dic 中所有 value', answer:'dic.values()' },
          { id:'d21', prompt:'获取 dic 中所有键值对', answer:'dic.items()' },
        ]
      },
      {
        section: 'function',
        heading: '统计次数',
        scenario: 'nums = [1, 2, 2, 3, 3, 3]\ndic = {}',
        questions: [
          { id:'d22', prompt:'在 for x in nums 循环体内，写出用 get() 方法统计 x 出现次数并累加到 dic 的代码', answer:'dic[x] = dic.get(x, 0) + 1' },
          { id:'d23', prompt:'使用 Counter 直接统计 nums 中每个元素出现的次数', answer:'Counter(nums)' },
        ]
      },
      {
        section: 'function',
        heading: '默认字典',
        scenario: null,
        questions: [
          { id:'d24', prompt:'创建一个默认值为 0 的 defaultdict', answer:'defaultdict(int)' },
          { id:'d25', prompt:'创建一个默认值为空列表的 defaultdict', answer:'defaultdict(list)' },
          { id:'d26', prompt:'创建一个默认值为空集合的 defaultdict', answer:'defaultdict(set)' },
        ]
      },
      {
        section: 'common',
        heading: '基础操作',
        scenario: 'dict1 = {"a": 1, "b": 2, "c": 3}',
        questions: [
          { id:'d27', prompt:'获取 dict1 中 key 为 "a" 的元素值（不存在会报错）', answer:'dict1["a"]' },
          { id:'d28', prompt:'获取 dict1 中 key 为 "z" 的元素值，没有则返回 None', answer:'dict1.get("z")' },
          { id:'d29', prompt:'获取 dict1 中 key 为 "z" 的元素值，没有默认返回 "nope"', answer:'dict1.get("z", "nope")' },
          { id:'d30', prompt:'从 dict1 中删除 key 为 "b" 的键值对，并返回其 value', answer:'dict1.pop("b")' },
          { id:'d31', prompt:'用 del 删除 dict1 中 key 为 "b" 的键值对', answer:'del dict1["b"]' },
          { id:'d32', prompt:'清空 dict1', answer:'dict1.clear()' },
          { id:'d33', prompt:'获取 dict1 中所有 key', answer:'dict1.keys()' },
          { id:'d34', prompt:'获取 dict1 中所有 value', answer:'dict1.values()' },
          { id:'d35', prompt:'获取 dict1 中所有键值对', answer:'dict1.items()' },
          { id:'d36', prompt:'判断 "a" 是否是 dict1 的 key', answer:'"a" in dict1' },
          { id:'d37', prompt:'获取 dict1 的键值对数量', answer:'len(dict1)' },
        ]
      },
      {
        section: 'common',
        heading: '计数与默认字典',
        scenario: 'nums = [1, 1, 2, 3, 3, 3]',
        questions: [
          { id:'d38', prompt:'统计 nums 中每个元素出现的次数', answer:'Counter(nums)' },
          { id:'d39', prompt:'创建一个默认值为 0 的 defaultdict', answer:'defaultdict(int)' },
          { id:'d40', prompt:'创建一个默认值为空列表的 defaultdict', answer:'defaultdict(list)' },
        ]
      },
    ]
});
