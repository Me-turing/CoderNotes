import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-71f45f98.js";const i="/CoderNotes/assets/image-20230813144551021-6fd04a62.png",t="/CoderNotes/assets/image-20230813162944198-d64397ba.png",l="/CoderNotes/assets/image-20230814094318514-f2fdef6f.png",c="/CoderNotes/assets/image-20230813145012945-0232d674.png",o="/CoderNotes/assets/image-20230813163105884-46724021.png",p="/CoderNotes/assets/image-20230814094420290-9c66375b.png",r="/CoderNotes/assets/工厂方法模式-1ab8a9e4.jpg",d="/CoderNotes/assets/image-20230814100416909-cac049ce.png",u="/CoderNotes/assets/image-20230814100725784-e31f4ed2.png",v="/CoderNotes/assets/image-20230814133058443-6ac763d3.png",m={},b=e('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>工厂模式（Factory Pattern）是 Java 中最常用的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><blockquote><p><strong>在工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。</strong></p></blockquote><p>《设计模式》一书中，工厂模式被分为了三种：简单工厂、工厂方法和抽象工厂。（不过，在书中作者将简单工厂模式看作是工厂方法模式的一种特例。）</p><ul><li>简单工厂模式（不属于GOF的23种经典设计模式）</li><li>工厂方法模式</li><li>抽象工厂模式</li></ul><h2 id="模拟的业务需求" tabindex="-1"><a class="header-anchor" href="#模拟的业务需求" aria-hidden="true">#</a> 模拟的业务需求</h2><p>我们来模拟一下互联网电商中促销拉新下的业务场景, <strong>新用户注册立即参与抽奖活动</strong> ,奖品的种类有: 打折券, 免费优酷会员,小礼品.</p><h3 id="使用原始开发模式" tabindex="-1"><a class="header-anchor" href="#使用原始开发模式" aria-hidden="true">#</a> 使用原始开发模式</h3><p>我们使用原始的开发形式: 控制层根据前端不同的业务直接请求处理不同的服务层业务代码</p><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实体类" tabindex="-1"><a class="header-anchor" href="#实体类" aria-hidden="true">#</a> 实体类</h4><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>AwardInfo</td><td>获奖信息对应实体类</td></tr><tr><td>DiscountInfo</td><td>打折券信息对应实体类</td></tr><tr><td>YouKuMember</td><td>优酷会员对应实体类</td></tr><tr><td>SmallGiftInfo</td><td>小礼品信息对应实体类</td></tr><tr><td>DiscountResult</td><td>打折券操作响应结果封装类</td></tr></tbody></table><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class AwardInfo {
    private String uid; //用户唯一ID
    private Integer awardType; //奖品类型: 1 打折券 ,2 优酷会员,3 小礼品
    private String awardNumber; //奖品编号
    Map&lt;String, String&gt; extMap; //额外信息
    
}

public class DiscountInfo {
    //属性信息省略......
}

public class YouKuMember {
    //属性信息省略......
}

public class SmallGiftInfo {
    private String userName;              // 用户姓名
    private String userPhone;             // 用户手机
    private String orderId;               // 订单ID
    private String relAddress;            // 收货地址
    
}

public class DiscountResult {
    private String status; // 状态码
    private String message; // 信息
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="服务层" tabindex="-1"><a class="header-anchor" href="#服务层" aria-hidden="true">#</a> 服务层</h4><table><thead><tr><th>名称</th><th>功能</th><th>描述</th></tr></thead><tbody><tr><td>DiscountService</td><td>DiscountResult sendDiscount(String uid,String number)</td><td>模拟打折券服务</td></tr><tr><td>YouKuMemberService</td><td>void openMember(String bindMobile , String number)</td><td>模拟赠送优酷会员服务</td></tr><tr><td>SmallGiftService</td><td>Boolean giveSmallGift(SmallGiftInfo smallGiftInfo)</td><td>模拟礼品服务</td></tr></tbody></table><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DiscountService {
    public DiscountResult sendDiscount(String uid, String number){
        System.out.println(&quot;向用户发放打折券一张: &quot; + uid + &quot; , &quot; + number);
        return new DiscountResult(&quot;200&quot;,&quot;发放打折券成功&quot;);
    }
}

