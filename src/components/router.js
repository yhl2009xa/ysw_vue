/**
 * Created by Administrator on 2017/12/19.
 * 模块说明:添加路由,首页默认重定向/main/home
 */
export default [
  {
    path:'/main',
    componentUrl: 'main/index',
    children:[
      {
        path:'/main/article',
        componentUrl: 'main/router/goods/index',
      },
      {
        path:'/main/profit',
        componentUrl: 'main/router/home/index',
      },
      {
        path:'/main/author',
        componentUrl: 'main/router/brand/index',
      },
      {
        path:'/main/contact_us',
        componentUrl: 'main/router/news/index',
      },

    ]
  },

  {
    path: '/login',
    name: 'login',
    componentUrl: 'login/index',
  },
  {
    path: '/register',
    name: 'register',
    componentUrl: 'register/index'
  }
]

