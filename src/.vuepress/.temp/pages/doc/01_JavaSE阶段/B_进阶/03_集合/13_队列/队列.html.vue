<template><div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2>
<p>特点：<strong>先进先出（FIFO）</strong> （First In First Out）<br>
他有两端，一端是让新元素进去，一端是让老元素出去<br>
<img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/image_LkrQU4XeCx.png" alt="" loading="lazy"></p>
<p>在日常的社会生活中，<strong>比如排队买票使用的就是队列</strong>。在计算机网络架构中、网络自身内部的各种计算资源，无论是多进程共享的 CPU 时间，还是多用户共享的打印机，也都需要借助队列结构实现合理和优化的分配。</p>
<p>同样，我们也可以创建双端队列：两端都可以进行进队，出队的队列<br>
<img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/image_9b9j5wiXfj.png" alt="" loading="lazy"></p>
<p>在上面的双端队列的基础上 我们可以加以限制，获得：</p>
<p><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/image_9qDMEtjo1j.png" alt="" loading="lazy"><br>
<img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/image_NUryYc2oa2.png" alt="" loading="lazy"></p>
<p>栈和队列的物理结构实现 可以用线性表的数组，链表都可以</p>
<h2 id="阻塞队列-blockingqueue" tabindex="-1"><a class="header-anchor" href="#阻塞队列-blockingqueue" aria-hidden="true">#</a> 阻塞队列 - BlockingQueue</h2>
<p>BlockingQueue继承<strong>Queue</strong>，<strong>Queue继承自Collection</strong>。所以Collection最基础的增删改查操作是有的，在这个基础上，多了Queue的特点，在这个基础上又多了阻塞的特点，最终形成了BlockingQueue</p>
<h3 id="阻塞的概念" tabindex="-1"><a class="header-anchor" href="#阻塞的概念" aria-hidden="true">#</a> 阻塞的概念</h3>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/image_1OghT8JIAt.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>简单来讲，获取参数时如果队列为空则等待，直到队列加入元素后直接获取。添加元素时队列如果满载则等待，直至队列出现空余时立即加入。</p>
<h3 id="常用的api" tabindex="-1"><a class="header-anchor" href="#常用的api" aria-hidden="true">#</a> 常用的API</h3>
<p>注意：不可以添加Null</p>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>boolean add(E e)</td>
<td>将指定元素插入此队列（如果立即可行且不违反容量限制），成功返回true，如果当前没有可用空间，则<strong>抛出异常</strong></td>
</tr>
<tr>
<td>boolean offer(E e)</td>
<td>将指定元素插入此队列（如果立即可行且不违反容量限制），成功返回true，如果当前没有可用空间，则<strong>返回false</strong></td>
</tr>
<tr>
<td>void put(E e)</td>
<td>将指定元素插入此队列，如果没有空余空间则等待（<strong>阻塞</strong>）</td>
</tr>
<tr>
<td>E take()</td>
<td>获取并移除此队列的头部，如果没有元素则<strong>一直等待</strong></td>
</tr>
<tr>
<td>E pool(long timeout,TimeUnit unit)</td>
<td>获取并移除此队列的头部，如果没有元素则<strong>等待指定的时间</strong></td>
</tr>
<tr>
<td>boolean remove(Object o)</td>
<td>从队列中移除指定的元素实例，<strong>无论在不在无异常</strong></td>
</tr>
</tbody>
</table>
<h3 id="子类-arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#子类-arrayblockingqueue" aria-hidden="true">#</a> 子类 - ArrayBlockingQueue</h3>
<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4>
<p>ArrayBlockingQueue是一个底层基于数组的有边界的队列，和其他的队列一样是FIFO（先进先出）。获取元素从头部获取，放置元素从尾部放置。</p>
<p><strong>不支持读写同时操作，底层基于数组的</strong></p>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestArrayBlockingQueue</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayBlockingQueue</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//【1】添加null元素：不可以添加null元素，会报空指针异常：NullPointerException</span>
        <span class="token comment">//queue.add(null);</span>
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token char">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token char">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//【2】由于当前队列处于满载情况，我们无法添加直接抛出异常 Queue full</span>
        <span class="token comment">//System.out.println(queue.add('c'));</span>
        
        <span class="token comment">//【3】 创建一个独立的线程，测试阻塞添加</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token comment">//【3】指定时间等阻塞添加，失败则返回false</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">"e"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//flase</span>
                    <span class="token comment">//【4】完全阻塞添加</span>
                    queue<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token char">'f'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//休眠1S</span>
        
        <span class="token comment">//【5】获取队列头，不移除</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[a, b, c]</span>
        
        <span class="token comment">//【6】获取队列头，且移除</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[b, c]</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//休眠1S</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[b, c, f]</span>
        
        <span class="token comment">//【7】获取队列头，且移除(阻塞)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//b</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[c, f]</span>
        
        <span class="token comment">//【8】清空元素</span>
        queue<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[]</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//null</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//null</span>
        
        <span class="token comment">//测试阻塞</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token comment">//指定时间阻塞式获取</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//永久阻塞式获取</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"开始强制获取....."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//休眠2s</span>
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
        <span class="token comment">//底层就是一个数组：</span>
        <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items<span class="token punctuation">;</span>
        <span class="token comment">//取元素用到的索引，初始结果为0</span>
        <span class="token keyword">int</span> takeIndex<span class="token punctuation">;</span>
        <span class="token comment">//放元素用到的索引，初始结果为0</span>
        <span class="token keyword">int</span> putIndex<span class="token punctuation">;</span>
        <span class="token comment">//数组中元素的个数：</span>
        <span class="token keyword">int</span> count<span class="token punctuation">;</span>
        
        <span class="token comment">//一把锁：这个锁肯定很多方法中用到了，所以定义为属性，初始化以后可以随时使用</span>
        <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock<span class="token punctuation">;</span>
        <span class="token comment">//锁伴随的一个等待池：notEmpty</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Condition</span> notEmpty<span class="token punctuation">;</span>
        <span class="token comment">//锁伴随的一个等待池：notFull</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Condition</span> notFull<span class="token punctuation">;</span>
        
        <span class="token comment">//构造器：</span>
        <span class="token keyword">public</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//传入队列指定的容量</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>capacity<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
        
      <span class="token keyword">public</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">,</span> <span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//传入队列指定的容量</span>
                  <span class="token comment">//健壮性考虑</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>capacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
              <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token comment">//初始化底层数组</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
                  <span class="token comment">//初始化锁 和  等待队列</span>
          lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span>fair<span class="token punctuation">)</span><span class="token punctuation">;</span>
          notEmpty <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          notFull <span class="token operator">=</span>  lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">//两个基本方法：一个是入队，一个是出队  ，是其他方法的基础：</span>
        
        <span class="token comment">//入队：</span>
      <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token class-name">E</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// assert lock.getHoldCount() == 1;</span>
        <span class="token comment">// assert items[putIndex] == null;</span>
        <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">;</span><span class="token comment">//底层数组赋给items</span>
                <span class="token comment">//在对应的下标位置放入元素</span>
        items<span class="token punctuation">[</span>putIndex<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>putIndex <span class="token operator">==</span> items<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">//++putIndex putIndex 索引 加1 </span>
            putIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token comment">//每放入一个元素，count加1操作</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        notEmpty<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
        
        
        <span class="token comment">//出队：</span>
        <span class="token keyword">private</span> <span class="token class-name">E</span> <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// assert lock.getHoldCount() == 1;</span>
          <span class="token comment">// assert items[takeIndex] != null;</span>
          <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">;</span><span class="token comment">//底层数组赋给items</span>
          <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
          <span class="token class-name">E</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> items<span class="token punctuation">[</span>takeIndex<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//在对应的位置取出元素</span>
          items<span class="token punctuation">[</span>takeIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token comment">//对应位置元素取出后就置为null</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>takeIndex <span class="token operator">==</span> items<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token comment">//++takeIndex 加1操作</span>
              takeIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
          count<span class="token operator">--</span><span class="token punctuation">;</span><span class="token comment">//每取出一个元素，count减1操作</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>itrs <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
              itrs<span class="token punctuation">.</span><span class="token function">elementDequeued</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          notFull<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> x<span class="token punctuation">;</span><span class="token comment">//将取出的元素作为方法的返回值</span>
      <span class="token punctuation">}</span>
       
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h4>
<h5 id="核心元素" tabindex="-1"><a class="header-anchor" href="#核心元素" aria-hidden="true">#</a> 核心元素</h5>
<p><code v-pre>Object[] items</code> 用于存储数据，<br>
<code v-pre>int takeIndex</code> 取元素用到的索引，初始结果为0<br>
<code v-pre>int putIndex</code> 放元素用到的索引，初始结果为0<br>
<code v-pre>int count</code> 数组中元素的个数<br>
<code v-pre>ReentrantLock lock</code> 一把阻塞锁，存数据/取数据都用这个锁<br>
<code v-pre>Condition notEmpty</code> 非空等待池<br>
<code v-pre>Condition notFull</code> 非满等待池</p>
<h5 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h5>
<p>初始化底层数组长度<br>
初始化锁以及等待池</p>
<h5 id="存元素" tabindex="-1"><a class="header-anchor" href="#存元素" aria-hidden="true">#</a> 存元素</h5>
<ol>
<li>将底层数组先赋值给<code v-pre>Object[] items </code>数组</li>
<li><code v-pre>items[putIndex] = x；</code>//在对应的下标位置放入元素</li>
<li>将存元素的指针向后位移一个，如果达到队列最大长度则指向0</li>
<li>将Count计数+1</li>
<li>激活非空等待池</li>
</ol>
<h5 id="取元素" tabindex="-1"><a class="header-anchor" href="#取元素" aria-hidden="true">#</a> 取元素</h5>
<ol>
<li>将底层数组先赋值给<code v-pre>Object[] items</code> 数组</li>
<li><code v-pre>E x = (E) items[takeIndex];</code>//在对应的位置取出元素</li>
<li>将取元素的指针向后位移一个，如果达到队列最大长度则指向0</li>
<li>将Count计数-1</li>
<li>激活非满等待池</li>
<li>返回元素</li>
</ol>
<h4 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h4>
<p>阻塞存取基于基本的enqueue 和 enqueue，是通过对等待池的限定来实现的<br>
简单点我们可以理解为：</p>
<ol>
<li>在执行阻塞操作时我们会先获取锁，来同步结果。</li>
<li>如果放数据时达到最大长度，则notFull等待池会进入等待状态。当其他线程取出数据时，才会重新激活notFull等待池，继续执行放置元素的任务</li>
<li>如果取元素时队列为空，则notEmpty等待池会进入等待状态，当其他元素放置元素时，才会重新激活notEmpty等待池，继续执行取元素的任务</li>
</ol>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326121005.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意：代码的核心关键是，<strong>在判断是否阻塞时采用了while不断的查询状态</strong>，这样<strong>可以在线程被激活的第一时间执行任务</strong>。避免当再次准备放置时，被其他线程抢先的情况造成错误。</p>
<h3 id="子类-linkedblockingqueue" tabindex="-1"><a class="header-anchor" href="#子类-linkedblockingqueue" aria-hidden="true">#</a> 子类 - LinkedBlockingQueue</h3>
<h4 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h4>
<p><strong>LinkedBlockingQueue是一个有边界的队列，底层采用了链表的结构</strong>。如果我们不指定长度时，他会默认为<code v-pre>Integer.MAX_VALUE 21</code>亿多</p>
<p><strong>支持读写同时操作，并发情况下，效率高。底层基于链表。</strong></p>
<h4 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     *  放置元素
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> aq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//添加元素：</span>
        <span class="token comment">//【1】添加null元素：不可以添加null元素，会报空指针异常：NullPointerException</span>
        <span class="token comment">//aq.add(null);</span>
        <span class="token comment">//aq.offer(null);</span>
        aq<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//【2】正常添加元素：</span>
        aq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aq<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">"bbb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aq<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"ccc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[aaa, bbb, ccc]</span>
        <span class="token comment">//【3】在队列满的情况下，再添加元素：</span>
        <span class="token comment">//aq.add("ddd");//在队列满的情况下，添加元素 出现异常：Queue full</span>
        <span class="token comment">//System.out.println(aq.offer("ddd"));//没有添加成功，返回false</span>
        <span class="token comment">//设置最大阻塞时间，如果时间到了，队列还是满的，就不再阻塞了</span>
        <span class="token comment">//aq.offer("ddd",2, TimeUnit.SECONDS);</span>
        <span class="token comment">//真正阻塞的方法： put ,如果队列满，就永远阻塞</span>
        aq<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"ddd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 取元素
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建一个队列，队列可以指定容量指定长度3：</span>
        <span class="token class-name">LinkedBlockingQueue</span> aq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"bbb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"ccc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到头元素但是不移除</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到头元素并且移除</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到头元素并且移除</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//清空元素：</span>
        aq<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//null</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//null</span>
        <span class="token comment">//设置阻塞事件，如果队列为空，返回null，时间到了以后就不阻塞了</span>
        <span class="token comment">//System.out.println(aq.poll(2, TimeUnit.SECONDS));</span>
        <span class="token comment">//真正阻塞：队列为空，永远阻塞</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aq<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="源码-1" tabindex="-1"><a class="header-anchor" href="#源码-1" aria-hidden="true">#</a> 源码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
        <span class="token comment">//内部类Node就是链表的节点的对象对应的类：</span>
        <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
        <span class="token class-name">E</span> item<span class="token punctuation">;</span><span class="token comment">//封装你要装的那个元素</span>
        
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> next<span class="token punctuation">;</span><span class="token comment">//下一个Node节点的地址</span>
        <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">E</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token comment">//构造器</span>
    <span class="token punctuation">}</span>
        <span class="token comment">//链表的长度</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>
        <span class="token comment">//计数器：</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">AtomicInteger</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//链表的头结点</span>
        <span class="token keyword">transient</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> head<span class="token punctuation">;</span>
        <span class="token comment">//链表的尾结点</span>
        <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> last<span class="token punctuation">;</span>
        <span class="token comment">//取元素用的锁</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> takeLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//等待池</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Condition</span> notEmpty <span class="token operator">=</span> takeLock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//放元素用的锁</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> putLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//等待池</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Condition</span> notFull <span class="token operator">=</span> putLock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">public</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用类本类的空构造器，传入正21亿</span>
    <span class="token punctuation">}</span>
        
        <span class="token keyword">public</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//健壮性考虑</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>capacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//给队列指定长度  </span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
            <span class="token comment">//last，head指向一个新的节点，新的节点中 元素为null </span>
            last <span class="token operator">=</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
        
        
        <span class="token comment">//入队：</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            last <span class="token operator">=</span> last<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">//出队：</span>
        <span class="token keyword">private</span> <span class="token class-name">E</span> <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> h <span class="token operator">=</span> head<span class="token punctuation">;</span><span class="token comment">//h指向了head</span>
            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> first <span class="token operator">=</span> h<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">//first 指向head的next</span>
            h<span class="token punctuation">.</span>next <span class="token operator">=</span> h<span class="token punctuation">;</span> <span class="token comment">// help GC   h.next指向自己，更容易被GC发现 被GC</span>
            head <span class="token operator">=</span> first<span class="token punctuation">;</span><span class="token comment">//head的指向指为first</span>
            <span class="token class-name">E</span> x <span class="token operator">=</span> first<span class="token punctuation">.</span>item<span class="token punctuation">;</span><span class="token comment">//取出链中第一个元素，给了x</span>
            first<span class="token punctuation">.</span>item <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> x<span class="token punctuation">;</span><span class="token comment">//把x作为方法的返回值</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基本原理-1" tabindex="-1"><a class="header-anchor" href="#基本原理-1" aria-hidden="true">#</a> 基本原理</h4>
