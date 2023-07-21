const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());


/* OBS: Algumas variáveis estão iguais ao do gabarito porque eu precisei
pegar algumas partes da lógica onde travei */

const moviesPath = path.resolve(__dirname, 'movies.json');

async function readJSON() {
  try {
    const content = await fs.readFile(moviesPath, 'utf-8');
    return JSON.parse(content);
  } catch(error) {
    console.error(`Arquivo não pôde ser lido: ${error.message}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readJSON();
    const { id } = req.params;  
    const requiredMovie = movies.find((movie) => movie.id === Number(id));
    return res.status(200).json(requiredMovie);
  } catch {
    res.status(500).send({ message: error.message });
  }
  
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await readJSON();
    return res.status(200).json(movies);
  } catch {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    // Primeiro, recuperei o nome e o preço que veio por uma requisição de corpo
    const { movie, price } = req.body;
    // Depois, recuperei todos os filmes que já estavam salvos no arquivo JSON
    const movies = await readJSON();
    // Por fim, criei um novo filme com o id igual ao tamanho do array de filmes + 1
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price
    };
    // Adicionei o novo filme ao array de filmes
    const allMovies = JSON.stringify([...movies, newMovie]);
    // Salvei o array de filmes no arquivo JSON
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readJSON();
    const movieToUpdate = movies.find((movie) => movie.id === Number(id));
    if (!movieToUpdate) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    movieToUpdate.movie = movie;
    movieToUpdate.price = price;
    const allMovies = JSON.stringify(movies);
    await fs.writeFile(moviesPath, allMovies);
    res.status(200).json(movieToUpdate);
  } catch {
    res.status(500).send({ message: error.message });
  }
})

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readJSON();
    const updatedMovies = movies.filter((movie) => movie.id !== Number(id));
    const allMovies = JSON.stringify(updatedMovies);
    await fs.writeFile(moviesPath, allMovies);
    res.status(200).end();
  } catch {
    res.status(500).send({ message: error.message });
  }
})

module.exports = app;