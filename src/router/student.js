import Layout from '../components/layout/Layout'

export const studentRouter = [
  {
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
          children: false
        },
        component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/index')
      },
      {
        path: '/student/personalcentent/Index',
        name: '个人中心',
        meta: {
          icon: 'icon-gerenziliao',
          children: true
        },
        redirect: '/student/personalcentent/data',
        component: () => import( /* webpackChunkName: "navigator" */ '@/views/student/personalcentent/Index'),
        children: [
          {
            path: '/student/personalcentent/data',
            name: '账号资料',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/student/personalcentent/data'),
          },
          {
            path: '/student/personalcentent/password',
            name: '修改密码',
            meta: {},
            component: () => import( /* webpackChunkName: "navigator" */ '@/views/student/personalcentent/password'),
          },
        ]
      },
      {
        path: '/personalinformation',
        name: '个人信息管理',
        meta: {
          icon: 'icon-gerenziliao',
          children: true
        },
        redirect: '/personalinformation/information/personal',
        component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/Index.vue'),
        children: [
          {
            path: '/personalinformation/information/personal',
            name: '基本信息',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/personal'),
          },
          {
            path: '/personalinformation/information/index',
            name: '个人履历',
            redirect: '/personalinformation/information/personalresume',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/Index'),
            children: [
              {
                path: '/personalinformation/information/personalresume',
                name: '个人履历',
                // redirect: '/personalinformation/information/imformation',
                meta: {
                },
                component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/personalresume'),
              },
              {
                path: '/personalinformation/information/setresume',
                name: '创建履历',
                // redirect: '/personalinformation/information/personal',
                meta: {
                },
                component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/setresume'),
              },
              {
                path: '/personalinformation/information/setresume/:id',
                name: '编辑履历',
                // redirect: '/personalinformation/information/personal',
                meta: {
                },
                component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/setresume'),
              },
            ]
          },
          {
            path: '/personalinformation/information/dispatch',
            name: '派遣信息',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/dispatch'),
          },
          {
            path: '/personalinformation/information/employment',
            name: '就业信息',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/employment'),
          },
          {
            path: '/personalinformation/information/confirmemployment',
            name: '就业信息核实',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/confirmemployment'),
          },
          {
            path: '/personalinformation/information/archives',
            name: '档案信息',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/personalinformation/information/archives'),
          },
        ]
      },
      {
        path: '/curriculum/archives',
        name: '就业课程',
        meta: {
          icon: 'icon-gerenziliao',
          children: false
        },
        component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/curriculum/archives'),
      },
      {
        path: '/transaction',
        name: '事务办理',
        meta: {
          icon: 'icon-gerenziliao',
          children: true
        },
        redirect: '/transaction/agreement',
        component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/transaction/Index.vue'),
        children: [
          {
            path: '/transaction/agreement',
            name: '协议书申请',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/transaction/agreement'),
          },
          {
            path: '/transaction/subsidy',
            name: '求职创业补助申请',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/transaction/subsidy'),
          },
          {
            path: '/transaction/activity',
            name: '项目活动管理',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/transaction/activity'),
          },
        ]
      },
      {
        path: '/resument',
        name: '简历管理',
        meta: {
          icon: 'icon-gerenziliao',
          children: true
        },
        redirect: '/resument/resument',
        component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/resument/Index.vue'),
        children: [
          {
            path: '/resument/resument',
            name: '创建新简历',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/resument/resument'),
          },
          {
            path: '/resument/children',
            name: '简历管理',
            meta: {
              icon: 'icon-gerenziliao',
              children: true
            },
            redirect: '/resument/resumentlist',
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/resument/children/Index.vue'),
            children: [
              {
                path: '/resument/resumentlist',
                name: '创建列表',
                meta: {
                  icon: 'icon-gerenziliao',
                  children: true
                },
                component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/resument/children/resumentlist.vue'),
              },
              {
                path: '/resument/resumentlist/detail/:id',
                name: '简历管理2',
                meta: {
                  icon: 'icon-gerenziliao',
                  children: true
                },
                component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/resument/children/detail.vue'),
              },
            ]
          }

        ],
      },
      {
        path: '/application',
        name: '应聘管理',
        meta: {
          icon: 'icon-gerenziliao',
          children: true
        },
        redirect: '/application/administration',
        component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/application/Index.vue'),
        children: [
          {
            path: '/application/administration',
            name: '投递应聘记录',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/application/administration'),
          },
        ]
      },
      {
        path: '/employmentactivities',
        name: '就业活动',
        meta: {
          icon: 'icon-gerenziliao',
          children: true
        },
        redirect: '/employmentactivities/activitymanagement',
        component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/employmentactivities/Index.vue'),
        children: [
          {
            path: '/employmentactivities/activitymanagement',
            name: '活动管理',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/employmentactivities/activitymanagement'),
          },
          {
            path: '/employmentactivities/lecture',
            name: '宣讲会',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/employmentactivities/lecture'),
          },
          {
            path: '/employmentactivities/recruitment',
            name: '招聘会',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/employmentactivities/recruitment'),
          },
        ]
      },
      {
        path: '/otherservices',
        name: '其他服务',
        meta: {
          icon: 'icon-gerenziliao',
          children: true
        },
        redirect: '/otherservices/investigation',
        component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/employmentactivities/Index.vue'),
        children: [
          {
            path: '/otherservices/investigation',
            name: '调查问卷',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/otherservices/investigation'),
          },
          {
            path: '/otherservices/appointment',
            name: '预约咨询',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/otherservices/appointment'),
          },
          {
            path: '/otherservices/evaluation',
            name: '职业测评',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/otherservices/evaluation'),
          },
          {
            path: '/otherservices/complaint',
            name: '投诉与建议',
            // redirect: '/personalinformation/information/personal',
            meta: {
            },
            component: () => import(/* webpackChunkName: "navigator" */ '@/views/student/otherservices/complaint'),
          },
        ]
      },
    ]
  }
]