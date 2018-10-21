import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Link from './Link'
import Text from './Text'
import theme from './theme'

const ExContent = styled.div`
    display: none;
`

const ExTitle = styled(Link)`
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
    <Box position="relative" my={4}>
        <ExTrigger
            id={title.replace(/ /g,'_')}
            value={title}
            name={'Expandable'}
            type="checkbox"
        />
    <ExTitle as='label' htmlFor={title.replace(/ /g,'_')}>
            <Text as='span'>{title}</Text>
        </ExTitle>
        <ExContent>
            <Box mb={5} mt={2}>
                <Text as='p' fontSize={1} color={'gray.8'}>{children}</Text>
            </Box>
        </ExContent>
    </Box>
)

Expandable.defaultProps = {
    title: ''
}

export default Expandable
