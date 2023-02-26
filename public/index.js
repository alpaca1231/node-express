const baseUrl = 'http://localhost:3000/api'

const get = document.getElementById('get')
const post = document.getElementById('post')

get.addEventListener('click', async () => {
  const res = await fetch(`${baseUrl}/?message=`, {
    headers: { 'x-lang': 'en' },
  })
  console.log(await res.json())
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
