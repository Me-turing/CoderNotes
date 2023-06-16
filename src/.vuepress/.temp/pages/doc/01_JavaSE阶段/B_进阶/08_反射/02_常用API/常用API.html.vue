<template><div><h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2>
<h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>java.lang.Class#Constructor&lt;?&gt;[] getConstructors()</td>
<td>获取构造器列表(仅限Public修饰)</td>
</tr>
<tr>
<td>java.lang.Class#Constructor&lt;?&gt;[] getDeclaredConstructors()</td>
<td>获取构造器列表(全部)</td>
</tr>
<tr>
<td>java.lang.Class#Constructor&lt;T&gt; getConstructor(Class&lt;?&gt;... parameterTypes)</td>
<td>获取指定的构造器(仅限Public修饰)</td>
</tr>
<tr>
<td>java.lang.Class#Constructor&lt;T&gt; getDeclaredConstructor(Class&lt;?&gt;... parameterTypes)</td>
<td>获取指定的构造器(全部)</td>
</tr>
<tr>
<td>java.lang.Class#T newInstance(Object ... initargs)</td>
<td>初始化对象</td>
</tr>
</tbody>
</table>
<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 获取构造器和创建对象
 * 字节码对象.getConstructors() -> 获取构造器列表(仅限Public修饰)
 * 字节码对象.getDeclaredConstructors() -> 获取构造器列表(全部)
 * 字节码对象.getConstructor() -> 获取指定的无参构造器(仅限Public修饰)
 * 字节码对象.getConstructor(Class,Class,.....) -> 获取带参的构造器,参数传入构造器的参数类型.class(仅限Public修饰)
 * 字节码对象.getDeclaredConstructor(Class,.....) -> 获取编译后的指定构造器,参数传入构造器的参数类型.class(全部)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchMethodException</span><span class="token punctuation">,</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> studentClass <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span><span class="token comment">//获取到字节码对象</span>
        
        <span class="token comment">//通过字节码信息可以获取构造器：</span>
        <span class="token comment">//getConstructors只能获取当前运行时类的被public修饰的构造器</span>
        <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> constructors <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>constructors<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c<span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//getDeclaredConstructors:获取运行时类的全部修饰符的构造器</span>
        <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredConstructors <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getDeclaredConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>declaredConstructors<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c<span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取指定的构造器：</span>
        <span class="token comment">//得到空构造器(仅限Public修饰)</span>
        <span class="token class-name">Constructor</span> constructor <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到两个参数的构造器(仅限Public修饰)</span>
        <span class="token class-name">Constructor</span> constructor1 <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>constructor1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//得到一个参数的构造器(全部)</span>
        <span class="token class-name">Constructor</span> declaredConstructor <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>declaredConstructor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//有了构造器以后我就可以创建对象：</span>
        <span class="token class-name">Object</span> o <span class="token operator">=</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> o1 <span class="token operator">=</span> constructor1<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<h3 id="api-1" tabindex="-1"><a class="header-anchor" href="#api-1" aria-hidden="true">#</a> API</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>java.lang.Class#Field[] getFields()</td>
