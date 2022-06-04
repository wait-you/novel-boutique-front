import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // createWebHistory 路由模式路径不带#号(生产环境下不能直接访问项目，需要 nginx 转发)
  // createWebHashHistory 路由模式路径带#号
  history: createWebHashHistory(), 
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/feadback',
      name: 'feadback',
      component: () => import('@/views/FeadBack')
    },
    {
      path: '/news/:id',
      name: 'news',
      component: () => import('@/views/News')
    },
    {
      path: '/bookclass',
      name: 'bookclass',
      component: () => import('@/views/BookClass')
    },
    {
      path: '/book_rank',
      name: 'bookRank',
      component: () => import('@/views/BookRank')
    },
    {
      path: '/book/:id',
      name: 'book',
      component: () => import('@/views/Book')
    },
    {
      path: '/chapter_list/:bookId',
      name: 'chapterList',
      component: () => import('@/views/ChapterList')
    },
    {
      path: '/book/:id/:chapterId',
      name: 'bookContent',
      component: () => import('@/views/BookContent')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/UserPage'),
      children: [
        {
          path: '/user',
          redirect: '/user/user_info'
        },
        {
          path: 'setup',
          name: 'setup',
          component: () => import('@/views/user/setup/UserSetup'),
          children: [
            {
              path: '/user/setup',
              redirect: '/user/setup/user_setup'
            },
            {
              path: 'user_setup',
              name: 'user_setup',
              component: () => import('../components/user/setup/Setup')
            },
            {
              path: 'set_name',
              name: 'set_name',
              component: () => import('../components/user/setup/SetName')
            },
            {
              path: 'set_sex',
              name: 'set_sex',
              component: () => import('../components/user/setup/SetSex')
            },
            {
              path: 'set_password',
              name: 'set_password',
              component: () => import('../components/user/setup/SetPassword')
            }
          ]
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('@/views/user/feedback/FeedBack'),
          children: [
            {
              path: '/user/feedback',
              redirect: '/user/feedback/feedback_list'
            },
            {
              path: 'feedback_list',
              name: 'feedback_list',
              component: () => import('../components/user/feedback/FeedBackList')
            },
            {
              path: 'feedback_edit',
              name: 'feedback_edit',
              component: () => import('../components/user/feedback/FeedBackEdit')
            }
          ]
        },
        {
          path: 'comment',
          name: 'comment',
          component: () => import('@/views/user/comment/Comment'),
          children: [
            {
              path: '/user/comment',
              redirect: '/user/comment/comment_list'
            },
            {
              path: 'comment_list',
              name: 'comment_list',
              component: () => import('../components/user/comment/CommentList')
            }
          ]
        },
        {
          path: 'bookshelf',
          name: 'bookshelf',
          component: () => import('@/views/user/bookshelf/BookShelf'),
          children: [
            {
              path: '/user/bookshelf',
              redirect: '/user/bookshelf/bookshelf_list'
            },
            {
              path: 'bookshelf_list',
              name: 'bookshelf_list',
              component: () => import('../components/user/bookshelf/BookShelf')
            },
            {
              path: 'read_history',
              name: 'read_history',
              component: () => import('../components/user/bookshelf/ReadHistory')
            }
          ]
        },
        {
          path: 'user_info',
          name: 'user_info',
          component: () => import('@/views/user/info/UserInfo')
        }
      ]
    },
    {
      path: '/author_register',
      name: 'authorRegister',
      component: () => import('@/views/author/Register')
    },
    {
      path: '/author',
      name: 'author',
      component: () => import('@/views/author/AuthorPage'),
      children: [
        {
          path: 'author',
          redirect: '/author/book_list'
        },
        {
          path: 'book_list',
          name: 'authorBookList',
          component: () => import('@/views/author/BookList')
        },
        {
          path: 'book_add',
          name: 'authorBookAdd',
          component: () => import('@/views/author/BookAdd')
        },
        {
          path: 'chapter_list',
          name: 'authorChapterList',
          component: () => import('@/views/author/ChapterList'),
        },
        {
          path: 'chapter_add',
          name: 'authorChapterAdd',
          component: () => import('@/views/author/ChapterAdd'),
        },
        {
          path: 'chapter_update',
          name: 'authorChapterUpdate',
          component: () => import('@/views/author/ChapterUpdate'),
        },
        {
          path: 'author_income',
          name: 'authorIncome',
          component: () => import('@/views/author/AuthorIncome'),
        },
        {
          path: 'author_income_detail',
          name: 'authorIncomeDetail',
          component: () => import('@/views/author/AuthorIncomeDetail'),
        }
      ]
    },
  ]
})

// 解决 vue 中路由跳转时，总是从新页面中间开始显示
router.afterEach((to,from,next) => {
  window.scrollTo(0,0)
})

export default router