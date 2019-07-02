import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';
import { ThemeContext } from './context/ThemeContext';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Router from './router/Router';
import { Container, GlobalStyles } from './styles/global';
import { theme_dark, theme_light } from './styles/theme';

function App() {
    const [isToggled, setIsToggled] = React.useState(false)

    function changeTheme() {
        setIsToggled(prevState => !prevState)
        console.log(isToggled)
    }

    return (
        <>
            <Normalize />
            <GlobalStyles />
            <Container>
                <ThemeProvider theme={isToggled ? theme_dark : theme_light}>
                    <ThemeContext.Provider value={{isToggled, changeTheme}}>
                        <Router>
                            <Home />
                            <About />
                            <Contact />
                            <Projects />
                        </Router>
                    </ThemeContext.Provider>
                </ThemeProvider>
            </Container>
        </>
    )
}

export default App
