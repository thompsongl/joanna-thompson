import Box from './Box'
import theme from './theme'

const Container = Box.withComponent('div')

Container.defaultProps = {
    p: 2,
    mx: 'auto',
    width: [1, 1, theme.maxWidths[1]]
}

export default Container
