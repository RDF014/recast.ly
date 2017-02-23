class App extends React.Component { 
  constructor(props) {
    super(props);

    this.currentVideo = exampleVideoData[0];
    this.state = {
      done: false
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }
  onListItemClick() {
    console.log('this', this);
    this.setState({
      done: !this.state.done
    });
  }

  handleClick(e) {
    // console.log( 'this is:', this);
  }

  render() {
    // console.log('video', this.currentVideo);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} videoChange={this.onListItemClick}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



