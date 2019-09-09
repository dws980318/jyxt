// import Vue from 'vue'
// import Router from 'vue-router'
import router from './index'
import store from '../store'
import Layout from '../components/layout/Layout'
import { studentRouter } from './student'

// Vue.use(Router)

const adminRouter = [{
  path: '/',
  name: 'Layout',
  redirect: '/index',
  meta: {
    title: '广州大学就业管理系统'
  },
  component: Layout,
  children: [{
    path: '/index',
    name: '首页',
    meta: {
      icon: 'icon-home1',
      children: false
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Index')
  },
  {
    path: '/personal',
    name: '个人中心',
    meta: {
      icon: 'icon-gerenziliao',
      children: false
    },
    redirect: '/personal/detail',
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/personal/Panel'),
    children: [{
      path: '/personal/detail',
      name: '个人中心-查看',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/personal/Index')
    },
    {
      path: '/personal/change',
      name: '个人中心-修改',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/personal/Change')
    }
    ]
  },
  {
    path: '/account',
    name: '账号管理',
    redirect: '/account/admin/list',
    meta: {
      icon: 'icon-08_zizhanghaoguanli',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/Panel'),
    children: [{
      path: '/account/admin',
      redirect: '/account/admin/list',
      name: '管理员账号管理',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/admin/Panel'),
      children: [{
        path: '/account/admin/list',
        name: '管理员账号管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/admin/Index')
      },
      {
        path: '/account/admin/add',
        name: '管理员账号管理-新建',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/admin/Details')
      },
      {
        path: '/account/admin/:id',
        name: '管理员账号管理-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/admin/Details')
      }
      ]
    },
    {
      path: '/account/student',
      name: '学生账号管理',
      redirect: '/account/student/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/student/Panel'),
      children: [{
        path: '/account/student/list',
        name: '学生账号管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/student/Index')
      },
      {
        path: '/account/student/add',
        name: '学生账号管理-新建',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/student/Details')
      },
      {
        path: '/account/student/:id',
        name: '学生账号管理-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/student/Details')
      }
      ]
    },
    {
      path: '/account/company',
      name: '企业账号管理',
      redirect: '/account/company/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/company/Panel'),
      children: [{
        path: '/account/company/list',
        name: '企业账号管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/company/Index')
      },
      {
        path: '/account/company/add',
        name: '企业账号管理-新建',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/company/Details')
      },
      {
        path: '/account/company/:id',
        name: '企业账号管理-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/company/Details')
      }
      ]
    },
    {
      path: '/account/teacher',
      redirect: '/account/teacher/list',
      name: '老师账号管理',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/teacher/Panel'),
      children: [{
        path: '/account/teacher/list',
        name: '老师账号管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/teacher/Index')
      },
      {
        path: '/account/teacher/add',
        name: '老师账号管理-新建',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/teacher/Details')
      },
      {
        path: '/account/teacher/:id',
        name: '老师账号管理-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/teacher/Details')
      }
      ]
    },
    {
      path: '/account/counselor',
      name: '咨询师账号管理',
      redirect: '/account/counselor/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/counselor/Panel'),
      children: [{
        path: '/account/counselor/list',
        name: '咨询师账号管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/counselor/Index')
      },
      {
        path: '/account/counselor/add',
        name: '咨询师账号管理-新建',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/counselor/Details')
      },
      {
        path: '/account/counselor/:id',
        name: '咨询师账号管理-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/accout/counselor/Details')
      }
      ]
    }
    ]
  },
  {
    path: '/portal',
    name: '门户信息管理',
    redirect: '/portal/image/index',
    meta: {
      icon: 'icon-drxx32',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/Panel'),
    children: [{
      path: '/portal/image',
      name: '图片管理',
      redirect: '/portal/image/index',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/Panel'),
      children: [{
        path: '/portal/image/index',
        name: '首页轮播图',
        redirect: '/portal/image/index/pc',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/index/Panel'),
        children: [{
          path: '/portal/image/index/:port',
          name: '首页轮播图列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/index/Index')
        },
        {
          path: '/portal/image/index/:port/add',
          name: '首页轮播图-新建',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/index/Details')
        },
        {
          path: '/portal/image/index/:port/:id',
          name: '首页轮播图-修改',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/index/Details')
        }
        ]
      },
      {
        path: '/portal/image/horizontal',
        name: '栏目页长图',
        redirect: '/portal/image/horizontal/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/horizontal/Panel'),
        children: [{
          path: '/portal/image/horizontal/list',
          name: '栏目页长图列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/horizontal/Index')
        },
        {
          path: '/portal/image/horizontal/add',
          name: '栏目页长图-新建',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/horizontal/Details')
        },
        {
          path: '/portal/image/horizontal/:id',
          name: '栏目页长图-修改',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/horizontal/Details')
        }
        ]
      },
      {
        path: '/portal/image/friends',
        name: '友情链接',
        redirect: '/portal/image/friends/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/friends/Panel'),
        children: [{
          path: '/portal/image/friends/list',
          name: '友情链接列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/friends/Index')
        },
        {
          path: '/portal/image/friends/add',
          name: '友情链接-新建',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/friends/Details')
        },
        {
          path: '/portal/image/friends/:id',
          name: '友情链接-修改',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/image/friends/Details')
        }
        ]
      }
      ]
    },
    {
      path: '/portal/category',
      name: '门户信息发布管理',
      redirect: '/portal/category/statistic',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/Panel'),
      children: [{
        path: '/portal/category/statistic',
        name: '栏目发布信息统计',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/statistic/Index')
      },
      {
        path: '/portal/category/manage',
        name: '栏目信息发布管理',
        redirect: '/portal/category/manage/news',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/Panel'),
        children: [{
          path: '/portal/category/manage/news',
          name: '就业新闻',
          redirect: '/portal/category/manage/news/list',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/news/Panel'),
          children: [{
            path: '/portal/category/manage/news/list',
            name: '就业新闻列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/news/Index')
          },
          {
            path: '/portal/category/manage/news/add',
            name: '就业新闻新增',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/news/Details')
          },
          {
            path: '/portal/category/manage/news/:id',
            name: '就业新闻编辑',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/news/Details')
          }
          ]
        },
        {
          path: '/portal/category/manage/employment',
          redirect: '/portal/category/manage/employment/list',
          name: '就业指导',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/employment/Panel'),
          children: [{
            path: '/portal/category/manage/employment/list',
            name: '就业指导列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/employment/Index')
          },
          {
            path: '/portal/category/manage/employment/add',
            name: '就业指导新建',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/employment/Details')
          },
          {
            path: '/portal/category/manage/employment/:id',
            name: '就业指导编辑',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/employment/Details')
          }
          ]
        },
        {
          path: '/portal/category/manage/activity',
          name: '就业活动',
          redirect: '/portal/category/manage/activity/list',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/activity/Panel'),
          children: [{
            path: '/portal/category/manage/activity/list',
            name: '就业活动列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/activity/Index')
          },
          {
            path: '/portal/category/manage/activity/add',
            name: '就业活动新建',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/activity/Details')
          },
          {
            path: '/portal/category/manage/activity/:id',
            name: '就业活动编辑',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/activity/Details')
          }
          ]
        },
        {
          path: '/portal/category/manage/information',
          name: '就业信息',
          redirect: '/portal/category/manage/information/list',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/information/Panel'),
          children: [{
            path: '/portal/category/manage/information/list',
            name: '就业信息列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/information/Index')
          },
          {
            path: '/portal/category/manage/information/add',
            name: '就业信息新增',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/information/Details')
          },
          {
            path: '/portal/category/manage/information/:id',
            name: '就业信息编辑',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/information/Details')
          }
          ]
        },
        {
          path: '/portal/category/manage/policy',
          name: '政策法规',
          redirect: '/portal/category/manage/policy/list',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/policy/Panel'),
          children: [{
            path: '/portal/category/manage/policy/list',
            name: '政策法规列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/policy/Index')
          },
          {
            path: '/portal/category/manage/policy/add',
            name: '政策法规新增',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/policy/Details')
          },
          {
            path: '/portal/category/manage/policy/:id',
            name: '政策法规编辑',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/policy/Details')
          }
          ]
        },
        {
          path: '/portal/category/manage/data',
          redirect: '/portal/category/manage/data/list',
          name: '资料下载',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/data/Panel'),
          children: [{
            path: '/portal/category/manage/data/list',
            name: '资料下载列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/data/Index')
          },
          {
            path: '/portal/category/manage/data/add',
            name: '资料下载新建',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/data/Details')
          },
          {
            path: '/portal/category/manage/data/:id',
            name: '资料下载编辑',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/data/Details')
          }
          ]
        },
        {
          path: '/portal/category/manage/specialty',
          name: '专业介绍',
          redirect: '/portal/category/manage/specialty/list',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/specialty/Panel'),
          children: [{
            path: '/portal/category/manage/specialty/list',
            name: '专业介绍列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/specialty/Index')
          },
          {
            path: '/portal/category/manage/specialty/add',
            name: '专业介绍新建',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/specialty/Details')
          },
          {
            path: '/portal/category/manage/specialty/:id',
            name: '专业介绍编辑',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/category/manage/specialty/Details')
          }
          ]
        }
        ]
      }
      ]
    },
    {
      path: '/portal/calendar',
      name: '活动日历管理',
      redirect: '/portal/calendar/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/calendar/Panel'),
      children: [{
        path: '/portal/calendar/list',
        name: '活动日历列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/calendar/Index')
      },
      {
        path: '/portal/calendar/add',
        name: '活动日历管理-新建',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/calendar/Details')
      },
      {
        path: '/portal/calendar/:id',
        name: '活动日历管理-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/portal/calendar/Details')
      }
      ]
    }
    ]
  },
  {
    path: '/recruiting',
    name: '招聘宣讲管理',
    redirect: '/recruiting/teachIn/unchecked',
    meta: {
      icon: 'icon-huiyishi',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/Panel'),
    children: [{
      path: '/recruiting/teachIn',
      name: '宣讲会管理',
      redirect: '/recruiting/teachIn/unchecked',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/teachIn/Panel'),
      children: [{
        path: '/recruiting/teachIn/unchecked',
        name: '宣讲会-待审核',
        redirect: '/recruiting/teachIn/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/teachIn/unchecked/Panel'),
        children: [{
          path: '/recruiting/teachIn/unchecked/list',
          name: '宣讲会-待审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/teachIn/unchecked/Index')
        },
        {
          path: '/recruiting/teachIn/unchecked/:id',
          name: '宣讲会-待审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/teachIn/unchecked/Details')
        }
        ]
      },
      {
        path: '/recruiting/teachIn/checked',
        name: '宣讲会-已审核',
        redirect: '/recruiting/teachIn/checked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/teachIn/checked/Panel'),
        children: [{
          path: '/recruiting/teachIn/checked/list',
          name: '宣讲会-已审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/teachIn/checked/Index')
        },
        {
          path: '/recruiting/teachIn/checked/:id',
          name: '宣讲会-已审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/teachIn/checked/Details')
        }
        ]
      }
      ]
    },
    {
      path: '/recruiting/jobFair',
      name: '供需见面会管理',
      redirect: '/recruiting/jobFair/info',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/Panel'),
      children: [{
        path: '/recruiting/jobFair/info',
        name: '供需见面会信息管理',
        redirect: '/recruiting/jobFair/info/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/info/Panel'),
        children: [{
          path: '/recruiting/jobFair/info/list',
          name: '供需见面会信息管理列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/info/Index')
        },
        {
          path: '/recruiting/jobFair/info/add',
          name: '供需见面会-新建',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/info/Details')
        },
        {
          path: '/recruiting/jobFair/info/:id',
          name: '供需见面会-编辑',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/info/Details')
        }
        ]
      },
      {
        path: '/recruiting/jobFair/unchecked',
        name: '供需见面会-待审核',
        redirect: '/recruiting/jobFair/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/unchecked/Panel'),
        children: [{
          path: '/recruiting/jobFair/unchecked/list',
          name: '供需见面会-待审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/unchecked/Index')
        },
        {
          path: '/recruiting/jobFair/unchecked/:id',
          name: '供需见面会-待审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/unchecked/Details')
        }
        ]
      },
      {
        path: '/recruiting/jobFair/checked',
        name: '供需见面会-已审核',
        redirect: '/recruiting/jobFair/checked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/checked/Panel'),
        children: [{
          path: '/recruiting/jobFair/checked/list',
          name: '供需见面会-已审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/checked/Index')
        },
        {
          path: '/recruiting/jobFair/checked/:id',
          name: '供需见面会-已审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/checked/Details')
        }
        ]
      },
      {
        path: '/recruiting/jobFair/count',
        name: '供需见面会-报名情况统计',
        redirect: '/recruiting/jobFair/count/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/count/Panel'),
        children: [{
          path: '/recruiting/jobFair/count/list',
          name: '供需见面会-报名情况列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/count/Index')
        },
        {
          path: '/recruiting/jobFair/count/:id',
          name: '供需见面会-报名情况详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/jobFair/count/Details')
        }
        ]
      }
      ]
    },
    {
      path: '/recruiting/activity',
      name: '就业活动管理',
      redirect: '/recruiting/activity/info',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/activity/Panel'),
      children: [{
        path: '/recruiting/activity/info',
        name: '就业活动信息管理',
        redirect: '/recruiting/activity/info/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/activity/info/Panel'),
        children: [{
          path: '/recruiting/activity/info/list',
          name: '就业活动信息管理列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/activity/info/Index')
        },
        {
          path: '/recruiting/activity/info/add',
          name: '就业活动信息管理列表-新建',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/activity/info/Details')
        },
        {
          path: '/recruiting/activity/info/:id',
          name: '就业活动信息管理列表-编辑',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/activity/info/Details')
        }
        ]
      },
      {
        path: '/recruiting/activity/count',
        name: '就业活动-报名情况统计',
        redirect: '/recruiting/activity/count/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/activity/count/Panel'),
        children: [{
          path: '/recruiting/activity/count/list',
          name: '就业活动-报名情况统计列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/activity/count/Index')
        },
        {
          path: '/recruiting/activity/count/:id',
          name: '就业活动-报名情况统计详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/recruiting/activity/count/Details')
        }
        ]
      }
      ]
    }
    ]
  },
  {
    path: '/company',
    name: '企业管理',
    redirect: '/company/info/list',
    meta: {
      icon: 'icon-qiyeguanli',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/Panel'),
    children: [{
      path: '/company/info',
      name: '企业信息管理',
      redirect: '/company/info/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/info/Panel'),
      children: [{
        path: '/company/info/list',
        name: '企业信息管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/info/Index')
      },
      {
        path: '/company/info/:id',
        name: '企业信息管理详情',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/info/Details')
      },
      {
        path: '/company/info/information/:id',
        name: '基本信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/info/Information')
      },
      {
        path: '/company/info/register/:id',
        name: '注册信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/info/Register')
      },
      {
        path: '/company/info/invoice/:id',
        name: '发票信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/info/Invoice')
      }
      ]
    },
    {
      path: '/company/position',
      name: '在线职位招聘管理',
      redirect: '/company/position/unchecked',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/position/Panel'),
      children: [{
        path: '/company/position/unchecked',
        name: '在线职位招聘管理-待审核',
        redirect: '/company/position/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/position/unchecked/Panel'),
        children: [{
          path: '/company/position/unchecked/list',
          name: '在线职位招聘管理-待审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/position/unchecked/Index')
        },
        {
          path: '/company/position/unchecked/:id',
          name: '在线职位招聘管理-待审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/position/unchecked/Details')
        }
        ]
      },
      {
        path: '/company/position/checked',
        name: '在线职位招聘管理-已审核',
        redirect: '/company/position/checked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/position/checked/Panel'),
        children: [{
          path: '/company/position/checked/list',
          name: '在线职位招聘管理-已审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/position/checked/Index')
        },
        {
          path: '/company/position/checked/:id',
          name: '在线职位招聘管理-已审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/position/checked/Details')
        }
        ]
      }
      ]
    },
    {
      path: '/company/enter',
      name: '企业入驻管理',
      redirect: '/company/enter/unchecked',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/Panel'),
      children: [{
        path: '/company/enter/unchecked',
        name: '企业入驻管理-待审核',
        redirect: '/company/enter/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/unchecked/Panel'),
        children: [{
          path: '/company/enter/unchecked/list',
          name: '企业入驻管理-待审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/unchecked/Index')
        },
        {
          path: '/company/enter/unchecked/:id',
          name: '企业入驻管理-待审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/unchecked/Details')
        }
        ]
      },
      {
        path: '/company/enter/checked',
        name: '企业入驻管理-已审核',
        redirect: '/company/enter/checked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/checked/Panel'),
        children: [{
          path: '/company/enter/checked/list',
          name: '企业入驻管理-已审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/checked/Index')
        },
        {
          path: '/company/enter/checked/:id',
          name: '企业入驻管理-已审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/checked/Details')
        },
        ]
      },
      {
        path: '/company/enter/binding',
        name: '企业入驻管理',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/binding/Panel'),
        children: [{
          path: '/company/enter/binding/list',
          name: '企业入驻管理-企业管理员微信绑定',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/company/enter/binding/Binding')
        }]
      }
      ],
    }
    ]
  },
  {
    path: '/student/protocol',
    name: '学生管理',
    meta: {
      icon: 'icon-xueshengguanli',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/Panel'),
    children: [{
      path: '/student/protocol',
      name: '学生事务审核管理',
      redirect: '/student/protocol/one/unchecked',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/Panel'),
      children: [{
        path: '/student/protocol/one/unchecked',
        name: '协议书管理-待审核',
        redirect: '/student/protocol/one/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/one/unchecked/Panel'),
        children: [{
          path: '/student/protocol/one/unchecked/list',
          name: '协议书管理-待审核-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/one/unchecked/Index')
        },
        {
          path: '/student/protocol/one/unchecked/:id',
          name: '协议书管理-待审核-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/one/unchecked/Details')
        },
        {
          path: '/student/protocol/one/unchecked/apply/:id',
          name: '协议书管理-待审核-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/one/unchecked/Apply')
        }
        ]
      },
      {
        path: '/student/protocol/one/checked',
        name: '协议书管理-已审核',
        redirect: '/student/protocol/one/checked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/one/checked/Panel'),
        children: [{
          path: '/student/protocol/one/checked/list',
          name: '协议书管理-已审核-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/one/checked/Index')
        },
        {
          path: '/student/protocol/one/checked/:id',
          name: '协议书管理-已审核-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/one/checked/Details')
        },
        {
          path: '/student/protocol/one/checked/apply/:id',
          name: '协议书管理-已审核-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/one/checked/Apply')
        }
        ]
      },
      {
        path: '/student/protocol/two/unchecked',
        name: '协议书管理-待审核',
        redirect: '/student/protocol/two/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/two/unchecked/Panel'),
        children: [{
          path: '/student/protocol/two/unchecked/list',
          name: '协议书管理-待审核-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/two/unchecked/Index')
        },
        {
          path: '/student/protocol/two/unchecked/:id',
          name: '协议书管理-待审核-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/two/unchecked/Details')
        }
        ]
      },
      {
        path: '/student/protocol/two/checked',
        name: '协议书管理-已审核',
        redirect: '/student/protocol/two/checked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/two/checked/Panel'),
        children: [{
          path: '/student/protocol/two/checked/list',
          name: '协议书管理-已审核-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/two/checked/Index')
        },
        {
          path: '/student/protocol/two/checked/:id',
          name: '协议书管理-已审核-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/two/checked/Details')
        }
        ]
      },
      {
        path: '/student/protocol/three/unchecked',
        name: '协议书管理-待审核',
        redirect: '/student/protocol/three/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/three/unchecked/Panel'),
        children: [{
          path: '/student/protocol/three/unchecked/list',
          name: '协议书管理-待审核-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/three/unchecked/Index')
        },
        {
          path: '/student/protocol/three/unchecked/:id',
          name: '协议书管理-待审核-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/three/unchecked/Details')
        }
        ]
      },
      {
        path: '/student/protocol/three/checked',
        name: '协议书管理-已审核',
        redirect: '/student/protocol/three/checked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/three/checked/Panel'),
        children: [{
          path: '/student/protocol/three/checked/list',
          name: '协议书管理-已审核-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/three/checked/Index')
        },
        {
          path: '/student/protocol/three/checked/:id',
          name: '协议书管理-已审核-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/protocol/three/checked/Details')
        }
        ]
      },
      ]
    },
    {
      path: '/student/info/list',
      name: '学生信息管理',
      redirect: '',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/info/Panel'),
      children: [{
        path: '/student/info/list',
        name: '学生信息管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/info/Index'),
      },
      {
        path: '/student/info/details/:id',
        name: '学生信息管理-基本信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/info/Details')
      },
      {
        path: '/student/info/dispatch/:id',
        name: '学生信息管理-派遣信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/info/Dispatch')
      },
      {
        path: '/student/info/information/:id',
        name: '学生信息管理-个人履历',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/info/Information')
      },
      {
        path: '/student/info/job/:id',
        name: '学生信息管理-就业信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/info/Job')
      },
      {
        path: '/student/info/record/:id',
        name: '学生信息管理-档案信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/info/Record')
      }
      ]
    },
    {
      path: '/student/employ/list',
      name: '学生应聘管理',
      redirect: '',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/employ/Panel'),
      children: [{
        path: '/student/employ/list',
        name: '学生应聘管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/employ/Index'),
      },
      {
        path: '/student/employ/details/:id',
        name: '学生应聘管理-企业信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/employ/Details')
      },
      {
        path: '/student/employ/job/:id',
        name: '学生应聘管理-岗位信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/employ/Job')
      },
      ]
    },
    {
      path: '/student/resume/list',
      name: '学生简历管理',
      redirect: '',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/resume/Panel'),
      children: [{
        path: '/student/resume/list',
        name: '学生简历管理列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/resume/Index'),
      },
      {
        path: '/student/resume/details/:id',
        name: '学生简历管理列表-个人信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/resume/Details'),
      },
      {
        path: '/student/resume/resume/:id',
        name: '学生简历管理-简历信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/resume/Resume'),
      },
      {
        path: '/student/resume/checkResume/:id',
        name: '学生简历管理-简历内容',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/student/resume/CheckResume')
      },


      ]
    }
    ]
  },
  {
    path: '/Informationist',
    name: '咨询师管理',
    redirect: '/Informationist/info/list',
    meta: {
      icon: 'icon-qiyeguanli',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/Panel'),
    children: [{
      path: '/Informationist/info',
      name: '咨询师信息管理',
      redirect: '/Informationist/info/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/info/Panel'),
      children: [{
        path: '/Informationist/info/list',
        name: '咨询师信息管理',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/info/Index')
      },
      {
        path: '/Informationist/info/:id',
        name: '咨询师信息管理详情',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/info/Details')
      }
      ]
    },
    {
      path: '/Informationist/position',
      name: '预约咨询师管理',
      redirect: '/Informationist/position/unchecked',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/position/Panel'),
      children: [{
        path: '/Informationist/position/unchecked',
        name: '学生预约咨询管理',
        redirect: '/Informationist/position/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/position/unchecked/Panel'),
        children: [{
          path: '/Informationist/position/unchecked/list',
          name: '学生预约咨询管理',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/position/unchecked/Index')
        },
        {
          path: '/Informationist/position/unchecked/:id',
          name: '学生预约咨询管理-详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/position/unchecked/Details')
        }
        ]
      },
      {
        path: '/Informationist/position/checked',
        name: '预约咨询师管理-待审核',
        redirect: '/Informationist/position/checked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/position/checked/Panel'),
        children: [{
          path: '/Informationist/position/checked/list',
          name: '预约咨询师管理-待审核列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/position/checked/Index')
        },
        {
          path: '/Informationist/position/checked/:id',
          name: '预约咨询师管理-待审核详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/Informationist/position/checked/Details')
        }
        ]
      }
      ]
    }
    ]
  },
  {
    path: '/subujest',
    name: '课程管理',
    redirect: '/subujest/protocol/unchecked',
    meta: {
      icon: 'icon-xueshengguanli',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/Panel'),
    children: [{
      path: '/subujest/protocol',
      name: '就业课程管理',
      redirect: '/subujest/protocol/unchecked/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/protocol/Panel'),
      children: [{
        path: '/subujest/protocol/unchecked',
        name: '就业课程管理',
        redirect: '/subujest/protocol/unchecked/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/protocol/unchecked/Panel'),
        children: [{
          path: '/subujest/protocol/unchecked/list',
          name: '就业课程管理',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/protocol/unchecked/Index')
        },
        {
          path: '/subujest/protocol/unchecked/add',
          name: '新增就业课程管理',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/protocol/unchecked/add')
        },
        {
          path: '/subujest/protocol/unchecked/:id',
          name: '就业课程管理-课程详情',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/protocol/unchecked/Details')
        }
        ]
      },
      ]
    },

    {
      path: '/subujest/employ',
      name: '教师信息管理',
      redirect: '/subujest/employ/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/employ/Panel'),
      children: [{
        path: '/subujest/employ/list',
        name: '教师信息管理',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/employ/Index')
      },
      {
        path: '/subujest/employ/:id',
        name: '教师信息管理-个人资料',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/subujest/employ/Details')
      },
      ]
    }
    ]
  },
  {
    path: '/template',
    name: '企业介绍模板管理',
    redirect: '/template/list',
    meta: {
      icon: 'icon-moban',
      children: false
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/template/Panel'),
    children: [{
      path: '/template/list',
      name: '企业介绍模板管理-列表',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/template/Index')
    },
    {
      path: '/template/add',
      name: '企业介绍模板管理-新建',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/template/Details')
    },
    {
      path: '/template/:id',
      name: '企业介绍模板管理-编辑',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/template/Details')
    }
    ]
  },
  {
    path: '/questionnaire',
    name: '调查问卷设置',
    redirect: '/questionnaire/list',
    meta: {
      icon: 'icon-shanghutiaochawenjuanbiao',
      children: false
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/questionnaire/Panel'),
    children: [{
      path: '/questionnaire/list',
      name: '调查问卷设置-列表',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/questionnaire/Index')
    },
    {
      path: '/questionnaire/add',
      name: '调查问卷设置-新建',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/questionnaire/Details')
    },
    {
      path: '/questionnaire/:id',
      name: '调查问卷设置-编辑',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/admin/questionnaire/Details')
    }
    ]
  },

  ]
}]

