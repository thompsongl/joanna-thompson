import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import { Config } from '../config';

class Category extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const categoriesRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/categories?slug=${slug}`,
    );
    const categories = await categoriesRes.json();
    if (categories.length > 0) {
      const postsRes = await fetch(
        `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&categories=${
          categories[0].id
        }`,
      );
      const posts = await postsRes.json();
      return { categories, posts };
    }
    return { categories };
  }

  render() {
    if (this.props.categories.length === 0) return <Error statusCode={404} />;

    const posts = this.props.posts.map(post => (
      <ul key={post.id}>
        <li>
          <Link
            as={`/post/${post.slug}`}
            href={`/post?slug=${post.slug}&apiRoute=post`}
          >
            <a>{post.title.rendered}</a>
          </Link>
        </li>
      </ul>
    ));
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <h1>
          {this.props.categories[0].name}
          {' '}
          Posts
        </h1>
        {posts}
      </Layout>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.shape([]).isRequired,
  headerMenu: PropTypes.shape({}).isRequired,
  posts: PropTypes.shape([]).isRequired,
};

export default PageWrapper(Category);
