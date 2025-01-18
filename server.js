const express = require('express');
const morgan = require('morgan');
const Router = require('./Routes/Routers');

const app = express();

const port = process.env.PORT || 3000;



// middlewares for setting public folder and CORS
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', Router.Router)



// listing to a server
app.listen(port, (res, err) => {
    if (err){
        console.log(`Error starting server: ${err}`);
    }else{
        console.log(`Server is running on port ${port}`);
    }
})