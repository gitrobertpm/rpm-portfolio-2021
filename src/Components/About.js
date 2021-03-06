
/* Main dependency imports */
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

/* Component imports */
import AboutNav from './AboutNav';
import Bio from './Bio';
import Experience from './Experience';
import Contact from './Contact';
import Props from './Props';
import ThankYou from './ThankYou';
import NotFound from './NotFound';

/* Image imports */
import github from '../img/icons/gh.png'
import linkedin from '../img/icons/li.png'
import profilePic from '../img/profile-pic.jpg'

/* About container component for showing bio, contact, experience, and props */
const About = () => {
  
  return (
    <div className="about-container">
      <div className="overlay">
        <BrowserRouter>
          <div className="about-header">

            <AboutNav />
            
            <h1 className="top-heading About-heading">About</h1>
            <h2 className="about-heading">Robert PM</h2>
            <img className="profile-pic" src={ profilePic } alt="Profile pic"/>

            <div className="header-contact-link-box">
              <a href="https://github.com/gitrobertpm" className="contact-link cl-github"><img src={ github } alt="GitHub icon" /></a>
              <a href="https://www.linkedin.com/in/robertpm/" className="contact-link cl-linkedin"><img src={ linkedin } alt="LinkedIn icon" /></a>
            </div>

          </div>

          <Switch>
            <Route exact path="/about" component={ () => <Redirect to="/about/bio" /> } />
            <Route exact path="/about/bio" component={ Bio } />
            <Route exact path="/about/experience" component={ Experience } />
            <Route exact path="/about/contact" component={ Contact } />
            <Route exact path="/about/props" component={ Props } />
            <Route exact path="/about/thankyou" component={ ThankYou } />
            <Route exact path="/about/notfound" component={ NotFound } />
            <Route path="/about/*" component={ () => <NotFound /> } />
          </Switch>

        </BrowserRouter>
      </div>
    </div>
  );
};

export default About;
