import React, { Component } from 'react';
// import './App.css';
import './styles/main.css';
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
    fetch('https://khorram.herokuapp.com/rapchat/user/80229AD4-F3B9-4675-B70B-F8F9BAF7D889', { method: 'POST' }).then(response => {
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
    }).catch(e => {
      // If an error occurs, recall.
      this.fetchRapchatData();
    })
  }

  render() {
    console.log(JSON.stringify(this.state));
    return (
      <div id="wrapper">
        <header id="header" className="alt">
          <span className="logo"><img src={profileFiller} alt="profile"/></span>
          <h1>{this.state.username}</h1>
          <p>{this.state.location.city}, {this.state.location.state}</p>
          <ul className="actions">
          <li><a target="blank" href={this.state.soundcloudURL}><img src={this.state.soundcloudImage} role="presentation" height="50px" width="50px"/></a></li>
          <li><a target="blank" href={this.state.twitterURL}><img src={this.state.twitterImage} role="presentation" height="50px" width="50px"/></a></li>
          <li><a target="blank" href={this.state.otherURL}><img src={this.state.otherURLImage} role="presentation" height="50px" width="50px"/></a></li>
          </ul>
        </header>
        <div id="main">
          <section id="intro" className="main">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2>Raps</h2>
                  </header>
                  <h1>{this.state.raps}</h1>
                </div>
              </div>
          </section>
          <section id="first" className="main">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2>Likes</h2>
                  </header>
                  <h1>{this.state.likes}</h1>
                </div>
              </div>
          </section>
          <section id="second" className="main">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2>Fans</h2>
                  </header>
                  <h1>{this.state.fans}</h1>
                </div>
              </div>
          </section>
          <section id="third" className="main">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2>Following</h2>
                  </header>
                  <h1>{this.state.following}</h1>
                </div>
              </div>
          </section>
          <section id="fourth" className="main">
              <div className="spotlight">
                <div className="content">
                  <ul className="actions">
                    <li className="center"><a target="blank" className="center hero" href="https://bnc.lt/getRC">OPEN APP</a></li>
                  </ul>
                </div>
              </div>
          </section>
        </div>
      </div>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="black">
          <a target="blank" href="https://rapchat.me"><img role="presentation" src="https://pbs.twimg.com/profile_images/713051224052903936/BVNcagVM.jpg" className="brand-logo" height="100%" width="50px"/></a>
        </div>
      </nav>
    )
  }
}

export default App;
