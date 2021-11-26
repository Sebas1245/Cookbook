const   Recipe = require('../../models/Recipe'),
        Comment = require('../../models/Comment'),
        CustomError = require('../../middleware/customError'),
        awsS3Utils = require('../../services/s3')
        ctr = {};

ctr.getSecureS3Url = () => async (req, res, next) => {
    const url = await awsS3Utils.generateUploadURL();
    res.status(200).json({url});
}

/* START  Recipes CRUD */

// CREATE Recipe 
ctr.create = () => async (req, res, next) => {
    const author = {
        id: req.user.id,
        username: req.user.username
    };
    const { title, ingredients, steps, photoRef, category, description } = req.body; 
    if (ingredients.length === 0) 
        return Promise.reject(new CustomError(409, "You must add ingredients to the recipe"));
        if (steps.length === 0) 
        return Promise.reject(new CustomError(409, "You must add steps to the recipe"));
    console.log(title, ingredients, steps, photoRef, category, description)
    const recipe = new Recipe({title, author, ingredients, steps, photoRef, category, description});
    await recipe.save();
    res.status(201).json({
        message: 'Recipe created successfully',
        recipe
    });
}

// READ ALL Recipes
ctr.getAll = () => async (req, res, next) =>  {
    const allRecipes = await Recipe.find({}).sort({createdAt: -1}).exec();
    res.status(200).json({allRecipes});
}
// READ ONE Recipe
ctr.getOne = () => async (req, res, next) => {
    const { recipeId } = req.params;
    const recipe  = await Recipe.findById({_id: recipeId}).exec();
    if (!recipe) {
        return Promise.reject(new CustomError(404, "Recipe not found"));
    } else {
        res.status(200).json({recipe});
    }
}

// UPADTE Recipe

// DELETE Recipe 

/*END Recipes CRUD*/

// UPDATE Recipe with a new Comment
ctr.updateRecipeComments = () => async (req, res, next) => {
    const author = {
        id: req.user.id,
        username: req.user.username
    };
    const { commentText, recipeId } = req.body;
    const comment = new Comment({text: commentText, author});
    await comment.save();
    const updatedRecipe = await Recipe.findOneAndUpdate({_id: recipeId}, {$push: { "comments": comment } } ).exec();
    if (!updatedRecipe) return Promise.reject(new CustomError(500, "Error saving new comment to the database.", e));
    const comments  = (await Recipe.findById({_id: recipeId}).populate("comments").exec()).comments;
    comments.sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    res.status(201).json({comments});
}

// GET Comments for a Recipe 
ctr.getRecipeComments = () => async (req, res, next) => {
    const { recipeId } = req.params;
    const comments  = (await Recipe.findById({_id: recipeId}).populate("comments").exec()).comments;
    console.log(comments);
    comments.sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    res.status(200).json({comments});
}

module.exports = ctr;