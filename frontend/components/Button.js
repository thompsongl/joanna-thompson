import Box from './Box'
import theme from './theme'
import styled from 'styled-components'

const InputButton = Box.withComponent('input')

InputButton.defaultProps = {
    display: 'inline-block',
    bg: 'black',
    color: 'white',
    py: 2,
    px: 3,
    border: 'none',
    borderRadius: 1
}

const Button = InputButton.extend`
    &:hover {
        opacity: 0.9;
    }
`

Button.link = Button.withComponent('a')
Button.button = styled('button')`
    appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding-top: 2px;
`;


export default Button
