import Search from './models/Search';
import * as searchView from './views/SearchView';
import {
    elements
} from './views/base';
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
    const query = searchView.getInput();
    console.log(query); // TODO get query from view -> fixed

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

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();