const express = require('express')
const server = express()
const port = 3000

//const query = encodeURI('https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0')
const fetchAnimeByGenre = async (genre) => {
  try {
    const response = await fetch(`https://kitsu.io/api/edge/anime?filter[categories]=${genre}`);
    if (!response.ok) {
      throw new Error('Ya dun goofed dur son!');
    }
  const data = await response.json()
  const genres = data.data.map(anime => anime.attributes.canonicalTitle)
  return genres;
  }
  catch (error) {
    console.error(error);
  }
  
  //const titles = dataAsJson.data.map(x => x.attributes.titles.en)
  //return titles

  }

  server.get('/anime/genres/:name', async (req, res) => {
    const genreName = req.params.name;
    const myAnime = await fetchAnimeByGenre(genreName)
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

