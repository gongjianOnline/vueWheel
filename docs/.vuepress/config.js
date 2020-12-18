module.exports = {
  base:'./',
  title: 'JUI',
  description: 'JUI',
  themeConfig: {
    nav:[
      {text:'主页',link:'/'},
      {text:'文档',link:'/guide/'},
      {text:'交流',link:'https://google.com'}
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