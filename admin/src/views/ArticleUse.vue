<template>
    <el-table :data="user">
    <el-table-column prop="name" label="姓名" width="140"></el-table-column>
    <el-table-column prop="region" label="地区" width="120"></el-table-column>
    <el-table-column prop="date1" label="出生日期" width="100"></el-table-column>
    <el-table-column prop="desc" label="我的签名" width="100"></el-table-column>

    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        
        <!-- <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button> -->
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      userMsg: {
      },
      userid:'5d5f77c43307375dbc55b817',
      user:[],
      
    };
  },
  methods: {
    
    remove(id) {
      this.$http.delete(`user/${id}`)
      .then(this.$message({
          message: '用户删除成功',
          type: 'success'
        }));
      this.fetch()
    },
    fetch() {

      this.$http.get(`user`)
      .then(res => {
        this.user =res.data
        console.log(this.user)
      });
    }
  },
  mounted() {
    this.fetch();
    console.log(this.user+"1")
  }
};
</script>