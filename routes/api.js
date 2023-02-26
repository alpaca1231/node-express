const express = require('express')
const router = express.Router()

router.use(express.json()) // ブラウザからjsonを受け取るための設定

// GET /api
router.get('/', (req, res, next) => {
  res.setHeader('X-TimeStamp', Date.now())
  let message = req.query.message
  const lang = req.headers['x-lang']
  if (message === '') {
    res.status(400)
    if (lang === 'en') {
      message = 'Message is empty'
    } else {
      message = 'メッセージが空です'
    }
  }
  res.send({ message })
})

// POST /api
router.post('/', (req, res, next) => {
  const body = req.body
  console.log(body) // サーバー側のコンソールに表示
  res.end()
})

module.exports = router
