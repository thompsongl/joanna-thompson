import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import theme from './theme';
import { trackPageView } from '../helpers';
import Box from './Box';
import Button from './Button';
import Container from './Container';
import Flex from './Flex';
import Footer from './Footer';
import Header from './Header';
import Heading from './Heading';
import Input from './Input';
import Menu from './Menu';
import Popout from './Popout';
import Social from './Social';
import Text from './Text';

const Section = Box.withComponent('section');
const LinkedBox = Box.withComponent('a');

const BannerBox = ({ children, ...props }) => (
  <LinkedBox style={{ flexGrow: 1 }} pl={4} pr={1} {...props}>
    <Text color={theme.colors.white} textAlign="center">{children}</Text>
  </LinkedBox>
);

class Layout extends React.Component {
  componentDidMount() {
    Router.onRouteChangeComplete = (url) => {
      trackPageView(url);
    };
  }

  render() {
    const {
      businessData,
      children,
      headerMenu,
      shouldShowBanner,
      updateShouldShowBanner,
      shouldShowPopout,
      updateShouldShowPopout,
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Box color="bodytext">
          {shouldShowBanner && (
          <Section bg="black">
            <Flex justifyContent="space-between" alignItems="center" py={1}>
              {businessData.acf.banner_link
                && !!businessData.acf.banner_link.length ? (
                  <BannerBox href={businessData.acf.banner_link}>
                    {businessData.acf.banner_text}
                  </BannerBox>
              ) : (
                <Link as="/contact" href="/contact?slug=contact&apiRoute=pages">
                  <BannerBox>{businessData.acf.banner_text}</BannerBox>
                </Link>
              )}
              <Flex alignItems="center" style={{ flexShrink: 0 }}>
                <Button.button
                  type="button"
                  onClick={() => {
                    updateShouldShowBanner(false);
                  }}
                >
                  <span className="visually-hidden">Close Banner Notification</span>
                  <img src={`https://icon.now.sh/x/${theme.colors.white.substr(1)}`} alt="close icon" aria-hidden />
                </Button.button>
              </Flex>
            </Flex>
          </Section>
          )}
          <Header>
            <Container>
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Link href="/">
                    <a>
                      <Heading as="span" fontSize={2} lineHeight={1.5} letterSpacing={0.2}>
                        Joanna Thompson
                      </Heading>
                    </a>
                  </Link>
                </Box>
                <Menu menu={headerMenu} />
              </Flex>
            </Container>
          </Header>
          <main>
            {children}
            <Section bg="brand">
              <Container py={8} maxWidth={0}>
                <Heading as="h3" mb={2}>Subscribe</Heading>
                {businessData && <Text textAlign="center" mb={3}>{businessData.acf.newsletter_incentive}</Text>}
                {/* <!-- Begin Mailchimp Signup Form --> */}
                <div id="mc_embed_signup">
                  <form action="https://now.us19.list-manage.com/subscribe/post?u=4549ea4a5d992521b24443fe6&amp;id=a3aa572a1b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <Flex id="mc_embed_signup_scroll">
                      <label className="visually-hidden" htmlFor="mce-EMAIL">Email Address</label>
                      <Input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Email Address" defaultValue="" required />
                      {/*
                        <!-- real people should not fill this in and expect good things
                        do not remove this or risk form bot signups-->
                      */}
                      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_4549ea4a5d992521b24443fe6_a3aa572a1b" tabIndex="-1" defaultValue="" /></div>
                      <Button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" ml={2} />
                    </Flex>
                  </form>
                </div>
                {/* <!--End mc_embed_signup--> */}
              </Container>
            </Section>
          </main>
          <Footer>
            <Container>
              <Text textAlign="center">
                © Joanna Thompson &middot; Omaha, NE
              </Text>
              {businessData && (
                <Flex alignItems="center" justifyContent="center" mt={2}>
                  <Social businessData={businessData} theme={theme} />
                </Flex>
              )}
            </Container>
          </Footer>
          {shouldShowPopout && (
            <Popout>
              <Flex width="100%" alignItems="center" justifyContent="center">
                <Box bg="white" style={{ minWidth: '200px', maxWidth: '600px' }}>
                  <Flex alignItems="center" justifyContent="flex-end" style={{ flexShrink: 0 }} p={2}>
                    <Button.button
                      type="button"
                      onClick={() => {
                        updateShouldShowPopout(false);
                      }}
                    >
                      <span className="visually-hidden">Close Popout</span>
                      <img src={`https://icon.now.sh/x/${theme.colors.black.substr(1)}`} alt="close icon" aria-hidden />
                    </Button.button>
                  </Flex>
                  <Box pb={5} px={5} pt={2}>
                    <Heading as="h3" mb={2}>HI THERE!</Heading>
                    <Text textAlign="center">{'Join my mailing list to receive organizing tips and tricks as well as inspirational notes from me. You\'ll also receive my FREE decluttering guide!'}</Text>
                    <Box>
                      {/* <!-- Begin Mailchimp Signup Form --> */}
                      <div id="mc_embed_signup">
                        <form action="https://joanna-thompson.us19.list-manage.com/subscribe/post?u=4549ea4a5d992521b24443fe6&amp;id=a3aa572a1b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                          <Flex id="mc_embed_signup_scroll" flexDirection="column">

                            <Box className="mc-field-group" mb={2}>
                              <label htmlFor="mce-EMAIL">Email Address </label>
                              <Input type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" />
                            </Box>
                            <Box className="mc-field-group" mb={2}>
                              <label htmlFor="mce-FNAME">First Name </label>
                              <Input type="text" defaultValue="" name="FNAME" id="mce-FNAME" />
                            </Box>
                            <div id="mce-responses" className="clear">
                              <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                              <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                            </div>
                            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_4549ea4a5d992521b24443fe6_a3aa572a1b" tabIndex="-1" defaultValue="" /></div>
                            <Button
                              type="submit"
                              value="Yes, please!"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              mt={2}
                              mb={4}
                            />
                            <Button
                              type="button"
                              value="No, thanks"
                              bg="gray.8"
                              onClick={() => {
                                updateShouldShowPopout(false);
                              }}
                            />
                          </Flex>
                        </form>
                      </div>
                      {/* <!--End mc_embed_signup--> */}
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Popout>
          )}
        </Box>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  businessData: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  headerMenu: PropTypes.shape({}).isRequired,
  shouldShowBanner: PropTypes.bool.isRequired,
  updateShouldShowBanner: PropTypes.func.isRequired,
  shouldShowPopout: PropTypes.bool.isRequired,
  updateShouldShowPopout: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  post: {},
};

export default Layout;
