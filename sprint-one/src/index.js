import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const userComments = [
  {
    name: "Michael Lyons",
    date: "5/14/2020",
    text:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
  },

  {
    name: "Gary Wong",
    date: "5/15/2020",
    text:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  //2nd test. Trying to implement props was giving some difficulties
  {
    name: "Theodore Duncan",
    date: "5/16/2020",
    text:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

const sideVideo = [
  {
    id: null,
    image: "../images/video-list-11.jpg",
    title: "Become A Travel Pro In One Easy Lesson",
    channel: "Todd Welch",
  },
  {
    id: null,
    image: "../images/video-list-2.jpg",
    title: "Les Houches The Hidden Gem Of The Chamonix",
    channel: "Cornelia Blair",
  },
  {
    id: null,
    image: "../images/video-list-3.jpg",
    title: "Travel Health Useful Medical Information For",
    channel: "Glen Harper",
  },
  {
    id: null,
    image: "../images/video-list-41.jpg",
    title: "Cheap Airline Tickets Great Ways To Save",
    channel: "Emily Harper",
  },
  {
    id: null,
    image: "../images/video-list-5.jpg",
    title: "Take A Romantic Break In A Boutique Hotel",
    channel: "Ethan Owen",
  },
  {
    id: null,
    image: "../images/video-list-6.jpg",
    title: "Choose The Perfect Accommodations",
    channel: "Lydia Perez",
  },
  {
    id: null,
    image: "../images/video-list-7.jpg",
    title: "Cruising Destination Ideas",
    channel: "Timothy Austin",
  },
  {
    id: null,
    image: "../images/video-list-8.jpg",
    title: "Train Travel On Track For Safety",
    channel: "Scotty Cranmer",
  },
];

//Main Video Object
const mainVideo = [
  {
    id: "Null",
    title: "BMX Rampage: 2020 Highlights",
    description: `Humblebrag disrupt mumblecore master cleanse, pickled ugh before they
    sold out helvetica edison bulb readymade. Retro meggings austin prism
    bushwick organic quinoa single-origin coffee kitsch affogato heirloom
    semiotics paleo health goth DIY. Tattooed polaroid next level, bitters
    pinterest disrupt tacos. Celiac street art plaid, drinking vinegar DIY
    readymade iceland shabby chic taiyaki dreamcatcher photo booth salvia
    cold-pressed bitters waistcoat. Shabby chic keffiyeh poke raw denim,
    succulents twee iceland actually franzen godard pork belly.`,
    channel: " Red Cow",
    image: "public/images/video-list-0.jpg",
    views: 120,
    likes: "100",
    duration: "null",
    video: "null",
    timestamp: "05/14/20",
    comments: "null",
  },
];

ReactDOM.render(
  <App
    userComments={userComments}
    mainVideo={mainVideo}
    sideVideo={sideVideo}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