public class YouKuMemberService {
    public void openMember(String bindMobile , String number){
        System.out.println(&quot;发放优酷会员: &quot; + bindMobile + &quot; , &quot; + number);
    }
}

public class SmallGiftService {
    public Boolean giveSmallGift(SmallGiftInfo smallGiftInfo){
        System.out.println(&quot;小礼品已发货,获奖用户注意查收! &quot; + JSON.toJSON(smallGiftInfo));
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="控制层" tabindex="-1"><a class="header-anchor" href="#控制层" aria-hidden="true">#</a> 控制层</h4><table><thead><tr><th>名称</th><th>功能</th><th>描述</th></tr></thead><tbody><tr><td>DeliverController</td><td>ResponseResult awardToUser(AwardInfo awardInfo)</td><td>按照类型的不同发放商品 奖品类型: 1 打折券 ,2 优酷会员,3 小礼品</td></tr></tbody></table><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DeliverController {

    /**
     * 按照类型的不同发放商品
     *     奖品类型: 1 打折券 ,2 优酷会员,3 小礼品
     */
    public void awardToUser(AwardInfo awardInfo){
        if(awardInfo.getAwardType() == 1){ //打折券
            DiscountService discountService = new DiscountService();
            DiscountResult result = discountService.sendDiscount(awardInfo.getUid(), awardInfo.getAwardNumber());
            System.out.println(&quot;打折券发放成功!&quot;+ JSON.toJSON(result));
        }else if(awardInfo.getAwardType() == 2){ //优酷会员
            //获取用户手机号
            String bindMobile = awardInfo.getExtMap().get(&quot;phone&quot;);
            //调用service
            YouKuMemberService youKuMemberService = new YouKuMemberService();
            youKuMemberService.openMember(bindMobile,awardInfo.getAwardNumber());
            System.out.println(&quot;优酷会员发放成功!&quot;);
        }else if(awardInfo.getAwardType() == 3){ /*
            小礼品
            封装收货用户信息
            */
            SmallGiftInfo smallGiftInfo = new SmallGiftInfo();
            smallGiftInfo.setUserName(awardInfo.getExtMap().get(&quot;username&quot;));
            smallGiftInfo.setOrderId(UUID.randomUUID().toString());
            smallGiftInfo.setRelAddress(awardInfo.getExtMap().get(&quot;adderss&quot;));
            SmallGiftService smallGiftService = new SmallGiftService();
            Boolean isSuccess = smallGiftService.giveSmallGift(smallGiftInfo);
            System.out.println(&quot;小礼品发放成功!&quot; + isSuccess);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class TestDemo01 {
    DeliverController deliverController = new DeliverController();
    /**
     * 发放打折券优惠
     *
     * @author sqTan
     * @date 2023/08/13
     *///测试发放奖品接口
    @Test
    public void test01(){
        AwardInfo info1 = new AwardInfo();
        info1.setUid(&quot;1001&quot;);
        info1.setAwardType(1);
        info1.setAwardNumber(&quot;DEL12345&quot;);
        DiscountResult discountResult = deliverController.awardToUser(info1);
        System.out.println(discountResult);
    }
    /**
     * 发放优酷会员
     *
     * @author sqTan
     * @date 2023/08/13
     */
    @Test
    public void test02(){
        AwardInfo info2 = new AwardInfo();
        info2.setUid(&quot;1002&quot;);
        info2.setAwardType(2);
        info2.setAwardNumber(&quot;DW12345&quot;);
        Map&lt;String,String&gt; map = new HashMap&lt;&gt;();
        map.put(&quot;phone&quot;,&quot;13512341234&quot;);
        info2.setExtMap(map);
        DiscountResult discountResult = deliverController.awardToUser(info2);
        System.out.println(discountResult);
    }
    /**
     * 发放小礼品
     *
     * @author sqTan
     * @date 2023/08/13
     */
    @Test
    public void test03(){
        AwardInfo info3 = new AwardInfo();
        info3.setUid(&quot;1003&quot;);
        info3.setAwardType(3);
        info3.setAwardNumber(&quot;SM12345&quot;);
        Map&lt;String,String&gt; map2 = new HashMap&lt;&gt;();
        map2.put(&quot;username&quot;,&quot;大远&quot;);
        map2.put(&quot;phone&quot;,&quot;13512341234&quot;);
        map2.put(&quot;address&quot;,&quot;北京天安门&quot;);
        info3.setExtMap(map2);
        DiscountResult discountResult = deliverController.awardToUser(info3);
        System.out.println(discountResult);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用原始开发的劣势" tabindex="-1"><a class="header-anchor" href="#使用原始开发的劣势" aria-hidden="true">#</a> 使用原始开发的劣势</h3><p>对于上面的实现方式 : 如果我们有想要添加的新的奖品时,势必要改动DeliverController的代码,<strong>违反开闭原则</strong>.而且如果有的抽奖接口出现问题,那么对其进行<strong>重构的成本会非常高</strong>.</p><p>除此之外代码中有一组if分支判断逻辑,现在看起来还可以,但是如果经历几次迭代和拓展,后续ifelse肯定还会增加.到时候接手这段代码的研发将会十分痛苦.</p><h2 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a> 简单工厂模式</h2><h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h3><p>简单工厂不是一种设计模式，反而比较像是一种编程习惯。简单工厂模式又叫做<strong>静态工厂方法模式（static Factory Method pattern）</strong>,它是通过使用静态方法接收不同的参数来返回不同的实例对象.</p><h4 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h4><p><strong>定义一个工厂类，根据传入的参数不同返回不同的实例，被创建的实例具有共同的父类或接口</strong>。</p><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如上述奖品发放的大致思路:</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h4><ul><li>需要创建的对象较少。</li><li>客户端不关心对象的创建过程。</li></ul><h4 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h4><p><strong>优点：</strong><br> 封装了创建对象的过程，可以通过参数直接获取对象。把对象的创建和业务逻辑层分开，这样以后就避免了修改客户代码，如果要实现新产品直接修改工厂类，而不需要在原代码中修改，这样就降低了客户代码修改的可能性，更加容易扩展。</p><p><strong>缺点：</strong><br> 增加新产品时还是需要修改工厂类的代码，违背了“开闭原则”。</p><h3 id="设计原理" tabindex="-1"><a class="header-anchor" href="#设计原理" aria-hidden="true">#</a> 设计原理</h3><p>简单工厂包含如下角色：</p><ul><li>抽象产品 ：定义了产品的规范，描述了产品的主要特性和功能。</li><li>具体产品 ：实现或者继承抽象产品的子类</li><li>具体工厂 ：提供了创建产品的方法，调用者通过该方法来获取产品。</li></ul><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>DeliverController控制层调用FreeGoodsFactory工厂类,传入AwardInfo信息</li><li>在FreeGoodsFactory工厂类中根据AwardInfo信息,创建不同的具体实现,并返回IFreeGoods接口对象</li><li>调用IFreeGoods对象,通过多态的特性直接调用具体的实现</li></ol><p>按照上面的思路,我们控制层将无需再关注具体的业务实现,将业务逻辑全部交给工厂类进行区分和创建</p><h4 id="实体类-1" tabindex="-1"><a class="header-anchor" href="#实体类-1" aria-hidden="true">#</a> 实体类</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AwardInfo {
    private String uid; //用户唯一ID
    private Integer awardType; //奖品类型: 1 打折券 ,2 优酷会员,3 小礼品
    private String awardNumber; //奖品编号
    Map&lt;String, String&gt; extMap; //额外信息
}

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResponseResult {
    private String status; // 状态码
    private String message; // 信息
    private Object object;
}

@Data  
@AllArgsConstructor  
@NoArgsConstructor  
@ToString  
public class SmallGiftInfo {  
    private String userName;              // 用户姓名  
    private String userPhone;             // 用户手机  
    private String orderId;               // 订单ID  
    private String relAddress;            // 收货地址  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="抽象接口" tabindex="-1"><a class="header-anchor" href="#抽象接口" aria-hidden="true">#</a> 抽象接口</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface IFreeGoods {  
    ResponseResult sendFreeGoods(AwardInfo awardInfo);  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="具体实现类" tabindex="-1"><a class="header-anchor" href="#具体实现类" aria-hidden="true">#</a> 具体实现类</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DiscountFreeGoods implements IFreeGoods {  
    @Override  
    public ResponseResult sendFreeGoods(AwardInfo awardInfo) {  
        System.out.println(&quot;向用户发放一张打折券: &quot; + awardInfo.getUid() + &quot; , &quot; + awardInfo.getAwardNumber());  
        return new ResponseResult(&quot;200&quot;,&quot;打折券发放成功!&quot;,null);  
    }  
}

public class SmallGiftFreeGoods implements IFreeGoods {  
    @Override  
    public ResponseResult sendFreeGoods(AwardInfo awardInfo) {  
        SmallGiftInfo smallGiftInfo = new SmallGiftInfo();  
        smallGiftInfo.setUserPhone(awardInfo.getExtMap().get(&quot;phone&quot;));  
        smallGiftInfo.setUserName(awardInfo.getExtMap().get(&quot;username&quot;));  
        smallGiftInfo.setRelAddress(awardInfo.getExtMap().get(&quot;address&quot;));  
        smallGiftInfo.setOrderId(UUID.randomUUID().toString());  
        System.out.println(&quot;小礼品发放成,请注意查收: &quot; + JSON.toJSON(smallGiftInfo));  
        return new ResponseResult(&quot;200&quot;,&quot;小礼品发送成功&quot;,smallGiftInfo);  
    }  
}

public class YouKuMemberFreeGoods implements IFreeGoods {  
    @Override  
    public ResponseResult sendFreeGoods(AwardInfo awardInfo) {  
        String phone = awardInfo.getExtMap().get(&quot;phone&quot;);  
        System.out.println(&quot;发放优酷会员成功,绑定手机号: &quot; + phone);  
        return new ResponseResult(&quot;200&quot;,&quot;优酷会员发放成功!&quot;,null);  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="具体工厂类" tabindex="-1"><a class="header-anchor" href="#具体工厂类" aria-hidden="true">#</a> 具体工厂类</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class FreeGoodsFactory {  
    public static IFreeGoods getInstance(Integer awardType){  
        IFreeGoods iFreeGoods = null;  
        if(awardType == 1){  //打折券  
            iFreeGoods = new DiscountFreeGoods();  
        }else if(awardType == 2){ //优酷会员  
            iFreeGoods = new YouKuMemberFreeGoods();  
        }else if(awardType == 3){ //小礼品  
            iFreeGoods = new SmallGiftFreeGoods();  
        }  
        return iFreeGoods;  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="控制层-1" tabindex="-1"><a class="header-anchor" href="#控制层-1" aria-hidden="true">#</a> 控制层</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DeliverController {  
    //发放奖品  
    public ResponseResult awardToUser(AwardInfo awardInfo){  
        ResponseResult responseResult = null;  
        try {  
            IFreeGoods instance = FreeGoodsFactory.getInstance(awardInfo.getAwardType());  
            responseResult = instance.sendFreeGoods(awardInfo);  
        } catch (Exception e) {  
            responseResult = new ResponseResult(&quot;201&quot;,&quot;请求错误&quot;,null);  
        }  
        return responseResult;  
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDemo01</span> <span class="token punctuation">{</span>
    <span class="token class-name">DeliverController</span> deliverController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeliverController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 发放打折券优惠
     *
     * <span class="token keyword">@author</span> sqTan
     * <span class="token keyword">@date</span> 2023/08/13
     */</span><span class="token operator">/</span><span class="token operator">/</span>测试发放奖品接口
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//1. 发放打折券优惠</span>
        <span class="token class-name">AwardInfo</span> info1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AwardInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info1<span class="token punctuation">.</span><span class="token function">setUid</span><span class="token punctuation">(</span><span class="token string">&quot;1001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info1<span class="token punctuation">.</span><span class="token function">setAwardType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info1<span class="token punctuation">.</span><span class="token function">setAwardNumber</span><span class="token punctuation">(</span><span class="token string">&quot;DEL12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ResponseResult</span> result <span class="token operator">=</span> deliverController<span class="token punctuation">.</span><span class="token function">awardToUser</span><span class="token punctuation">(</span>info1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 发放优酷会员
     *
     * <span class="token keyword">@author</span> sqTan
     * <span class="token keyword">@date</span> 2023/08/13
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">AwardInfo</span> info2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AwardInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info2<span class="token punctuation">.</span><span class="token function">setUid</span><span class="token punctuation">(</span><span class="token string">&quot;1002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info2<span class="token punctuation">.</span><span class="token function">setAwardType</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info2<span class="token punctuation">.</span><span class="token function">setAwardNumber</span><span class="token punctuation">(</span><span class="token string">&quot;DW12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;13512341234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info2<span class="token punctuation">.</span><span class="token function">setExtMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ResponseResult</span> responseResult <span class="token operator">=</span> deliverController<span class="token punctuation">.</span><span class="token function">awardToUser</span><span class="token punctuation">(</span>info2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>responseResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 发放小礼品
     *
     * <span class="token keyword">@author</span> sqTan
     * <span class="token keyword">@date</span> 2023/08/13
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">AwardInfo</span> info3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AwardInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info3<span class="token punctuation">.</span><span class="token function">setUid</span><span class="token punctuation">(</span><span class="token string">&quot;1003&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info3<span class="token punctuation">.</span><span class="token function">setAwardType</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info3<span class="token punctuation">.</span><span class="token function">setAwardNumber</span><span class="token punctuation">(</span><span class="token string">&quot;SM12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;大远&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;13512341234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;北京天安门&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info3<span class="token punctuation">.</span><span class="token function">setExtMap</span><span class="token punctuation">(</span>map2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ResponseResult</span> responseResult <span class="token operator">=</span> deliverController<span class="token punctuation">.</span><span class="token function">awardToUser</span><span class="token punctuation">(</span>info3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>responseResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> 工厂方法模式</h2><h3 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2" aria-hidden="true">#</a> 概述</h3><p>工厂方法模式 <code>Factory Method pattern</code>,属于创建型模式.<br><strong>概念</strong> : 定义一个用于创建对象的接口，让子类决定实例化哪个产品类对象。工厂方法使一个产品类的实例化延迟到其工厂的子类。</p><h4 id="实现方式-1" tabindex="-1"><a class="header-anchor" href="#实现方式-1" aria-hidden="true">#</a> 实现方式</h4><p>在简单工厂的基础上,<strong>对于工厂的创建继续封装</strong>,提升代码创建对象的可复用性</p><p>工厂方法模式的主要角色：</p><ul><li>抽象工厂：提供了创建产品的接口，调用者通过它访问具体工厂的工厂方法来创建产品。</li><li>具体工厂：主要是实现抽象工厂中的抽象方法，完成具体产品的创建。</li><li>抽象产品：定义了产品的规范，描述了产品的主要特性和功能。</li><li>具体产品：实现了抽象产品角色所定义的接口，由具体工厂来创建，它同具体工厂之间一一对应。</li></ul><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>设计大致思路:</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="适用场景-1" tabindex="-1"><a class="header-anchor" href="#适用场景-1" aria-hidden="true">#</a> 适用场景</h4><ul><li>需要使用很多重复代码创建对象时，比如，DAO 层的数据对象、API 层的 VO 对象等。</li><li>创建对象要访问外部信息或资源时，比如，读取数据库字段，获取访问授权 token 信息，配置文件等。</li><li>创建需要统一管理生命周期的对象时，比如，会话信息、用户网页浏览轨迹对象等。</li><li>创建池化对象时，比如，连接池对象、线程池对象、日志对象等。这些对象的特性是：有限、可重用，使用工厂方法模式可以有效节约资源。</li><li>希望隐藏对象的真实类型时，比如，不希望使用者知道对象的真实构造函数参数等。</li></ul><h4 id="优缺点-1" tabindex="-1"><a class="header-anchor" href="#优缺点-1" aria-hidden="true">#</a> 优缺点</h4><p><strong>优点：</strong></p><ul><li>用户只需要知道具体工厂的名称就可得到所要的产品，无须知道产品的具体创建过程；</li><li>在系统增加新的产品时只需要添加具体产品类和对应的具体工厂类，无须对原工厂进行任何修改，满足开闭原则；</li></ul><p><strong>缺点：</strong></p><ul><li>每增加一个产品就要增加一个具体产品类和一个对应的具体工厂类，这增加了系统的复杂度。</li></ul><h3 id="设计原理-1" tabindex="-1"><a class="header-anchor" href="#设计原理-1" aria-hidden="true">#</a> 设计原理</h3><p>为了提高代码扩展性,我们需要将简单工厂中的if分支逻辑去掉,通过增加抽象工厂(<strong>生产工厂的工厂</strong>)的方式,让具体工厂去进行实现,由具体工厂来决定实例化哪一个具体的产品对象.</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>在简单工厂的基础上,继续对工厂类进行抽取FreeGoodsFactory接口</li><li>创建不同的工厂类实现,来分别调用业务类的实现</li><li>创建FreeGoodsFactoryMap类,来初始化所有的工厂类实现</li><li>控制层直接调用FreeGoodsFactoryMap类获取对应的工厂类接口,调用业务类接口中具体的实现对象</li></ol><h4 id="抽取工厂接口" tabindex="-1"><a class="header-anchor" href="#抽取工厂接口" aria-hidden="true">#</a> 抽取工厂接口</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">FreeGoodsFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">IFreeGoods</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现工厂接口-创建业务对象" tabindex="-1"><a class="header-anchor" href="#实现工厂接口-创建业务对象" aria-hidden="true">#</a> 实现工厂接口,创建业务对象</h4><blockquote><p>注意 : 此时调用的是业务类的具体实现类,但是返回的是业务类的接口对象</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DiscountFreeGoodsFactory</span> <span class="token keyword">implements</span> <span class="token class-name">FreeGoodsFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">IFreeGoods</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DiscountFreeGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmallGiftFreeGoodsFactory</span> <span class="token keyword">implements</span> <span class="token class-name">FreeGoodsFactory</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">IFreeGoods</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SmallGiftFreeGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YouKuMemberFreeGoodsFactory</span> <span class="token keyword">implements</span> <span class="token class-name">FreeGoodsFactory</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">IFreeGoods</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">YouKuMemberFreeGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建工厂初始化类" tabindex="-1"><a class="header-anchor" href="#创建工厂初始化类" aria-hidden="true">#</a> 创建工厂初始化类</h4><blockquote><p>由于工厂对象应该是有限性的,可被反复调用的.所以我们可以创建一个静态的FreeGoodsFactoryMap对象存储工厂对象的初始化属性.<br> 用户控制层无需关注工厂类的创建,只需要传入类型,全部由FreeGoodsFactoryMap对象完成对工厂的创建</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class FreeGoodsFactoryMap {
    private static final Map&lt;Integer,FreeGoodsFactory&gt; cachedFactories = new HashMap&lt;&gt;();
    static {
        cachedFactories.put(1, new DiscountFreeGoodsFactory());
        cachedFactories.put(2, new SmallGiftFreeGoodsFactory());
        cachedFactories.put(3, new YouKuMemberFreeGoodsFactory());
    }
    public static FreeGoodsFactory getParserFactory(Integer type){
        FreeGoodsFactory freeGoodsFactory = null;
        try {
            freeGoodsFactory = cachedFactories.get(type);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return freeGoodsFactory;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="控制层-2" tabindex="-1"><a class="header-anchor" href="#控制层-2" aria-hidden="true">#</a> 控制层</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DeliverController {
    //发放奖品
    public ResponseResult awardToUser(AwardInfo awardInfo){
        ResponseResult responseResult = null;//执行对应的业务模块
        try {
            Integer awardType = awardInfo.getAwardType();//获取当前的类型
            FreeGoodsFactory parserFactory = FreeGoodsFactoryMap.getParserFactory(awardType);//获取对应的工厂类实现
            IFreeGoods instance = parserFactory.getInstance();//通过工厂类获取业务实现对象
            responseResult = instance.sendFreeGoods(awardInfo);
        } catch (Exception e) {
            responseResult = new ResponseResult(&quot;201&quot;,&quot;请求错误&quot;,null);
            throw new RuntimeException(e);
        }
        return responseResult;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们的代码已经基本上符合了开闭原则,当有新增的产品时,我们需要做的事情包括:</p><ol><li>创建新的产品类,并且让该产品实现抽象产品接口</li><li>创建产品类对应的具体工厂,并让具体工厂实现抽象工厂</li><li>将新的具体工厂对象,添加到FreeGoodsFactoryMap的cachedFactories中即可,需要改动的代码改动的非常少.</li></ol><h2 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h2><h3 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3" aria-hidden="true">#</a> 概述</h3><p>抽象工厂模式比工厂方法模式的抽象程度更高. 在工厂方法模式中每一个具体工厂只需要生产一种具体产品,但是在抽象工厂模式中一个具体工厂可以生产一组相关的具体产品,这样一组产品被称为<strong>产品族</strong>.产品族中的每一个产品都分属于某一个产品继承<strong>等级</strong>结构.</p><h4 id="产品等级与产品族" tabindex="-1"><a class="header-anchor" href="#产品等级与产品族" aria-hidden="true">#</a> 产品等级与产品族</h4><ul><li><p><strong>产品等级结构</strong> ：产品等级结构即产品的继承结构，如一个抽象类是电视机，其子类有海尔电视机、海信电视机、TCL电视机，则抽象电视机与具体品牌的电视机之间构成了一个产品等级结构，抽象电视机是父类，而具体品牌的电视机是其子类。</p></li><li><p><strong>产品族</strong> ：在抽象工厂模式中，产品族是指由同一个工厂生产的，位于不同产品等级结构中的一组产品，如海尔电器工厂生产的海尔电视机、海尔电冰箱，海尔电视机位于电视机产品等级结构中，海尔电冰箱位于电冰箱产品等级结构中。</p></li></ul><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>在上图中,每一个具体工厂可以生产属于一个产品族的所有产品,例如海尔工厂生产海尔电视机、海尔空调和海尔冰箱,所生产的产品又位于不同的产品等级结构中. 如果使用工厂方法模式,上图所示的结构需要提供9个具体工厂,而使用抽象工厂模式只需要提供3个具体工厂,极大减少了系统中类的个数.</p></blockquote><h4 id="使用抽象工厂" tabindex="-1"><a class="header-anchor" href="#使用抽象工厂" aria-hidden="true">#</a> 使用抽象工厂</h4><p>抽象工厂模式(Abstract Factory Pattern) 原始定义：<strong>提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。</strong></p><p>抽象工厂模式为创建一组对象提供了解决方案.与工厂方法模式相比,<strong>抽象工厂模式中的具体工厂不只是创建一种产品,而是负责创建一个产品族</strong>.如下图:</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现方式-2" tabindex="-1"><a class="header-anchor" href="#实现方式-2" aria-hidden="true">#</a> 实现方式</h4><p>在抽象工厂模式中,每一个具体工厂都提供了多个工厂方法,用于产生多种不同类型的产品.这些产品构成了一个产品族.</p><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>抽象工厂模式的主要角色如下：</p><ul><li>抽象工厂（Abstract Factory）：它声明了一种用于创建一族产品的方法,每一个方法对应一种产品.</li><li>具体工厂（Concrete Factory）：主要是实现抽象工厂中的多个抽象方法，完成具体产品的创建.</li><li>抽象产品（Product）：定义了产品的规范，描述了产品的主要特性和功能，抽象工厂模式有多个抽象产品。</li><li>具体产品（ConcreteProduct）：实现了抽象产品角色所定义的接口，由具体工厂来创建，它 同具体工厂之间是多对一的关系。</li></ul><h4 id="适用场景-2" tabindex="-1"><a class="header-anchor" href="#适用场景-2" aria-hidden="true">#</a> 适用场景</h4><p>抽象工厂模式向使用（客户）方隐藏了下列变化：</p><ul><li>程序所支持的实例集合（具体工厂）的数目；</li><li>当前是使用的实例集合中的哪一个实例；</li><li>在任意给定时刻被实例化的具体类型；</li></ul><p>所以说，在理解抽象工厂模式原理时，你一定要牢牢记住“如何找到某一个类产品的正确共性功能”这个重点。</p><h4 id="优缺点-2" tabindex="-1"><a class="header-anchor" href="#优缺点-2" aria-hidden="true">#</a> 优缺点</h4><p><strong>抽象工厂模式优点</strong></p><ol><li>对于不同产品系列有比较多共性特征时，可以使用抽象工厂模式，有助于提升组件的复用性.</li><li>当需要提升代码的扩展性并降低维护成本时，把对象的创建和使用过程分开，能有效地将代码统一到一个级别上</li><li>解决跨平台带来的兼容性问题</li></ol><p><strong>抽象工厂模式缺点</strong></p><p>增加新的产品等级结构麻烦,需要对原有结构进行较大的修改,甚至需要修改抽象层代码,这显然会带来较大不变,违背了开闭原则.</p><h3 id="设计原理-2" tabindex="-1"><a class="header-anchor" href="#设计原理-2" aria-hidden="true">#</a> 设计原理</h3><h4 id="创建抽象工厂" tabindex="-1"><a class="header-anchor" href="#创建抽象工厂" aria-hidden="true">#</a> 创建抽象工厂</h4><p>在一个抽象工厂中可以声明多个工厂方法,用于创建不同类型的产品</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface AppliancesFactory {
    AbstractTV createTV();
    AbstractFreezer createFreezer();
    AbstractVentilation createVentilation();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建具体工厂" tabindex="-1"><a class="header-anchor" href="#创建具体工厂" aria-hidden="true">#</a> 创建具体工厂</h4><p>每一个具体工厂方法,可以返回一个特定的产品对象,而同一个具体工厂所创建的产品对象构成了一个产品族.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HisenseFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AppliancesFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">AbstractTV</span> <span class="token function">createTV</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HisenseTV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">AbstractFreezer</span> <span class="token function">createFreezer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HisenseFreezer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">AbstractVentilation</span> <span class="token function">createVentilation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HisenseVentilation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HairFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AppliancesFactory</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">AbstractTV</span> <span class="token function">createTV</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HairTV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">AbstractFreezer</span> <span class="token function">createFreezer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HairFreezer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">AbstractVentilation</span> <span class="token function">createVentilation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">HairVentilation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建抽象产品" tabindex="-1"><a class="header-anchor" href="#创建抽象产品" aria-hidden="true">#</a> 创建抽象产品</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AbstractVentilation</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AbstractTV</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AbstractFreezer</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建具体的产品" tabindex="-1"><a class="header-anchor" href="#创建具体的产品" aria-hidden="true">#</a> 创建具体的产品</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class HairFreezer implements AbstractFreezer { }
public class HairTV implements AbstractTV { }
public class HairVentilation implements AbstractVentilation { }
public class HisenseFreezer implements AbstractFreezer { }
public class HisenseTV implements AbstractTV { }
public class HisenseVentilation implements AbstractVentilation {  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token class-name">AbstractTV</span> abstractTV<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">AbstractFreezer</span> abstractFreezer<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">AbstractVentilation</span> abstractVentilation<span class="token punctuation">;</span>  
    <span class="token keyword">public</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token class-name">AppliancesFactory</span> appliancesFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>abstractTV <span class="token operator">=</span> appliancesFactory<span class="token punctuation">.</span><span class="token function">createTV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>abstractFreezer <span class="token operator">=</span> appliancesFactory<span class="token punctuation">.</span><span class="token function">createFreezer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>abstractVentilation <span class="token operator">=</span> appliancesFactory<span class="token punctuation">.</span><span class="token function">createVentilation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用抽象工厂-1" tabindex="-1"><a class="header-anchor" href="#使用抽象工厂-1" aria-hidden="true">#</a> 使用抽象工厂</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>        Client client = new Client(new HairFactory());
        AbstractFreezer abstractFreezer = client.getAbstractFreezer();
        System.out.println(abstractFreezer);
        AbstractTV abstractTV = client.getAbstractTV();
        System.out.println(abstractTV);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HairFactory</span> hairFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HairFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

<span class="token class-name">AbstractFreezer</span> freezer <span class="token operator">=</span> hairFactory<span class="token punctuation">.</span><span class="token function">createFreezer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>freezer<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token class-name">AbstractTV</span> tv <span class="token operator">=</span> hairFactory<span class="token punctuation">.</span><span class="token function">createTV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>tv<span class="token punctuation">)</span><span class="token punctuation">;</span>  

<span class="token class-name">AbstractVentilation</span> ventilation <span class="token operator">=</span> hairFactory<span class="token punctuation">.</span><span class="token function">createVentilation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ventilation<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,130),k=[b];function h(g,f){return s(),a("div",null,k)}const F=n(m,[["render",h],["__file","02_工厂模式.html.vue"]]);export{F as default};
