import React from 'react';
import Text from './Text';

const Heading = props => <Text {...props} />;

Heading.defaultProps = {
  fontSize: 4,
  fontWeight: 600,
  lineHeight: 1.25,
  m: 0,
  textAlign: 'center',
  fontFamily: 1,
  letterSpacing: 1,
  color: 'black',
};

export default Heading;
