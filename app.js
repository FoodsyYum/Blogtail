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
const createBlog = require('./src/routes/create_blog_route');
const logout = require('./src/routes/logout_route');
const userAuth = require('./src/middlewares/user_auth_middleware');
const blogDetail = require('./src/routes/blog_detail_route');
const readingList = require('./src/routes/reading_list_route');
const blogUpdate = require('./src/routes/blog_update_route');
const profile = require('./src/routes/profile_route');
const dashboard = require('./src/routes/dashboard_route');
const deleteBlog = require('./src/routes/blog_delete_route');
const settings = require('./src/routes/settings_route');

/**
 * Initial express
 */

const app = express();

/**
 * setting view engine
 */

app.set('view engine', 'ejs');

/**
 * set public directory
 */

app.use(express.static(`${__dirname}/public/`));

/**
 * parse urlencoded body
 */

app.use(express.urlencoded({ extended: true }));

/**
 * parse json bodies
 */

app.use(express.json({ limit: '10mb' }));

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
 * sign out
 */
app.use('/logout', logout);

/**
 * Home page
 */

app.use('/', home);

/**
 * blog detail page
 */
app.use('/blogs', blogDetail);

/**
 * profile page
 */
app.use('/profile', profile);

/**
 * user authorization
 */
app.use(userAuth);

/**
 * create blog page
 */

app.use('/createblog', createBlog);

/**
 * reading list page
 */
app.use('/readingList', readingList);

/**
 * blog update and blog delete
 */
app.use('/blogs', blogUpdate, deleteBlog);

/** 
 * dshboard
 */
app.use('/dashboard', dashboard);

/**
 * settings page
 */
app.use('/settings', settings);

/**
<<<<<<< HEAD
 * 404 page
 */

app.get('*', (req, res) => {
    res.status(404).render('./pages/404');
});

/**
=======
>>>>>>> f5ba7e1d463e4fc8df89636d2f84095739d80c6c
 * start server
 */

const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
const server = app.listen(PORT, async () => {
=======
const server = app.listen(3000, '0.0.0.0', async () => {
>>>>>>> f5ba7e1d463e4fc8df89636d2f84095739d80c6c
    console.log(`Server started on http://localhost:${PORT}`);

    await connectDB(process.env.MONGO_CONNECTION_URI);
});

server.on('close', async () => await disconnectDB());