import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as a}from"./app-71f45f98.js";const s="/CoderNotes/assets/image-20231010135538809-bd31f9b4.png",d="/CoderNotes/assets/image-20231010142909207-62be897b.png",l="/CoderNotes/assets/image-20231010143319262-f5ec77cf.png",r={},v=a('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>外观模式( Facade Pattern)，也叫门面模式, 外观模式的原始定义是：为子系统中的一组接口提供统一的接口。它定义了一个更高级别的接口，使子系统更易于使用。</p><p>外观模式，是一种通过为多个复杂的子系统提供一个一致的接口，而使这些子系统更加容易被访问的模式。该模式对外有一个统一接口，外部应用程序不用关心内部子系统的具体的细节，这样会大大降低应用程序的复杂度，提高了程序的可维护性。</p><p>门面模式有点类似之前讲到的迪米特法则（最少知识原则）和接口隔离原则：<strong>两个有交互的系统，只暴露有限的必要的接口</strong></p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>门面类充当了系统中的&quot;服务员&quot;,它为多个业务类的调用提供了一个统一的入口,简化了类与类之间的交互,如果没有门面类,每个客户类需要和多个子系统之间进行复杂的交互,系统的耦合度将会很大.</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>外观（Facade）模式包含以下主要角色：</p><ul><li>外观（Facade）角色：为多个子系统对外提供一个共同的接口。</li></ul><blockquote><p>外观角色中可以知道多个相关的子系统中的功能和责任.在正常情况下,它将所有从客户端发来的请求委派到相应的子系统,传递给相应的子系统对象处理</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Facade {
    private SubSystemA obj1 = new SubSystemA();
    private SubSystemB obj2 = new SubSystemB();
    private SubSystemC obj3 = new SubSystemC();
    public void method(){
        obj1.methodA();
        obj2.methodB();
        obj3.methodC();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>子系统（Sub System）角色：实现系统的部分功能，客户可以通过外观角色访问它。</li></ul><blockquote><p>每一个子系统可以是一个类也可以是多个类的集合.每一个子系统都可以被客户端直接调用,或者被外观角色调用.子系统并不 | 知道外观的存在,对于子系统而言,外观角色仅仅是另一个客户端而已.</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class SubSystemA {
    public void methodA(){
        //业务代码
    }
}

public class SubSystemB {
    public void methodB(){
        //业务代码
    }
}

public class SubSystemC {
    public void methodC(){
        //业务代码
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Client {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.method();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>接下来我们将模拟智能家电的控制 : 通过只能终端统一对智能模块进行管理</p><h3 id="uml类图" tabindex="-1"><a class="header-anchor" href="#uml类图" aria-hidden="true">#</a> UML类图</h3><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="子系统-sub-system-角色" tabindex="-1"><a class="header-anchor" href="#子系统-sub-system-角色" aria-hidden="true">#</a> 子系统（Sub System）角色</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Light {
    public void on(){System.out.println(&quot;打开灯......&quot;);}
    public void off(){System.out.println(&quot;关闭灯......&quot;);}
}

public class TV {
    public void on(){System.out.println(&quot;打开电视......&quot;);}
    public void off(){System.out.println(&quot;关闭电视......&quot;);}
}

public class AirCondition {
    public void on(){System.out.println(&quot;打开空调......&quot;);}
    public void off(){System.out.println(&quot;关闭空调......&quot;);}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外观-facade-角色" tabindex="-1"><a class="header-anchor" href="#外观-facade-角色" aria-hidden="true">#</a> 外观（Facade）角色</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class SmartAppliancesFacade {
    private Light light;
    private TV tv;
    private AirCondition airCondition;
    public SmartAppliancesFacade() {
        this.light =new Light();
        this.tv = new TV();
        this.airCondition = new AirCondition();
    }
    public void say(String message){
        if(message.contains(&quot;打开&quot;)){
            on();
        }else if(message.contains(&quot;关闭&quot;)){
            off();
        }else{
            System.out.println(&quot;对不起没有听清楚您说什么! 请重新再说一遍&quot;);
        }
    }
    //起床后 语音开启 电灯 电视 空调
    private void on() {
        System.out.println(&quot;起床了!&quot;);
        light.on();
        tv.on();
        airCondition.on();
    }
    //睡觉前 语音关闭 电灯 电视 空调
    private void off() {
        System.out.println(&quot;睡觉了!&quot;);
        light.off();
        tv.off();
        airCondition.off();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Client {
    public static void main(String[] args) {
        //创建外观对象
        SmartAppliancesFacade facade = new SmartAppliancesFacade();
        facade.say(&quot;打开家电&quot;);
        facade.say(&quot;关闭家电&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ol><li>它<strong>对客户端屏蔽了子系统组件,减少了客户端所需要处理的对象数目,并使子系统使用起来更加的容易</strong>.通过引入外观模式,客户端代码将变得很简单,与之关联的对象也很少.</li><li>它<strong>实现了子系统与客户端之间的松耦合关系</strong>,这使得子系统的变化不会影响到调用它的客户端,只需要调整外观类即可</li><li>一个子系统的修改<strong>对其他子系统没有任何影响</strong>,而子系统内部变化也不会影响到外观对象.</li></ol><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ol><li><strong>不能很好的控制客户端直接使用子系统类</strong>,如果客户端访问子系统类做太多的限制则减少了可变性和灵活性.</li><li>如果设计不当,增加新的子系统可能需要修改外观类的源代码,<strong>违背了开闭原则</strong>.</li></ol><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3><ul><li><strong>简化复杂系统</strong> : 比如，当我们开发了一整套的电商系统后（包括订单、商品、支付、会员等系统），我们不能让用户依次使用这些系统后才能完成商品的购买，而是需要一个门户网站或手机 App 这样简化过的门面系统来提供在线的购物功能</li><li><strong>减少客户端处理的系统数量</strong> : 比如，在 Web 应用中，系统与系统之间的调用可能需要处理 Database 数据库、Model 业务对象等，其中使用 Database 对象就需要处理打开数据库、关闭连接等操作，然后转换为 Model 业务对象，实在是太麻烦了。如果能够创建一个数据库使用的门面（其实就是常说的 DAO 层），那么实现以上过程将变得容易很多</li><li><strong>让一个系统（或对象）为多个系统（或对象）工作</strong> : 比如，线程池 ThreadPool 就是一个门面模式，它为系统提供了统一的线程对象的创建、销毁、使用等</li><li><strong>联合更多的系统来扩展原有系统</strong> : 当我们的电商系统中需要一些新功能时，比如，人脸识别，我们可以不需要自行研发，而是购买别家公司的系统来提供服务，这时通过门面系统就能方便快速地进行扩展</li><li><strong>作为一个简洁的中间层</strong> : 门面模式还可以用来隐藏或者封装系统中的分层结构，同时作为一个简化的中间层来使用。比如，在秒杀、库存、钱包等场景中，我们需要共享有状态的数据时（如商品库存、账户里的钱），在不改变原有系统的前提下，通过一个中间的共享层（如将秒杀活动的商品库存总数统一放在 Redis 里），就能统一进行各种服务（如，秒杀详情页、商品详情页、购物车等）的调用。</li></ul>`,34),c=[v];function t(u,o){return e(),n("div",null,c)}const p=i(r,[["render",t],["__file","09_外观模式.html.vue"]]);export{p as default};
