class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      listVideo: []
    };
    this.onListItemClick = this.onListItemClick.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
  }
  onListItemClick(obj) {
    this.setState({
      currentVideo: obj
    });
  }

  videoSearch(text) {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: text, max: 5}, (videos) => {
      this.setState({
        listVideo: videos,
        currentVideo: videos[0]
      });
    });
  }

  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'Dogs', max: 5}, (videos) => {
      this.setState({
        listVideo: videos
      });
    });
  }

  render() {
    return (
      <div>
        <Nav videoSearch={this.videoSearch}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.listVideo} videoChange={this.onListItemClick}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



