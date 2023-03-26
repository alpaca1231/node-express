const baseUrl = 'http://localhost:3000/api'
const crossOriginUrl = 'http://site.example:3000/api'

const get = document.getElementById('get')
const post = document.getElementById('post')
const crossOriginGet = document.getElementById('crossOriginGet')

get.addEventListener('click', async () => {
  // const res = await fetch(`${baseUrl}/?message=`, {
  //   headers: { 'x-lang': 'en' },
  // })
  // console.log(await res.json())

  // クロスオリジンでも同じようにリクエストできる確認のため
  const res = await fetch(`${baseUrl}`, {
    method: 'GET',
    headers: { 'X-Token': 'aBcDeF1234567890' },
  })
  console.log(res)
})

post.addEventListener('click', async () => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'こんにちは',
    }),
  })
})

crossOriginGet.addEventListener('click', async () => {
  const res = await fetch(`${crossOriginUrl}`, {
    method: 'GET',
    headers: { 'X-Token': 'aBcDeF1234567890' },
  })
  console.log(res)
})
