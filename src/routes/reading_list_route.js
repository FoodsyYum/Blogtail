<<<<<<< HEAD
'use strict';
=======
'use strcit';
>>>>>>> f5ba7e1d463e4fc8df89636d2f84095739d80c6c

/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */
const { renderReadingList } = require('../controllers/reading_list_controller');

// GET route: Render the reading list page.
router.get(['/', '/page/:pageNumber'], renderReadingList);

module.exports = router;