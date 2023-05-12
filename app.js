const userRouter = require('./User/userRouter')
const topicRouter = require('./Topic/topicRouter')
const articleRouter = require('./Article/articleRouter')
const commentRouter = require('./Comment/commentRouter')
const followersRoute = require('./Followers/followersRoute')
const globleErrorHandler = require('./Utils/globleErrorHandler')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/user', userRouter)
app.use('/api/topic', topicRouter)
app.use('/api/article', articleRouter)
app.use('/api/comment', commentRouter)
app.use('/api/follow', followersRoute)

app.use(globleErrorHandler)

module.exports = app
