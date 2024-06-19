// Select the input and suggestions elements
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// List of fruits for autocomplete suggestions
const fruit = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry',
  'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry',
  'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan',
  'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit',
  'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit',
  'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry',
  'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo',
  'Tamarind', 'Yuzu'
];

// Function to search fruits based on input string
function search(str) {
  let results = [];
  const query = str.toLowerCase(); // Convert input string to lowercase

  // Filter fruits that include the query string
  results = fruit.filter(item => item.toLowerCase().includes(query));

  return results;
}

// Event handler for input keyup event
function searchHandler(e) {
  const inputVal = e.currentTarget.value; // Get input value
  const results = search(inputVal); // Get search results
  showSuggestions(results, inputVal); // Display suggestions
}

// Function to display suggestions in the dropdown
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ''; // Clear previous suggestions

  if (results.length > 0) {
    results.forEach(result => {
      const li = document.createElement('li'); // Create list item
      li.textContent = result; // Set list item text
      suggestions.appendChild(li); // Append list item to suggestions
    });
    suggestions.parentNode.classList.add('has-suggestions'); // Show suggestions container
  } else {
    suggestions.parentNode.classList.remove('has-suggestions'); // Hide suggestions container if no results
  }
}

// Event handler for click event on suggestions
function useSuggestion(e) {
  if (e.target.tagName === 'LI') { // Check if a list item was clicked
    input.value = e.target.textContent; // Set input value to clicked suggestion
    suggestions.innerHTML = ''; // Clear suggestions
    suggestions.parentNode.classList.remove('has-suggestions'); // Hide suggestions container
  }
}

// Add event listeners
input.addEventListener('keyup', searchHandler); // Handle input keyup events
suggestions.addEventListener('click', useSuggestion); // Handle click events on suggestions
