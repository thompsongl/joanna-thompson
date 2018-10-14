import styled from 'styled-components'
import {
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign
} from 'styled-system'

const Text = styled.div`
  ${space}
  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${textAlign}
`

Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  ...textAlign.propTypes
}

Text.p = Text.withComponent('p')
Text.span = Text.withComponent('span')

export default Text
