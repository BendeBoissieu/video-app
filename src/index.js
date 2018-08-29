import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';



const API_KEY = 'AIzaSyAXQLC_rYPx914X-BOWDNHCZ_BlC3XpK_c';
// Create a new component. This component should produce some html

const App = () => {
  return <div>
  <SearchBar />
   </div>;
};


// Generate this html and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
