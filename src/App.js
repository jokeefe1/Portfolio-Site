import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home'
import Projects from './Pages/Projects/Projects'
import Router from './router/Router'
import theme from './styles/colors'
import { GlobalStyles } from './styles/global'

function App() {
    return (
        <>
            <Normalize />
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Router>
                    <Home />
                    <About />
                    <Contact />
                    <Projects />
                </Router>
            </ThemeProvider>
        </>
    )
}

export default App
