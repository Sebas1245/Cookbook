const   express = require('express'),
        router = express.Router({ mergeParams: true }),
        asyncHandler = require('express-async-handler'),
        recipesCtr = require('./recipesCtr.js');

router.get('/recipes/s3url', asyncHandler(recipesCtr.getSecureS3Url()));

router.get('/recipes', asyncHandler(ctr.getAll()));

router.get('/recipes/:recipeId', asyncHandler(ctr.getOne()));

router.post('/recipes', asyncHandler(ctr.create()));

module.exports = router;