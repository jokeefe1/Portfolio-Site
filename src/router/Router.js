import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import Projects from '../Pages/Projects/Projects';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Projects} path='/projects' />
                <Route component={About} path='/about' />
                <Route component={Contact} path='/contact' />
            </Switch>
        </BrowserRouter>
    )
}
