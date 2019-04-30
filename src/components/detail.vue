<template>
    <el-form ref="form" :inline="true" :model="form" label-width="80px">
        <el-form-item label="单个体积">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="数量">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="总体积">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="单个重量">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="数量">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="总重量">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        
    </el-form>
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

<style>

</style>
