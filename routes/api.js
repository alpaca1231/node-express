const express = require('express')
const router = express.Router()

router.use(express.json()) // ブラウザからjsonを受け取るための設定

// 複数のオリジンからのリクエストを許可する場合
const originList = ['http://localhost:3000', 'http://site.example:3000']

router.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*') // クロスオリジンを許可
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // localhost:3000からのリクエストのみ許可

  // 複数のオリジンからのリクエストを許可する場合
  if (req.headers.origin && originList.includes(req.headers.origin)) {
    res.header('Access-Control-Allow-Origin', req.headers.origin) // 指定したオリジンからのリクエストのみ許可
  }
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'X-Token') // クロスオリジンで許可するヘッダー
  }
  next()
})

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
