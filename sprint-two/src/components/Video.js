import React, { Component } from "react";
import posterImg from "../assets/Images/video-list-0.jpg";

class Video extends Component {
  render() {
    const videoUrl = `${this.props.video}${this.props.api_key}`;
    //Video player
    return (
      <main className="Video">
        <video
          className="Video__player"
          poster={posterImg}
          controls
          autoPlay
          src={videoUrl}
        />
      </main>
    );
  }
}

export default Video;
