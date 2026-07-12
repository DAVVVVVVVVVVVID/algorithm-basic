TOPICS.push({
    id: 'set',
    title: '集合 Set',
    sub: 'LeetCode 使用频率仅次于 List / Dict · 去重 + O(1) 查找',
    introHTML: `
      <div class="panel">
        <h2>概念介绍</h2>
        <p>集合（Set）是 Python 中的一种<b>无序、元素唯一</b>的数据结构。</p>
        <div class="code-block">s = {1, 2, 3}</div>
        <ul>
          <li>元素唯一（自动去重）</li>
          <li>无序（不能通过索引访问）</li>
          <li>查找效率高（底层基于哈希表）</li>
          <li>常用于<b>去重</b>和<b>快速查找</b></li>
        </ul>
        <div class="code-block">nums = [1, 2, 2, 3, 3, 3]
set(nums)
# {1, 2, 3}</div>
        <p>算法题中，Set 最大的作用就是：<b>判断元素是否存在（O(1)）</b>。不用 Set 判断 <code>x in nums</code> 是 O(n)，改用 Set 判断 <code>x in s</code> 就是 O(1)。</p>
      </div>
    `,
    complexityHTML: `
      <div class="panel">
        <h2>时间复杂度</h2>
        <table class="ref-table">
          <tr><th>操作</th><th>时间复杂度</th></tr>
          <tr><td>添加元素</td><td>O(1)</td></tr>
          <tr><td>删除元素</td><td>O(1)</td></tr>
          <tr><td>判断是否存在</td><td>O(1)</td></tr>
          <tr><td>遍历</td><td>O(n)</td></tr>
        </table>
        <p style="font-size:12.5px;color:var(--text-soft);">注意：以上均为平均时间复杂度。</p>
      </div>
    `,
    outroHTML: `
      <div class="panel">
        <h2>面试前必须熟练到什么程度？</h2>
        <h3>1. 理解集合</h3>
        <ul>
          <li>理解集合底层基于哈希表</li>
          <li>理解集合元素唯一、无序</li>
          <li>熟悉集合操作的时间复杂度</li>
          <li>知道哪些对象可以作为集合元素</li>
        </ul>
        <h3>2. 熟练使用 API（不查文档即可写出）</h3>
        <ul>
          <li>创建集合 / 添加、删除元素</li>
          <li>判断元素是否存在 / 遍历集合</li>
          <li>集合去重 / 并集、交集、差集、对称差集</li>
        </ul>
        <h3>3. 解题能力（看到题目能快速判断）</h3>
        <ul>
          <li>是否需要去重？</li>
          <li>是否需要快速判断元素是否存在？</li>
          <li>是否需要求两个集合的交集或并集？</li>
          <li>是否应该使用 Set 而不是 List 来优化查找效率？</li>
        </ul>
        <h3>📌 本专题必须牢记（算法刷题最高频）</h3>
        <ul class="star-list">
          <li><code>s = set()</code></li>
          <li><code>set(nums)</code></li>
          <li><code>s.add(x)</code></li>
          <li><code>x in s</code></li>
          <li><code>list(set(nums))</code></li>
          <li><code>remove()</code> 与 <code>discard()</code> 的区别</li>
          <li><code>set()</code> 与 <code>{}</code> 的区别</li>
          <li>集合元素必须可哈希（Hashable）</li>
        </ul>
        <div class="callout">
          <b>💡 条件反射：</b><br/>
          需要去重 → 想到 <code>set(nums)</code><br/>
          需要快速判断元素是否存在 → 想到 <code>set</code><br/>
          需要记录已访问状态（Visited）→ 想到 <code>set</code><br/>
          需要求两个数组的交集/并集 → 想到集合运算
        </div>
      </div>
    `,
    staticFunctionHTML: `
      <div class="panel">
        <h2>按功能分类 API 参考</h2>
        <div class="note-block">
          <h3>（1）创建集合</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s = set()</code></td><td>创建空集合 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>s = {1, 2, 3}</code></td><td>创建集合</td></tr>
            <tr><td><code>s = set(nums)</code></td><td>List 转 Set（自动去重）⭐⭐⭐⭐⭐</td></tr>
          </table>
          <p class="note-hint">注意：<code>s = {}</code> 不是空集合，而是空字典！创建空集合必须写 <code>s = set()</code>。</p>
        </div>
        <div class="note-block">
          <h3>（2）添加元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s.add(x)</code></td><td>添加元素 ⭐⭐⭐⭐⭐</td></tr>
          </table>
          <p class="note-hint">重复添加不会报错：<code>s.add(1); s.add(1)</code> 结果仍然只有一个 1。</p>
        </div>
        <div class="note-block">
          <h3>（3）删除元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>s.remove(x)</code></td><td>删除元素，不存在报错</td></tr>
            <tr><td><code>s.discard(x)</code></td><td>删除元素，不存在不报错 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>s.pop()</code></td><td>随机删除一个元素并返回</td></tr>
            <tr><td><code>s.clear()</code></td><td>清空集合</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（4）判断是否存在</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>x in s</code></td><td>判断元素是否存在 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>x not in s</code></td><td>判断元素是否不存在</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（5）遍历集合</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>for x in s:</code></td><td>遍历集合元素</td></tr>
          </table>
          <p class="note-hint">注意：集合是无序的，遍历顺序不能保证。</p>
        </div>
        <div class="note-block">
          <h3>（6）集合运算</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>a | b</code></td><td>并集</td></tr>
            <tr><td><code>a & b</code></td><td>交集</td></tr>
            <tr><td><code>a - b</code></td><td>差集</td></tr>
            <tr><td><code>a ^ b</code></td><td>对称差集</td></tr>
          </table>
          <div class="code-block">a = {1, 2, 3}
b = {3, 4, 5}
a & b
# {3}</div>
        </div>
        <div class="note-block">
          <h3>（7）长度</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>len(s)</code></td><td>返回集合元素数量</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（8）去重 ⭐⭐⭐⭐⭐</h3>
          <p class="note-hint">算法题超级高频。</p>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>set(nums)</code></td><td>去重</td></tr>
            <tr><td><code>list(set(nums))</code></td><td>去重后转回 List</td></tr>
          </table>
          <div class="code-block">nums = [1, 1, 2, 2, 3]
nums = list(set(nums))</div>
        </div>
      </div>
    `,
    staticCommonHTML: `
      <div class="panel">
        <h2>常见 API 参考</h2>
        <table class="ref-table cols-3">
          <tr><th>API</th><th>输出</th><th>功能</th></tr>
          <tr><td><code>set()</code></td><td><code>set</code></td><td>创建空集合</td></tr>
          <tr><td><code>set(nums)</code></td><td><code>set</code></td><td>List 转 Set，自动去重</td></tr>
          <tr><td><code>add(x)</code></td><td><code>None</code></td><td>添加元素</td></tr>
          <tr><td><code>remove(x)</code></td><td><code>None</code></td><td>删除元素，不存在报错</td></tr>
          <tr><td><code>discard(x)</code></td><td><code>None</code></td><td>删除元素，不存在不报错</td></tr>
          <tr><td><code>pop()</code></td><td>元素</td><td>随机删除并返回一个元素</td></tr>
          <tr><td><code>clear()</code></td><td><code>None</code></td><td>清空集合</td></tr>
          <tr><td><code>x in s</code></td><td><code>bool</code></td><td>判断元素是否存在</td></tr>
          <tr><td><code>len(s)</code></td><td><code>int</code></td><td>返回元素数量</td></tr>
          <tr><td><code>a | b</code></td><td><code>set</code></td><td>并集</td></tr>
          <tr><td><code>a &amp; b</code></td><td><code>set</code></td><td>交集</td></tr>
          <tr><td><code>a - b</code></td><td><code>set</code></td><td>差集</td></tr>
          <tr><td><code>a ^ b</code></td><td><code>set</code></td><td>对称差集</td></tr>
        </table>
        <div class="callout warning">
          <b>⭐⭐ 面试高频易错点：</b><br/>
          <code>set()</code> 才是空集合，<code>{}</code> 是空字典。<br/>
          集合无序，不能使用索引（如 <code>s[0]</code>）。<br/>
          集合元素必须可哈希（Hashable），因此 <code>list</code>、<code>dict</code>、<code>set</code> 不能作为集合元素，而 <code>tuple</code> 可以（前提是元组中的元素也都可哈希）。<br/>
          <code>remove()</code> 删除不存在的元素会抛出 <code>KeyError</code>，<code>discard()</code> 不会报错。<br/>
          <code>set(nums)</code> 是算法题中最常见的去重方式。
        </div>
      </div>
    `,
    quizGroups: [
      {
        section: 'function',
        heading: '创建集合',
        scenario: null,
        questions: [
          { id:'s01', prompt:'创建一个空集合，变量名为 s', answer:'s = set()' },
          { id:'s02', prompt:'创建一个内容为 1, 2, 3 的集合 s', answer:'s = {1, 2, 3}', alt:['s = {1,2,3}'] },
          { id:'s03', prompt:'已知 nums = [1, 2, 2, 3]，把它转成集合（自动去重）赋值给 s', answer:'s = set(nums)' },
        ]
      },
      {
        section: 'function',
        heading: '添加元素',
        scenario: 's = {1, 2, 3}',
        questions: [
          { id:'s04', prompt:'向 s 添加元素 4', answer:'s.add(4)' },
        ]
      },
      {
        section: 'function',
        heading: '删除元素',
        scenario: 's = {1, 2, 3}',
        questions: [
          { id:'s05', prompt:'删除 s 中的元素 2（不存在会报错）', answer:'s.remove(2)' },
          { id:'s06', prompt:'删除 s 中的元素 5（不存在也不会报错）', answer:'s.discard(5)' },
          { id:'s07', prompt:'随机删除 s 中的一个元素，并返回它', answer:'s.pop()' },
          { id:'s08', prompt:'清空集合 s', answer:'s.clear()' },
        ]
      },
      {
        section: 'function',
        heading: '判断是否存在',
        scenario: 's = {1, 2, 3}',
        questions: [
          { id:'s09', prompt:'判断元素 2 是否在 s 中', answer:'2 in s' },
          { id:'s10', prompt:'判断元素 5 是否不在 s 中', answer:'5 not in s' },
        ]
      },
      {
        section: 'function',
        heading: '遍历集合',
        scenario: 's = {1, 2, 3}',
        questions: [
          { id:'s11', prompt:'写出遍历 s 元素的 for 循环开头（变量名任意）', answer:'for {x} in s:' },
        ]
      },
      {
        section: 'function',
        heading: '集合运算',
        scenario: 'a = {1, 2, 3}\nb = {3, 4, 5}',
        questions: [
          { id:'s12', prompt:'求 a 和 b 的并集', answer:'a | b' },
          { id:'s13', prompt:'求 a 和 b 的交集', answer:'a & b' },
          { id:'s14', prompt:'求 a 相对于 b 的差集', answer:'a - b' },
          { id:'s15', prompt:'求 a 和 b 的对称差集', answer:'a ^ b' },
        ]
      },
      {
        section: 'function',
        heading: '长度',
        scenario: 's = {1, 2, 3}',
        questions: [
          { id:'s16', prompt:'获取 s 的元素数量', answer:'len(s)' },
        ]
      },
      {
        section: 'function',
        heading: '去重',
        scenario: 'nums = [1, 1, 2, 2, 3]',
        questions: [
          { id:'s17', prompt:'把 nums 去重（转成集合）', answer:'set(nums)' },
          { id:'s18', prompt:'把 nums 去重后转回 List', answer:'list(set(nums))' },
        ]
      },
      {
        section: 'common',
        heading: '基础操作',
        scenario: 's = {1, 2, 3}\nnums = [1, 2, 2, 3]',
        questions: [
          { id:'s19', prompt:'创建一个空集合', answer:'set()' },
          { id:'s20', prompt:'把 nums 转成集合（自动去重）', answer:'set(nums)' },
          { id:'s21', prompt:'向 s 添加元素 4', answer:'s.add(4)' },
          { id:'s22', prompt:'删除 s 中的元素 2（不存在会报错）', answer:'s.remove(2)' },
          { id:'s23', prompt:'删除 s 中的元素 5（不存在不报错）', answer:'s.discard(5)' },
          { id:'s24', prompt:'随机删除 s 中一个元素并返回', answer:'s.pop()' },
          { id:'s25', prompt:'清空 s', answer:'s.clear()' },
          { id:'s26', prompt:'判断元素 2 是否在 s 中', answer:'2 in s' },
          { id:'s27', prompt:'获取 s 的元素数量', answer:'len(s)' },
        ]
      },
      {
        section: 'common',
        heading: '集合运算',
        scenario: 'a = {1, 2, 3}\nb = {3, 4, 5}',
        questions: [
          { id:'s28', prompt:'求 a 和 b 的并集', answer:'a | b' },
          { id:'s29', prompt:'求 a 和 b 的交集', answer:'a & b' },
          { id:'s30', prompt:'求 a 相对于 b 的差集', answer:'a - b' },
          { id:'s31', prompt:'求 a 和 b 的对称差集', answer:'a ^ b' },
        ]
      },
    ]
});
