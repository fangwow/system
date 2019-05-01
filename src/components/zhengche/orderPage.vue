<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <el-alert
                title="匹配成功"
                center
                type="success"
                show-icon
                :closable='false'
                effect="dark">
            </el-alert>
        </div>
        <div class="text item">
            <div class="detail">
                <p>从 <span>北京</span> 发往 <span>洪洞</span></p>
                <p><span>体积：1000立方米</span>    <span>重量: 1100kg</span>   <span>货物类型: 煤炭</span></p>
            </div>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="预算运费">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="保险费运">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="实际里程">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="合计">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="请选择支付方式">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in cities"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button type="primary">确认并支付</el-button>
        </div>
    </el-card>
</template>

<script>
export default {
    data(){
        return {
            form: {}
        }
    }
}
</script>

<style scoped>
    .box-card {
        height: 100%;
    }
    .detail {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 0 10px;
    }
    .detail p:last-child span {
        margin: 0 60px;
    }
    .el-input {
        width: 35%;
    }
    .el-select>.el-input {
        width: 150%;
    }
    .el-button {
        margin-left: 120px;
    }
</style>
