<template><div><h2 id="问题1-创建person的对象-以后用new-person-创建-还是用反射创建" tabindex="-1"><a class="header-anchor" href="#问题1-创建person的对象-以后用new-person-创建-还是用反射创建" aria-hidden="true">#</a> 问题1：创建Person的对象，以后用new Person()创建,还是用反射创建？</h2>
<p>日常使用中我们还是正常的使用new创建对象,因为我们需要遵守封装的规则,保障代码的安全性. 使用反射创建对象不利于我们遵守开发准则</p>
<h2 id="问题2-反射是否破坏了面向对象的封装性" tabindex="-1"><a class="header-anchor" href="#问题2-反射是否破坏了面向对象的封装性" aria-hidden="true">#</a> 问题2：反射是否破坏了面向对象的封装性？</h2>
<p>从客观来讲使用反射的确有破坏封装的可能性,因为反射可以无视封装的特性,获取到全部的内容. 但是合理的运用反射,我们也是可以遵守该特性的,比如我们使用getMethods,而不是用getDeclaredMethods, 再比如我们使用反射的特性来优化我们的代码</p>
</div></template>


