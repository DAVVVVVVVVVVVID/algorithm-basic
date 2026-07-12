TOPICS.push({
    id: 'number',
    title: '数字 Number',
    sub: '算法题最基础的数据类型 · int 无位数限制，几乎不用担心溢出',
    introHTML: `
      <div class="panel">
        <h2>概念介绍</h2>
        <p>在 Python 中，数字（Number）用于表示数值类型，是算法题中最基础的数据类型。数字本身没有成员函数（如 <code>append()</code>、<code>sort()</code>），算法中真正需要掌握的是<b>运算、转换以及内置函数</b>。</p>
        <table class="ref-table cols-3">
          <tr><th>类型</th><th>说明</th><th>示例</th></tr>
          <tr><td><code>int</code></td><td>整数（算法题最常用）</td><td><code>1</code>、<code>-10</code>、<code>100</code></td></tr>
          <tr><td><code>float</code></td><td>浮点数</td><td><code>3.14</code>、<code>0.5</code></td></tr>
          <tr><td><code>complex</code></td><td>复数（算法基本不用）</td><td><code>1+2j</code></td></tr>
        </table>
        <p>算法题中，99% 的情况下只会使用 <code>int</code>。Python 的 <code>int</code> <b>没有位数限制</b>（仅受内存限制），因此不用担心像 Java 的 <code>int</code> 那样发生整数溢出。</p>
        <div class="code-block">x = 123456789012345678901234567890
# 也是合法的</div>
      </div>
    `,
    complexityHTML: `
      <div class="panel">
        <h2>时间复杂度</h2>
        <table class="ref-table">
          <tr><th>操作</th><th>时间复杂度</th></tr>
          <tr><td>加减乘除</td><td>O(1)</td></tr>
          <tr><td>比较大小</td><td>O(1)</td></tr>
          <tr><td>取绝对值</td><td>O(1)</td></tr>
          <tr><td>最大值、最小值</td><td>O(1)</td></tr>
          <tr><td>幂运算（一般情况）</td><td>O(log n)</td></tr>
        </table>
      </div>
    `,
    outroHTML: `
      <div class="panel">
        <h2>面试前必须熟练到什么程度？</h2>
        <h3>1. 理解数字</h3>
        <ul>
          <li>理解 <code>int</code>、<code>float</code> 的区别</li>
          <li>知道算法题几乎都使用 <code>int</code></li>
          <li>理解 Python <code>int</code> 不会发生整数溢出</li>
        </ul>
        <h3>2. 熟练使用 API（不查文档即可写出）</h3>
        <ul>
          <li>基本四则运算 / 整除与取余 / 幂运算</li>
          <li>类型转换 / 绝对值 / 最大值、最小值</li>
          <li>常见进制转换</li>
        </ul>
        <p>并清楚：<code>/</code> 与 <code>//</code> 的区别、<code>int()</code> 与 <code>round()</code> 的区别、<code>divmod()</code> 返回的是 <code>(商, 余数)</code> 元组。</p>
        <h3>3. 解题能力（看到涉及数字的题目能快速判断）</h3>
        <ul>
          <li>是否需要整除（<code>//</code>）或取余（<code>%</code>）？</li>
          <li>是否需要进行类型转换？</li>
          <li>是否需要利用位运算优化？</li>
          <li>是否需要进行进制转换？</li>
        </ul>
        <h3>📌 本专题必须牢记（算法刷题最高频）</h3>
        <ul class="star-list">
          <li><code>int(x)</code></li>
          <li><code>str(x)</code></li>
          <li><code>abs(x)</code></li>
          <li><code>//</code>（整除）</li>
          <li><code>%</code>（取余）</li>
          <li><code>max()</code>、<code>min()</code></li>
          <li><code>/</code> 与 <code>//</code> 的区别</li>
          <li>Python <code>int</code> 无整数溢出</li>
        </ul>
        <div class="callout">
          <b>💡 本专题在 LeetCode 中的真实定位：</b><br/>
          数字专题的 API 数量不多，但几乎每一道算法题都会涉及数值运算，真正高频的只有：<br/>
          1. 类型转换：<code>int()</code>、<code>str()</code><br/>
          2. 整除与取余：<code>//</code>、<code>%</code><br/>
          3. 绝对值：<code>abs()</code><br/>
          4. 最大值与最小值：<code>max()</code>、<code>min()</code>
        </div>
      </div>
    `,
    staticFunctionHTML: `
      <div class="panel">
        <h2>按功能分类 API 参考</h2>
        <div class="note-block">
          <h3>（1）创建数字</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>x = 10</code></td><td>创建整数</td></tr>
            <tr><td><code>x = -5</code></td><td>创建负整数</td></tr>
            <tr><td><code>x = 3.14</code></td><td>创建浮点数</td></tr>
            <tr><td><code>x = int("123")</code></td><td>字符串转整数 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>x = float("3.14")</code></td><td>字符串转浮点数</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（2）基本运算</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>a + b</code></td><td>加法</td></tr>
            <tr><td><code>a - b</code></td><td>减法</td></tr>
            <tr><td><code>a * b</code></td><td>乘法</td></tr>
            <tr><td><code>a / b</code></td><td>除法（结果为 float）</td></tr>
            <tr><td><code>a // b</code></td><td>整除 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>a % b</code></td><td>取余 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>a ** b</code></td><td>幂运算</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（3）比较运算</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>a == b</code></td><td>是否相等</td></tr>
            <tr><td><code>a != b</code></td><td>是否不等</td></tr>
            <tr><td><code>a &gt; b</code></td><td>大于</td></tr>
            <tr><td><code>a &gt;= b</code></td><td>大于等于</td></tr>
            <tr><td><code>a &lt; b</code></td><td>小于</td></tr>
            <tr><td><code>a &lt;= b</code></td><td>小于等于</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（4）类型转换</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>int(x)</code></td><td>转换为整数 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>float(x)</code></td><td>转换为浮点数</td></tr>
            <tr><td><code>str(x)</code></td><td>转换为字符串 ⭐⭐⭐⭐⭐</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（5）数学函数</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>abs(x)</code></td><td>绝对值 ⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>pow(a, b)</code></td><td>幂运算（等价于 <code>a ** b</code>）</td></tr>
            <tr><td><code>divmod(a, b)</code></td><td>返回 (商, 余数)</td></tr>
            <tr><td><code>round(x)</code></td><td>四舍五入（了解）</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（6）最大值、最小值</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>max(a, b)</code></td><td>返回较大值</td></tr>
            <tr><td><code>min(a, b)</code></td><td>返回较小值</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（7）进制转换（了解）</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>bin(x)</code></td><td>转二进制字符串</td></tr>
            <tr><td><code>oct(x)</code></td><td>转八进制字符串</td></tr>
            <tr><td><code>hex(x)</code></td><td>转十六进制字符串</td></tr>
            <tr><td><code>int("101", 2)</code></td><td>二进制字符串转十进制</td></tr>
          </table>
        </div>
        <div class="note-block">
          <h3>（8）位运算（算法常见）</h3>
          <table class="ref-table">
            <tr><th>代码</th><th>说明</th></tr>
            <tr><td><code>a & b</code></td><td>按位与（AND）</td></tr>
            <tr><td><code>a | b</code></td><td>按位或（OR）</td></tr>
            <tr><td><code>a ^ b</code></td><td>按位异或（XOR）⭐⭐⭐⭐⭐</td></tr>
            <tr><td><code>~a</code></td><td>按位取反</td></tr>
            <tr><td><code>a &lt;&lt; 1</code></td><td>左移一位（乘 2）</td></tr>
            <tr><td><code>a &gt;&gt; 1</code></td><td>右移一位（除 2，向下取整）</td></tr>
          </table>
          <p class="note-hint">位运算会在位运算专题详细学习，这里只需要认识这些写法即可。</p>
        </div>
      </div>
    `,
    staticCommonHTML: `
      <div class="panel">
        <h2>常见 API 参考</h2>
        <table class="ref-table cols-3">
          <tr><th>API</th><th>输出</th><th>功能</th></tr>
          <tr><td><code>int(x)</code></td><td><code>int</code></td><td>转换为整数</td></tr>
          <tr><td><code>float(x)</code></td><td><code>float</code></td><td>转换为浮点数</td></tr>
          <tr><td><code>str(x)</code></td><td><code>str</code></td><td>转换为字符串</td></tr>
          <tr><td><code>abs(x)</code></td><td>数值</td><td>返回绝对值</td></tr>
          <tr><td><code>pow(a, b)</code></td><td>数值</td><td>幂运算</td></tr>
          <tr><td><code>divmod(a, b)</code></td><td><code>tuple</code></td><td>返回 (商, 余数)</td></tr>
          <tr><td><code>max(a, b)</code></td><td>数值</td><td>返回最大值</td></tr>
          <tr><td><code>min(a, b)</code></td><td>数值</td><td>返回最小值</td></tr>
          <tr><td><code>round(x)</code></td><td>数值</td><td>四舍五入</td></tr>
          <tr><td><code>bin(x)</code></td><td><code>str</code></td><td>转二进制字符串</td></tr>
          <tr><td><code>hex(x)</code></td><td><code>str</code></td><td>转十六进制字符串</td></tr>
          <tr><td><code>oct(x)</code></td><td><code>str</code></td><td>转八进制字符串</td></tr>
        </table>
        <div class="callout warning">
          <b>⭐⭐ 面试高频易错点：</b><br/>
          <code>/</code> 是普通除法，结果始终为 <code>float</code>。<br/>
          <code>//</code> 是整除，结果向下取整，负数时尤其要注意。<br/>
          <code>%</code> 是取余，在循环、哈希、数学题中非常常见。<br/>
          <code>int()</code> 是截断小数部分，而不是四舍五入。例如 <code>int(3.9)</code> 的结果是 3。<br/>
          Python 的 <code>int</code> 不会像 Java/C++ 那样发生整数溢出。
        </div>
      </div>
    `,
    quizGroups: [
      {
        section: 'function',
        heading: '创建数字',
        scenario: null,
        questions: [
          { id:'n01', prompt:'创建整数 10，赋值给 x', answer:'x = 10' },
          { id:'n02', prompt:'创建负整数 -5，赋值给 x', answer:'x = -5' },
          { id:'n03', prompt:'创建浮点数 3.14，赋值给 x', answer:'x = 3.14' },
          { id:'n04', prompt:'把字符串 "123" 转成整数，赋值给 x', answer:'x = int("123")' },
          { id:'n05', prompt:'把字符串 "3.14" 转成浮点数，赋值给 x', answer:'x = float("3.14")' },
        ]
      },
      {
        section: 'function',
        heading: '基本运算',
        scenario: 'a = 7\nb = 2',
        questions: [
          { id:'n06', prompt:'计算 a + b', answer:'a + b' },
          { id:'n07', prompt:'计算 a - b', answer:'a - b' },
          { id:'n08', prompt:'计算 a * b', answer:'a * b' },
          { id:'n09', prompt:'计算 a / b（结果为 float）', answer:'a / b' },
          { id:'n10', prompt:'计算 a 整除 b', answer:'a // b' },
          { id:'n11', prompt:'计算 a 对 b 取余', answer:'a % b' },
          { id:'n12', prompt:'计算 a 的 b 次幂', answer:'a ** b' },
        ]
      },
      {
        section: 'function',
        heading: '比较运算',
        scenario: 'a = 7\nb = 2',
        questions: [
          { id:'n13', prompt:'判断 a 是否等于 b', answer:'a == b' },
          { id:'n14', prompt:'判断 a 是否不等于 b', answer:'a != b' },
          { id:'n15', prompt:'判断 a 是否大于 b', answer:'a > b' },
          { id:'n16', prompt:'判断 a 是否大于等于 b', answer:'a >= b' },
          { id:'n17', prompt:'判断 a 是否小于 b', answer:'a < b' },
          { id:'n18', prompt:'判断 a 是否小于等于 b', answer:'a <= b' },
        ]
      },
      {
        section: 'function',
        heading: '类型转换',
        scenario: 'x = 3.9',
        questions: [
          { id:'n19', prompt:'把 x 转换为整数', answer:'int(x)' },
          { id:'n20', prompt:'把 x 转换为浮点数', answer:'float(x)' },
          { id:'n21', prompt:'把 x 转换为字符串', answer:'str(x)' },
        ]
      },
      {
        section: 'function',
        heading: '数学函数',
        scenario: 'a = -8\nb = 3',
        questions: [
          { id:'n22', prompt:'求 a 的绝对值', answer:'abs(a)' },
          { id:'n23', prompt:'求 a 的 b 次幂（用 pow）', answer:'pow(a, b)' },
          { id:'n24', prompt:'求 a 除以 b 的商和余数', answer:'divmod(a, b)' },
          { id:'n25', prompt:'对 a 四舍五入', answer:'round(a)' },
        ]
      },
      {
        section: 'function',
        heading: '最大值、最小值',
        scenario: 'a = 3\nb = 7',
        questions: [
          { id:'n26', prompt:'返回 a 和 b 中较大的值', answer:'max(a, b)' },
          { id:'n27', prompt:'返回 a 和 b 中较小的值', answer:'min(a, b)' },
        ]
      },
      {
        section: 'function',
        heading: '进制转换',
        scenario: 'x = 10',
        questions: [
          { id:'n28', prompt:'把 x 转成二进制字符串', answer:'bin(x)' },
          { id:'n29', prompt:'把 x 转成八进制字符串', answer:'oct(x)' },
          { id:'n30', prompt:'把 x 转成十六进制字符串', answer:'hex(x)' },
          { id:'n31', prompt:'把二进制字符串 "101" 转成十进制整数', answer:'int("101", 2)' },
        ]
      },
      {
        section: 'function',
        heading: '位运算',
        scenario: 'a = 5\nb = 3',
        questions: [
          { id:'n32', prompt:'计算 a 按位与 b', answer:'a & b' },
          { id:'n33', prompt:'计算 a 按位或 b', answer:'a | b' },
          { id:'n34', prompt:'计算 a 按位异或 b', answer:'a ^ b' },
          { id:'n35', prompt:'计算 a 按位取反', answer:'~a' },
          { id:'n36', prompt:'把 a 左移一位（乘 2）', answer:'a << 1' },
          { id:'n37', prompt:'把 a 右移一位（除 2，向下取整）', answer:'a >> 1' },
        ]
      },
      {
        section: 'common',
        heading: '常见 API',
        scenario: 'a = 3.9\nb = -7',
        questions: [
          { id:'n38', prompt:'把 a 转换为整数', answer:'int(a)' },
          { id:'n39', prompt:'把 a 转换为浮点数', answer:'float(a)' },
          { id:'n40', prompt:'把 a 转换为字符串', answer:'str(a)' },
          { id:'n41', prompt:'求 b 的绝对值', answer:'abs(b)' },
          { id:'n42', prompt:'求 3 的 4 次幂（用 pow）', answer:'pow(3, 4)' },
          { id:'n43', prompt:'求 17 除以 5 的商和余数', answer:'divmod(17, 5)' },
          { id:'n44', prompt:'返回 a 和 b 中较大的值', answer:'max(a, b)' },
          { id:'n45', prompt:'返回 a 和 b 中较小的值', answer:'min(a, b)' },
          { id:'n46', prompt:'对 a 四舍五入', answer:'round(a)' },
          { id:'n47', prompt:'把 10 转成二进制字符串', answer:'bin(10)' },
          { id:'n48', prompt:'把 10 转成十六进制字符串', answer:'hex(10)' },
          { id:'n49', prompt:'把 10 转成八进制字符串', answer:'oct(10)' },
        ]
      },
    ]
});
