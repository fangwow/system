<template>
    <el-card class="box-card">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">发货</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/zhengche' }">整车</el-breadcrumb-item>
            <el-breadcrumb-item>详细体积重量</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :inline="true" :model="form" label-width="80px">
            <el-form-item label="单个体积">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="数量">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-button>确定</el-button>
            <div>
                <el-form-item label="总体积">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </div>
            <el-form-item label="单个重量">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="数量">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-button>确定</el-button>
            <div>
                <el-form-item label="总重量">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </div>
            <div class="detail">
                <h2>详细</h2>
                <p>体积: 1) 100*100*100 *12 = 12000000</p>
                <p>重量: 1) 100*100*100 *12 = 12000000</p>
                <p>体积: 1) 100*100*100 *12 = 12000000</p>
                <p>重量: 1) 100*100*100 *12 = 12000000</p>
                <p>体积: 1) 100*100*100 *12 = 12000000</p>
                <p>重量: 1) 100*100*100 *12 = 12000000</p>
            </div>
            <el-button class='submit' type="primary" @click='back_btn()'>提交</el-button>
        </el-form>
    </el-card>
</template>

<script>
export default {
    data(){
        return {
            form: {}
        }
    },
    methods: {
        back_btn(){
            this.$router.push({
                name: 'zhengche'
            });
        }
    }
}
</script>

<style scoped>
    .box-card {
        height: 100%;
        overflow: auto;
    }
    .back_btn {
        margin-left: 10px;
    }
    .el-form {
        margin-top: 20px;
    }
    .el-form-item__content {
        width: 300px;
    }
    .detail {
        padding-left: 10px;
    }
    .detail h2 {
        padding-bottom: 10px;
    }
    .detail p {
        padding-left: 20px;
        line-height: 26px;
        font-size: 14px;
    }
    .submit {
        margin-top: 20px;
        margin-left: 30px;
    }
</style>
