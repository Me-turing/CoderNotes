import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as a}from"./app-71f45f98.js";const d="/CoderNotes/assets/image-20231009135511624-4481eb4c.png",r="/CoderNotes/assets/image-20231009135630550-eb8bc13a.png",s="/CoderNotes/assets/image-20231009140218104-033b6384.png",l={},c=a('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>装饰模式(decorator pattern) 的原始定义是：动态的给一个对象添加一些额外的职责. 就扩展功能而言,装饰器模式提供了一种比使用子类更加灵活的替代方案.</p><blockquote><p>假设现在有有一块蛋糕,如果只有涂上奶油那这个蛋糕就是普通的<strong>奶油蛋糕</strong>, 这时如果我们添加上一些蓝莓,那这个蛋糕就是<strong>蓝莓蛋糕</strong>.如果我们再拿一块黑巧克力 然后写上姓名、插上代表年龄的蜡烛, 这就是变成了一块生日蛋糕</p></blockquote><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在软件设计中,装饰器模式是一种用于替代继承的技术,它通过一种无须定义子类的方式给对象动态的增加职责,使用对象之间的关联关系取代类之间的继承关系.</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><h3 id="基本角色" tabindex="-1"><a class="header-anchor" href="#基本角色" aria-hidden="true">#</a> 基本角色</h3><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>装饰（Decorator）模式中的角色：</p><ul><li><code>抽象构件（Component）角色</code> ：它是具体构件和抽象装饰类的共同父类,声明了在具体构件中实现的业务方法.它引进了可以使客户端以一致的方式处理未被装饰的对象以及装饰之后的对象,实现客户端的透明操作</li><li><code>具体构件（Concrete Component）角色</code> ：它是抽象构件类的子类,用于定义具体的构建对象,实现了在抽象构建中声明的方法,装饰类可以给它增加额外的职责(方法).</li><li><code>抽象装饰（Decorator）角色</code> ：它也是抽象构件类的子类,用于给具体构件增加职责,但是具体职责在其子类中实现.它维护了一个指向抽象构件对象的引用,通过该引用可以调用装饰之前构件对象的方法,并通过其子类扩展该方法,以达到装饰的目的.</li><li><code>具体装饰（ConcreteDecorator）角色</code> : 它是抽象装饰类的子类,负责向构件添加新的职责.每一个具体装饰类都定义了一些新的行为,它可以调用在抽象装饰类中定义的方法,并可以增加新的方法用于扩充对象的行为.</li></ul><h3 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h3><h4 id="抽象构件-component-角色" tabindex="-1"><a class="header-anchor" href="#抽象构件-component-角色" aria-hidden="true">#</a> 抽象构件（Component）角色</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public abstract class Component {
    //抽象方法
    public abstract void operation();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="具体构件-concrete-component-角色" tabindex="-1"><a class="header-anchor" href="#具体构件-concrete-component-角色" aria-hidden="true">#</a> 具体构件（Concrete Component）角色</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class ConcreteComponent extends Component {
    @Override
    public void operation() {
        //基础功能实现(复杂功能通过装饰类进行扩展)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="抽象装饰-decorator-角色" tabindex="-1"><a class="header-anchor" href="#抽象装饰-decorator-角色" aria-hidden="true">#</a> 抽象装饰（Decorator）角色</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Decorator extends Component{
    //维持一个对抽象构件对象的引用
    private Component component;
    //注入一个抽象构件类型的对象
    public Decorator(Component component) {
        this.component = component;
    }
    @Override
    public void operation() {
        //调用原有业务方法(这里并没有真正实施装饰,而是提供了一个统一的接口,将装饰过程交给子类完成)
        component.operation();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="具体装饰-concretedecorator-角色" tabindex="-1"><a class="header-anchor" href="#具体装饰-concretedecorator-角色" aria-hidden="true">#</a> 具体装饰（ConcreteDecorator）角色</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class ConcreteDecorator extends Decorator {
    public ConcreteDecorator(Component component) {
        super(component);
    }
    @Override
    public void operation() {
        super.operation(); //调用原有业务方法
        addedBehavior(); //调用新增业务方法
    }
    //新增业务方法
    public void addedBehavior(){
        //......
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用实例" tabindex="-1"><a class="header-anchor" href="#应用实例" aria-hidden="true">#</a> 应用实例</h2><p>接下来我们将模拟一个对于文件读写的操作,我们需要在读取文件时解密,写入文件时加密</p><h3 id="uml类图设计" tabindex="-1"><a class="header-anchor" href="#uml类图设计" aria-hidden="true">#</a> UML类图设计</h3><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>抽象构件（Component）角色</code> ：抽象的文件读取接口DataLoader</li><li><code>具体构件（Concrete Component）角色</code> ：BaseFileDataLoader重写组件 DataLoader 的读写方法</li><li><code>抽象装饰（Decorator）角色</code> ：装饰器DataLoaderDecorator，这里要包含一个引用 DataLoader 的对象实例 wrapper，同样是重写 DataLoader 方法，不过这里使用 wrapper 来读写,并不进行扩展</li><li><code>具体装饰（ConcreteDecorator）角色</code> : 读写时有加解密功能的具体装饰器EncryptionDataDecorator，它继承了装饰器 DataLoaderDecorator 重写读写方法</li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>导入IO依赖</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;dependencies&gt;
	&lt;dependency&gt;
		&lt;groupId&gt;commons-io&lt;/groupId&gt;
		&lt;artifactId&gt;commons-io&lt;/artifactId&gt;
		&lt;version&gt;2.6&lt;/version&gt;
	&lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="抽象构建" tabindex="-1"><a class="header-anchor" href="#抽象构建" aria-hidden="true">#</a> 抽象构建</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface DataLoader {
    String read();
    void write(String data);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="具体构建" tabindex="-1"><a class="header-anchor" href="#具体构建" aria-hidden="true">#</a> 具体构建</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class BaseFileDataLoader implements DataLoader {
    private String filePath;
    public BaseFileDataLoader(String filePath) {
        this.filePath = filePath;
    }
    @Override
    public String read() {
        try {
            String result = FileUtils.readFileToString(new File(filePath), &quot;utf-8&quot;);
            return result;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public void write(String data) {
        try{
            FileUtils.writeStringToFile(new File(filePath), data, &quot;utf-8&quot;);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="抽象装饰" tabindex="-1"><a class="header-anchor" href="#抽象装饰" aria-hidden="true">#</a> 抽象装饰</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DataLoaderDecorator implements DataLoader {
    private DataLoader wrapper;
    public DataLoaderDecorator(DataLoader wrapper) {
        this.wrapper = wrapper;
    }
    @Override
    public String read() {
        return wrapper.read();
    }
    @Override
    public void write(String data) {
        wrapper.write(data);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="具体装饰" tabindex="-1"><a class="header-anchor" href="#具体装饰" aria-hidden="true">#</a> 具体装饰</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class EncryptionDataDecorator extends DataLoaderDecorator {
    public EncryptionDataDecorator(DataLoader wrapper) {
        super(wrapper);
    }
    @Override
    public String read() {
        return decode(super.read());
    }
    @Override
    public void write(String data) {
        super.write(encode(data));
    }
    //加密操作
    private String encode(String data) {
        try {
             Base64.Encoder encoder = Base64.getEncoder();
             byte[] bytes = data.getBytes(&quot;UTF-8&quot;);
             String result = encoder.encodeToString(bytes);
             return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    //解密
    private String decode(String data) {
        try {
            Base64.Decoder decoder = Base64.getDecoder();
            String result = new String(decoder.decode(data), &quot;UTF-8&quot;);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String info = &quot;name:tom,age:15&quot;;
DataLoaderDecorator decorator = new EncryptionDataDecorator(new BaseFileDataLoader(&quot;demo.txt&quot;));
decorator.write(info);
String data = decorator.read();
System.out.println(data);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ol><li>对于扩展一个对象的功能,装饰模式<strong>比继承更加灵活</strong>,不会导致类的个数急剧增加</li><li>可以<strong>通过一种动态的方式来扩展一个对象的功能</strong>,通过配置文件可以在运行时选择不同的具体装饰类,从而实现不同的行为.</li><li><strong>可以对一个对象进行多次装饰</strong>,通过使用不同的具体装饰类以及这些装饰类的排列组合可以创造出很多不同行为的组合,得到更加强大的对象.</li><li><strong>具体构建类与具体装饰类可以独立变化</strong>,用户可以根据需要增加新的具体构建类和具体装饰类,原有类库代码无序改变,符合开闭原则.</li></ol><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ol><li>在使用装饰模式进行系统设计时<strong>将产生很多小对象</strong>,这些对象的区别在于它们之间相互连接的方式有所不同,而不是它们的类或者属性值不同,大量的小对象的产生势必会占用更多的系统资源,在一定程度上影响程序的性能.</li><li>装饰器模式提供了一种比继承更加灵活、机动的解决方案,但同时也意味着<strong>比继承更加易于出错,排错也更加困难</strong>,对于多次装饰的对象,在调试寻找错误时可能需要逐级排查,较为烦琐.</li></ol><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3><ol><li><strong>快速动态扩展和撤销一个类的功能场景</strong>。 比如，有的场景下对 API 接口的安全性要求较高，那么就可以使用装饰模式对传输的字符串数据进行压缩或加密。如果安全性要求不高，则可以不使用。</li><li><strong>不支持继承扩展类的场景</strong>。 比如，使用 final 关键字的类，或者系统中存在大量通过继承产生的子类。</li></ol>`,44),t=[c];function o(v,u){return i(),n("div",null,t)}const p=e(l,[["render",o],["__file","07_装饰器模式.html.vue"]]);export{p as default};
