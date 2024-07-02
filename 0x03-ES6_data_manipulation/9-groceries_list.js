/**
 * Retrieves a map of grocery names and their quantity.
 * @author Nason Mamu <https://github.com/nasonmamu>
 * @returns {Map<string, Number>}
 */
// 9-groceries_list.js

function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  
  return groceries;
}
export default groceriesList;
