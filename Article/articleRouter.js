const express = require('express')
const router = express.Router()
const { protect } = require('../Utils/authMiddleware')
const {
	createArticleMiddleware,
	updateArticleMiddleware,
} = require('./articleMiddleware')
const {
	createArticle,
	updateArticle,
	deleteArticle,
	getAllArticles,
	getArticlesByTopic,
	getMostRecentArticles,
	getArticlesOfFollowingUsers,
} = require('./articleController')

router.use(protect)

router.route('/').post(protect, createArticleMiddleware, createArticle)

router
	.route('/:id')
	.patch(updateArticleMiddleware, updateArticle)
	.delete(deleteArticle)

router.route('/').get(getAllArticles)

router.route('/getArticlesOfFollowingUsers').get(getArticlesOfFollowingUsers)

router.route('/getMostRecentArticles/:number').get(getMostRecentArticles)

router.route('/:topicId').get(getArticlesByTopic)

module.exports = router
// export default router
