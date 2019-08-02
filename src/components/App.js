import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import Sidebar from './sideBar.js'
import Layout from './layout.js'
import Enterprise from '../pages/enterprise'

function App() {
  return (
    <BrowserRouter>
      <Layout >
<Route exact path={'/'} component={Enterprise} />
  </Layout>
    </BrowserRouter>
  );
}

export default App;
