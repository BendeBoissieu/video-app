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
      <div>
      <input onChange={eventObject =>  this.setState({ term: eventObject.target.value})} />
      Value of the input: {this.state.term}
      </div>
      );
  }

// Refactoring onChange={this.onInputChange}
/*  onInputChange(eventObject) {
    console.log(eventObject.target.value);

  }*/

}


export default SearchBar;
