import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects/Projects';
import { GlobalStyles } from './styles/global';

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
