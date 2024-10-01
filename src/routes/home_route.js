'use strict';

/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */

const renderHome = require('../controllers/home_controller');

// GET route: Render the home page.
router.get('/', renderHome);

module.exports = router;