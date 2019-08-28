module.exports = {
    title: 'Kelly\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'manifest', href: '' }],
      ['link', { rel: 'icon', href: '/photo.jpg' }],
    ],   
    serviceWorker: true, // 是否开启 PWA 
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '前端基础', link: '/accumulate/' },
        {text: '算法题库', link: '/algorithm/'},
        {text: '微博', link: 'https://baidu.com'}      
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };