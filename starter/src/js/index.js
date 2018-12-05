import axios from 'axios';

async function getResults(query) {
    const key = '2670d4c83d50b0c808cb22448ea081ab';
    // * save to const result and wait the result
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res);
}

getResults();



// api key
// 2670d4c83d50b0c808cb22448ea081ab
// https://www.food2fork.com/api/search