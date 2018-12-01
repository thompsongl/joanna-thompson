import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from './Box';
import Button from './Button';
import BaseLink from './Link';
import Text from './Text';

class Menu extends Component {
  getSlug = (url) => {
    const parts = url.split('/');
    return parts.length > 2 ? parts[parts.length - 2] : '';
  }

  render() {
    const { menu } = this.props;
    const menuItems = menu.items.map((item) => {
      if (['blog', 'faq'].includes(item.post_name)) {
        return (
          <Link
            key={item.ID}
            as={`/${item.post_name}`}
            href={`/${item.post_name}?slug=${item.post_name}&apiRoute=pages`}
          >
            <BaseLink pl="0">{item.post_title}</BaseLink>
          </Link>
        );
      }
      if (item.post_name === 'contact') {
        return (
          <Link
            key={item.ID}
            as={`/${item.post_name}`}
            href={`/${item.post_name}?slug=${item.post_name}&apiRoute=pages`}
          >
            <Button as="a">
              <Text fontSize={0}>{item.title}</Text>
            </Button>
          </Link>
        );
      }
      if (item.object === 'custom') {
        return (
          <Link href={item.url} key={item.ID}>
            <a>{item.title}</a>
          </Link>
        );
      }
      const slug = this.getSlug(item.url);
      const actualPage = item.object === 'category' ? 'category' : 'post';
      return (
        <Link
          as={`/${item.object}/${slug}`}
          href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
          key={item.ID}
        >
          <a>{item.title}</a>
        </Link>
      );
    });

    return (
      <Box>
        {menuItems}
      </Box>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.shape({}).isRequired,
};

export default Menu;