const companyRouter = [{
  path: '/',
  name: 'Layout',
  redirect: '/index',
  meta: {
    title: '广州大学就业管理系统'
  },
  component: Layout,
  children: [{
    path: '/index',
    name: '首页',
    meta: {
      icon: 'icon-home1',
      children: false
    },
    redirect: '/company/home/home',
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/Index'),
    children: [
      {
        path: '/company/home/home',
        name: '首页',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/home/Home')
      },
      {
        path: '/company/home/Online',
        name: '在线职位招聘',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/home/Online')
      },
      {
        path: '/company/home/processed',
        name: '待处理简历',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/home/processed')
      },
      {
        path: '/company/home/recruit',
        name: '招聘简历',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/home/recruit')
      },
    ],
  },
  {
    path: '/personal',
    name: '单位信息',
    meta: {
      icon: 'icon-gerenziliao',
      children: true
    },
    redirect: '/personal/information/basic',
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/Index'),
    children: [{
      path: '/personal/information/basic',
      name: '基本信息',
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/information/basic'),
      children: [{
        path: '/personal/information/detail',
        name: '基本信息-查看',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/information/Index')
      },
      {
        path: '/personal/information/change',
        name: '基本信息-修改',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/information/Change')
      }
      ]
    },
    {
      path: '/personal/license',
      name: '营业执照',
      redirect: '/personal/license/detail',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/license/Panel'),
      children: [{
        path: '/personal/license/detail',
        name: '营业执照-查看',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/license/Index')
      },
      ]
    },
    {
      path: '/personal/map',
      name: '电子地图',
      redirect: '/personal/map/detail',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/map/Panel'),
      children: [{
        path: '/personal/map/detail',
        name: '电子地图-查看',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/map/Index')
      },
      {
        path: '/personal/map/change',
        name: '电子地图-修改',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/map/Change')
      }
      ]
    },
    {
      path: '/personal/invoice',
      name: '发票信息',
      redirect: '/personal/invoice/detail',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/invoice/Panel'),
      children: [{
        path: '/personal/invoice/detail',
        name: '发票信息-查看',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/invoice/Change')
      },
        // {
        //   path: '/personal/invoice/change',
        //   name: '发票信息-修改',
        //   meta: {},
        //   component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/personal/invoice/Index')
        // }
      ]
    },

    ]
  },
  {
    path: '/recruit',
    name: '在线职位招聘管理',
    meta: {
      icon: 'icon-gerenziliao',
      children: true
    },
    redirect: '/recruit/position/list',
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/Panel'),
    children: [
      {
        path: '/recruit/position',
        name: '在线职位招聘管理',
        redirect: '/recruit/position/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/position/Panel'),
        children: [{
          path: '/recruit/position/list',
          name: '在线职位-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/position/Index')
        },
        {
          path: '/recruit/position/add',
          name: '在线职位-新增',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/position/Details')
        },
        {
          path: '/recruit/position/:id',
          name: '在线职位-修改',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/position/Details')
        }
        ]
      },
      {
        path: '/recruit/employ',
        name: '学生应聘管理',
        redirect: '/recruit/employ/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/employ/Panel'),
        children: [{
          path: '/recruit/employ/list',
          name: '学生应聘管理-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/employ/Index')
        },
        {
          path: '/recruit/employ/:id/:pr_id',
          name: '学生应聘管理-管理',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/employ/Details')
        }
        ]
      },
      {
        path: '/recruit/dowload',
        name: '已下载简历列表',
        redirect: '/recruit/dowload/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/dowload/Panel'),
        children: [{
          path: '/recruit/dowload/list',
          name: '已下载简历列表-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/dowload/Index')
        },
        {
          path: '/recruit/dowload/add',
          name: '已下载简历列表-新增',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/dowload/Details')
        },
        {
          path: '/recruit/dowload/:id',
          name: '已下载简历列表-修改',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/dowload/Details')
        },
        {
          path: '/recruit/interview',
          name: '面试管理',
          redirect: '/recruit/interview/list',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/interview/Panel'),
          children: [{
            path: '/recruit/interview/list',
            name: '面试管理-列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/interview/Index')
          },
          {
            path: '/recruit/interview/:id',
            name: '面试管理-管理',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/interview/Details')
          }
          ]
        }
        ]
      },
      {
        path: '/recruit/resume',
        name: '收藏简历',
        redirect: '/recruit/resume/Onlineresume',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/resume/index'),
        children: [{
          path: '/recruit/resume/Onlineresume',
          name: '收藏简历-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/resume/Onlineresume')
        },
        ]
      },
      {
        path: '/recruit/interview',
        name: '面试管理',
        redirect: '/recruit/interview/list',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/interview/Panel'),
        children: [{
          path: '/recruit/interview/list',
          name: '面试管理-列表',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/interview/Index')
        },
        {
          path: '/recruit/interview/:id',
          name: '面试管理-管理',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/recruit/interview/Details')
        }
        ]
      },
    ]
  },
  {
    path: '/meeting',
    name: '招聘宣讲管理',
    meta: {
      icon: 'icon-gerenziliao',
      children: true
    },
    redirect: '/meeting/teachIn/list',
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/meeting/Panel'),
    children: [{
      path: '/meeting/teachIn',
      name: '校园宣讲会',
      redirect: '/meeting/teachIn/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/meeting/teachIn/Panel'),
      children: [{
        path: '/meeting/teachIn/list',
        name: '校园宣讲会-申请列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/meeting/teachIn/Index')
      },
      {
        path: '/meeting/teachIn/add',
        name: '校园宣讲会-申请',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/meeting/teachIn/Details')
      },
      {
        path: '/meeting/teachIn/:id',
        name: '校园宣讲会-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/meeting/teachIn/Details')
      }
      ]
    },
    {
      path: '/meeting/jobFair',
      name: '校园招聘会',
      redirect: '/meeting/jobFair/list',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/meeting/jobFair/Panel'),
      children: [{
        path: '/meeting/jobFair/list',
        name: '营业执照-查看',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/meeting/jobFair/Index')
      },
      {
        path: '/meeting/jobFair/:id',
        name: '营业执照-修改',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/meeting/jobFair/Details')
      }
      ]
    }
    ]
  },
  {
    path: '/administration',
    name: '学校管理',
    redirect: '/administration/admission/list',
    meta: {
      icon: 'icon-shanghutiaochawenjuanbiao',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/administration/Panel'),
    children: [
      {
        path: '/administration/admission',
        name: '入驻学校列表',
        redirect: '/administration/admission/list',
        meta: {
          icon: 'icon-shanghutiaochawenjuanbiao',
          children: true
        },
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/administration/admission/Panel'),
        children: [
          {
            path: '/administration/admission/list',
            name: '入驻学校列表',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/administration/admission/Index')
          },
          {
            path: '/administration/admission/add',
            name: '入驻学校列表操作',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/administration/admission/Details')
          }
        ]
      },
      {
        path: '/administration/binding/list',
        name: '管理员微信绑定',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/administration/binding/Index')
      }
    ]
  },
  {
    path: '/survey',
    name: '调查问卷',
    redirect: '/survey/questionnaire/list',
    meta: {
      icon: 'icon-shanghutiaochawenjuanbiao',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/Panel'),
    children: [{
      path: '/survey/questionnaire',
      name: '调查问卷',
      meta: {},
      redirect: '/survey/questionnaire/list',
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/questionnaire/Panel'),
      children: [{
        path: '/survey/questionnaire/list',
        name: '调查问卷列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/questionnaire/Index')
      },
      {
        path: '/survey/questionnaire/add',
        name: '调查问卷-申请',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/questionnaire/Details')
      },
      {
        path: '/survey/questionnaire/:id',
        name: '调查问卷-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/questionnaire/Details')
      }
      ]
    },
    {
      // path: '/survey/proposal',
      // name: '投诉与建议',
      // meta: {},
      // redirect: '/survey/proposal/list',
      // component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/proposal/Panel'),
      // children: [{
      path: '/survey/proposal',
      name: '投诉与建议',
      meta: {},
      redirect: '/survey/proposal/list',
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/proposal/Panel'),
      children: [{
        path: '/survey/proposal/list',
        name: '投诉与建议列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/proposal/Index')
      },
      {
        path: '/survey/proposal/add',
        name: '投诉与建议-申请',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/proposal/Details')
      },
      {
        path: '/survey/proposal/:id',
        name: '投诉与建议-编辑',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/survey/proposal/Details')
      }
      ]
    }
    ]
  },
  {
    path: '/user/Index',
    name: '账户管理',
    redirect: '/user/data',
    meta: {
      icon: 'icon-shanghutiaochawenjuanbiao',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/user/Index'),
    children: [
      {
        path: '/user/data',
        name: '账户资料',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/user/data')
      },
      {
        path: '/user/password',
        name: '修改密码',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/user/password')
      },
      {
        path: '/user/postalcode',
        name: '邮政认证',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/company/user/postalcode')
      }
    ]
  },
  ]
}]

