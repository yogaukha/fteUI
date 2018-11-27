<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/fte-ui/logo-ui.png" alt="Logo UI">
        <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
        <span class="dashboard-ui">F T E&nbsp;&nbsp;&nbsp;<span class="ui-bold">UI</span></span>
        <span class="rectangle-2"></span>
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <!-- <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>
        <b-nav-item class="px-3">Settings</b-nav-item>
      </b-navbar-nav> -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <i class="fa fa-calendar"></i>
          <!-- <v-date-picker mode='range'
            v-model='selectedDate'>
          </v-date-picker> -->
        </b-nav-item>
        <b-nav-item-dropdown id="nav2_ddown" extra-toggle-classes="nav-link-custom" no-caret right>
          <template slot="button-content">
            <i class="fa fa-bell"></i>
            <b-badge pill variant="danger">7</b-badge>
          </template>
          <b-dropdown-header tag="div" class="text-center"><strong>Anda memiliki 7 pemberitahuan</strong></b-dropdown-header>
          <b-dropdown-item href="#"><i class="fa fa-thumbs-up"></i> FTE Disetujui</b-dropdown-item>
          <b-dropdown-item href="#"><i class="fa fa-thumbs-down"></i> FTE Ditolak</b-dropdown-item>
          <b-dropdown-item href="#">Lihat semua notifikasi</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <DefaultHeaderDropdownAccnt/> -->
      </b-navbar-nav>
      <!-- <AsideToggler class="d-none d-lg-block" /> -->
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <div class="sidebar-header">
          <b-img src="img/fte-ui/avatar.svg" center class="user-avatar"></b-img>
          <div class="user-username">Super Admin</div>
          <div class="user-action">
            <div class="user-password">
              <a href="#">
                <i class="icon-lock"></i><br>
                <div class="text-icon">Password</div>
              </a>
            </div>
            <div class="user-profile">
              <a href="#">
                <i class="icon-user"></i><br>
                <div class="text-icon">Profile</div>
              </a>
            </div>
            <div class="user-logout">
              <a href="#">
                <i class="icon-power"></i><br>
                <div class="text-icon">Logout</div>
              </a>
            </div>
          </div>
        </div>
        <!-- <SidebarHeader/> -->
        <!-- <SidebarForm/> --> 
        <SidebarNav :navItems="nav"></SidebarNav>
        <!-- <SidebarFooter/> -->
        <!-- <SidebarMinimizer/> -->
      </AppSidebar>
      <main class="main">
        <h1 class="title-page">{{title}}</h1>
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div class="text-footer">
        Hak Cipta &copy; <span class="text-bold">Universitas Indonesia</span>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    },
    title () {
      return this.$route.meta.title
    }
  }
}
</script>
