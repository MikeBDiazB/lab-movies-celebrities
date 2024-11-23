const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

// Render the create movie form
router.get('/create', (req, res) => {
  Celebrity.find()
    .then((celebrities) => res.render('movies/new-movie', { celebrities }))
    .catch((err) => console.error(err));
});

// Handle form submission
router.post('/create', (req, res) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({ title, genre, plot, cast })
    .then(() => res.redirect('/movies'))
    .catch(() => res.render('movies/new-movie'));
});

router.get('/', (req, res) => {
    Movie.find()
      .then((movies) => res.render('movies/movies', { movies }))
      .catch((err) => console.error(err));
  });
  
  router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
      .populate('cast')
      .then((movie) => res.render('movies/movie-details', { movie }))
      .catch((err) => console.error(err));
  });
  