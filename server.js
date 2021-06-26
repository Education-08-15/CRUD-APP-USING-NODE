const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

// log request using morgan
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, 'views/ejs'));

//load assests
app.use('/css', express.static(path.resolve(__dirname, 'assests/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assests/js')));
app.use('/img', express.static(path.resolve(__dirname, 'assests/img')));

// let route1 = express.Router();
// route1.get('/', (req, res, next) => {
//   res.send('crud app');
//   next();
// });

// let route2 = express.Router();
// route2.get('/home', (req, res, next) => {
//   res.send('home');
//   next();
// });

// let route3 = express.Router();
// route1.get('/page', (req, res, next) => {
//   res.status(200).json('page');
//   next();
// });

//load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
  console.log('server is running', PORT);
});
