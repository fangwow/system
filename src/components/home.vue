<template>
    <el-container class="wrap">
        <el-header class='header'>
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
                <el-col :span="14">
                    <div class="grid-content bg-purple-light">
                        <h1>小强智配货主端系统</h1>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <span>xxx,您好,欢迎登陆</span>
                        <span><a href="#">退出</a></span>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px" class='aside'>
                <el-menu
                    default-active="/admin"
                    class="el-menu-vertical-demo"
                    unique-opened
                    router
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-location"></i>发货</template>
                        <el-menu-item index="/zhengche"><i class="el-icon-menu"></i>整车</el-menu-item>
                        <el-menu-item index="/users"><i class="el-icon-menu"></i>零担</el-menu-item>
                        <el-menu-item index="/users"><i class="el-icon-menu"></i>拼车</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-location"></i>订单</template>
                        <el-menu-item index="roles"><i class="el-icon-menu"></i>角色列表</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class='main'>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {

}
</script>

<style>
    .wrap {
        height: 100%;
    }
    .header {
        background: #242F42;
    }
    .el-header {
        padding: 0;
    }
    .el-icon-self:before {
        content: ''
    }
    .header .grid-content h1 {
        color: #fff;
        text-align: center;
        line-height: 60px;
    }
    .grid-content {
        display: flex;
        justify-content: space-around;
        line-height: 60px;
        color: #fff;
    }
    .aside {
        height: 100%;
    }
    .el-menu {
        height: 100%;
    }
    .main {
        background: #ccc;
    }
</style>
