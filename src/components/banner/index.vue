<template>
  <div >
      
      <router-link tag="button" :to="{name:'addbanner',params:{addid:id == '1' ?'1' : '2'}}" class="btn btn-success btn-lg">
        添加{{ id == "1" ?"首页" : "分类"}}轮播图
      </router-link>
      <br /><br />
       <div class="panel panel-default">
                        <div class="panel-heading">
                       {{ id == "1" ?"首页" : "分类"}}轮播图管理
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#序号</th>
                                            <th>名字</th>
                                            <th>手机号</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>111111111</td>
                                            <td>
                                              <button class="btn btn-warning btn-xs">加入黑名单</button>
                                              <button class="btn btn-danger btn-xs">删除</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
 
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>