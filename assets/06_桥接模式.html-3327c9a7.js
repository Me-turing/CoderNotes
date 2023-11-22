import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as l}from"./app-71f45f98.js";const s="/CoderNotes/assets/image-20231009110417078-8b533aaf.png",a="/CoderNotes/assets/image-20231009113521686-bad032c3.png",d="/CoderNotes/assets/image-20231009114047543-165dbe8a.png",r="/CoderNotes/assets/image-20231009115225946-b04e9fd8.png",u="/CoderNotes/assets/image-20231009115137437-2acbee84.png",t="/CoderNotes/assets/image-20231009115759155-9b0e76d4.png",v="/CoderNotes/assets/image-20231009120041041-d6486f15.png",o={},c=l('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>桥接模式 (bridge pattern) 的定义是：将抽象部分与它的实现部分分离，使它们都可以独立地变化。</p><blockquote><p>桥接模式用一种巧妙的方式处理多层继承存在的问题,用抽象关联来取代传统的多层继承,将类之间的静态继承关系转变为动态的组合关系,使得系统更加灵活,并易于扩展,有效的控制了系统中类的个数 (避免了继承层次的指数级爆炸).</p></blockquote><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><h3 id="原理结构" tabindex="-1"><a class="header-anchor" href="#原理结构" aria-hidden="true">#</a> 原理结构</h3><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>桥接（Bridge）模式包含以下主要角色：</p><ul><li>抽象化（Abstraction）角色 ：主要负责定义出该角色的行为 ,并包含一个对实现化对象的引用。</li><li>扩展抽象化（RefinedAbstraction）角色 ：是抽象化角色的子类，实现父类中的业务方法，并通过组合关系调用实现化角色中的业务方法。</li><li>实现化（Implementor）角色 ：定义实现化角色的接口，包含角色必须的行为和属性,并供扩展抽象化角色调用。</li><li>具体实现化（Concrete Implementor）角色 ：给出实现化角色接口的具体实现。</li></ul><p><strong>桥接模式原理的核心是: 首先有要识别出一个类所具有的的两个独立变化维度,将它们设计为两个独立的继承等级结构,为两个维度都提供抽象层,并建立抽象耦合.总结一句话就是: 抽象角色引用实现角色</strong></p><h3 id="简单的案例" tabindex="-1"><a class="header-anchor" href="#简单的案例" aria-hidden="true">#</a> 简单的案例</h3><p>我们模拟一个毛笔画图的功能,有<code>大/中/小</code>三种型号的毛笔,需要<code>红/绿/蓝</code>不同的颜色画图</p><h4 id="传统模式" tabindex="-1"><a class="header-anchor" href="#传统模式" aria-hidden="true">#</a> 传统模式</h4><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们针对于不同的毛笔不同的颜色 创建了不同的业务类,这样<strong>业务非常臃肿,拓展十分麻烦</strong></p><p>比如下面我们拓展一个颜色和一个工具</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="使用桥接" tabindex="-1"><a class="header-anchor" href="#使用桥接" aria-hidden="true">#</a> 使用桥接</h4><p>对此我们使用桥接模式,将工具与颜色抽取成两个维度</p><ul><li>型号是其固有的维度,所以抽象出一个毛笔类,而将各种型号的毛笔作为其子类,也就是下图的右侧抽象部分内容.</li><li>颜色是毛笔的另一个维度, 它与毛笔之间存在一种设置的关系,因此可以提供一个抽象的颜色接口,将具体颜色作为该接口的子类.</li></ul><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface Color{ getColor(); }
public class Red implements Color { public String getColor(){return &quot;Red&quot;; } }
public class Green implements Color { public String getColor(){return &quot;Green&quot;; } }
public class Blue implements Color { public String getColor(){return &quot;Blue&quot;; } }


public abstract class Brush {
	protected Color color;
	pubilc Brush (Color color){this.color = color;}
	public void draw();
}

public class BigBrush extends Brush{
	public BigBrush(Color color){super(color);}
	public void draw(){
		System.out.println(&quot;大号的笔开始绘画....&quot;)
		System.out.println(&quot;当前颜色是:&quot; + color.getColor());
	}
}

public class MediumBrush extends Brush{
	public MediumBrush(Color color){super(color);}
	public void draw(){
		System.out.println(&quot;中号的笔开始绘画....&quot;)
		System.out.println(&quot;当前颜色是:&quot; + color.getColor());
	}
}

public class SmallBrush extends Brush{
	public SmallBrush(Color color){super(color);}
	public void draw(){
		System.out.println(&quot;小号的笔开始绘画....&quot;)
		System.out.println(&quot;当前颜色是:&quot; + color.getColor());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们在使用时,就可以根据不同的实现类实现对应的业务了</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//使用大号笔,刷红色
BigBrush bigBrushByRed = new BigBrush(new Red());
bigBrushByRed.draw();

//使用中号笔,刷绿色
MediumBrush mediumBrushByGreen = new MediumBrush(new Green());
mediumBrushByGreen.draw();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我们后面的维护中,如果出现了新的颜色(功能),我们只需要拓展接口实现. 如果出现了新的毛笔(业务),我们只需要拓展抽象类实现.</p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>模拟不同的支付工具对应不同的支付模式,比如微信和支付宝都可以完成支付操作,而支付操作又可以有扫码支付、密码支付、人脸支付等,那么关于支付操作其实就有两个维度, 包括:<strong>支付渠道和支付方式</strong></p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="传统模式开发" tabindex="-1"><a class="header-anchor" href="#传统模式开发" aria-hidden="true">#</a> 传统模式开发</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class PayController {
    /**
     * @param uId   用户id
     * @param tradeId 交易流水号
     * @param amount    交易金额
     * @param channelType 渠道类型 1 微信, 2 支付宝
     * @param modeType    支付模式 1 密码,2 人脸,3 指纹
     * @return: boolean
     */
    public boolean doPay(String uId, String tradeId, BigDecimal amount,int channelType,int modeType){
        //微信支付
        if(1 == channelType){
            System.out.println(&quot;微信渠道支付划账开始......&quot;);
            if(1 == modeType){
                System.out.println(&quot;密码支付&quot;);
            }if(2 == modeType){
                System.out.println(&quot;人脸支付&quot;);
            }if(3 == modeType){
                System.out.println(&quot;指纹支付&quot;);
            }
        }
        //支付宝支付
        if(2 == channelType){
            System.out.println(&quot;支付宝渠道支付划账开始......&quot;);
            if(1 == modeType){
                System.out.println(&quot;密码支付&quot;);
            }if(2 == modeType){
                System.out.println(&quot;人脸支付&quot;);
            }if(3 == modeType){
                System.out.println(&quot;指纹支付&quot;);
            }
        }
        return true;
    }
}

//测试
public class Test_Pay {
    public static void main(String[] args) {
        PayController payController = new PayController();
        System.out.println(&quot;测试: 微信支付、人脸支付方式&quot;);
        payController.doPay(&quot;weixin_001&quot;,&quot;1000112333333&quot;,new BigDecimal(100),1,2);
        System.out.println(&quot;\\n测试: 支付宝支付、指纹支付方式&quot;);
        payController.doPay(&quot;hifubao_002&quot;,&quot;1000112334567&quot;,new BigDecimal(100),2,3);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用桥接模式" tabindex="-1"><a class="header-anchor" href="#使用桥接模式" aria-hidden="true">#</a> 使用桥接模式</h3><p>对现有需求可以抽取成两个维度:</p><ol><li>支付渠道 : 支付宝 / 微信</li><li>支付方式: 人脸识别 / 指纹识别 / 密码验证</li></ol><p>所以我们可以:</p><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="支付接口-实现化角色" tabindex="-1"><a class="header-anchor" href="#支付接口-实现化角色" aria-hidden="true">#</a> 支付接口(实现化角色)</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IPayMode {
    //安全校验功能: 对各种支付模式进行风控校验
    boolean security(String uId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="支付方式-具体实现化角色" tabindex="-1"><a class="header-anchor" href="#支付方式-具体实现化角色" aria-hidden="true">#</a> 支付方式 (具体实现化角色)</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//指纹支付及风控校验
public class PayFingerprintMode implements IPayMode {
    @Override
    public boolean security(String uId) {
        System.out.println(&quot;指纹支付,风控校验-指纹信息&quot;);
        return true;
    }
}

//刷脸支付及风控校验
public class PayFaceMode implements IPayMode {
    @Override
    public boolean security(String uId) {
        System.out.println(&quot;人脸支付,风控校验-脸部识别&quot;);
        return true;
    }
}
//密码支付及风控校验
public class PayCypher implements IPayMode {
    @Override
    public boolean security(String uId) {
        System.out.println(&quot;密码支付,风控校验-环境安全&quot;);
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="支付渠道抽象-抽象化角色" tabindex="-1"><a class="header-anchor" href="#支付渠道抽象-抽象化角色" aria-hidden="true">#</a> 支付渠道抽象(抽象化角色)</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public abstract class Pay {
    //桥接对象
    protected IPayMode payMode;
    public Pay(IPayMode payMode) {
        this.payMode = payMode;
    }
    //划账功能
    public abstract String transfer(String uId, String tradeId, BigDecimal amount);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="支付渠道实现-扩展抽象化角色" tabindex="-1"><a class="header-anchor" href="#支付渠道实现-扩展抽象化角色" aria-hidden="true">#</a> 支付渠道实现(扩展抽象化角色)</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * 支付渠道-微信划账
 * @author spikeCong
 * @date 2022/9/26
 **/
public class WxPay extends Pay {
    public WxPay(IPayMode payMode) {
        super(payMode);
    }
    @Override
    public String transfer(String uId, String tradeId, BigDecimal amount) {
        System.out.println(&quot;微信渠道支付划账开始......&quot;);
        boolean security = payMode.security(uId);
        System.out.println(&quot;微信渠道支付风险校验: &quot; + uId + &quot; , &quot; + tradeId +&quot; , &quot; + security);
        if(!security){
            System.out.println(&quot;微信渠道支付划账失败!&quot;);
            return &quot;500&quot;;
        }
        System.out.println(&quot;微信渠道划账成功! 金额: &quot;+ amount);
        return &quot;200&quot;;
    }
}

/**
 * 支付渠道-支付宝划账
 * @author spikeCong
 * @date 2022/9/26
 **/
public class ZfbPay extends Pay {
    public ZfbPay(IPayMode payMode) {
        super(payMode);
    }
    @Override
    public String transfer(String uId, String tradeId, BigDecimal amount) {
        System.out.println(&quot;支付宝渠道支付划账开始......&quot;);
        boolean security = payMode.security(uId);
        System.out.println(&quot;支付宝渠道支付风险校验: &quot; + uId + &quot; , &quot; + tradeId +&quot; , &quot; + security);
        if(!security){
            System.out.println(&quot;支付宝渠道支付划账失败!&quot;);
            return &quot;500&quot;;
        }
        System.out.println(&quot;支付宝渠道划账成功! 金额: &quot;+ amount);
        return &quot;200&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Test
public void test02() {
    System.out.println(&quot;测试场景1: 微信支付、人脸方式.&quot;);
    Pay wxpay = new WxPay(new PayFaceMode());
    wxpay.transfer(&quot;wx_00100100&quot;,&quot;10001900&quot;,new BigDecimal(100));
    System.out.println(&quot;==========&quot;);
    System.out.println(&quot;测试场景2: 支付宝支付、指纹方式&quot;);
    Pay zfbPay = new ZfbPay(new PayFingerprintMode());
    zfbPay.transfer(&quot;jlu1234567&quot;,&quot;567689999999&quot;,new BigDecimal(200));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码重构完成后,结构更加清晰整洁, 可读性和易用性更高,外部的使用接口的用户不需要关心具体实现.桥接模式满足了单一职责原则和开闭原则,让每一部分都更加清晰并且易扩展.</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ol><li>分离抽象接口及其实现部分.桥接模式使用&quot;对象间的关联关系&quot;<strong>解耦</strong>了抽象和实现之间固有的绑定关系,使得抽象和实现可以沿着各自的维度来变化.</li><li>在很多情况下,桥接模式可以<strong>取代多层继承方案</strong>.多层继承方案违背了单一职责原则,复用性差,类的个数多.桥接模式很好的解决了这些问题.</li><li>桥接模式<strong>提高了系统的扩展性</strong>,在两个变化维度中任意扩展一个维度都不需要修改原有系统,符合开闭原则.</li></ol><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ol><li>桥接模式的使用会<strong>增加系统的理解和设计难度</strong>,由于关联关系建立在抽象层,要求开发者一开始就要对抽象层进行设计和编程</li><li>桥接模式要求正确识别出系统中的两个独立变化的维度,因此具<strong>有一定的局限性</strong>,并且如果正确的进行维度的划分,也需要相当丰富的经验.</li></ol><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3><ol><li><strong>需要提供平台独立性的应用程序时</strong>。 比如，不同数据库的 JDBC 驱动程序、硬盘驱动程序等。</li><li><strong>需要在某种统一协议下增加更多组件时</strong>。 比如，在支付场景中，我们期望支持微信、支付宝、各大银行的支付组件等。这里的统一协议是收款、支付、扣款，而组件就是微信、支付宝等。</li><li><strong>基于消息驱动的场景</strong>。 虽然消息的行为比较统一，主要包括发送、接收、处理和回执，但其实具体客户端的实现通常却各不相同，比如，手机短信、邮件消息、QQ 消息、微信消息等。</li><li><strong>拆分复杂的类对象时</strong>。 当一个类中包含大量对象和方法时，既不方便阅读，也不方便修改。</li><li><strong>希望从多个独立维度上扩展时</strong>。 比如，系统功能性和非功能性角度，业务或技术角度等。</li></ol>`,53),m=[c];function b(p,g){return e(),n("div",null,m)}const q=i(o,[["render",b],["__file","06_桥接模式.html.vue"]]);export{q as default};
