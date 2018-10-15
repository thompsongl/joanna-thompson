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
                    <Heading mb={2}>Subscribe</Heading>
                    {props.businessData && <Text textAlign='center' mb={3}>{props.businessData.acf.newsletter_incentive}</Text>}
                        {/*<!-- Begin Mailchimp Signup Form -->*/}
                        <div id="mc_embed_signup">
                            <form action="https://now.us19.list-manage.com/subscribe/post?u=4549ea4a5d992521b24443fe6&amp;id=a3aa572a1b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                <Flex id="mc_embed_signup_scroll">
                                	<Input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Email Address" required />
                                    {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_4549ea4a5d992521b24443fe6_a3aa572a1b" tabindex="-1" value="" /></div>
                                    <Button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" ml={2} />
                                </Flex>
                            </form>
                        </div>
                        {/*<!--End mc_embed_signup-->*/}
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
                        <Social businessData={props.businessData} theme={theme} />
                    </Flex>
                )}
            </Container>
        </Footer>
      </Box>
    </ThemeProvider>
);

export default Layout;
