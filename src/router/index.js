import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Views - Research
const ResearchList = () => import('@/views/research/ResearchList')
const ResearchView = () => import('@/views/research/ResearchView')
const ResearchForm = () => import('@/views/research/ResearchForm')

// Views - Initial Verification
const InitialVerifList = () => import('@/views/initial/InitialVerifList')
const InitialVerifView = () => import('@/views/initial/InitialVerifView')
const InitialVerifForm = () => import('@/views/initial/InitialVerifForm')

// Views - FTE Product Verification
const FteVerifList = () => import('@/views/fte-verif/FteVerifList')
const FteVerifView = () => import('@/views/fte-verif/FteVerifView')
const FteVerifForm = () => import('@/views/fte-verif/FteVerifForm')

// Views - FTE Product
const FteProductList = () => import('@/views/fte-product/FteProductList')
const FteProductView = () => import('@/views/fte-product/FteProductView')
const FteProductForm = () => import('@/views/fte-product/FteProductForm')

// Views - FTE Calculation
const FteCalcList = () => import('@/views/fte-calc/FteCalcList')
const FteCalcView = () => import('@/views/fte-calc/FteCalcView')
const FteCalcForm = () => import('@/views/fte-calc/FteCalcForm')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              meta: {title: 'Research Colors'},
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              meta: {title: 'Research Typography'},
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        },
        {
          path: '/research',
          redirect: '/research/research-list',
          name: 'Research',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'research-list',
              name: 'Research List',
              meta: {title: 'Research Product'},
              component: ResearchList
            },
            {
              path: 'research-view',
              name: 'View Research',
              meta: {title: 'Research Product'},
              component: ResearchView
            },
            {
              path: 'research-add',
              name: 'Add Research',
              meta: {title: 'Research Product'},
              component: ResearchForm
            }
          ]
        },
        {
          path: '/initial',
          redirect: '/initial/initial-verif-list',
          name: 'Initial Verification',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'initial-verif-list',
              name: 'Initial Verification List',
              meta: {title: 'Initial Verification'},
              component: InitialVerifList
            },
            {
              path: 'initial-verif-view',
              name: 'View Initial Verification',
              meta: {title: 'Initial Verification'},
              component: InitialVerifView
            },
            {
              path: 'initial-verif-edit',
              name: 'Edit Initial Verification',
              meta: {title: 'Initial Verification'},
              component: InitialVerifForm
            }
          ]
        },
        {
          path: '/fte-verif',
          redirect: '/fte-verif/fte-verif-list',
          name: 'FTE Product Verification',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'fte-verif-list',
              name: 'FTE Verification List',
              meta: {title: 'FTE Product Verification'},
              component: FteVerifList
            },
            {
              path: 'fte-verif-view',
              name: 'View FTE Verification List',
              meta: {title: 'FTE Product Verification'},
              component: FteVerifView
            },
            {
              path: 'fte-verif-edit',
              name: 'Edit FTE Product Verification',
              meta: {title: 'FTE Product Verification'},
              component: FteVerifForm
            }
          ]
        },
        {
          path: '/fte-product',
          redirect: '/fte-product/fte-product-list',
          name: 'FTE Product',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'fte-product-list',
              name: 'FTE Product List',
              meta: {title: 'FTE Product'},
              component: FteProductList
            },
            {
              path: 'fte-product-view',
              name: 'View FTE Product List',
              meta: {title: 'FTE Product'},
              component: FteProductView
            },
            {
              path: 'fte-product-edit',
              name: 'Edit FTE Product',
              meta: {title: 'FTE Product'},
              component: FteProductForm
            }
          ]
        },
        {
          path: '/fte-calc',
          redirect: '/fte-calc/fte-calc-list',
          name: 'FTE Calculation',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'fte-calc-list',
              name: 'FTE Calculation List',
              meta: {title: 'FTE Calculation'},
              component: FteCalcList
            },
            {
              path: 'fte-calc-view',
              name: 'View FTE Calculation List',
              meta: {title: 'FTE Calculation'},
              component: FteCalcView
            },
            {
              path: 'fte-calc-edit',
              name: 'Edit FTE Calculation',
              meta: {title: 'FTE Calculation'},
              component: FteCalcForm
            }
          ]
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
