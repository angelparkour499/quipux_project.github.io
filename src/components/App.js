import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Article from '../pages/article'
import Layout from './layout.js'
import Home from '../pages/home'

function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/article'} component={Article} />
          </Switch>
  </Layout>
    </BrowserRouter>
  );
}

export default App;
