import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "JavaSE阶段",
      icon: "repo",
      prefix: "doc/01_JavaSE阶段",
      link: "doc/01_JavaSE阶段",
      collapsible: true,
      children: "structure",
    },
    {
      text: "初级开发工程师",
      icon: "selection",
      prefix: "doc/02_初级开发工程师",
      link: "doc/02_初级开发工程师",
      collapsible: true,
      children: "structure",
    },
    {
      text: "计算机基础知识",
      icon: "condition",
      prefix: "doc/03_计算机基础知识",
      link: "doc/03_计算机基础知识",
      collapsible: true,
      children: "structure",
    },
    
    {
      text: "中级开发工程师",
      icon: "support",
      prefix: "doc/04_中级开发工程师",
      link: "doc/04_中级开发工程师",
      collapsible: true,
      children: "structure",
    },
    
    {
      text: "高级开发工程师",
      icon: "strong",
      prefix: "doc/05_高级开发工程师",
      link: "doc/05_高级开发工程师",
      collapsible: true,
      children: "structure",
    },
    {
      text: "架构师提高",
      icon: "license",
      prefix: "doc/06_提高阶段",
      link: "doc/06_提高阶段",
      collapsible: true,
      children: "structure",
    },
    {
      text: "项目实践",
      icon: "branch",
      prefix: "doc/07_项目实践",
      link: "doc/07_项目实践",
      collapsible: true,
      children: "structure",
    },
    {
      text: "故障分析",
      icon: "debug",
      prefix: "doc/08_故障分析",
      link: "doc/08_故障分析",
      collapsible: true,
      children: "structure",
    },
    {
      text: "手撕算法",
      icon: "grid",
      prefix: "doc/09_手撕算法",
      link: "doc/09_手撕算法",
      collapsible: true,
      children: "structure",
    },
    {
      text: "大数据方向",
      icon: "view",
      prefix: "doc/10_大数据进阶",
      link: "doc/10_大数据进阶",
      collapsible: true,
      children: "structure",
    },
    {
      text: "AI方向",
      icon: "semantic",
      prefix: "doc/11_AI方向",
      link: "doc/11_AI方向",
      collapsible: true,
      children: "structure",
    },
    {
      text: "其他语言",
      icon: "create",
      prefix: "doc/12_其他语言",
      link: "doc/12_其他语言",
      collapsible: true,
      children: "structure",
    },
    // "slides",
  ],
});
