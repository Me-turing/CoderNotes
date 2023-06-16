<template><div><h2 id="配置虚拟机软件" tabindex="-1"><a class="header-anchor" href="#配置虚拟机软件" aria-hidden="true">#</a> 配置虚拟机软件</h2>
<p>右键虚拟机 -&gt; 设置<br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409134733.png" alt="" loading="lazy"></p>
<p>检查开启NAT模式<br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409134754.png" alt="" loading="lazy"></p>
<p>设置虚拟机网络<br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409134908.png" alt="" loading="lazy"></p>
<p>管理员启动<br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409134944.png" alt="" loading="lazy"></p>
<p>配置VMnet8链接中的参数,注意子网IP<br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409135009.png" alt="" loading="lazy"></p>
<p>此处网关需要设置为与子网IP网段一致<br>
如子网IP为 <code v-pre>aaa.bbb.c.e</code>  网段IP应为: <code v-pre>aaa.bbb.c.f</code><br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409135154.png" alt="" loading="lazy"></p>
<p>配置DHCP<br>
此处起始IP应排除上述配置的子网IP与网关IP<br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409135410.png" alt="" loading="lazy"></p>
<p>保存配置</p>
<h2 id="配置虚拟机系统" tabindex="-1"><a class="header-anchor" href="#配置虚拟机系统" aria-hidden="true">#</a> 配置虚拟机系统</h2>
<p>配置虚拟机使用固定IP,方便我们后续在宿主机管理</p>
<p>此处IP地址需要填写上述DHCP池中区间IP<br>
子网掩码与上述虚拟机软件配置一致<br>
默认网关与上述虚拟机软件配置一致<br>
DNS随意填写常用DNA,推荐:<code v-pre>114.114.114.114</code> <code v-pre>8.8.8.8</code><br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409135713.png" alt="" loading="lazy"></p>
<h2 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果" aria-hidden="true">#</a> 实现效果</h2>
<p>宿主机直接链接到虚拟机中的环境配置<br>
<img src="@source/CoderNotes/01_JavaSE阶段/C_开发必备工具/05_VMware网络设置/assets/Pasted_image_20230409135924.png" alt="" loading="lazy"></p>
</div></template>


