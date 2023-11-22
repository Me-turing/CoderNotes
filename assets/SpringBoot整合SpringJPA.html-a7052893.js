import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as i}from"./app-71f45f98.js";const s="/CoderNotes/assets/image-20230805173534075-17296acc.png",t="/CoderNotes/assets/image-20230805175116396-d102a635.png",d={},l=i('<h2 id="构建项目环境" tabindex="-1"><a class="header-anchor" href="#构建项目环境" aria-hidden="true">#</a> 构建项目环境</h2><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><p>新建SpringBoot项目</p><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h3><div class="language-XMl line-numbers-mode" data-ext="XMl"><pre class="language-XMl"><code>&lt;dependency&gt;
	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
	&lt;groupId&gt;com.alibaba&lt;/groupId&gt;
	&lt;artifactId&gt;druid&lt;/artifactId&gt;
	&lt;version&gt;1.1.14&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
	&lt;groupId&gt;mysql&lt;/groupId&gt;
	&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
	&lt;version&gt;8.0.28&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;  
    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;  
    &lt;artifactId&gt;lombok&lt;/artifactId&gt;  
    &lt;optional&gt;true&lt;/optional&gt;  
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加配置" tabindex="-1"><a class="header-anchor" href="#添加配置" aria-hidden="true">#</a> 添加配置</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># jdbc 的相关信息</span>
<span class="token key attr-name">spring.datasource.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://xxx.xxx.xxx.xx:3306/codernotes?useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">CoderNotes</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">CoderNotes</span>

<span class="token comment"># 配置连接池信息</span>
<span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.alibaba.druid.pool.DruidDataSource</span>

<span class="token comment"># 配置jpa的相关参数</span>
<span class="token key attr-name">spring.jpa.hibernate.ddl-auto</span><span class="token punctuation">=</span><span class="token value attr-value">update</span>
<span class="token key attr-name">spring.jpa.show-sql</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="业务代码" tabindex="-1"><a class="header-anchor" href="#业务代码" aria-hidden="true">#</a> 业务代码</h2><h3 id="数据源" tabindex="-1"><a class="header-anchor" href="#数据源" aria-hidden="true">#</a> 数据源</h3><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE TABLE \`student\` (
  \`stuid\` int NOT NULL AUTO_INCREMENT,
  \`stuname\` varchar(20) DEFAULT NULL,
  \`stuage\` int DEFAULT NULL,
  \`stugender\` char(2) DEFAULT NULL,
  \`filename\` varchar(100) DEFAULT NULL,
  \`filetype\` varchar(20) DEFAULT NULL,
  PRIMARY KEY (\`stuid\`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加实体类" tabindex="-1"><a class="header-anchor" href="#添加实体类" aria-hidden="true">#</a> 添加实体类</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = &quot;student&quot;)
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name=&quot;stuid&quot;)
    private Integer stuId;
    @Column(name=&quot;stuname&quot;)
    private String stuName;
    @Column(name=&quot;stuage&quot;)
    private Integer stuAge;
    @Column(name=&quot;stugender&quot;)
    private Integer stuGender;
    @Column(name=&quot;filename&quot;)
    private String fileName;
    @Column(name=&quot;filetype&quot;)
    private String fileType;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加接口" tabindex="-1"><a class="header-anchor" href="#添加接口" aria-hidden="true">#</a> 添加接口</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface StudentDao extends JpaRepository&lt;Student,Integer&gt;, JpaSpecificationExecutor {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@SpringBootTest
class SpringBootJpaApplicationTests {
	@Autowired
	private StudentDao studentDao;
	@Test
	void contextLoads() {
		List&lt;Student&gt; studentList = studentDao.findAll();
		studentList.forEach(System.out::println);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',18),r=[l];function c(u,v){return n(),a("div",null,r)}const p=e(d,[["render",c],["__file","SpringBoot整合SpringJPA.html.vue"]]);export{p as default};
