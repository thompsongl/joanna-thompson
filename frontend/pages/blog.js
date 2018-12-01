import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';
import BareLink from '../components/Link';
import Box from '../components/Box';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import PageWrapper from '../components/PageWrapper';
import Text from '../components/Text';
import { Config } from '../config';

const Section = Box.withComponent('section');

class Blog extends Component {
  static async getInitialProps() {
    const res = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=blog`,
    );
    const page = await res.json();
    const postsRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`,
    );
    const posts = await postsRes.json();
    return { page, posts };
  }

  render() {
    return (
      <Layout {...this.props}>
        <Section bg="brand">
          <Container py={[9, 10]}>
            <Heading fontSize={[4, 5]}>
              {this.props.page.title && this.props.page.title.rendered}
            </Heading>
          </Container>
        </Section>
        <Container>
          <Flex mt={5} mb={8} flexWrap="wrap" justifyContent="center">
            {this.props.posts.length ? (
                this.props.posts.map(post => (
                  <Box key={post.id} width="100%">
                    <Flex width="100%" py={3} flexWrap="wrap">
                      <Flex width={['100%', '40%']} flexDirection="column" justifyContent="space-between">
                        <Box>
                          <Link
                            as={`/post/${post.slug}`}
                            href={`/post?slug=${post.slug}&apiRoute=post`}
                          >
                            <Heading as={BareLink} textAlign={['center', 'left']} fontSize={3} px="0">{post.title.rendered}</Heading>
                          </Link>
                          <Text fontSize={1} textAlign={['center', 'left']} pt={1}><em>{new Date(post.date).toLocaleDateString('en-US')}</em></Text>
                        </Box>
                      </Flex>
                      <Box width={['100%', '60%']} pl={['0', 4]}>
                        <Text
                          fontSize={1}
                          lineHeight="1.5"
                          textAlign={['center', 'left']}
                          mt="-1em"
                          color="gray.7"
                          dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered,
                          }}
                        />
                      </Box>
                    </Flex>
                    <Divider />
                  </Box>
                ))
            ) : (
              <Heading>Coming soon</Heading>
            )
          }
          </Flex>
        </Container>
      </Layout>
    );
  }
}

export default PageWrapper(Blog);
