# Cookbook
Final project for Web Applications Development course at Tecnológico de Monterrey
## Table of Contents
1. [Overview](#Overview)
1. [Product Spec](#Product-Spec)
1. [Wireframes](#Wireframes)
2. [Schema](#Schema)

## Overview
### Description
Social media community where people can share their recipes and see recipes from other people to create a medium where people can connect through food.

## Product Spec

### 1. User Stories (Required and Optional)

**Required Must-have Stories**

* User can sign up for an account.
* User can login to their account.
* User can publish a recipe with ingredients and steps to follow. 
* User can add photos when publishing a recipe.
* User can optionally add a category to indicate the type of cuisine of the recipe.
* User can optionally add a brief description of the dish's history.
* User can view recipes published by other users in a global feed. 
* User can view details of the park including rating and photos of the court.
* User can comment on a recipe. 

**Optional Nice-to-have Stories**
* User can add a video when publishing a recipe. 
* User can add photos or videos when updating a recipe.
* User can add a rating to the recipe. 

### 2. Screen Archetypes

* Login Screen
   * User can login to their account with username and password. 
* Registration Screen
    * User can sign up for an account with an username and password.
* Home screen
   * User can view recipes from other users with a name, a photo and the user who published it, and the rating (nice to have). 
   * User can view a button to publish a new recipe. 
   * User can view a button to view the Recipe Detail Screen. 
* Publish New Recipe Screen
   * User is required to add a list of ingredients with their respective quantities. 
   * User is required to add a list of steps to follow. 
   * User is required to add at least one photo. 
   * User can optionally add a category, a dish history, or a video of how the recipe is prepared (the last item would be nice to have). 
* Recipe Detail Screen
    * User can view the ingredients and steps to follow to recreate the recipe.
    * User can view other user's comments. 
    * User can add their own comments. 
     



## Wireframes
TO BE DETERMINED 

## Schema 
### Models
The models detailed below were thought out considering the use of MongoDB, these models may change if another DB is used.  
#### User
| Property | Type | Description |
| -------- | ---- | ----------- |
| username | String | Username to identify a user, this field must be unique|
| password | String | password for user stored as a hash value |
| tokens | String Array | list of tokens used for session  and authorization | 

#### Recipe
| Property | Type | Description |
| -------- | ---- | ----------- |
| ingredients | String Array | Array of ingredients used for the recipe | 
| steps | String Array | Array of steps required to follow for the recipe |
| photoRef | String |  Url refeerence where the uploaded image will be stored, as it will not be stored on the database | 
| category | String | Indicator of the type of cuisine the recipe belongs to (optional) | 
| description | String | Description of the dish and it's history (optional) | 
| comments | Array | Array of objects of type Comment | 
| rating | Number | Number that stores the rating from 1 to 5, which changes depending on the ratings given by different users | 
| videoRef | String | Url refeerence where the uploaded video will be stored, as it will not be stored on the database (nice to have) | 

#### Comment
| Property | Type | Description |
| -------- | ---- | ----------- |
| text | String | Content of the comment |
| author | Object | Object that contains an id attribute and a username attribute. Id attribute references the automatically granted id when a user is created, username is used for the display name of the author | 

### Networking
- Courts Screen 
  - (Read/GET) 
  - (Read/GET) 
  - (Read/GET)  
- Courts Detail Screen
  - (Update/PUT)  
  - (Create/POST) 

