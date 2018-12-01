import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';
import Button from './Button';
import Flex from './Flex';
import Text from './Text';
import theme from './theme';

const Blockquote = styled(Text)`
  border-left: 3px solid ${theme.colors.brand};
  padding-left: ${theme.space[3]}px;
`;

const Cite = styled(Text)`
  &:before {
    content: '—';
    padding-right: ${theme.space[1]}px;
  }
`;

const Testimonial = ({ attribution, quote }) => (
  <React.Fragment>
    <Blockquote as="blockquote" mx="0" my={3}>{quote}</Blockquote>
    <Cite as="cite" ml={3} color="gray.8">{attribution}</Cite>
  </React.Fragment>
);
Testimonial.propTypes = {
  attribution: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

class Testimonials extends React.Component {
  state = {
    activeIndex: 0,
  }

  pageTo = (index) => {
    this.setState({
      activeIndex: index,
    });
  }

  viewPrevious = () => {
    this.pageTo(
      this.state.activeIndex === 0
        ? this.props.items.length - 1
        : this.state.activeIndex - 1,
    );
  }

  viewNext = () => {
    this.pageTo(
      this.state.activeIndex === this.props.items.length - 1
        ? 0
        : this.state.activeIndex + 1,
    );
  }

  render() {
    return (
      <Box>
        <Flex justifyContent="center">
          <Button.button onClick={this.viewPrevious}>
            <span className="visually-hidden">View Previous Testimonial</span>
            <img
              src={`https://icon.now.sh/chevron/left/12/${theme.colors.black.substr(1)}`}
              alt="chevron icon pointing left"
              aria-hidden
            />
          </Button.button>
          <Button.button onClick={this.viewNext}>
            <span className="visually-hidden">View Next Testimonial</span>
            <img
              src={`https://icon.now.sh/chevron/12/${theme.colors.black.substr(1)}`}
              alt="chevron icon pointing right"
              aria-hidden
            />
          </Button.button>
        </Flex>
        <Testimonial {...this.props.items[this.state.activeIndex]} />
      </Box>
    );
  }
}

export default Testimonials;
