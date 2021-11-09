const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const actorsRoutes = require('./routes/actorsRoutes'); 
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/actors', actorsRoutes)
app.use('/movies', moviesRoutes);
app.use('/genres', genresRoutes);


const port = 3001
app.listen(port, () => console.log('Servidor corriendo en http://localhost:' + port));
