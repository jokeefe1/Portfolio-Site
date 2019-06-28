import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Router from './router/Router'
import { GlobalStyles } from './styles/global'
import { theme_dark, theme_light } from './styles/theme'

function App() {
    const [isLight, setIsLight] = useState(true)

    const themeChange = () => setIsLight(prevState => !prevState)

    return (
        <>
            <Normalize />
            <GlobalStyles />
            <ThemeProvider theme={isLight ? theme_light : theme_dark}>
                <Router themeChange={themeChange}>
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
