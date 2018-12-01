import React from 'react';
import PropTypes from 'prop-types';

class LazyBackground extends React.Component {
  state = {
    imageReady: false,
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        imageReady: true,
      });
    };
    img.src = this.props.src;
  }

  render() {
    const { children } = this.props;
    return (
      this.state.imageReady ? (
        React.Children.map(children, child => (
          React.cloneElement(child, {
            style: {
              backgroundImage: `url(${this.props.src})`,
              ...child.props.style,
            },
          })
        ))
      ) : (
        this.props.children
      )
    );
  }
}

LazyBackground.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
};

export default LazyBackground;
