import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Navbar themeChange={props.themeChange} />
            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Projects} path='/projects' />
                <Route component={About} path='/about' />
                <Route component={Contact} path='/contact' />
            </Switch>
        </BrowserRouter>
    )
}
