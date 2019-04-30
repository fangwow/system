<template>
    <div class='login'>
        <el-form label-position="top" label-width="80px" class='form'>
            <h3>用户登录</h3>
            <el-form-item label="手机号">
                <el-input v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.pass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class='btn' @click='getData()'>登录</el-button>
            </el-form-item> 
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
       async getData(){
           
       }
    }
}
</script>

<style>
    .login {
        background: #324152;
        height: 100%;
        overflow: hidden;
    }
    .login .form {
        width: 400px;
        background: #fff;
        padding: 20px;
        margin: 100px auto;
        border-radius: 10px;
    }
    .btn {
        width: 400px;
    }
</style>
