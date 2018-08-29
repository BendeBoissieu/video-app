import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

const API_KEY=

YTSearch({key: API_KEY, term: 'Benjamin de Boissieu'}, function(data) {console.log(data);
})


//const API_KEY
// Create a new component. This component should produce some html

const App = () => {
  return <div>
  <SearchBar />
   </div>;
};


// Generate this html and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
