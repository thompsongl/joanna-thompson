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
          {props.shouldShowBanner && (
              <Section bg={'black'}>
                  <Flex justifyContent='space-between' alignItems='center' py={1}>
                    <Link as={`/contact`} href={`/contact?slug=contact&apiRoute=pages`}>
                        <LinkedBox style={{flexGrow: 1}} pl={4} pr={1}>
                            <Text color={theme.colors.white} textAlign='center'>{props.businessData.acf.newsletter_banner}</Text>
                        </LinkedBox>
                    </Link>
                    <Flex alignItems='center' style={{flexShrink: 0}}>
                        <Button.button type="button" onClick={() => {
                            props.updateShouldShowBanner(false)
                        }}>
                            <span className="visually-hidden">Close Banner Notification</span>
                            <img src={`https://icon.now.sh/x/${theme.colors.white.substr(1)}`} alt='close icon' aria-hidden={true} />
                        </Button.button>
                    </Flex>
                   </Flex>
              </Section>
          )}
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
            <Section bg={'brand'}>
                <Container py={8} maxWidth={0}>
                    <Heading as='h3' mb={2}>Subscribe</Heading>
                    {props.businessData && <Text textAlign='center' mb={3}>{props.businessData.acf.newsletter_incentive}</Text>}
                        {/*<!-- Begin Mailchimp Signup Form -->*/}
                        <div id="mc_embed_signup">
                            <form action="https://now.us19.list-manage.com/subscribe/post?u=4549ea4a5d992521b24443fe6&amp;id=a3aa572a1b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                <Flex id="mc_embed_signup_scroll">
                                    <label className="visually-hidden" htmlFor="mce-EMAIL">Email Address</label>
                                	<Input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Email Address" defaultValue="" required />
                                    {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_4549ea4a5d992521b24443fe6_a3aa572a1b" tabIndex="-1" defaultValue="" /></div>
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
