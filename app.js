'use strict';

/**
 * node modules
 */

const express = require('express');
require('dotenv').config();
const session = require('express-session');
const MongoStore = require('connect-mongo');

/**
 * custom modules
 */

const register = require('./src/routes/register_route');
const login = require('./src/routes/login_route');
const { connectDB, disconnectDB } = require('./src/config/mongoose_config');
const home = require('./src/routes/home_route');

/**
 * Initial express
 */

const app = express();

/**
 * setting view engine
 */

app.set('view engine', 'ejs');

/**
 * set oublic directory
 */

app.use(express.static(`${__dirname}/public`));

/**
 * parse urlencoded body
 */

app.use(express.urlencoded({ extended: true }));

/**
 * instance for session storage
 */
const store = new MongoStore({
    mongoUrl: process.env.MONGO_CONNECTION_URI,
    collectionName: 'sessions',
    dbName: 'blogtail'
});

/**
 * initial express sessopm
 */

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
        maxAge: Number(process.env.SESSION_MAX_AGE),
    }
}));

/**
 * register page
 */
app.use('/register', register);

/**
 * login page
 */
app.use('/login', login);

/**
 * Home page
 */

app.use('/', home);

/**
 * start server
 */

// const PORT = process.env.PORT || 3000;
const server = app.listen('/', async () => {
    console.log(`Server started on http://localhost:${PORT}`);

    await connectDB(process.env.MONGO_CONNECTION_URI);
});

server.on('close', async () => await disconnectDB());