// controller
import str from './models/Search';
import {
    add,
    multiply,
    ID
} from './views/SearchView';

console.log(`Using imported functions! ${add(ID, 2)} and ${multiply(3,5)}, ${str}`);