const   express = require('express'),
        router = express.Router({ mergeParams: true }),
        asyncHandler = require('express-async-handler'),
        recipesCtr = require('./recipesCtr.js');

router.get('/s3url', asyncHandler(recipesCtr.getSecureS3Url()));

module.exports = router;