<h5 id="初始化-1" tabindex="-1"><a class="header-anchor" href="#初始化-1" aria-hidden="true">#</a> 初始化</h5>
<p>初始化时默认传一个结点，值为空 / 下一个地址也为空，且head指针和last指针都指向这个节点</p>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326122320.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="放元素的基本原理" tabindex="-1"><a class="header-anchor" href="#放元素的基本原理" aria-hidden="true">#</a> 放元素的基本原理</h5>
<p>将last节点的地址指向新增的节点（此时last是新增前的last）<br>
将last指针指向新增节点</p>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326122348.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="取元素的基本原理" tabindex="-1"><a class="header-anchor" href="#取元素的基本原理" aria-hidden="true">#</a> 取元素的基本原理</h5>
<p>将head指针指向head指针指向的地址的节点<br>
修改原有head指针指向的节点地址为自己（这样更容易被GC）<br>
返回修改后head指针指向的节点的值，并修改为null</p>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326122416.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="相关概念-1" tabindex="-1"><a class="header-anchor" href="#相关概念-1" aria-hidden="true">#</a> 相关概念</h4>
<h5 id="阻塞原理实现" tabindex="-1"><a class="header-anchor" href="#阻塞原理实现" aria-hidden="true">#</a> 阻塞原理实现</h5>
<p>同ArrayListBlockingQueue，只不过是LinkedBlockingQueue使用了两把锁，读写各自有单独的锁。</p>
<ul>
<li>放数据
<ul>
<li>打开放数据的锁 → 传入对象 → 判断是否满载（满载 notFull等待池开始阻塞/非满载存放数据 激活notEmpty等待池) → 关闭放数据的锁</li>
</ul>
</li>
<li>取数据
<ul>
<li>打开取数据的锁 → 获取head指向的对象 → 判断是否为空队列（空队列 notEmpty等待池开始阻塞/非空队列 激活notFull等待池) → 关闭取数据的锁</li>
</ul>
</li>
</ul>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326122518.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="子类-synchronousqueue" tabindex="-1"><a class="header-anchor" href="#子类-synchronousqueue" aria-hidden="true">#</a> 子类 - SynchronousQueue</h3>
<h4 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h4>
<p><strong>SynchronousQueue是一个没有容量大小的队列</strong>，这也寓意着我们没有办法正常的通过他来存放数据。同常在使用中需要先获取数据再存放数据，它常被用做线程间的通信。</p>
<p>优点：<strong>效率极高不会出现线程争抢的问题</strong>，我们可以理解为他是线程与线程间的传送门</p>
<p>注意:<br>
取出元素 不能用peek，因为peek不会将元素从队列中拿走，只是查看的效果；<br>
一定要先取再放！！！</p>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326122632.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h4>
<h5 id="非阻塞" tabindex="-1"><a class="header-anchor" href="#非阻塞" aria-hidden="true">#</a> 非阻塞</h5>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326122705.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
     * 非阻塞类型
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span>  <span class="token keyword">void</span> <span class="token function">testTake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> synchronousQueue1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> synchronousQueue2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> synchronousQueue3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程："</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" 数据："</span><span class="token operator">+</span>synchronousQueue1<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"Thread01"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程："</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" 数据："</span><span class="token operator">+</span>synchronousQueue3<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"Thread02"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程："</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" 数据："</span><span class="token operator">+</span>synchronousQueue3<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"Thread03"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        synchronousQueue1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        synchronousQueue2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        synchronousQueue3<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="阻塞" tabindex="-1"><a class="header-anchor" href="#阻塞" aria-hidden="true">#</a> 阻塞</h5>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326122815.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
     * 阻塞类型
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testPoll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> synchronousQueue1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> synchronousQueue2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> synchronousQueue3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Object</span> poll <span class="token operator">=</span> synchronousQueue1<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程："</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" 数据："</span><span class="token operator">+</span>poll<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"Thread01"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Object</span> poll <span class="token operator">=</span> synchronousQueue2<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程："</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" 数据："</span><span class="token operator">+</span>poll<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"Thread02"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Object</span> poll <span class="token operator">=</span> synchronousQueue3<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程："</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" 数据："</span><span class="token operator">+</span>poll<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"Thread03"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        synchronousQueue1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        synchronousQueue2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        synchronousQueue3<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子类-priorityblockingqueue" tabindex="-1"><a class="header-anchor" href="#子类-priorityblockingqueue" aria-hidden="true">#</a> 子类 - PriorityBlockingQueue</h3>
<h4 id="概念-3" tabindex="-1"><a class="header-anchor" href="#概念-3" aria-hidden="true">#</a> 概念</h4>
<p><strong>这是一个带有优先级的无界队列，默认长度为11，长度会根据使用情况自动扩容，直至内存全部耗尽出现OutOfMemoryError内存溢出 程序才会结束。</strong></p>
<p>存放对象必须是比较对象，实现内部比较器或者外部比较器，<strong>否则抛出异常ClassCastException</strong></p>
<h4 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码</h4>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326122848.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>meturing<span class="token punctuation">.</span></span><span class="token class-name">Queue</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">PriorityBlockingQueue</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPriorityBlockingQueue</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PriorityBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> priorityBlockingQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"王五"</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        priorityBlockingQueue<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"赵六"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>priorityBlockingQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Student{"</span> <span class="token operator">+</span>
                <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Student</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">-</span> o<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该队列会根据比较器，将队列中的数据进行排序，按照比较器规则有序取出</p>
