import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    // ! asyncrounous method
    // no parameter we will always read from the object "this"
    async getResults() {
        const key = '2670d4c83d50b0c808cb22448ea081ab';
        try {
            // * save to const result and wait the result
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            // const recipes = res.data.recipes; -> old
            this.result = res.data.recipes;
            // console.log(this.result);

        } catch (error) {
            alert(error);
        }
    }
}