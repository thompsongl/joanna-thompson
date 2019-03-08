import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Box from '../components/Box';
import Button from '../components/Button';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
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
    const latestPostRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?per_page=1`,
    );
    const latestPost = await latestPostRes.json();
    return { latestPost: latestPost[0], page };
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
                  <Heading as="h2" textAlign={['center', 'left']}>About me</Heading>
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

            <Heading>How I can help</Heading>
            <List flexWrap="wrap" justifyContent="center" mt={2}>
              {this.props.businessData && this.props.businessData.acf.services.map((item, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <ListItem key={key} py={2} px={3}>
                  <Text as="span" color="gray.8">{item.service_name}</Text>
                </ListItem>
              ))}
            </List>

            <Divider my={6} />

            <Box>
              <Heading as="h2">Learn more about pricing and sessions</Heading>
              <Text textAlign="center" mt={4} mb={6}>
                <Link as="/services" href="/services?slug=services&apiRoute=pages">
                  <Button as="a"><Text fontSize={1}>Learn More</Text></Button>
                </Link>
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

            <Divider my={6} />

            {this.props.latestPost && (
              <Box>
                <Heading as="h2">Check out the latest blog post</Heading>
                <Text textAlign="center" mt={4} mb={6}>
                  <Link
                    as={`/post/${this.props.latestPost.slug}`}
                    href={`/post?slug=${this.props.latestPost.slug}&apiRoute=post`}
                  >
                    <Button as="a"><Text fontSize={1}>Latest Post</Text></Button>
                  </Link>
                </Text>
              </Box>
            )}
          </Container>
        </Section>
      </Layout>
    );
  }
}

export default PageWrapper(Index);
