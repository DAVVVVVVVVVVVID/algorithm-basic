TOPICS.push({
    id: 'list',
    title: '数组 List',
    sub: 'LeetCode 数组题的载体 · 下标从 0 开始，切片左闭右开',
    introHTML: `
      <div class="panel">
        <h2>概念介绍</h2>
        <p>在 Python 中，算法题里的"数组（Array）"实际上就是 <code>list</code>（列表）。数组是一种<b>线性数据结构</b>：</p>
        <ul>
          <li>元素按顺序存储</li>
          <li>可以通过下标（Index）快速访问元素</li>
          <li>支持动态扩容（Python List 不需要手动指定长度）</li>
          <li>LeetCode 中绝大多数数组题都是操作 <code>list</code></li>
        </ul>
        <div class="code-block">nums = [10, 20, 30, 40]</div>
        <p style="font-size:12.5px;color:var(--text-soft);">Index：0 1 2 3 → 对应 10 20 30 40</p>
      </div>
    `,
    complexityHTML: `
      <div class="panel">
        <h2>时间复杂度</h2>
        <table class="ref-table">
          <tr><th>操作</th><th>时间复杂度</th></tr>
          <tr><td>读取 <code>nums[i]</code></td><td>O(1)</td></tr>
          <tr><td>修改 <code>nums[i]</code></td><td>O(1)</td></tr>
          <tr><td>尾部添加 <code>append()</code></td><td>O(1)（均摊）</td></tr>
          <tr><td>中间插入 <code>insert()</code></td><td>O(n)</td></tr>
          <tr><td>删除元素</td><td>O(n)</td></tr>
          <tr><td>查找元素</td><td>O(n)</td></tr>
        </table>
      </div>
    `,
    outroHTML: `
      <div class="panel">
        <h2>面试前必须熟练到什么程度？</h2>
        <h3>基础能力</h3>
        <ul>
          <li>理解 Python 数组本质上是 <code>list</code></li>
          <li>熟悉数组的特点及时间复杂度</li>
          <li>能根据操作分析时间复杂度</li>
        </ul>
        <h3>API 熟练度（不查资料即可写出）</h3>
        <ul>
          <li>创建数组 / 初始化数组</li>
          <li>遍历数组 / 排序</li>
          <li>删除元素 / 插入元素</li>
          <li>判断元素是否存在</li>
        </ul>
        <h3>解题能力（看到题目能快速判断）</h3>
        <ul>
          <li>什么时候使用数组？</li>
          <li>是否需要排序？</li>
          <li>是否可以原地修改？</li>
          <li>是否需要配合双指针、哈希表等方法？</li>
        </ul>
      </div>
    `,
    staticFunctionHTML: `
      <div class="panel">
        <h2>按功能分类 API 参考</h2>
        <div class="note-block">
          <h3>（1）创建数组</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>nums = []</code></td><td>创建空数组</td></tr>
            <tr><td><code>nums = [1, 2, 3]</code></td><td>创建指定内容数组</td></tr>
            <tr><td><code>nums = list(range(5))</code></td><td>创建 <code>[0,1,2,3,4]</code></td></tr>
            <tr><td><code>nums = [0] * 10</code></td><td>初始化长度为 10 的数组 ⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（2）索引</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>nums[0]</code></td><td>第一个元素</td></tr>
            <tr><td><code>nums[2]</code></td><td>第三个元素</td></tr>
            <tr><td><code>nums[-1]</code></td><td>最后一个元素</td></tr>
            <tr><td><code>nums[-2]</code></td><td>倒数第二个元素</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（3）遍历</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>for x in nums:</code></td><td>遍历元素</td></tr>
            <tr><td><code>for i in range(len(nums)):</code></td><td>遍历下标</td></tr>
            <tr><td><code>for i, x in enumerate(nums):</code></td><td>同时获得下标和值 ⭐⭐⭐⭐⭐ 推荐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（4）切片</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>nums[1:4]</code></td><td>下标 [1,4)</td></tr>
            <tr><td><code>nums[:3]</code></td><td>前三个元素</td></tr>
            <tr><td><code>nums[2:]</code></td><td>从第 3 个开始</td></tr>
            <tr><td><code>nums[::-1]</code></td><td>返回翻转后的新数组 ⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（5）修改元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>nums[0] = 100</code></td><td>修改指定位置元素</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（6）添加元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>nums.append(x)</code></td><td>尾部添加一个元素 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>nums.extend(arr)</code></td><td>拼接另一个数组</td></tr>
            <tr><td><code>nums.insert(i, x)</code></td><td>指定位置插入元素</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（7）删除元素</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>nums.pop()</code></td><td>删除最后一个元素并返回</td></tr>
            <tr><td><code>nums.pop(i)</code></td><td>删除指定位置元素并返回</td></tr>
            <tr><td><code>nums.remove(x)</code></td><td>删除第一个值为 x 的元素</td></tr>
            <tr><td><code>del nums[i]</code></td><td>删除指定位置元素</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（8）排序</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>nums.sort()</code></td><td>原地升序排序 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>nums.sort(reverse=True)</code></td><td>原地降序排序</td></tr>
            <tr><td><code>sorted(nums)</code></td><td>返回排序后的新数组</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（9）翻转</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>nums.reverse()</code></td><td>原地翻转</td></tr>
            <tr><td><code>nums[::-1]</code></td><td>返回翻转后的新数组</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（10）查找</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>x in nums</code></td><td>判断元素是否存在</td></tr>
            <tr><td><code>nums.index(x)</code></td><td>返回第一次出现的位置</td></tr>
            <tr><td><code>nums.count(x)</code></td><td>统计出现次数</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（11）统计</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>len(nums)</code></td><td>数组长度</td></tr>
            <tr><td><code>max(nums)</code></td><td>最大值</td></tr>
            <tr><td><code>min(nums)</code></td><td>最小值</td></tr>
            <tr><td><code>sum(nums)</code></td><td>元素求和</td></tr>
          </table>
        </div>
      </div>
    `,
    staticCommonHTML: `
      <div class="panel">
        <h2>常见 API 参考</h2>
        <table class="ref-table cols-3">
          <tr><th>API</th><th>输出</th><th>功能</th></tr>
          <tr><td><code>len(nums)</code></td><td><code>int</code></td><td>返回数组长度</td></tr>
          <tr><td><code>append(x)</code></td><td><code>None</code></td><td>在数组末尾添加一个元素（修改原数组）</td></tr>
          <tr><td><code>extend(arr)</code></td><td><code>None</code></td><td>将另一个数组追加到末尾（修改原数组）</td></tr>
          <tr><td><code>insert(i, x)</code></td><td><code>None</code></td><td>在指定位置插入元素（修改原数组）</td></tr>
          <tr><td><code>pop()</code></td><td>删除的元素</td><td>删除最后一个元素（修改原数组）</td></tr>
          <tr><td><code>pop(i)</code></td><td>删除的元素</td><td>删除指定位置元素（修改原数组）</td></tr>
          <tr><td><code>remove(x)</code></td><td><code>None</code></td><td>删除第一个值为 x 的元素（减去该元素，而不是变为 None）</td></tr>
          <tr><td><code>sort()</code></td><td><code>None</code></td><td>原地排序，默认递增；<code>reverse=True</code> 降序，也支持 <code>key</code> 参数</td></tr>
          <tr><td><code>sorted(nums)</code></td><td><code>list</code></td><td>返回排序后的新数组（原数组不变）</td></tr>
          <tr><td><code>reverse()</code></td><td><code>None</code></td><td>原地翻转（修改原数组）</td></tr>
          <tr><td><code>nums[::-1]</code></td><td><code>list</code></td><td>返回翻转后的新数组（原数组不变）</td></tr>
          <tr><td><code>enumerate(nums)</code></td><td><code>enumerate</code> 对象</td><td>返回索引和值，可用于 <code>for i, x in ...</code></td></tr>
          <tr><td><code>max(nums)</code></td><td>元素类型</td><td>返回最大值</td></tr>
          <tr><td><code>min(nums)</code></td><td>元素类型</td><td>返回最小值</td></tr>
          <tr><td><code>sum(nums)</code></td><td>数值</td><td>返回元素总和</td></tr>
          <tr><td><code>x in nums</code></td><td><code>bool</code></td><td>判断元素是否存在</td></tr>
          <tr><td><code>index(x)</code></td><td><code>int</code></td><td>返回第一次出现的位置</td></tr>
          <tr><td><code>count(x)</code></td><td><code>int</code></td><td>返回元素出现次数</td></tr>
        </table>
      </div>
    `,
    quizGroups: [
      {
        section: 'function',
        heading: '创建数组',
        scenario: null,
        questions: [
          { id:'l01', prompt:'创建一个空数组，变量名为 nums', answer:'nums = []' },
          { id:'l02', prompt:'创建一个内容为 1, 2, 3 的数组 nums', answer:'nums = [1, 2, 3]', alt:['nums = [1,2,3]'] },
          { id:'l03', prompt:'用 range 创建一个内容为 [0,1,2,3,4] 的数组 nums', answer:'nums = list(range(5))' },
          { id:'l04', prompt:'创建一个长度为 10、初始值全为 0 的数组 nums', answer:'nums = [0] * 10' },
        ]
      },
      {
        section: 'function',
        heading: '索引',
        scenario: 'nums = [10, 20, 30, 40, 50]',
        questions: [
          { id:'l05', prompt:'获取 nums 的第一个元素', answer:'nums[0]' },
          { id:'l06', prompt:'获取 nums 的第三个元素', answer:'nums[2]' },
          { id:'l07', prompt:'获取 nums 的最后一个元素', answer:'nums[-1]' },
          { id:'l08', prompt:'获取 nums 倒数第二个元素', answer:'nums[-2]' },
        ]
      },
      {
        section: 'function',
        heading: '遍历',
        scenario: 'nums = [10, 20, 30, 40, 50]',
        questions: [
          { id:'l09', prompt:'写出遍历 nums 元素的 for 循环开头（变量名任意）', answer:'for {x} in nums:' },
          { id:'l10', prompt:'写出遍历 nums 下标的 for 循环开头（变量名任意）', answer:'for {i} in range(len(nums)):' },
          { id:'l11', prompt:'写出同时获取下标和值的 for 循环开头（推荐写法，变量名任意）', answer:'for {i}, {x} in enumerate(nums):' },
        ]
      },
      {
        section: 'function',
        heading: '切片',
        scenario: 'nums = [10, 20, 30, 40, 50]',
        questions: [
          { id:'l12', prompt:'获取 nums 下标 1 到 4（不包含 4）的切片', answer:'nums[1:4]' },
          { id:'l13', prompt:'获取 nums 前三个元素', answer:'nums[:3]' },
          { id:'l14', prompt:'获取 nums 从第 3 个元素开始到末尾', answer:'nums[2:]' },
          { id:'l15', prompt:'返回 nums 翻转后的新数组', answer:'nums[::-1]' },
        ]
      },
      {
        section: 'function',
        heading: '修改元素',
        scenario: 'nums = [10, 20, 30, 40, 50]',
        questions: [
          { id:'l16', prompt:'把 nums 第一个元素修改为 100', answer:'nums[0] = 100' },
        ]
      },
      {
        section: 'function',
        heading: '添加元素',
        scenario: 'nums = [1, 2, 3]',
        questions: [
          { id:'l17', prompt:'在 nums 末尾添加元素 4', answer:'nums.append(4)' },
          { id:'l18', prompt:'把数组 [4, 5] 拼接到 nums 末尾', answer:'nums.extend([4, 5])' },
          { id:'l19', prompt:'在 nums 下标 1 的位置插入元素 100', answer:'nums.insert(1, 100)' },
        ]
      },
      {
        section: 'function',
        heading: '删除元素',
        scenario: 'nums = [1, 2, 3, 4, 5]',
        questions: [
          { id:'l20', prompt:'删除 nums 最后一个元素，并返回它', answer:'nums.pop()' },
          { id:'l21', prompt:'删除 nums 下标为 1 的元素，并返回它', answer:'nums.pop(1)' },
          { id:'l22', prompt:'删除 nums 中第一个值为 3 的元素', answer:'nums.remove(3)' },
          { id:'l23', prompt:'用 del 删除 nums 下标为 2 的元素', answer:'del nums[2]' },
        ]
      },
      {
        section: 'function',
        heading: '排序',
        scenario: 'nums = [5, 3, 8, 1, 9]',
        questions: [
          { id:'l24', prompt:'对 nums 原地升序排序', answer:'nums.sort()' },
          { id:'l25', prompt:'对 nums 原地降序排序', answer:'nums.sort(reverse=True)' },
          { id:'l26', prompt:'返回 nums 排序后的新数组（不改变原数组）', answer:'sorted(nums)' },
        ]
      },
      {
        section: 'function',
        heading: '翻转',
        scenario: 'nums = [5, 3, 8, 1, 9]',
        questions: [
          { id:'l27', prompt:'原地翻转 nums', answer:'nums.reverse()' },
          { id:'l28', prompt:'返回 nums 翻转后的新数组（不改变原数组）', answer:'nums[::-1]' },
        ]
      },
      {
        section: 'function',
        heading: '查找',
        scenario: 'nums = [5, 3, 8, 1, 9]',
        questions: [
          { id:'l29', prompt:'判断元素 8 是否在 nums 中', answer:'8 in nums' },
          { id:'l30', prompt:'返回元素 8 在 nums 中第一次出现的位置', answer:'nums.index(8)' },
          { id:'l31', prompt:'统计元素 3 在 nums 中出现的次数', answer:'nums.count(3)' },
        ]
      },
      {
        section: 'function',
        heading: '统计',
        scenario: 'nums = [5, 3, 8, 1, 9]',
        questions: [
          { id:'l32', prompt:'获取 nums 的长度', answer:'len(nums)' },
          { id:'l33', prompt:'获取 nums 的最大值', answer:'max(nums)' },
          { id:'l34', prompt:'获取 nums 的最小值', answer:'min(nums)' },
          { id:'l35', prompt:'获取 nums 所有元素之和', answer:'sum(nums)' },
        ]
      },
      {
        section: 'common',
        heading: '常见 API',
        scenario: 'nums = [5, 3, 8, 3, 9]',
        questions: [
          { id:'l36', prompt:'返回 nums 的长度', answer:'len(nums)' },
          { id:'l37', prompt:'在 nums 末尾添加元素 6', answer:'nums.append(6)' },
          { id:'l38', prompt:'将数组 [1, 2] 追加到 nums 末尾', answer:'nums.extend([1, 2])' },
          { id:'l39', prompt:'在 nums 下标 0 的位置插入元素 100', answer:'nums.insert(0, 100)' },
          { id:'l40', prompt:'删除并返回 nums 最后一个元素', answer:'nums.pop()' },
          { id:'l41', prompt:'删除并返回 nums 下标为 1 的元素', answer:'nums.pop(1)' },
          { id:'l42', prompt:'删除 nums 中第一个值为 3 的元素', answer:'nums.remove(3)' },
          { id:'l43', prompt:'对 nums 原地排序', answer:'nums.sort()' },
          { id:'l44', prompt:'返回 nums 排序后的新数组，原数组不变', answer:'sorted(nums)' },
          { id:'l45', prompt:'原地翻转 nums', answer:'nums.reverse()' },
          { id:'l46', prompt:'返回 nums 翻转后的新数组，原数组不变', answer:'nums[::-1]' },
          { id:'l47', prompt:'获取 nums 的索引和值组合（可用于 for i, x in ... 遍历）', answer:'enumerate(nums)' },
          { id:'l48', prompt:'获取 nums 的最大值', answer:'max(nums)' },
          { id:'l49', prompt:'获取 nums 的最小值', answer:'min(nums)' },
          { id:'l50', prompt:'获取 nums 所有元素之和', answer:'sum(nums)' },
          { id:'l51', prompt:'判断元素 8 是否在 nums 中', answer:'8 in nums' },
          { id:'l52', prompt:'返回元素 3 在 nums 中第一次出现的位置', answer:'nums.index(3)' },
          { id:'l53', prompt:'统计元素 3 在 nums 中出现的次数', answer:'nums.count(3)' },
        ]
      },
    ]
});
