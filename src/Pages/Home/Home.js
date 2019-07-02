import React from 'react'
import Hero from '../../components/Hero/Hero'
import { GitHub, LinkedIn, Social } from '../../components/Social/Social.styles'
import { MenuDiv, MenuIcon } from '../../components/Menu/Menu.styles'
import Navbar from '../../components/Navbar/Navbar'
import { Container } from '../../styles/global'
import { TopSection } from './Home.styles'

export default function Home() {
    return (
        <Container>
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
