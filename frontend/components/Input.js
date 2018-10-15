import Box from './Box'
import theme from './theme'

const Input = Box.withComponent('input')

Input.defaultProps = {
    display: "block",
    width: '100%',
    bg: 'white',
    p: 2,
    border: '1px solid',
    borderColor: 'gray.8'
}

Input.textarea = Input.withComponent('textarea')

export default Input
