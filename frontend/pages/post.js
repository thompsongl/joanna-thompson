import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Box from '../components/Box';
import PageWrapper from '../components/PageWrapper';
import Text from '../components/Text';
import { Config } from '../config';

class Post extends Component {
  static async getInitialProps(context) {
    const { slug, apiRoute, series } = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`,
    );
    const post = await res.json();
    return { post, series };
  }

  render() {
    if (!this.props.post.title) return <Error statusCode={404} />;

    return (
      <Layout {...this.props}>
        <Container>
          <Box mb={10} pt={3} pb={5}>
            <h1>{`${this.props.series ? `${this.props.series} | ` : ''}${this.props.post.title.rendered}`}</h1>
            <Text
              className="post"
              lineHeight="1.85"
              dangerouslySetInnerHTML={{
                __html: this.props.post.content.rendered,
              }}
            />
          </Box>
        </Container>
      </Layout>
    );
  }
}

export default PageWrapper(Post);
