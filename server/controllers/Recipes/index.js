const   express = require('express'),
        router = express.Router({ mergeParams: true }),
        asyncHandler = require('express-async-handler'),
        { isLoggedIn } = require('../../middleware/checkAuth'), 
        recipesCtr = require('./recipesCtr.js');

router.get('/recipes/s3url', asyncHandler(isLoggedIn), asyncHandler(recipesCtr.getSecureS3Url()));

router.get('/recipes', asyncHandler(isLoggedIn), asyncHandler(ctr.getAll()));

router.get('/recipes/:recipeId', asyncHandler(isLoggedIn), asyncHandler(ctr.getOne()));

router.post('/recipes', asyncHandler(isLoggedIn), asyncHandler(ctr.create()));

router.put('/recipes/comments', asyncHandler(isLoggedIn), asyncHandler(ctr.updateRecipeComments()));

router.get('/recipes/comments/:recipeId', asyncHandler(isLoggedIn), asyncHandler(ctr.getRecipeComments()));

module.exports = router;