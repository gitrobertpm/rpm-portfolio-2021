
/* Main container component */
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

/* Component imports */
import Nav from './Components/Nav';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';

/* Stylesheets imports */
import './css/App.css';
import './css/about.css';
import './css/media-query.css';
import './css/animate.css';

/* Main container component - redirects root to home route and handles undefined routes */
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <Nav />

        <Switch>
          <Route exact path="/" component={ () => <Redirect to="/home" /> } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/projects" component={ Projects } />
          <Route path="/about" component={ About } />
          <Route component={ () => <Redirect to="/about/notfound" /> } />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
