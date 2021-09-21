import React from 'react';
import Home from './Pages/Home/index';
import AboutMe from './Pages/AboutMe/index';
import Corridor from './Pages/Corridor/index';
import Portfolio from './Pages/Portfolio/index';
import Experience from './Pages/Experience/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/corridor" component={Corridor} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Experience" component={Experience} />
      </Switch>
    </Router>
  );
}

export default App;
