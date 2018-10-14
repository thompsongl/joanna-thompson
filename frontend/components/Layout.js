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
import Text from './Text'

const Label = Box.withComponent('label');
const Section = Box.withComponent('section');

const Layout = props => (
    <ThemeProvider theme={theme}>
      <Box id="pageroot" color='bodytext'>
          <Header>
              <Container>
                  <Flex justifyContent='space-between' alignItems='center'>
                      <Box>
                          <Link href={`/`}>
                            <a>
                              <Heading fontSize={2} lineHeight={1.5} letterSpacing={0.2}>
                                  Joanna Thompson
                              </Heading>
                            </a>
                          </Link>
                      </Box>
                      <Menu menu={props.headerMenu} />
                  </Flex>
              </Container>
          </Header>
          <main>
            {props.post && props.post.type === 'post' ? (
              <Container>{props.children}</Container>
            ) : (
              <React.Fragment>{props.children}</React.Fragment>
            )}
            <Section bg={'green.2'}>
                <Container py={8} maxWidth={0}>
                    <Heading>Sign Up</Heading>
                        {/*<form id="contactForm" action="javascript:sendData()">
                            <Box>
                                <Label display="block" width="100%" htmlFor="name">
                                    <Text color="gray.8">Name</Text>
                                </Label>
                                <Input id="name" name="name" type="text" required />
                            </Box>
                            <Box my={2}>
                                <Label display="block" width="100%" htmlFor="email">
                                    <Text color="gray.8">Email</Text>
                                </Label>
                                <Input id="email" name="email" type="email" required />
                            </Box>
                            <Box>
                                <Label display="block" width="100%" htmlFor="message">
                                    <Text color="gray.8">Message</Text>
                                </Label>
                                <Input.textarea borderColor='gray.8' id="message" name="message" rows="5" />
                            </Box>
                            <Button type="submit" value="Send" mt={3} />
                        </form>*/}
                </Container>
            </Section>
        </main>
        <Footer>
            <Container>
                <Text textAlign='center'>
                    © Joanna Thompson &middot; Omaha, NE
                </Text>
                {props.businessData && (
                    <Flex alignItems='center' justifyContent='center' mt={2}>
                        {props.businessData.acf.instagram && <BareLink href={props.businessData.acf.instagram} target="_blank"><img src={`https:icon.now.sh/instagram/${theme.iconColor}`} alt='Follow me on Instagram' /></BareLink>}
                        {props.businessData.acf.facebook && <BareLink href={props.businessData.acf.facebook} target="_blank"><img src={`https:icon.now.sh/facebook/${theme.iconColor}`} alt='Friend me on Facbook' /></BareLink>}
                        {props.businessData.acf.twitter && <BareLink href={props.businessData.acf.twitter} target="_blank"><img src={`https:icon.now.sh/twitter/${theme.iconColor}`} alt='Follow me on Twitter' /></BareLink>}
                        {props.businessData.acf.pinterest && <BareLink href={props.businessData.acf.pinterest} target="_blank"><img src={`https:icon.now.sh/pinterest/${theme.iconColor}`} alt='Follow me on Pinterest' /></BareLink>}
                    </Flex>
                )}
            </Container>
        </Footer>
      </Box>
    </ThemeProvider>
);

export default Layout;
