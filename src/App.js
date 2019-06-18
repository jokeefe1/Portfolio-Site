import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './styles/global'
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Projects} path='/projects'/>
        <Route component={About} path='/about'/>
        <Route component={Contact} path='/contact'/>
      </Switch>
    </>
  );
}

export default App;
