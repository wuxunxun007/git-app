<template>
   <div id="wrapper">
        <nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">zz-1707</a>
            </div>

            <div class="header-right">

                <a href="message-task.html" class="btn btn-info" title="New Message"><b>30 </b><i class="fa fa-envelope-o fa-2x"></i></a>
                <a href="message-task.html" class="btn btn-primary" title="New Task"><b>40 </b><i class="fa fa-bars fa-2x"></i></a>
                <a href="login.html" class="btn btn-danger" title="Logout"><i class="fa fa-exclamation-circle fa-2x"></i></a>

            </div>
        </nav>
        <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
                    <li>
                        <router-link to="/"  ><i class="fa fa-dashboard "></i>后台首页</router-link>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-desktop "></i>产品管理<span class="fa arrow"></span></a>
                         <ul class="nav nav-second-level">
                            <li>
                                <router-link to="/product" ><i class="fa fa-toggle-on"></i>产品列表</router-link>
                            </li>
                            <li>
                                <a href="notification.html"><i class="fa fa-bell "></i>产品相关图片</a>
                            </li>
                             <li>
                                <a href="progress.html"><i class="fa fa-circle-o "></i>产品分类管理</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-desktop "></i>用户管理<span class="fa arrow"></span></a>
                         <ul class="nav nav-second-level">
                            <li>
                                <router-link to="/user"><i class="fa fa-toggle-on"></i>用户列表</router-link>
                            </li>
                            <li>
                                <a href="notification.html"><i class="fa fa-bell "></i>黑名单管理</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-desktop "></i>轮播图管理<span class="fa arrow"></span></a>
                         <ul class="nav nav-second-level">
                            <li>
                                <router-link to="/banner/1"><i class="fa fa-toggle-on"></i>首页轮播图</router-link>
                            </li>
                            <li>
                                <router-link to="/banner/2"><i class="fa fa-toggle-on"></i>分类轮播图</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </nav>
        <div id="page-wrapper">
              <router-view></router-view>
        </div>
    </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .router-link-active {
    background-color: #00CA79;
    color: #fff;
  }
</style>
