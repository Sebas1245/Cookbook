const   express = require('express'),
        router = express.Router({ mergeParams: true }),
        asyncHandler = require('express-async-handler'),
        authCtr = require('./authCtr');

router.post('/register', asyncHandler(authCtr.register()));

router.post('/login', asyncHandler(authCtr.login()));

module.exports = router;