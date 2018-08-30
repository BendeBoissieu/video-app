import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY=




//const API_KEY
// Create a new component. This component should produce some html

class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos:[]};
    YTSearch({key: API_KEY, term: 'Benjamin de Boissieu'}, (videos) => {
      this.setState({videos});
      console.log(videos);
      //this.setState({videos: videos}) when key is equal to the propertie
    });
  }
  render(){
    return(
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
      );
  }
}



// Generate this html and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
