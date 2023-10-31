var express = require('express');
var path = require('path');
var app = express();

// set up static asset serving
app.use(express.static(path.join(__dirname, 'public')));

// set the views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// include routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// start the server
app.listen(3005, () => {
    console.log('Server is running on port 3005');
});
