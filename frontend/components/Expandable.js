import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Text from './Text'
import theme from './theme'

const ExContent = styled.div`
    display: none;
`

const ExTitle = styled.label`
    display: block;
    cursor: pointer;
`

const ExTrigger = styled.input`
  position: absolute;
  opacity: 0;
  height: 1px;
  width: 1px;
  &:checked ~ ${ExContent} {
    display: block!important;
  }
  &:focus ~ ${ExTitle} {
    outline: solid ${theme.colors.green[2]};
  }
`

const Expandable = ({children, title}) => (
    <Box position="relative" my={3}>
        <ExTrigger
            id={title.replace(/ /g,'_')}
            value={title}
            name={'Expandable'}
            type="checkbox"
        />
        <ExTitle htmlFor={title.replace(/ /g,'_')}>
            <Text textAlign='center'>{title}</Text>
        </ExTitle>
        <ExContent>
            <Box mb={4} mt={2}>
                <Text.p fontSize={1} textAlign='center' color={'gray.8'}>{children}</Text.p>
            </Box>
        </ExContent>
    </Box>
)

Expandable.defaultProps = {
    title: ''
}

export default Expandable