const counselRouter = [{
  path: '/',
  name: 'Layout',
  redirect: '/index',
  meta: {
    title: '广州大学就业管理系统'
  },
  component: Layout,
  children: [{
    path: '/index',
    name: '咨询中心',
    meta: {
      icon: 'icon-home1',
      children: false,
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/counsel/Index')
  },
  {
    path: '/user/Index',
    name: '账户管理',
    redirect: '/user/data',
    meta: {
      icon: 'icon-shanghutiaochawenjuanbiao',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/counsel/user/Panel'),
    children: [
      {
        path: '/user/data',
        name: '账户资料',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/counsel/user/data')
      },
      {
        path: '/user/password',
        name: '修改密码',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/counsel/user/password')
      }
    ]
  },
  {
    path: '/appoint/appointment',
    name: '预约管理',
    meta: {
      icon: 'icon-gerenziliao',
      children: true
    },
    component: () => import( /* webpackChunkName: "navigator" */ '@/views/counsel/appoint/Panel'),
    children: [{
      path: '/appoint/appointment',
      name: '我的预约',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/counsel/appoint/MyAppointment'),
    },
    {
      path: '/appoint/info',
      name: '咨询信息管理',
      meta: {},
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/counsel/appoint/AppointmentInfo'),
    }
    ]
  },
  ]
}]

const teacherRouter = [{
  path: '/',
  name: 'Layout',
  redirect: '/index',
  meta: {
    title: '广州大学就业管理系统'
  },
  component: Layout,
  children: [
    {
      path: '/index',
      name: '主界面',
      meta: {
        icon: 'icon-home1',
        children: false,
      },
      redirect: '/teacher/couresList',
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/Index')
    },
    {
      path: '/teacher/personalcentent/Index',
      name: '个人中心',
      meta: {
        icon: 'icon-gerenziliao',
        children: true
      },
      redirect: '/teacher/personalcentent/data',
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/personalcentent/Index'),
      children: [
        {
          path: '/teacher/personalcentent/data',
          name: '账号资料',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/personalcentent/data'),
        },
        {
          path: '/teacher/personalcentent/password',
          name: '修改密码',
          meta: {},
          component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/personalcentent/password'),
        },
      ]
    },
    {
      path: '/teacher/couresList',
      name: '就业指导课程管理',
      meta: {
        icon: 'icon-gerenziliao',
        children: true
      },
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/coures/Panel'),
      children: [{
        path: '/teacher/couresList',
        name: '课程列表',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/coures/CouresList'),
      },
        // {
        //   path: '/teacher/newCoures',
        //   name: '新增课程作业',
        //   meta: {},
        //   component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/coures/NewCoures'),
        // }
      ]
    },
    {
      path: '/info/infoList',
      name: '就业信息管理',
      meta: {
        icon: 'icon-gerenziliao',
        children: true
      },
      component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/info/Panel'),
      children: [{
        path: '/info/infoList',
        name: '学生就业信息',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/info/InfoList'),
      },
      {
        path: '/info/stuFollow',
        name: '学生就业跟进',
        meta: {},
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/teacher/info/StuFollow'),
      }
      ]
    },
  ]
}]

const error = [{
  path: '*',
  redirect: '/error'
}]

export default {
  addRoute(role) {
    router.addRoutes(error)
    store.commit('delPerson', true)
    store.commit('setLogin', true)
    store.commit('setRole', role)
    store.commit('setHaveLogin', true)
    if (role === 1) {
      router.addRoutes(adminRouter)
      store.commit('setList', adminRouter)
    } else if (role === 2) {
      router.addRoutes(companyRouter)
      store.commit('setList', companyRouter)
      store.commit('delPerson', false)
    } else if (role === 3) {
      router.addRoutes(studentRouter)
      store.commit('setList', studentRouter)
      store.commit('delPerson', false)
    } else if (role === 5) {
      router.addRoutes(counselRouter)
      store.commit('setList', counselRouter)
      store.commit('delPerson', false)
    } else if (role === 4) {
      router.addRoutes(teacherRouter)
      store.commit('setList', teacherRouter)
      store.commit('delPerson', false)
    }
  },
  addLogin(role) {
    store.commit('delPerson', true)
    store.commit('setLogin', true)
    store.commit('setRole', role)
    store.commit('setHaveLogin', true)
    if (role === 1) {
      store.commit('setList', adminRouter)
    } else if (role === 2) {
      store.commit('setList', companyRouter)
      store.commit('delPerson', false)
    } else if (role === 3) {
      store.commit('setList', studentRouter)
      store.commit('delPerson', false)
    } else if (role === 5) {
      store.commit('setList', counselRouter)
      store.commit('delPerson', false)
    } else if (role === 4) {
      store.commit('setList', teacherRouter)
      store.commit('delPerson', false)
    }
  }
}
