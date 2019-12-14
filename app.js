var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
require('./passport-init');

app.set('views', './views'); //место откуда берем шаблоны для render
app.set('view engine', 'pug');

app.use(require('./logging.js'));

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/react/dist'));
app.use(express.static('node_modules/react-dom/dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

var authRouter = require('./auth');
app.use(authRouter);

app.use(function(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    next();
    return;
  }
  res.redirect('/login');
});

app.get('/', function(request, response) {
  response.render('main', { title: 'FitPlan' });
});

var apiRouter = require('./api');
app.use('/api', apiRouter);

app.listen(3000, '127.0.0.1', () => {
  console.log(`Server is listening on localhost port 3000`);
});
