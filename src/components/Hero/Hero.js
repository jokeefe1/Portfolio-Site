import React from 'react'
import { ColorDivPrimary, ColorDivLight2, HeroDiv, HeroText } from './Hero.styled'

export default function Hero() {
    return (
        <>
            <ColorDivPrimary>
                <HeroText>
                    <div>HE</div>
                    <div>
                        LLO<span id="dot">.</span>
                    </div>
                </HeroText>
            </ColorDivPrimary>
            <ColorDivLight2 />
        </>
    )
}
