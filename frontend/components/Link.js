import styled from 'styled-components'
import Text from './Text'
import theme from './theme'

const BareLink = (props) => <Text as='a' {...props} />

BareLink.defaultProps = {
    fontFamily: 1,
    color: 'black',
    pr: 3,
    pl: 3
}

const Link = styled(BareLink)`
    &:hover {
        opacity: 0.8;
        text-decoration: underline;
    }
`

export default Link
