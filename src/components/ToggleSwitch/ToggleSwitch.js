import React from 'react'
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './ToggleSwitch.styled'

export default function ToggleSwitch() {
    return (
        <div>
            <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </div>
    )
}
