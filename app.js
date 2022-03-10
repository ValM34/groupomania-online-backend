const express = require('express');
const helmet = require("helmet");
const createError = require('http-errors');
require('dotenv').config()
const models = require('./models');
const jwt = require('jsonwebtoken');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Ajout socket.io

const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

app.use(index);



// fin test socket

const newsRoutes = require('./routes/news');
const commentsRoutes = require('./routes/comments');
const usersRoutes = require('./routes/users');
const likesRoutes = require('./routes/likes');

app.use(express.json()); // Cela sert à ce que les requêtent comme "req.body" soient comprises par le serveur

// app.use(helmet({ crossOriginResourcePolicy: false }));



// Body Parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const auth = require("./middleware/auth");
const { dirname } = require('path');

// ------------------------------ Routes ------------------------------

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/news', newsRoutes);
app.use('/news', commentsRoutes);
app.use('/users', usersRoutes);
app.use('/news', likesRoutes);

module.exports = app;