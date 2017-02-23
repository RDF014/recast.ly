class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      listVideo: exampleVideoData
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }
  onListItemClick(obj) {
    this.setState({
      currentVideo: obj
    });
  }

  render() {
    return (
      <div>
        <Nav />
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



