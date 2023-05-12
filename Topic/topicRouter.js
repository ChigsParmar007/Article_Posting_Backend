const express = require('express')
const router = express.Router()
const { protect } = require('../Utils/authMiddleware')
const {
	createTopicMiddleware,
	updateTopicMiddleware,
} = require('./topicMiddleware')
const { createTopic, updateTopic, getAllTopics } = require('./topicController')

router.use(protect)

router.route('/').get(getAllTopics)

router.route('/').post(createTopicMiddleware, createTopic)

router.route('/:topicId').patch(updateTopic, updateTopicMiddleware)

module.exports = router
