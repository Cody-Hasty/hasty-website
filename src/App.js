import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import Apps from './components/projects/apps/apps';
import Games from './components/projects/games/games';
import Others from './components/projects/others/others';
import Websites from './components/projects/websites/websites';

import Qwerty from './components/projects/others/qwerty';
import SongMatch from './components/projects/games/songmatch';
import UltraHeated from './components/projects/games/ultraheated';
import Demozen from './components/projects/games/demozen';
import Arage from './components/projects/apps/arage';
import Arpom from './components/projects/apps/arpom';
import Loot from './components/projects/websites/loot';
import Query from './components/projects/websites/query';

import Contact from './components/about/contact';
import Repository from './components/about/repository';
import Resume from './components/about/resume';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-179077363-4');
  ReactGA.pageview('/homepage');
}

function App() {
  initializeReactGA();
  return (
    <div id="routes">
        <Route path="/" component={Navbar} />
        <Switch>
            <Route path="/projects/others/qwerty" component={Qwerty} />
            <Route path="/projects/games/songmatch" component={SongMatch} />
            <Route path="/projects/games/ultraheated" component={UltraHeated} />
            <Route path="/projects/games/demozen" component={Demozen} />
            <Route path="/projects/apps/arage" component={Arage} />
            <Route path="/projects/apps/arpom" component={Arpom} />
            <Route path="/projects/websites/loot" component={Loot} />
            <Route path="/projects/websites/query" component={Query} />

            <Route path="/about/contact" component={Contact} />
            <Route path="/about/repository" component={Repository} />
            <Route path="/about/resume" component={Resume} />

            <Route path="/projects/apps" component={Apps} />
            <Route path="/projects/games" component={Games} />
            <Route path="/projects/websites" component={Websites} /> 
            <Route path="/projects/others" component={Others} />
            <Route exact path="/" component={Homepage} />
        </Switch>
        <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
