'use strict';

/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */
const {
    renderSettings,
<<<<<<< HEAD
    updateBasicInfo,
    updatePassword,
    deleteAccount
=======
    updateBasicInfo
>>>>>>> f5ba7e1d463e4fc8df89636d2f84095739d80c6c
} = require('../controllers/settings_controller');

// GET route: Render the settings page.
router.get('/', renderSettings);

// PUT route: Update user basic info
router.put('/basic_info', updateBasicInfo);

<<<<<<< HEAD
// PUT route: Update user password.
router.put('/password', updatePassword);

// DELETE route: Delete user account.
router.delete('/account', deleteAccount);

=======
>>>>>>> f5ba7e1d463e4fc8df89636d2f84095739d80c6c

module.exports = router;