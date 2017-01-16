import React, { Component } from 'react';
import './App.css';
import profileFiller from './zucc.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Body/>
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '(loading)',
      location: {
        city: '(loading)',
        state: '(loading)'
      },
      raps: '(loading)',
      likes: '(loading)',
      fans: '(loading)',
      following: '(loading)',
      soundcloudURL: '#',
      soundcloudImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif',
      twitterURL: '#',
      twitterImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif',
      otherURL: '#',
      otherURLImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif'
    }
  }

  componentDidMount() {
    setInterval(this.fetchRapchatData(), 30000) // Every 1/2 minute, refresh automatically.
  }

  fetchRapchatData() {
    fetch('http://www.kavehkhorr.am/rapchat/user/80229AD4-F3B9-4675-B70B-F8F9BAF7D889', { method: 'POST' }).then(response => {
      return response.json();
    }).then(response => {
      this.setState({
        username: response.data.username,
        location: {
          city: response.data.location.city,
          state: response.data.location.state
        },
        raps: response.data.tags.raps,
        likes: response.data.featuredrap.likes,
        fans: response.data.tags.followers,
        following: response.data.tags.following,
        soundcloudURL: response.data.soundcloud,
        soundcloudImage: 'http://icons.iconarchive.com/icons/danleech/simple/1024/soundcloud-icon.png',
        twitterURL: response.data.twitter,
        twitterImage: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png',
        otherURL: response.data.otherlink,
        otherURLImage: 'https://iconalone.com/sites/default/files/styles/220x220/public/Web%20link.svg_0.png?itok=eomBRT0O'
      })
    });
  }

  render() {
    console.log(JSON.stringify(this.state));
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col s4"/>
            <div className="col s4 center">
              <img src={profileFiller} id="profileimage" className="circle" role="presentation"/>
              <h3>@{this.state.username}</h3>
              <p>{this.state.location.city}, {this.state.location.state}</p>
            </div>
            <div className="col s4">
              <a target="_blank" href={this.state.soundcloudURL}><img src={this.state.soundcloudImage} role="presentation" className="circle icons"/></a>
              <a target="_blank" href={this.state.twitterURL}><img src={this.state.twitterImage} role="presentation" className="icons"/></a>
              <a target="_blank" href={this.state.otherURL}><img src={this.state.otherURLImage} className="icons" role="presentation"/></a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s3">
              <h3 className="center">{this.state.raps}<br/> <span> raps </span> </h3>
            </div>
            <div className="col s3">
              <h3 className="center">{this.state.likes} <br/> <span> likes </span> </h3>
            </div>
            <div className="col s3">
              <h3 className="center">{this.state.fans} <br/> <span> fans </span> </h3>
            </div>
            <div className="col s3">
              <h3 className="center">{this.state.following} <br/> <span> following </span> </h3>
            </div>
          </div>
          <div className="row center">
            <a id="getapp" href="https://bnc.lt/getRC">GET APP</a>
          </div>
        </div>
      </div>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper black">
          <img role="presentation" src="https://pbs.twimg.com/profile_images/713051224052903936/BVNcagVM.jpg" className="brand-logo" height="100%" width="50px"/>
        </div>
      </nav>
    )
  }
}

export default App;
