import React, { Component } from 'react';


// functionnal component
/*const SearchBar = () => {
  return <input />;
};*/

//lets refactoring with class based component

class SearchBar extends Component{
  //first function for a new instance of a class
  constructor(props){
    super(props);
    this.state = { term: ''};
  }

  render() {
    //single argument eventObject no need parenthesis
    return (
/*      exemple to see the value
      value={this.state.term}*/
      <div className="search-bar">
      <input
      onChange={eventObject =>  this.onInputChange(eventObject.target.value)} />
      <p>Your search is: {this.state.term}</p>
      </div>
      );
  }

// Refactoring onChange={this.onInputChange}
/*  onInputChange(eventObject) {
    console.log(eventObject.target.value);

  }*/

  //new method
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}


export default SearchBar;
