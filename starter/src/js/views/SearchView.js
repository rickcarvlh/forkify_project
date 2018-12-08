import {
    elements
} from './base';

// same as return
export const getInput = () => elements.searchInput.value;

// just get one recipe
const renderRecipe = recipe => {

} 

// get all of the recipes
export const renderResults = recipes => {
    recipes.foreach(renderRecipe)
}