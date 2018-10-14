import Box from './Box'
import theme from './theme'

const Card = Box.withComponent('div')

Card.defaultProps = {
    px: 2,
    py: 4,
    boxShadow: 1,
    textAlign: 'center',
    width: '250px',
    mx: 2,
    my: 2,
    bg: 'white',
    maxWidth: '500px'
}

export default Card
