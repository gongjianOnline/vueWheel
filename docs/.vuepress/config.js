module.exports = {
  base:'./',
  title: 'JUI',
  description: 'JUI',
  themeConfig: {
    nav:[
      {text:'主页',link:'/'},
      {text:'文档',link:'/install/'},
      {text:'GitHub',link:'https://github.com/gongjianOnline/vueWheel'}
    ],
    sidebar: [
      {
        title:'入门',
        children:[
          '/install/',
          '/get-started/',
        ]
      },
      {
        title:'组件',
        children:[
          '/components/button',
          '/components/input',
          '/components/layout',
          '/components/container',
          '/components/alert',
          '/components/tabs',
          '/components/tooltip',
          '/components/collapse',
        ]
      }
    ]
  }
}