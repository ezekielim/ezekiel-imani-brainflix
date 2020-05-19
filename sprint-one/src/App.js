import React, { Component } from "react";
import Nav from "./components/Nav";
import Video from "./components/Video";
import NextVideoList from "./components/NextVideoList";
import VideoInfo from "./components/VideoInfo";
import CommentsDisplay from "./components/CommentsDisplay";
import logo from "./BrainFlix-Sprint-1/Assets/Logo/Logo-brainflix.png";
import profilePicture from "./BrainFlix-Sprint-1/Assets/Images/Mohan-muruge.jpg";

import "./styles/App.css";
import "./styles/global.css";

//State Data is in index.js
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav logo={logo} profilePicture={profilePicture} />
        <Video />
        <div className="more-content">
          <div className="more-content__this-video">
            <VideoInfo mainVideo={this.props.mainVideo} />
            <CommentsDisplay
              profilePicture={profilePicture}
              userComments={this.props.userComments}
            />
            test
          </div>
          <aside className="more-content__next-videos">
            <NextVideoList sideVideo={this.props.sideVideo} />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
