import axios from 'axios';

async function getResults(query) {
    const key = '2670d4c83d50b0c808cb22448ea081ab';
    try {
        // * save to const result and wait the result
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        // only logging the recipes
        console.log(recipes);

    } catch (error) {
        alert(error);
    }
}

// it has to be a string
getResults('pizza');



// api key
// 2670d4c83d50b0c808cb22448ea081ab
// https://www.food2fork.com/api/search