<h3 id="子类-delayqueue" tabindex="-1"><a class="header-anchor" href="#子类-delayqueue" aria-hidden="true">#</a> 子类 - DelayQueue</h3>
<h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4>
<p><strong>DelayQueue是一个无界的BlockingQueue，用于放置实现了Delayed接口的对象，其中的对象只能在其到期时才能从队列中取走</strong></p>
<p>当生产者线程调用put之类的方法加入元素时，会触发Delayed接口中的compareTo方法进行排序，也就是说队列中元素的顺序是按到期时间排序的，而非它们进入队列的顺序。排在队列头部的元素是最早到期的，越往后到期时间赿晚。</p>
<p>消费者线程查看队列头部的元素，注意是查看不是取出。然后调用元素的getDelay方法，如果此方法返回的值小０或者等于０，则消费者线程会从队列中取出此元素，并进行处理。如果getDelay方法返回的值大于0，则消费者线程wait返回的时间值后，再从队列头部取出元素，此时元素应该已经到期。</p>
<h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4>
<ol>
<li>淘宝订单业务:下单之后如果三十分钟之内没有付款就自动取消订单。</li>
<li>饿了吗订餐通知:下单成功后60s之后给用户发送短信通知。</li>
<li>关闭空闲连接。服务器中，有很多客户端的连接，空闲一段时间之后需要关闭之。</li>
<li>缓存。缓存中的对象，超过了空闲时间，需要从缓存中移出。</li>
<li>任务超时处理。在网络协议滑动窗口请求应答式交互时，处理超时未响应的请求等。</li>
</ol>
<h4 id="测试案例" tabindex="-1"><a class="header-anchor" href="#测试案例" aria-hidden="true">#</a> 测试案例</h4>
<figure><img src="@source/doc/01_JavaSE阶段/B_进阶/03_集合/13_队列/assets/Pasted_image_20230326120258.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>meturing<span class="token punctuation">.</span></span><span class="token class-name">Queue</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">DelayQueue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Delayed</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDelayQueue</span> <span class="token punctuation">{</span>
    <span class="token class-name">DelayQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> delayQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DelayQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestDelayQueue</span> testDelayQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestDelayQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        testDelayQueue<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"zs1"</span><span class="token punctuation">,</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        testDelayQueue<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"ls1"</span><span class="token punctuation">,</span><span class="token string">"李四"</span><span class="token punctuation">,</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        testDelayQueue<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"ww1"</span><span class="token punctuation">,</span><span class="token string">"王五"</span><span class="token punctuation">,</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            testDelayQueue<span class="token punctuation">.</span><span class="token function">loginOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>testDelayQueue<span class="token punctuation">.</span><span class="token function">getUserSUM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 登录
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
        delayQueue<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"用户：["</span><span class="token operator">+</span>user<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"] "</span><span class="token operator">+</span>user<span class="token punctuation">.</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" 已登录游戏"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 登出
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">loginOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">User</span> take <span class="token operator">=</span> delayQueue<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"用户：["</span><span class="token operator">+</span>take<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"] "</span><span class="token operator">+</span>take<span class="token punctuation">.</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" 时间到，登出游戏~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 获取人数
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getUserSUM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> delayQueue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Delayed</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token class-name">UserId</span><span class="token punctuation">;</span><span class="token comment">//用户ID</span>
    <span class="token class-name">String</span> <span class="token class-name">UserName</span><span class="token punctuation">;</span><span class="token comment">//用户名</span>
    <span class="token class-name">Long</span> endTime<span class="token punctuation">;</span><span class="token comment">//到期时间</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">UserId</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserId</span> <span class="token operator">=</span> userId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">UserName</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserName</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserName</span> <span class="token operator">=</span> userName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">getEndTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> endTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEndTime</span><span class="token punctuation">(</span><span class="token class-name">Long</span> endTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>endTime <span class="token operator">=</span> endTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">,</span> <span class="token class-name">String</span> userName<span class="token punctuation">,</span> <span class="token class-name">Long</span> endTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserId</span> <span class="token operator">=</span> userId<span class="token punctuation">;</span>
        <span class="token class-name">UserName</span> <span class="token operator">=</span> userName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>endTime <span class="token operator">=</span> endTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"User{"</span> <span class="token operator">+</span>
                <span class="token string">"UserId='"</span> <span class="token operator">+</span> <span class="token class-name">UserId</span> <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", UserName='"</span> <span class="token operator">+</span> <span class="token class-name">UserName</span> <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">"}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getDelay</span><span class="token punctuation">(</span><span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//到期时间小于系统时间，退出队列</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEndTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Delayed</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//按照到期时间按排序</span>
        <span class="token class-name">User</span> u <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">)</span><span class="token keyword">this</span><span class="token punctuation">.</span>endTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">)</span> u<span class="token punctuation">.</span>endTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双端队列deque" tabindex="-1"><a class="header-anchor" href="#双端队列deque" aria-hidden="true">#</a> 双端队列Deque</h2>
<p>双端队列用的比较少，再具备Queue的基础上同时拓展了对头尾的独立操作方法。<br>
由于Deque是个接口，同样我们使用他的实现类LinkedList</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test03</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是main方法，程序的入口</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
        双端队列：
        Deque&lt;E> extends Queue
        Queue一端放 一端取的基本方法  Deque是具备的
        在此基础上 又扩展了 一些 头尾操作（添加，删除，获取）的方法
         */</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
        d<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        d<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        d<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[A, B, C]</span>
        d<span class="token punctuation">.</span><span class="token function">offerFirst</span><span class="token punctuation">(</span><span class="token string">"D"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        d<span class="token punctuation">.</span><span class="token function">offerLast</span><span class="token punctuation">(</span><span class="token string">"E"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[D, A, B, C, E]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[A, B, C, E]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">pollLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