<td>字节码对象.getFields() -&gt; 获取属性列表(仅限Public修饰)</td>
</tr>
<tr>
<td>java.lang.Class#Field[] getDeclaredFields()</td>
<td>字节码对象.getDeclaredFields() -&gt; 获取属性列表(全部)</td>
</tr>
<tr>
<td>java.lang.Class#Field getField(String name)</td>
<td>获取指定的属性(仅限Public修饰)</td>
</tr>
<tr>
<td>java.lang.Class#Field getDeclaredField(String name)</td>
<td>获取指定的属性(全部)</td>
</tr>
<tr>
<td>java.lang.reflect.Field#int getModifiers()</td>
<td>属性对象.getModifiers() -&gt; 获取属性的修饰符
Modifier.toString(int arg) : 将上面获取到的码值转换成最终的值</td>
</tr>
<tr>
<td>java.lang.reflect.Field#Class&lt;?&gt; getType()</td>
<td>属性对象.getType() -&gt; 获取属性的类型
java.lang.Class#getName.getName() 获取对应的名字</td>
</tr>
<tr>
<td>java.lang.reflect.Field#String getName()</td>
<td>属性对象.getName() -&gt; 获取属性名字</td>
</tr>
<tr>
<td>java.lang.reflect.Field#void set(Object obj, Object value)</td>
<td>属性对象.set(对象,值) -&gt; 设置属性的值,但是要传入对象</td>
</tr>
</tbody>
</table>
<h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 获取属性和对属性赋值
 * 字节码对象.getFields() -> 获取属性列表(仅限Public修饰)
 * 字节码对象.getDeclaredFields() -> 获取属性列表(全部)
 * 字节码对象.getField(str) -> 获取指定的属性(仅限Public修饰)
 * 字节码对象.getDeclaredField(str) -> 获取指定的属性(全部)
 * 属性对象.getModifiers() -> 获取属性的修饰符
 * 属性对象.getType() -> 获取属性的类型
 * 属性对象.getName() -> 获取属性名字
 * 属性对象.set(对象,值) -> 设置属性的值,但是要传入对象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchFieldException</span><span class="token punctuation">,</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取字节码对象</span>
        <span class="token class-name">Class</span> studentClass <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token comment">//获取所有的属性(Public)</span>
        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c<span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取全部的属性(不限制修饰符)</span>
        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredFields <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>declaredFields<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c<span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取指定的属性(Public)</span>
        <span class="token class-name">Field</span> score <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"score"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取指定的属性(全部)</span>
        <span class="token class-name">Field</span> sno <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"sno"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sno<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//获取属性的结构</span>
        <span class="token comment">//获取属性的修饰符</span>
        <span class="token keyword">int</span> modifiers <span class="token operator">=</span> sno<span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>modifiers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取属性的类型</span>
        <span class="token class-name">Class</span> type <span class="token operator">=</span> sno<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取属性的名字</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> sno<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//给属性设置值:必须要有对象</span>
        <span class="token class-name">Field</span> score1 <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"score"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> o <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        score1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<h3 id="api-2" tabindex="-1"><a class="header-anchor" href="#api-2" aria-hidden="true">#</a> API</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>java.lang.Class#Method[] getMethods()</td>
