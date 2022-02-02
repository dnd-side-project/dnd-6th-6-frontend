import { builtinModules } from "module"
import styled,{ css } from "styled-components"
import { IAtomButtonProps } from "./Button"

export const StyledButton = styled.button<IAtomButtonProps>`
    border: none;
    radius: 30px;
    width: 150px;
    color:${(props)=>props.color || "white"};
    background-color: ${(props)=>props.bgColor || "blue"};
    cursor: pointer;
`

