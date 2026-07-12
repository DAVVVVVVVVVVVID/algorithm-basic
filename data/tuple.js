TOPICS.push({
    id: 'tuple',
    title: '元组 Tuple',
    sub: '不是独立考点，而是辅助工具 · 不可变、可哈希、常用于坐标与多返回值',
    introHTML: `
      <div class="panel">
        <h2>概念介绍</h2>
        <p>元组（Tuple）是 Python 中的一种<b>有序、不可修改（Immutable）</b>的数据结构，可以理解为"不可修改的数组（List）"。</p>
        <div class="code-block">t = (1, 2, 3)</div>
        <ul>
          <li>元素有顺序 / 支持索引 / 支持遍历 / 支持切片</li>
          <li><b>不能修改元素</b></li>
          <li>可以作为字典（dict）的 Key</li>
          <li>可以作为集合（set）的元素</li>
        </ul>
        <p>在 LeetCode 中几乎不会有一道题专门考元组，但它会频繁作为<b>辅助工具</b>出现：哈希表的 Key、<code>enumerate()</code> 返回的数据、函数返回多个值、排序 <code>key=lambda x: x[1]</code>、堆 <code>heapq</code>、BFS/DFS 中存储坐标 <code>(x, y)</code>。所以重点不是 API 数量，而是理解它<b>什么时候该用</b>。</p>
        <h3>元组与数组（List）的区别（必须掌握）</h3>
        <table class="ref-table cols-3">
          <tr><th>对比</th><th>List</th><th>Tuple</th></tr>
          <tr><td>是否有序</td><td>✅</td><td>✅</td></tr>
          <tr><td>是否可修改</td><td>✅</td><td>❌</td></tr>
          <tr><td>是否支持索引</td><td>✅</td><td>✅</td></tr>
          <tr><td>是否支持切片</td><td>✅</td><td>✅</td></tr>
          <tr><td>是否可作为 Dict Key</td><td>❌</td><td>✅（元素也必须可哈希）</td></tr>
          <tr><td>算法使用频率</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
        </table>
      </div>
    `,
    complexityHTML: `
      <div class="panel">
        <h2>时间复杂度</h2>
        <table class="ref-table">
          <tr><th>操作</th><th>时间复杂度</th></tr>
          <tr><td>读取 <code>t[i]</code></td><td>O(1)</td></tr>
          <tr><td>获取长度 <code>len(t)</code></td><td>O(1)</td></tr>
          <tr><td>遍历</td><td>O(n)</td></tr>
          <tr><td>查找元素</td><td>O(n)</td></tr>
          <tr><td>拼接</td><td>O(n+m)</td></tr>
        </table>
      </div>
    `,
    outroHTML: `
      <div class="panel">
        <h2>面试前必须熟练到什么程度？</h2>
        <h3>1. 理解元组</h3>
        <ul>
          <li>理解元组是不可修改（Immutable）的数据结构</li>
          <li>理解元组与 List 的区别</li>
          <li>知道为什么元组可以作为 <code>dict</code> 的 Key，而 List 不可以：因为元组可哈希，列表不可以</li>
        </ul>
        <h3>2. 熟练使用（不查文档即可写出）</h3>
        <ul>
          <li>创建元组 / 元组解包 / 多变量赋值 / 交换变量</li>
          <li>元组与 List 相互转换</li>
          <li>使用元组作为字典 Key / 使用元组存储二维坐标</li>
        </ul>
        <h3>3. 解题能力（看到题目能快速判断）</h3>
        <ul>
          <li>是否适合用元组存储多个相关数据？</li>
          <li>是否可以利用元组解包简化代码？</li>
          <li>是否需要使用 <code>(x, y)</code> 作为坐标、状态或哈希键？</li>
          <li>是否需要按元组中的某个元素进行排序？</li>
        </ul>
        <h3>📌 本专题必须牢记（算法刷题最高频）</h3>
        <ul class="star-list">
          <li>元组是不可变对象（Immutable）</li>
          <li><code>(1,)</code> 与 <code>(1)</code> 的区别</li>
          <li><code>a, b = b, a</code></li>
          <li><code>x, y = point</code></li>
          <li><code>return a, b</code></li>
          <li><code>dic[(x, y)] = value</code></li>
          <li><code>visited.add((x, y))</code></li>
          <li><code>arr.sort(key=lambda x: x[1])</code></li>
        </ul>
        <div class="callout">
          <b>💡 本专题在 LeetCode 中的真实定位：</b><br/>
          元组几乎不会作为独立考点出现，只需熟练掌握四个典型场景：<br/>
          1. 多变量赋值与交换：<code>a, b = b, a</code><br/>
          2. 函数返回多个值：<code>return a, b</code><br/>
          3. 坐标/状态表示：<code>(x, y)</code> 用于 BFS、DFS、图搜索<br/>
          4. 排序与哈希：作为 <code>dict</code> 的键，或配合 <code>lambda</code> 对元组排序
        </div>
      </div>
    `,
    staticFunctionHTML: `
      <div class="panel">
        <h2>按功能分类 API 参考</h2>
        <div class="note-block">
          <h3>（1）创建元组</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>t = ()</code></td><td>创建空元组</td></tr>
            <tr><td><code>t = (1, 2, 3)</code></td><td>创建元组</td></tr>
            <tr><td><code>t = tuple([1,2,3])</code></td><td>list 转 tuple</td></tr>
            <tr><td><code>t = (1,)</code></td><td>创建只有一个元素的元组 ⭐⭐⭐⭐⭐ 易错</td></tr>
          </table>
          <p class="note-hint">注意：<code>t = (1)</code> 不是元组，而是整数。必须写 <code>t = (1,)</code>。</p>
        </div>
        <div class="note-block">
          <h3>（2）索引</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>t[0]</code></td><td>第一个元素</td></tr>
            <tr><td><code>t[-1]</code></td><td>最后一个元素</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（3）遍历</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>for x in t:</code></td><td>遍历元素</td></tr>
            <tr><td><code>for i in range(len(t)):</code></td><td>遍历索引</td></tr>
            <tr><td><code>for i, x in enumerate(t):</code></td><td>同时遍历索引和值</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（4）切片</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>t[1:4]</code></td><td>获取子元组</td></tr>
            <tr><td><code>t[::-1]</code></td><td>返回翻转后的新元组</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（5）解包 ⭐⭐⭐⭐⭐</h3>
          <p class="note-hint">算法题非常高频。</p>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>a, b = t</code></td><td>元组解包（将元组的元素依次赋值给 a 和 b）</td></tr>
            <tr><td><code>a, b, c = (1,2,3)</code></td><td>同时赋值</td></tr>
            <tr><td><code>a, *b = (1,2,3,4)</code></td><td>剩余元素放入列表</td></tr>
          </table>
          <div class="code-block">point = (3, 5)
x, y = point</div>
        </div>
        <div class="note-block">
          <h3>（6）交换变量 ⭐⭐⭐⭐⭐</h3>
          <p class="note-hint">Python 最经典写法。</p>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>a, b = b, a</code></td><td>交换两个变量</td></tr>
          </table>
          <p class="note-hint">底层其实就是 <code>(a, b) = (b, a)</code>。</p>
        </div>
        <div class="note-block">
          <h3>（7）作为函数返回值 ⭐⭐⭐⭐⭐</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>return a, b</code></td><td>返回多个值（实际返回 Tuple）</td></tr>
          </table>
          <div class="code-block">return left, right
# 接收
l, r = dfs(root)</div>
        </div>
        <div class="note-block">
          <h3>（8）作为字典 Key ⭐⭐⭐⭐⭐</h3>
          <p class="note-hint">算法题非常重要。</p>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>dic[(x,y)] = True</code></td><td>二维坐标作为 Key</td></tr>
            <tr><td><code>visited.add((x,y))</code></td><td>坐标加入 Set</td></tr>
          </table>
          <div class="code-block">visited = set()
visited.add((3, 5))</div>
          <p class="note-hint">DFS、BFS、图论题经常这样写。</p>
        </div>
        <div class="note-block">
          <h3>（9）排序中的元组 ⭐⭐⭐⭐⭐</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>arr.sort(key=lambda x:x[1])</code></td><td>按元组第二个元素排序</td></tr>
            <tr><td><code>sorted(arr,key=lambda x:x[0])</code></td><td>按第一个元素排序</td></tr>
          </table>
          <div class="code-block">arr = [(1,5), (2,3), (4,8)]
arr.sort(key=lambda x: x[1])</div>
        </div>
      </div>
    `,
    staticCommonHTML: `
      <div class="panel">
        <h2>常见 API 参考</h2>
        <table class="ref-table cols-3">
          <tr><th>API</th><th>输出</th><th>功能</th></tr>
          <tr><td><code>len(t)</code></td><td><code>int</code></td><td>返回长度</td></tr>
          <tr><td><code>tuple(list)</code></td><td><code>tuple</code></td><td>list 转 tuple</td></tr>
          <tr><td><code>list(tuple)</code></td><td><code>list</code></td><td>tuple 转 list</td></tr>
          <tr><td><code>enumerate(t)</code></td><td><code>enumerate</code> 对象</td><td>同时遍历索引和值</td></tr>
          <tr><td><code>count(x)</code></td><td><code>int</code></td><td>统计出现次数</td></tr>
          <tr><td><code>index(x)</code></td><td><code>int</code></td><td>返回第一次出现的位置</td></tr>
          <tr><td><code>t[::-1]</code></td><td><code>tuple</code></td><td>返回翻转后的新元组</td></tr>
        </table>
        <div class="callout warning">
          <b>⭐⭐ 面试高频易错点：</b><br/>
          元组不可修改，不能使用 <code>append()</code>、<code>remove()</code>、<code>sort()</code> 等方法。<br/>
          <code>(1)</code> 是整数，<code>(1,)</code> 才是单元素元组。<br/>
          元组可以作为 <code>dict</code> 的 Key 和 <code>set</code> 的元素，而 <code>list</code> 不可以。<br/>
          <code>return a, b</code> 实际返回的是一个元组。<br/>
          <code>a, b = b, a</code> 本质是元组解包。
        </div>
      </div>
    `,
    quizGroups: [
      {
        section: 'function',
        heading: '创建元组',
        scenario: 'lst = [1, 2, 3]',
        questions: [
          { id:'tp01', prompt:'创建一个空元组，变量名为 t', answer:'t = ()' },
          { id:'tp02', prompt:'创建元组 t，内容为 1, 2, 3', answer:'t = (1, 2, 3)', alt:['t = (1,2,3)'] },
          { id:'tp03', prompt:'把 lst 转成元组赋值给 t', answer:'t = tuple(lst)' },
          { id:'tp04', prompt:'创建一个只有一个元素 5 的元组 t（注意易错写法）', answer:'t = (5,)' },
        ]
      },
      {
        section: 'function',
        heading: '索引',
        scenario: 't = (10, 20, 30, 40)',
        questions: [
          { id:'tp05', prompt:'获取 t 的第一个元素', answer:'t[0]' },
          { id:'tp06', prompt:'获取 t 的最后一个元素', answer:'t[-1]' },
        ]
      },
      {
        section: 'function',
        heading: '遍历',
        scenario: 't = (10, 20, 30, 40)',
        questions: [
          { id:'tp07', prompt:'写出遍历 t 元素的 for 循环开头（变量名任意）', answer:'for {x} in t:' },
          { id:'tp08', prompt:'写出遍历 t 索引的 for 循环开头（变量名任意）', answer:'for {i} in range(len(t)):' },
          { id:'tp09', prompt:'写出同时遍历索引和值的 for 循环开头（变量名任意）', answer:'for {i}, {x} in enumerate(t):' },
        ]
      },
      {
        section: 'function',
        heading: '切片',
        scenario: 't = (10, 20, 30, 40, 50)',
        questions: [
          { id:'tp10', prompt:'获取 t 下标 1 到 4（不包含 4）的子元组', answer:'t[1:4]' },
          { id:'tp11', prompt:'返回 t 翻转后的新元组', answer:'t[::-1]' },
        ]
      },
      {
        section: 'function',
        heading: '解包',
        scenario: 'point = (3, 5)',
        questions: [
          { id:'tp12', prompt:'把 point 解包，分别赋值给 x 和 y', answer:'x, y = point' },
          { id:'tp13', prompt:'已知元组 (1, 2, 3)，同时赋值给 a, b, c', answer:'a, b, c = (1, 2, 3)' },
          { id:'tp14', prompt:'已知元组 (1, 2, 3, 4)，把第一个元素赋给 a，剩余元素放入列表 b', answer:'a, *b = (1, 2, 3, 4)' },
        ]
      },
      {
        section: 'function',
        heading: '交换变量',
        scenario: 'a = 1\nb = 2',
        questions: [
          { id:'tp15', prompt:'用元组解包写法交换 a 和 b 的值', answer:'a, b = b, a' },
        ]
      },
      {
        section: 'function',
        heading: '作为函数返回值',
        scenario: null,
        questions: [
          { id:'tp16', prompt:'在函数中同时返回 left 和 right 两个值', answer:'return left, right' },
        ]
      },
      {
        section: 'function',
        heading: '作为字典 Key',
        scenario: 'dic = {}\nvisited = set()\nx = 3\ny = 5',
        questions: [
          { id:'tp17', prompt:'把坐标 (x, y) 作为 Key，在 dic 中存入值 True', answer:'dic[(x, y)] = True' },
          { id:'tp18', prompt:'把坐标 (x, y) 加入 visited 集合', answer:'visited.add((x, y))' },
        ]
      },
      {
        section: 'function',
        heading: '排序中的元组',
        scenario: 'arr = [(1, 5), (2, 3), (4, 8)]',
        questions: [
          { id:'tp19', prompt:'对 arr 原地排序，按每个元组的第二个元素排序（lambda 参数名任意）', answer:'arr.sort(key=lambda {x}: {x}[1])' },
          { id:'tp20', prompt:'返回 arr 按每个元组第一个元素排序后的新数组（不改变原数组，lambda 参数名任意）', answer:'sorted(arr, key=lambda {x}: {x}[0])' },
        ]
      },
      {
        section: 'common',
        heading: '常见 API',
        scenario: 't = (10, 20, 30, 20)\nlst = [1, 2, 3]',
        questions: [
          { id:'tp21', prompt:'返回 t 的长度', answer:'len(t)' },
          { id:'tp22', prompt:'把 lst 转成元组', answer:'tuple(lst)' },
          { id:'tp23', prompt:'把 t 转成列表', answer:'list(t)' },
          { id:'tp24', prompt:'获取 t 的索引和值组合（可用于 for i, x in ... 遍历）', answer:'enumerate(t)' },
          { id:'tp25', prompt:'统计元素 20 在 t 中出现的次数', answer:'t.count(20)' },
          { id:'tp26', prompt:'返回元素 20 在 t 中第一次出现的位置', answer:'t.index(20)' },
          { id:'tp27', prompt:'返回 t 翻转后的新元组', answer:'t[::-1]' },
        ]
      },
    ]
});
