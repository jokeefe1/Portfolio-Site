import React from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route />
        <Route />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
