import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import theme from './theme';
import Box from './Box';
import Button from './Button';
import Container from './Container';
import Flex from './Flex';
import Footer from './Footer';
import Header from './Header';
import Heading from './Heading';
import Input from './Input';
import Menu from './Menu';
import Social from './Social';
import Text from './Text';

const Section = Box.withComponent('section');
const LinkedBox = Box.withComponent('a');

const Layout = ({
  businessData, children, headerMenu, post, shouldShowBanner, updateShouldShowBanner,
}) => (
  <ThemeProvider theme={theme}>
    <Box color="bodytext">
      {shouldShowBanner && (
      <Section bg="black">
        <Flex justifyContent="space-between" alignItems="center" py={1}>
          <Link as="/contact" href="/contact?slug=contact&apiRoute=pages">
            <LinkedBox style={{ flexGrow: 1 }} pl={4} pr={1}>
              <Text color={theme.colors.white} textAlign="center">{businessData.acf.newsletter_banner}</Text>
            </LinkedBox>
          </Link>
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
        {post && post.type === 'post' ? (
          <Container>{children}</Container>
        ) : (
          <React.Fragment>{children}</React.Fragment>
        )}
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
    </Box>
  </ThemeProvider>
);

Layout.propTypes = {
  businessData: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  headerMenu: PropTypes.shape({}).isRequired,
  post: PropTypes.shape({}),
  shouldShowBanner: PropTypes.bool.isRequired,
  updateShouldShowBanner: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  post: {},
};

export default Layout;
