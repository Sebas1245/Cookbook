const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    ingredients: {
        type: [{
            type: String
        }],
        required: [true, "Ingredients are missing!"]
    },
    steps: {
        type: [{
            type: String
        }],
        required: [true, "Steps are missing!"]
    },
    photoRef: {
        type: String,
        required: [true, "Image url is missing!"]
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    comments: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }]
    },
    rating: {
        type: Number,
    },
    videoRef: {
        type: String,
    },
})

recipeSchema.path('rating').validate((value) => {
    return value >= 1 && value <= 5
}, "Rating must be a value between 1 and 5");

module.exports = mongoose.model('Recipe', recipeSchema);