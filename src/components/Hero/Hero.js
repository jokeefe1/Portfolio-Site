import React from 'react'
import { Center } from '../../styles/global'
import { Arrow, ArrowDiv } from '../Arrow/Arrow.styled'
import { ColorDivLight2, ColorDivPrimary, HeroText } from './Hero.styled'

export default function Hero() {
    return (
        <Center>
            <ColorDivLight2>
                <ColorDivPrimary>
                    <HeroText>
                        <div>HE</div>
                        <div>
                            LLO<span id="dot">.</span>
                        </div>
                    </HeroText>
                </ColorDivPrimary>
                <ArrowDiv>
                    <p>scroll</p>
                    <Arrow size="1rem" />
                </ArrowDiv>
            </ColorDivLight2>
        </Center>
    )
}
