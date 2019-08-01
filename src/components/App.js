import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import Sidebar from './sideBar.js'
import Layout from './layout.js'
import Description from './descriptionBar'

function App() {
  return (
    <BrowserRouter>
  <Description section="empresa"/>
      {/*<Route path={'/'} component={Layout} >

  </Route>*/}
    </BrowserRouter>
  );
}

export default App;
