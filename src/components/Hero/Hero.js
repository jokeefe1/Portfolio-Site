import React from 'react'
import { ColorDivLight2, ColorDivPrimary, HeroText } from './Hero.styled'

export default function Hero() {
    return (
        <>
            <ColorDivLight2>
                <ColorDivPrimary>
                    <HeroText>
                        <div>HE</div>
                        <div>
                            LLO<span id="dot">.</span>
                        </div>
                    </HeroText>
                </ColorDivPrimary>
            </ColorDivLight2>
        </>
    )
}
