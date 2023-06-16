import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as a}from"./app-c47b8d81.js";const s={},l=a(`<h2 id="一般情况下的生命周期" tabindex="-1"><a class="header-anchor" href="#一般情况下的生命周期" aria-hidden="true">#</a> 一般情况下的生命周期</h2><h3 id="生命周期阶段" tabindex="-1"><a class="header-anchor" href="#生命周期阶段" aria-hidden="true">#</a> 生命周期阶段</h3><ol><li>通过构造器创建bean实例 -&gt; 执行构造器</li><li>为bean属性赋值 -&gt; 执行set方法</li><li>初始化bean -&gt; 调用bean的初始化方法,需要<code>init-method</code>参数配置指定调用的方法</li><li>bean的获取 -&gt; 容器对象 getBean方法</li><li>容器关闭销毁bean -&gt; 调用销毁方法,需要<code>destroy-method</code>参数配置指定调用的方法</li></ol><h3 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h3><p>user.java 实体类</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data  
@ToString  
public class User {  
private Integer userid;  
private String username;  
private String password;  
  
public User() {  
System.out.println(&quot;第一步:User构造&quot;);  
}  
  
public void setUsername(String username) {  
System.out.println(&quot;第二步:User属性赋值&quot;);  
this.username = username;  
}  
  
public void initUser(){  
System.out.println(&quot;第三步:User初始化&quot;);  
}  
  
public void destoryUser(){  
System.out.println(&quot;第五步:User销毁&quot;);  
}  
  
  
public User(Integer userid, String username, String password) {  
this.userid = userid;  
this.username = username;  
this.password = password;  
}  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applicationContext.xml</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;bean id=&quot;user&quot; class=&quot;com.meturing.pojo.User&quot; init-method=&quot;initUser&quot; destroy-method=&quot;destoryUser&quot;&gt;
	&lt;property name=&quot;username&quot; value=&quot;xiaoqiang&quot;&gt;&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test
public void test01(){
	ClassPathXmlApplicationContext classPathXmlApplicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1_1.xml&quot;);
	User user = classPathXmlApplicationContext.getBean(&quot;user&quot;, User.class);
	System.out.println(&quot;使用User,第四步:&quot; );
	System.out.println(user);
	classPathXmlApplicationContext.close();//手动关闭容器,触发销毁方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-Txt line-numbers-mode" data-ext="Txt"><pre class="language-Txt"><code>第一步:User构造
第二步:User属性赋值
第三步:User初始化
使用User,第四步:
User(userid=null, username=xiaoqiang, password=null)
第五步:User销毁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bean后置处理器引入" tabindex="-1"><a class="header-anchor" href="#bean后置处理器引入" aria-hidden="true">#</a> Bean后置处理器引入</h2><p>如果我们想在Spring容器中完成bean实例化、配置以及其他初始化方法前后要添加一些自己逻辑处理。我们需要定义一个或多个BeanPostProcessor接口实现类，然后注册到Spring IOC容器中。</p><ol><li>接口中的两个方法都要将传入的bean返回，而不能返回null，如果返回的是null那么我们通过getBean方法将得不到目标</li><li>ApplicationContext会自动检测在配置文件中实现了BeanPostProcessor接口的所有bean，并把它们注册为后置处理器，然后在容器创建bean的适当时候调用它，因此部署一个后置处理器同部署其他的bean并没有什么区别。而使用BeanFactory实现的时候，bean 后置处理器必须通过代码显式地去注册，在IOC容器继承体系中的ConfigurableBeanFactory接口中定义了注册方法</li></ol><h3 id="生命周期阶段-1" tabindex="-1"><a class="header-anchor" href="#生命周期阶段-1" aria-hidden="true">#</a> 生命周期阶段</h3><ol><li>通过构造器创建bean实例 -&gt; 执行构造器</li><li>为bean属性赋值 -&gt; 执行set方法</li><li><strong>把bean实例传递给bean的后置处理器的方法</strong></li><li>初始化bean -&gt; 调用bean的初始化方法,需要<code>init-method</code>参数配置指定调用的方法</li><li><strong>把bean实例传递给bean的后置处理器的方法</strong></li><li>bean的获取 -&gt; 容器对象 getBean方法</li><li>容器关闭销毁bean -&gt; 调用销毁方法,需要<code>destroy-method</code>参数配置指定调用的方法</li></ol><h3 id="相关代码-1" tabindex="-1"><a class="header-anchor" href="#相关代码-1" aria-hidden="true">#</a> 相关代码</h3><p>创建后置处理器: 实现 BeanPostProcesser 重写两个方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MyBeanProcesser implements BeanPostProcessor {
    /**
     * 在初始化过程之前
     *
     * @param bean     实例化的Bean
     * @param beanName bean的ID
     * @return {@link Object }
     * @author meturing
     * @date 2023/04/28
     */
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        System.out.println(&quot;id为:[&quot;+beanName+&quot;]的Bean初始化之前!&quot;);
        return bean;//必须给传进来的bean进行返回
    }

    /**
     * 发布过程初始化后
     *
     * @param bean     实例化的Bean
     * @param beanName bean的ID
     * @return {@link Object }
     * @author meturing
     * @date 2023/04/28
     */
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        System.out.println(&quot;id为:[&quot;+beanName+&quot;]的Bean初始化之后!&quot;);
        return bean;//必须给传进来的bean进行返回
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applicationContext.xml 并将后置处理器添加到容器中</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>&lt;bean id=&quot;user&quot; class=&quot;com.meturing.pojo.User&quot; init-method=&quot;initUser&quot; destroy-method=&quot;destoryUser&quot;&gt;
	&lt;property name=&quot;username&quot; value=&quot;xiaoqiang&quot;&gt;&lt;/property&gt;
&lt;/bean&gt;
&lt;!--  将bean的处理器注册进来  --&gt;
&lt;bean id=&quot;myBeanProcesser&quot; class=&quot;com.meturing.beanProcesser.MyBeanProcesser&quot;&gt;&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test
public void test02(){
	ClassPathXmlApplicationContext classPathXmlApplicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext1_2.xml&quot;);
	User user = classPathXmlApplicationContext.getBean(&quot;user&quot;, User.class);
	System.out.println(&quot;使用User,第四步:&quot; );
	System.out.println(user);
	classPathXmlApplicationContext.close();//手动关闭容器,触发销毁方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),t=[l];function d(r,u){return n(),i("div",null,t)}const c=e(s,[["render",d],["__file","Bean的生命周期.html.vue"]]);export{c as default};
