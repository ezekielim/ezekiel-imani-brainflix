import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import Video from "./Video";
import VideoInfo from "./VideoInfo";
import NextVideoList from "./NextVideoList";
import CommentsDisplay from "./CommentsDisplay";
import logo from "../assets/Logo/Logo-brainflix.png";
import profilePicture from "../assets/Images/Mohan-muruge.jpg";

//After registering the API gave the following authentication key
const api_key = "?api_key=3e9f3c01-1370-4a87-adea-cd8d87a01a36";
const videosUrl = `https://project-2-api.herokuapp.com/videos/${api_key}`;
const defaultVideo = "1af0jruup5gu"; //The specific Id for the default video

const mainVideoUrl = (id) =>
  `https://project-2-api.herokuapp.com/videos/${id}?api_key=${api_key}`;

class Home extends Component {
  state = {
    videos: [],
    commentList: [],
    mainVideo: null,
  };

  //API FOR VIDEO SECTION
  componentDidMount() {
    axios
      .get(videosUrl)
      .then((res) => {
        console.log(res);
        this.setState({
          videos: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        const propsId = this.props.match.params.id;
        const videoId = propsId ? propsId : defaultVideo;
        this.switchVideo(videoId);
      });
  }

  switchVideo(id) {
    axios
      .get(mainVideoUrl(id))
      .then((res) => {
        this.setState({
          mainVideo: res.data,
          commentList: res.data.comments,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    //Checks the status of mainVideo, then displays the request when the null value is satisfied.
    if (this.state.mainVideo === null) return "Loading...";
    return (
      <div>
        <Nav logo={logo} profilePicture={profilePicture} />
        <Video
          image={this.state.mainVideo.image}
          video={this.state.mainVideo.video}
          api_key={api_key}
        />
        <div className="more-content">
          <div className="more-content__this-video">
            <VideoInfo mainVideo={this.state.mainVideo} />
            <CommentsDisplay
              profilePicture={profilePicture}
              userComments={this.state.commentList}
            />
          </div>
          <aside className="more-content__next-videos">
            <NextVideoList
              sideVideo={this.state.videos}
              currentVideoId={this.state.mainVideo.defaultVideo}
              switchVideo={this.switchVideo}
            />
          </aside>
        </div>
      </div>
    );
  }
}

export default Home;
