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
import PageWrapper from '../components/PageWrapper';
import Text from '../components/Text';
import { Config } from '../config';

const Section = Box.withComponent('section');

class Services extends Component {
  static async getInitialProps() {
    const pageRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=services`,
    );
    const page = await pageRes.json();
    return { page };
  }

  render() {
    return (
      <Layout {...this.props}>
        <Section bg="brand">
          <Container py={[9, 10]}>
            <Heading fontSize={[4, 5]}>
              {this.props.page.title && this.props.page.title.rendered.replace('&#038;', '&')}
            </Heading>
          </Container>
        </Section>
        <Section>
          <Container pt={6} pb={8}>
            <Text color="bodytext" textAlign="center">
              {"Don't know what session to pick?"}
              <Box>
                <BareLink
                  href="/static/documents/flowchart.pdf"
                  target="_blank"
                  fontFamily={0}
                  style={{ textDecoration: 'underline' }}
                >
                  {'Find the right session for you in this guide'}
                </BareLink>
              </Box>
            </Text>
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
                      {!!item.notes.length && (
                        <Box mb={2} pl={[4, 0]}>
                          <Text color="gray.8"><em>This is perfect for you if:</em></Text>
                          <ul>
                            {item.notes.map((note, notekey) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={notekey} className="normal"><Text fontSize={1} lineHeight={1} color="gray.8">{note.note}</Text></li>
                            ))}
                          </ul>
                        </Box>
                      )}
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
      </Layout>
    );
  }
}

export default PageWrapper(Services);
