const express = require('express')
const server = express()
const port = 3000

"Accept"; "application/vnd.api+json",
"Content-Type"; "application/vnd.api+json"

const query = encodeURI('https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0')
const fetchAnimeByGenre = async () => {
  const data = await fetch(query, {method: 'GET', headers: { Accept: "application/vnd.api+json"}})
  const dataAsJson = await data.json()
  const genres = dataAsJson.data.map(x => x.attributes.genres)
  return genres
  //const titles = dataAsJson.data.map(x => x.attributes.titles.en)
  //return titles

  }

  server.get('/anime/genres/:name', async (req, res) => {
    const myAnime = await fetchAnimeByGenre()
    res.send(myAnime)
  })

// server.get('/anime/categories/:genre', async (req, res) => {
//   const myAnime = await fetchAnimeByGenre()
//   res.send(myAnime)
// })

server.post('/', (req, res) => {
  res.send('Got a POST request')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

