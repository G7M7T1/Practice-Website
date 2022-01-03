var Langs = {
  EN: {
    home: "Home",
    blog: "Blog",
    contact: "Contact",
    en: "EN",
    cn: "CN",
    fMiantitle: "Welcome To New Theme",
    fMiantext:
      "Welcome to your new theme, my theme uses the Jumbotron style. You can edit the text inside. If you also like simple and beautiful themes, thank you for using my theme and hope you have a good day",
    btnMore: "Check More",
    sMiantitle: "Read My Blog",
    sMiantext:
      "Do you want to check my blog? I may write some interesting content in it, I may not update it often, but I will try to update it when I have time",
    btnBlog: "Read Blog",
    tMiantext:
      "Do you want to contact me? If you have some ideas that need to be realized, if you are also interested in web pages and topics, then you are welcome to contact me",
    tMiantitle: "If You Want Contact Me",
    btnContact: "Contact Me",
  },

  CN: {
    home: "主页",
    blog: "博客",
    contact: "联系",
    en: "EN",
    cn: "CN",
    fMiantitle: "欢迎来到你的新主题",
    fMiantext:
      "欢迎来到你的新主题，我的主题使用了Jumbotron的样式。你可以编辑里面的文字，如果你也喜欢简单并且好看的主题，感谢你使用我的主题，希望你有美好的一天",
    btnMore: "查看更多",
    sMiantitle: "阅读我的博客",
    sMiantext:
      "你想查看我的Blog吗？我可能会写一些有趣的内容进去，我可能不会时常更新它，但是在我有时间的情况下我会尝试去更新它，总之，欢迎你的到来",
    btnBlog: "阅读博客",
    tMiantext:
      "你想联系我吗？如果你有些想法需要实现，如果你也对网页和主题感兴趣，那么欢迎你来联系我，我们可以一起学习一些新的内容和知识，并且交流想法等",
    tMiantitle: "如果你想联系我",
    btnContact: "联系我",
  },
};

$(function () {
  $(".selectpicker").change(function () {
    var lang = $(".selectpicker").val();
    $(".lang").each(function (index, element) {
      $(this).text(Langs[lang][$(this).attr("key")]);
    });
  });
});
