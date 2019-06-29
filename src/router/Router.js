import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Projects from '../pages/Projects/Projects'
import { Container } from '../styles/global'

export default function Router(props) {
    return (
        <BrowserRouter>
            <Container>
                <Navbar themeChange={props.themeChange} />
            </Container>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Home} path='/es' />
                <Route component={Projects} path="/projects" />
                <Route component={About} path="/about" />
                <Route component={Contact} path="/contact" />
            </Switch>
        </BrowserRouter>
    )
}
