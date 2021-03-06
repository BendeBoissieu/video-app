import _ from 'lodash'; //lodash allow to don t refresh the page on every search
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';


const API_KEY='';




//const API_KEY
// Create a new component. This component should produce some html

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null
    };
    //initialization of videoSearch
    this.videoSearch('Benjamin de Boissieu');
   }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

      //this.setState({videos: videos}) when key is equal to the propertie
    });

  }
  render(){
    const videoSearch =_.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
      <Title />
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
      </div>
      );
  }
}



// Generate this html and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
