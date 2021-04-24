(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{517:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[t._v("本博客系统采用的是vuepress搭建的，采用的主题是阮一峰的 vuepress-theme-reco")])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v('  安装 & 使用： \n  1. 创建一个工程文件目录:   mkdir vuepress-blog && cd vuepress-blog\n  2. 初始化工程目录： npm init -y 或者 yarn init\n  3. 安装vuePress为本地依赖:  yarn add -D vuepress 或者 npm install -D vuepress\n  4. 创建你的第一篇文档： mkdir docs && echo \'# Hello VuePress\' > docs/README.md\n  5. 在package.json中添加脚本\n     {\n        "scripts": {\n            "dev": "vuepress dev docs",\n            "build": "vuepress build docs"\n        }\n    }\n  6. 在本地启动服务器 yarn dev 或者 npm run dev\n')])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[t._v("完成了上面，一个简单的服务就跑起来了。脚本的编译是针对于docs目录（docs下深层的markdown文件也会被编译）,那思考一下vuepress编译的路由对应文件的关系是怎么样的呢？")])]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[t._v(" . 此处我们把 docs 目录作为 targetDir，下面所有的“文件的相对路径”都是相对于 docs 目录的。在项目根目录下的 package.json 中添加 scripts ：\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n. 对于上述的目录结构，默认页面路由地址如下：\n    文件的相对路径\t      页面路由地址\n    /README.md\t          /    (/代表index.html)\n    /guide/README.md\t /guide/\n    /config.md\t         /config.html\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[t._v("下一步，如何管理我们的目录结构？")])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("  1. 我们刚创建出来只有一个docs目录以及一个README.md首页文件\n  2. vuePress 遵循 “约定优于配置” 的原则,脚本编译目录下推崇以下结构\n        ├── docs\n        │   ├── .vuepress (可选的)\n        │   │   ├── components (可选的)\n        │   │   ├── theme (可选的)\n        │   │   │   └── Layout.vue\n        │   │   ├── public (可选的)\n        │   │   ├── styles (可选的)\n        │   │   │   ├── index.styl\n        │   │   │   └── palette.styl\n        │   │   ├── templates (可选的, 谨慎配置)\n        │   │   │   ├── dev.html\n        │   │   │   └── ssr.html\n        │   │   ├── config.js (可选的)\n        │   │   └── enhanceApp.js (可选的)\n        │   │ \n        │   ├── README.md\n        │   ├── guide\n        │   │   └── README.md\n        │   └── config.md\n        │ \n        └── package.json\n 3. 简单了解一下主要的目录&文件\n    docs/.vuepress: 用于存放全局的配置、组件、静态资源等\n    docs/.vuepress/public: 静态资源目录\n    docs/.vuepress/config.js: 配置文件的入口文件\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[t._v("编辑README.md首页，了解front matter(它的作用可以用来标识改文档的属性，如作者，时间，标签，分类，等等，方便归纳以及扩展，后期结合其他主题发现很爽)")])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("  1. front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML，如：\n    ---\n    title: Blogging Like a Hacker\n    lang: en-US\n    ---\n  2. 编辑首页\n        ---\n        home: true\n        heroText: Life is a on return journey\n        tagline: Prefer to stumble over a lifetime，but also not ordinary mixed life\n        # heroImage: /hero.png\n        # heroImageStyle: {\n        #   maxWidth: '600px',\n        #   width: '100%',\n        #   display: block,\n        #   margin: '9rem auto 2rem',\n        #   background: '#fff',\n        #   borderRadius: '1rem',\n        # }\n        # isShowTitleInHome: false\n        # actionText: Guide\n        # actionLink: guide\n        bgImageStyle: {\n        height: '450px'\n        }\n        isShowTitleInHome: false\n        features:\n        - title: Yesterday\n        details: 开发一款看着开心、写着顺手的 vuepress 博客主题\n        - title: Today\n        details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上\n        - title: Tomorrow\n        details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长\n        ---\n  3. 重新编译后发现和我的不一样，先不要着急，后面再说\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[t._v("接下来对 docs/.vuepress/config.js 进线一些简单的配置，如 页面标题、logo、加载时候的文案")])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link.liu"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"走的慢不要紧，一直向前就好"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/assets/img/logo.png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    author"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link.liu'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    nav"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Guide'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/guide/'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'External'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://google.com'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[t._v("安装vuepress-theme-reco主题")])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v(" 1. 安装依赖： yarn add vuepress-theme-reco 或者 npm install vuepress-theme-reco --save-dev\n 2. 配置 docs/.vuepress/config.js\n    module.exports = {\n        theme: 'reco'，\n        themeConfig: {\n            type: \"blog\" // 开启就会有动画效果\n        }\n    }\n 3. 添加分类和标签在top栏，方便分类检索\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" \n module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 博客配置")]),t._v("\n    blogConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      category"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        location"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在导航栏菜单中所占的位置，默认2")]),t._v("\n        text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Category'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认文案 “分类”")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      tag"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        location"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在导航栏菜单中所占的位置，默认3")]),t._v("\n        text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tag'")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认文案 “标签”")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      socialLinks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 信息栏展示社交信息")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco-github'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/recoluan'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco-npm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.npmjs.com/~reco_luan'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[t._v("#写文章时添加分类和标签\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\ntitle: 【vue】跨域解决方案之proxyTable\ndate: 2017-12-28\ncategories:\n "),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" frontEnd\ntags:\n "),n("span",{pre:!0,attrs:{class:"token title important"}},[t._v("- vue\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[t._v("完成以上步骤基本就搭建出来啦，剩下值得注意的就是  a.写.md文档博客时记得 Front Matter在最前面  b. 可以在md文档中进行脚本的执行以及vue组件的解析，这个自己参照文档")])])])}),[],!1,null,null,null);s.default=e.exports}}]);