<td>获取全部的方法(仅限Public修饰,包含父类)</td>
</tr>
<tr>
<td>java.lang.Class#Method[] getDeclaredMethods()</td>
<td>获取全部的方法(全部修饰符,仅限当前类)</td>
</tr>
<tr>
<td>java.lang.Class#Method getMethod(String name, Class&lt;?&gt;... parameterTypes)</td>
<td>获取指定的方法(仅限Public修饰,包含父类)</td>
</tr>
<tr>
<td>java.lang.Class#Method getDeclaredMethod(String name, Class&lt;?&gt;... parameterTypes)</td>
<td>获取指定的方法(全部修饰符,仅限当前类)</td>
</tr>
<tr>
<td>java.lang.reflect.Method#int getModifiers()</td>
<td>属性对象.getModifiers() -&gt; 获取属性的修饰符
Modifier.toString(int arg) : 将上面获取到的码值转换成最终的值</td>
</tr>
<tr>
<td>java.lang.reflect.Method#Class&lt;?&gt; getReturnType()</td>
<td>获取方法返回类型</td>
</tr>
<tr>
<td>java.lang.reflect.Method#String getName()</td>
<td>获取方法名</td>
</tr>
<tr>
<td>java.lang.reflect.Method#Parameter[] getParameters()</td>
<td>获取方法参数列表</td>
</tr>
<tr>
<td>java.lang.reflect.Method#Class&lt;?&gt;[] getParameterTypes()</td>
<td>获取方法参数类型列表</td>
</tr>
<tr>
<td>java.lang.reflect.Method#Class&lt;?&gt;[] getExceptionTypes()</td>
<td>获取方法异常类型</td>
</tr>
<tr>
<td>java.lang.reflect.Method#Annotation[] getAnnotations()</td>
<td>获取方法注解</td>
</tr>
<tr>
<td>java.lang.reflect.Method#Object invoke(Object obj, Object... args)</td>
<td>运行指定方法</td>
</tr>
</tbody>
</table>
<h3 id="案例-2" tabindex="-1"><a class="header-anchor" href="#案例-2" aria-hidden="true">#</a> 案例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 获取方法和调用方法
 * 字节对象.getMethods() -> 获取全部的方法(仅限Public修饰,包含父类)
 * 字节对象.getDeclaredMethods() -> 获取全部的方法(全部修饰符,仅限当前类)
 * 字节对象.getMethod(str) -> 获取指定的方法,参数为方法名(仅限Public修饰,包含父类)
 * 字节对象.getMethod(str,str,...,str) -> 获取指定的方法,参数为方法名,方法参数类型(仅限Public修饰,包含父类)
 * 字节对象.getDeclaredMethod(str) -> 获取指定的方法,参数为方法名(全部修饰符,仅限当前类)
 * 字节对象.getDeclaredMethod(str,str,...,str) -> 获取指定的方法,参数为方法名,方法参数类型(全部修饰符,仅限当前类)
 *
 * 方法对象.getModifiers() -> 获取方法修饰符
 * 方法对象.getReturnType() -> 获取方法返回类型
 * 方法对象.getName() -> 获取方法名
 * 方法对象.getParameters() -> 获取方法参数列表
 * 方法对象.getParameterTypes() -> 获取方法参数类型列表
 * 方法对象.getExceptionTypes() -> 获取方法异常类型
 * 方法对象.getAnnotations() -> 获取方法注解
 *
 * 方法对象.invoke(object) -> 执行无参方法
 * 方法对象.invoke(object,str,...,str) -> 执行带参方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo03</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchMethodException</span><span class="token punctuation">,</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span><span class="token punctuation">,</span> <span class="token class-name">InvocationTargetException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> studentClass <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        
        <span class="token comment">//获取运行时类的方法还有所有父类中的方法(仅限Public修饰,包含父类)</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>methods<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取运行时类中的所有方法(全部,只有当前类)</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredMethods <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>declaredMethods<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取指定的方法</span>
        <span class="token class-name">Method</span> showInfo1 <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"showInfo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>showInfo1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> showInfo2 <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"showInfo"</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>showInfo2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> work <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"work"</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>work<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"------------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//获取方法的结构</span>
         <span class="token comment">/*
        @注解
        修饰符 返回值类型  方法名(参数列表) throws XXXXX{}
         */</span>
        <span class="token comment">//获取名字</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>work<span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取修饰符</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>work<span class="token punctuation">.</span><span class="token function">getReturnType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取返回类型</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>work<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取方法名</span>
        <span class="token class-name">Parameter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> parameters <span class="token operator">=</span> showInfo2<span class="token punctuation">.</span><span class="token function">getParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取参数列表</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> parameterTypes <span class="token operator">=</span> work<span class="token punctuation">.</span><span class="token function">getParameterTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取参数类型</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>parameterTypes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">Method</span> myMethod <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"myMethod"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> exceptionTypes <span class="token operator">=</span> myMethod<span class="token punctuation">.</span><span class="token function">getExceptionTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取异常</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>exceptionTypes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotations <span class="token operator">=</span> myMethod<span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获得注解</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>annotations<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//调用方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>showInfo2<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>student<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2>
<h3 id="api-3" tabindex="-1"><a class="header-anchor" href="#api-3" aria-hidden="true">#</a> API</h3>
<table>
<thead>
<tr>
<th>API</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>java.lang.Class#Class&lt;?&gt;[] getInterfaces()</td>
<td>获取接口</td>
</tr>
<tr>
<td>java.lang.Class#native Class&lt;? super T&gt; getSuperclass()</td>
<td>获取父类的字节码对象</td>
</tr>
<tr>
<td>java.lang.Class#Package getPackage()</td>
<td>当前类所在的包</td>
</tr>
<tr>
<td>java.lang.Class#Annotation[] getAnnotations()</td>
<td>当前类的注解</td>
</tr>
</tbody>
</table>
<h3 id="案例-3" tabindex="-1"><a class="header-anchor" href="#案例-3" aria-hidden="true">#</a> 案例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 获取类的接口，所在包，注解
 * 字节码对象.getInterfaces() -> 获取接口
 * 字节码对象.getSuperclass() -> 获取父类的字节码对象
 * 字节码对象.getPackage() -> 当前类所在的包
 * 字节码对象.getPackage().getName() -> 当前类所在的包名
 * 字节码对象.getAnnotations() -> 当前类的注解
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo04</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> studentClass <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        
        <span class="token comment">//获取当前类的接口</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>interfaces<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//获取父类的接口</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">Student</span><span class="token punctuation">></span></span> superclass <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces1 <span class="token operator">=</span> superclass<span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>interfaces1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//获取所在的包</span>
        <span class="token class-name">Package</span> aPackage <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getPackage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aPackage<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aPackage<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//获取类上的注解</span>
        <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotations <span class="token operator">=</span> studentClass<span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>annotations<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


