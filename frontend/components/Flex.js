import styled from 'styled-components'
import {
  space,
  width,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  propTypes
} from 'styled-system'
import theme from './theme'

const Flex = styled.div`
  display: flex;
  ${space}
  ${width}
  ${color}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`
Flex.propTypes = {
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.color,
  ...propTypes.alignItems,
  ...propTypes.justifyContent,
  ...propTypes.flexWrap,
  ...propTypes.flexDirection
}

export default Flex
