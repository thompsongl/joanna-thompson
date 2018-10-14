import styled from 'styled-components'
import {
  space,
  width,
  maxWidth,
  flex,
  color,
  boxShadow,
  position,
  display,
  border,
  borderColor,
  borderRadius
} from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${maxWidth}
  ${flex}
  ${color}
  ${boxShadow}
  ${position}
  ${display}
  ${border}
  ${borderColor}
  ${borderRadius}
`

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...flex.propTypes,
  ...color.propTypes,
  ...boxShadow.propTypes,
  ...position.propTypes,
  ...display.propTypes,
  ...border.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes
}

export default Box
