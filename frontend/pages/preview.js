import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import { Config } from '../config';

class Preview extends Component {
  constructor() {
    super();
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    const { id, wpnonce } = this.props.url.query;
    fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/post/preview?id=${id}&_wpnonce=${wpnonce}`,
      { credentials: 'include' }, // required for cookie nonce auth
    )
      .then(res => res.json())
      .then((res) => {
        this.setState({
          post: res,
        });
      });
  }

  render() {
    if (
      this.state.post
      && this.state.post.code
      && this.state.post.code === 'rest_cookie_invalid_nonce'
    ) {
      return <Error statusCode={404} />;
    }

    return (
      <Layout {...this.props}>
        <h1>{this.state.post ? this.state.post.title.rendered : ''}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.post
              ? this.state.post.content.rendered
              : '',
          }}
        />
      </Layout>
    );
  }
}

Preview.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      wpnonce: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  }).isRequired,
};

export default PageWrapper(Preview);
