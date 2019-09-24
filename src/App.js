import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route path='/' component={} exact />
    <Route path='about' component={} />
    <Route path='contact' component={} />
  </div>
);

export default App;
