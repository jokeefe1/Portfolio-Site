import React from 'react'
import { Waypoint } from 'react-waypoint'
import Hero from '../../components/Hero/Hero'
import { MenuDiv, MenuIcon } from '../../components/Menu/Menu.styles'
import Navbar from '../../components/Navbar/Navbar'
import { GitHub, LinkedIn, Social } from '../../components/Social/Social.styles'
import { HeroContext } from '../../context/HeroContext'
import { Container } from '../../styles/global'
import { TopSection } from './Home.styles'

export default function Home() {
    const [ isToggled, setIsToggled] = React.useState(false)
    
    React.useEffect(() => {}, [isToggled])

    const handleScroll = e => {
        setIsToggled(prevState => !prevState)
        console.log(isToggled)
    }

    return (
        <HeroContext.Provider value={42}>
            <Container>
                <Waypoint onPositionChange={handleScroll} />
                <Navbar />
                <TopSection>
                    <MenuDiv>
                        <MenuIcon size="1.3rem" />
                    </MenuDiv>
                    <Hero />
                    <Social>
                        <GitHub size="1rem" />
                        <LinkedIn size="1rem" />
                    </Social>
                </TopSection>
            </Container>
        </HeroContext.Provider>
    )
}
