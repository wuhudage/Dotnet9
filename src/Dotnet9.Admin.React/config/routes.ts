﻿/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: '首页',
    icon: 'dashboard',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    path: '/blogpost',
    name: '博客文章',
    icon: 'SnippetsOutlined',
    routes: [
      {
        path: '/blogpost/add',
        name: '添加文章',
        icon: 'FormOutlined',
        component: './BlogPost/components/AddOrUpdateBlogPost.tsx',
      },
      {
        path: '/blogpost/update/:id',
        name: '修改文章',
        component: './BlogPost/components/AddOrUpdateBlogPost.tsx',
      },
      {
        path: '/blogpost',
        name: '文章列表',
        icon: 'UnorderedListOutlined',
        component: './BlogPost',
      }
    ]
  },
  {
    name: '分类',
    icon: 'AppstoreOutlined',
    path: '/category',
    component: './Category',
  },
  {
    name: '专辑',
    icon: 'SnippetsOutlined',
    path: '/album',
    component: './Album',
  },
  {
    path: '/user/mrg',
    name: '用户管理',
    icon: 'user',
    component: './User/List',
  },
  {
    name: '时间线',
    icon: 'FieldTimeOutlined',
    path: '/timeline',
    component: './Timeline',
  },
  {
    name: '链接管理',
    icon: 'link',
    path: '/link',
    component: './Link',
  },
  {
    name: '操作日志',
    icon: 'FileTextOutlined',
    path: '/log',
    component: './ActionLog',
  },
  {
    name: '网站赞助',
    icon: 'AccountBookOutlined',
    path: '/donation',
    component: './Donation',
  },
  {
    name: '隐私声明',
    icon: 'LockOutlined',
    path: '/privacy',
    component: './Privacy',
  },
  {
    name: '关于网站',
    icon: 'UserOutlined',
    path: '/about',
    component: './About',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
