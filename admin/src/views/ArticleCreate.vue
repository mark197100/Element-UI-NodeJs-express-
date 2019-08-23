<template>
  <el-form @submit.native.prevent='saveArticle' ref="form" :model="article" label-width="80px">
    <el-form-item label="文章名称">
      <el-input v-model="article.title" ></el-input>
    </el-form-item>
    
    <el-form-item label="内容">
      <el-input type="textarea" v-model="article.body" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {
        
      }
    };
  },
  methods: {
    saveArticle() {
      this.$http.post('articles',this.article)
      .then(res=>{console.log(res.data)})
      this.$message({
          message: '恭喜你，创建成功',
          type: 'success'
        });
        this.$router.push('/list')
    }
  }
};
</script>
