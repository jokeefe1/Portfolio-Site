import React from 'react'
import { ColorDiv, HeroDiv, HeroText } from './Hero.styled'

export default function Hero() {
    return (
        <HeroDiv>
            <ColorDiv />
            <HeroText>
                <div>HI</div>
                <div>
                    B<span id="star">*</span>SH<span id="dot">.</span>
                </div>
            </HeroText>
        </HeroDiv>
    )
}
