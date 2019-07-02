import React from 'react'
import Hero from '../../components/Hero/Hero'
import { Container } from '../../styles/global'
import Navbar from '../../components/Navbar/Navbar';

export default function Home() {
    return (
        <Container>
            <Navbar />
            <Hero />
            <Hero />
        </Container>
    )
}
