const express    = require('express');
const morgan     = require('morgan');
const Router     = require('./Routes/Routers');
const app        = express();
const path       = require('path');

const port = process.env.PORT || 3000;


// middlewares for setting public folder and CORS
app.use(express.static('public'));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', Router.Router)




// listing to a server
app.listen(port, (res, err) => {
    err ? console.log(`Error starting server: ${err}`) : console.log(`Portfolio server is running on port ${port}...`);
})