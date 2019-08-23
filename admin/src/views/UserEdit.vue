<template>

  <el-form @submit.native.prevent="onSubmit" ref="form" :model="userMsg" label-width="80px">
    <el-form-item label="姓名"  >
      <el-input v-model="userMsg.name" style="width:120px;"></el-input>
    </el-form-item>
    <el-form-item label="城市"  >
      <el-select v-model="userMsg.region" placeholder="请选择地址">
        <el-option label="中国" value="china"></el-option>
        <el-option label="外国" value="foreign"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出生日期" >
      <el-col :span="11">
        <el-date-picker type="month" placeholder="选择日期" v-model="userMsg.date1" style="width: 190px;"></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="我的签名" >
      <el-input type="textarea" v-model="userMsg.desc" style="width: 500px;"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form-item>

  </el-form>

  
</template>
<script>

export default {
  data() {
    return {
      userMsg: {
        name: "",
        region: "",
        date1: "",
        desc: ""
      },
      userid:'5d5f6a37ea24cb3cdc1ac5f3',
      user:[]
    };
  },
  methods: {
    fetch() {
      this.$http.get(`user`)
      .then(res => {
        this.user =res.data
        console.log(this.user)
      });
    },
    onSubmit() {
      this.$http
        .post("user", this.userMsg)
        .then(res => {
          this.userid=res.data._id
          
          console.log(res.data.name,this.userid);
          this.$message({
            message: "恭喜你，创建成功",
            type: "success"
          });
          this.fetch()
        })
        .catch(err => {
          console.log(err);
        });
        this.$router.push('/user')
    }

  }
};
</script>