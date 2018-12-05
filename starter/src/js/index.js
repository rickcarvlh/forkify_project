// controller
import str from './models/Search';
// import {
//     add as a,
//     multiply,
//     ID
// } from './views/SearchView';

import * as SearchView from './views/SearchView';

console.log(`Using imported functions! ${SearchView.add(SearchView.ID, 2)} and ${SearchView.multiply(3,5)}, ${str}`);