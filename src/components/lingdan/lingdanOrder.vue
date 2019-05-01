<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <p>从 <span>北京</span> 发往 <span>洪洞</span></p>
            <p><span>体积：1000立方米</span>    <span>重量: 1100kg</span>   <span>货物类型: 煤炭</span></p>
        </div>
        <div class="text item">
           <div>
               <el-alert
                    title="附近的货站"
                    type="info"
                    center
                    show-icon>
                </el-alert>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-radio-group v-model="radio3">
                        <el-radio label="1" border>备选项1</el-radio>
                        <el-radio label="2" border>备选项2</el-radio>
                        <el-radio label="3" border>备选项3</el-radio>
                    </el-radio-group>
                </el-form>
           </div>
           <div class='car'>
               <el-alert
                    title="附近的车"
                    type="info"
                    center
                    show-icon>
                </el-alert>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-radio-group v-model="radio3">
                        <el-radio label="1" border>上门取货</el-radio>
                        <el-radio label="2" border>拼货</el-radio>
                    </el-radio-group>
                    <el-radio-group v-model="radio3">
                        <el-radio label="1" border>备选项1</el-radio>
                        <el-radio label="2" border>备选项2</el-radio>
                        <el-radio label="3" border>备选项3</el-radio>
                    </el-radio-group>
                </el-form>
           </div>
           <el-button type="primary" class='submit' @click='submit()'>确认</el-button>
        </div>
        <el-dialog
            title="提交成功"
            :visible.sync="dialogVisibleItem"
            width="30%">
            <span>系统正在给你匹配</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitOrder()">确 定</el-button>
            </span>
        </el-dialog>
    </el-card>
</template>

<script>
export default {
    data(){
        return {
            form: {},
            dialogVisibleItem: false
        }
    },
    methods: {
        // 表单提交
        submit(){
            this.dialogVisibleItem = true;
        },
        // 提示确定
        submitOrder(){
            this.$router.push({
                name: 'shopDetail'
            });
        }
    }
}
</script>

<style scoped>
    .box-card {
        height: 100%;
    }
    .clearfix {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
    }
    .clearfix p:last-child span {
        margin: 0 60px;
    }
    .el-form {
        margin-top: 20px;
    }
    .car {
        margin-top: 40px;
    }
    .submit {
        margin: 120px auto 0;
        width: 300px;
        display: block;
    }
</style>
