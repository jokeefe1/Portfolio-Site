import React from 'react'
import { Waypoint } from 'react-waypoint'
import Hero from '../../components/Hero/Hero'
import { MenuDiv, MenuIcon } from '../../components/Menu/Menu.styles'
import Navbar from '../../components/Navbar/Navbar'
import { GitHub, LinkedIn, Social } from '../../components/Social/Social.styles'
import { Container } from '../../styles/global'
import { TopSection } from './Home.styles'

export default function Home() {
    const [test, setTest] = React.useState(false)
    React.useEffect(() => {}, [test])

    const handleScroll = e => {
        setTest(prevState => !prevState)
        console.log(test)
    }

    return (
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
    )
}
