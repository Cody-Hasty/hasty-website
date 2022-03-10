import * as React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Desktop from './components/desktop/desktop';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Lock from './components/lock/lock';
import Notes from './components/apps/notes';
import Code from './components/apps/code';
import Files from './components/apps/files';
import Github from './components/apps/github';
import Internet from './components/apps/internet';
import Email from './components/apps/email';
import Terminal from './components/apps/terminal';

function App() {
  return (
    <div id="routes">
      <Route path="/" component={Navbar} />
      <Route path="/" component={Sidebar} />
      <Switch>
        <Route path="/code" component={Code} />
        <Route path="/files" component={Files} />
        <Route path="/github" component={Github} />
        <Route path="/internet" component={Internet} />
        {/* <Route path="/notes" component={Notes} /> */}
        <Route path="/email" component={Email} />
        <Route path="/terminal" component={Terminal} />
        <Route path="/locked" component={Lock} />
        <Route exact path="/" component={Desktop} />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
    </div>
  );
}

export default App;
