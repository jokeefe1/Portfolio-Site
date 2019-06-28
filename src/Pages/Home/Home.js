import React from 'react'
import { Background, Container } from '../../styles/global'
import Hero from '../../components/Hero/Hero';

export default function Home() {
    return (
        <Container>
            <Background>
                <Hero />
            </Background>
        </Container>
    )
}
