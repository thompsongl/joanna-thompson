import Text from './Text'
import theme from './theme'

const BareLink = Text.withComponent('a')

BareLink.defaultProps = {
    fontFamily: 1,
    color: 'black',
    px: 3
}

const Link = BareLink.extend`
    &:hover {
        opacity: 0.8;
    }
`

export default Link
