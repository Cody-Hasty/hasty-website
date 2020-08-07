import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './homepage/homepage';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

import Apps from './projects/apps/apps';
import Games from './projects/games/games';
import Others from './projects/others/others';
import Websites from './projects/websites/websites';

import Qwerty from './projects/others/qwerty';
import SongMatch from './projects/games/song_match';
import UltraHeated from './projects/games/ultra_heated';
import Arage from './projects/apps/arage';
import Arpom from './projects/apps/arpom';

import Contact from './about/contact';
import Repository from './about/repository';
import Resume from './about/resume';

export default () => (
    <div id="routes">
        <Route path="/" component={Navbar} />
        <Switch>
            <Route path="/projects/others/qwerty" component={Qwerty} />
            <Route path="/projects/games/songmatch" component={SongMatch} />
            <Route path="/projects/games/ultraheated" component={UltraHeated} />
            <Route path="/projects/apps/arage" component={Arage} />
            <Route path="/projects/apps/arpom" component={Arpom} />

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