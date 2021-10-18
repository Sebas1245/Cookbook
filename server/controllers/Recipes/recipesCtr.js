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
    const { title, author, ingredients, steps, photoRef, category, description } = req.body; 
    const recipe = new Recipe({title, author, ingredients, steps, photoRef, category, description});
    try {
        await recipe.save();
        res.status(201).json({
            message: 'Recipe created successfully',
            recipe
        });
    } catch (e) {
        return Promise.reject(new CustomError(500, "Error saving new recipe to the database.", e))
    }
}


// READ ALL Recipes
ctr.getAll= () => async (req, res, next) =>  {
    const allRecipes = await Recipe.find({}).exec();
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
// CREATE Comment for Recipe
module.exports = ctr;