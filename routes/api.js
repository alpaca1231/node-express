const express = require('express')
const router = express.Router()

router.use(express.json()) // ブラウザからjsonを受け取るための設定

// GET /api
router.get('/', (req, res, next) => {
  res.send({ message: 'Hello' })
})

// POST /api
router.post('/', (req, res, next) => {
  const body = req.body
  console.log(body) // サーバー側のコンソールに表示
  res.end()
})

module.exports = router
