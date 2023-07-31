import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';

import NotFound from './NotFound/NotFound';
import './Layout.scss';
import Appbar from './AppBar/Appbar';

const Layout = () => (
  <div>
    <Appbar />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}

      {/* If no route matches, show a Not Found page */}
      <Route component={NotFound} />
    </Switch>
  </div>
);
export default Layout;
