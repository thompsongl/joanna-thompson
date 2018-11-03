import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Link from 'next/link'
import BareLink from './Link'
import Box from './Box'
import Button from './Button'
import Container from './Container'
import Flex from './Flex'
import Footer from './Footer'
import Header from './Header'
import Heading from './Heading'
import Input from './Input'
import Menu from './Menu'
import Social from './Social'
import Text from './Text'

const Section = Box.withComponent('section');
const LinkedBox = Box.withComponent('a');

const Layout = props => (
    <ThemeProvider theme={theme}>
      <Box color='bodytext'>
          <Header>
              <Container>
                  <Flex justifyContent='space-between' alignItems='center'>
                      <Box>
                          <Link href={`/`}>
                            <a>
                              <Heading as='span' fontSize={2} lineHeight={1.5} letterSpacing={0.2}>
                                  Joanna Thompson
                              </Heading>
                            </a>
                          </Link>
                      </Box>
                      <em>Professional Organization</em>
                  </Flex>
              </Container>
          </Header>
          <main>
            {props.children}
        </main>
      </Box>
    </ThemeProvider>
);

export default Layout;
