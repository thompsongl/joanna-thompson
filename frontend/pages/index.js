import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';
import Box from '../components/Box';
import BareLink from '../components/Link';
import Button from '../components/Button';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import LazyBackground from '../components/LazyBackground';
import PageWrapper from '../components/PageWrapper';
import Social from '../components/Social';
import Testimonials from '../components/Testimonials';
import Text from '../components/Text';
import theme from '../components/theme';
import { Config } from '../config';

const List = Flex.withComponent('ul');
const ListItem = Box.withComponent('li');
const Section = Box.withComponent('section');

class Index extends Component {
  static async getInitialProps() {
    const pageRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`,
    );
    const page = await pageRes.json();
    return { page };
  }

  render() {
    return (
      <Layout {...this.props}>
        <Section bg="brand">
          <Container px={[3, 4]} py={[8, 9]}>
            <Text as="p" fontSize={4} textAlign="center" fontFamily={1} color="black">
              {this.props.page.acf.intro_text}
            </Text>
          </Container>
        </Section>
        <Section>
          <Container py={6}>
            <Flex flexWrap="wrap">
              <Box width="40%" display={['none', 'inline-block']}>
                <img
                  src="/static/images/joanna.jpg"
                  alt="Joanna sitting with her arms crossed, feet propped on a stack of books"
                />
              </Box>
              <Flex width={['100%', '60%']} flexDirection="column" justifyContent="space-between" pl={[0, 3]}>
                <Box>
                  <Heading as="h2" textAlign={['center', 'left']}>About Me</Heading>
                  <Text as="p" color="bodytext" textAlign={['center', 'left']}>
                    {this.props.page.acf.about_me}
                  </Text>
                </Box>
                {this.props.businessData && (
                  <Flex alignItems="center" justifyContent={['center', 'flex-start']} mt={2}>
                    <Social businessData={this.props.businessData} theme={theme} />
                  </Flex>
                )}
              </Flex>
            </Flex>

            <Divider my={6} />

            <Heading as="h2">How I Can Help</Heading>
            <List flexWrap="wrap" justifyContent="center" mt={2}>
              {this.props.businessData && this.props.businessData.acf.services.map((item, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <ListItem key={key} py={2} px={3}>
                  <Text as="span" color="gray.8">{item.service_name}</Text>
                </ListItem>
              ))}
            </List>
          </Container>
        </Section>
        <Section bg="brand">
          <Container py={8}>
            <Heading as="h2">Prices</Heading>
          </Container>
        </Section>
        <Section>
          <Container pt={2} pb={8}>
            <Box flexWrap="wrap">
              {this.props.businessData && this.props.businessData.acf.prices.map((item, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <Box key={key} py={4}>
                  <Flex width="100%" py={3} flexWrap="wrap">
                    <Flex width={['100%', '40%']} flexDirection="column" justifyContent="space-between">
                      <Box>
                        <Heading as="h3" textAlign={['center', 'left']} fontSize={3} lineHeight="1">{item.name}</Heading>
                        <Text fontSize={2} textAlign={['center', 'left']} pt={1}>
                          <em>
                            {item.cost && !!item.cost.length ? `${item.cost}` : 'Contact me for pricing'}
                            <Text as="span" fontSize={2}>{item.period && `/${item.period}`}</Text>
                          </em>
                        </Text>
                      </Box>
                      <Box>
                        {!!item.notes.length && item.notes.map((note, notekey) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <Text key={notekey} fontSize={1} lineHeight={1} color="gray.8" textAlign={['center', 'left']}><em>{note.note}</em></Text>
                        ))}
                      </Box>
                    </Flex>
                    <Box width={['100%', '60%']} pl={4}>
                      <Text color="gray.8"><em>Includes:</em></Text>
                      <ul>
                        {item.details.map((detail, detailkey) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <li key={detailkey} className="normal"><Text fontSize={1} textAlign={['left']} lineHeight={1} mb={2}>{detail.detail}</Text></li>
                        ))}
                      </ul>
                    </Box>
                  </Flex>
                  <Divider mt={6} />
                </Box>
              ))}
            </Box>
            <Box>
              <Text textAlign="center" mb={6}>
                <Link as="/contact" href="/contact?slug=contact&apiRoute=pages">
                  <Button as="a"><Text fontSize={1}>Get Started</Text></Button>
                </Link>
              </Text>
            </Box>
            {this.props.businessData && (
              <Text color="gray.8" textAlign="center"><em>{this.props.businessData.acf.prices_note}</em></Text>
            )}
            {this.props.businessData && (
              <Box mt={4}>
                <Text textAlign="center"><Link as="/faq" href="/faq?slug=faq&apiRoute=pages"><BareLink style={{ textDecoration: 'underline' }}>{this.props.businessData.acf.faq_link}</BareLink></Link></Text>
              </Box>
            )}
            <Box mt={4}>
              <Text textAlign="center">
                <BareLink
                  href="https://squareup.com/gift/KWS7GW7Q0D3C7/order"
                  style={{ textDecoration: 'underline' }}
                >
                  {'Not looking for yourself? Gift cards are available!'}
                </BareLink>
              </Text>
            </Box>
          </Container>
        </Section>
        <LazyBackground src="/static/images/rack.jpg">
          <Section
            py={['100px', '150px', '200px']}
            bg="brand"
            style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
            aria-hidden
          />
        </LazyBackground>
        <Section>
          <Container py={6} maxWidth={0}>
            <Heading>Testimonials</Heading>
            <Box mt={3}>
              {this.props.businessData && (
                <Box py={2}>
                  <Testimonials items={this.props.businessData.acf.testimonial} />
                </Box>
              )}
            </Box>
          </Container>
        </Section>
      </Layout>
    );
  }
}

export default PageWrapper(Index);
