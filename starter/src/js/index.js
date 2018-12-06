import Search from './models/Search';

/**Global State of the app
 * - Search object
 * - Current Object
 * - Shopping list object
 * - Linked recipes
 */
const state = {};

// * async because we await bellow
const controlSearch = async () => {
    // 1) Get a query from the view
    const query = 'pizza' // TODO get query from the view

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results

        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI
        console.log(state.search.result);

    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();