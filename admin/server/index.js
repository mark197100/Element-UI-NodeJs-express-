const express = require('express');
const app = express();

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin', { useNewUrlParser: true })
const Article = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    body: { type: String }
}))

app.get('/', async (req, res) => {
    res.send('yes')
})
//新增文章
app.post('/api/articles', async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})
//文章列表
app.get('/api/articles', async (req, res) => {
    const articles = await Article.find()
    res.send(articles)
})
//删除文章
app.delete('/api/articles/:id',async(req,res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    })
})
//文章详情
app.get('/api/articles/:id',async(req,res) => {
    const article =await Article.findById(req.params.id)
    res.send(article)
})
//修改文章
app.put('/api/articles/:id',async(req,res) => {
    const article =await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article)
})


mongoose.connect('mongodb://localhost:27017/element-user', { useNewUrlParser: true })
const user = mongoose.model('user', new mongoose.Schema({
    name: { type: String },
    region: { type: String },
    date1:{ type:String },
    desc: { type: String }
}))
//提交个人信息
app.post('/api/user', async (req, res) => {
    const userMsg = await user.create(req.body)
    res.send(userMsg)
})
//获取个人信息
app.get('/api/user', async (req, res) => {
    const userMsg = await user.find()
    res.send(userMsg)
})
//删除文章
app.delete('/api/user/:id',async(req,res) => {
    await user.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    })
})


app.listen(3003, () => {
    console.log('http://localhost:3003/')
})