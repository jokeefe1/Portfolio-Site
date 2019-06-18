import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Router from './router/Router'
import theme from './styles/theme'
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
