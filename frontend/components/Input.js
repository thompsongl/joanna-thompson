import Box from './Box';

const Input = Box.withComponent('input');

Input.defaultProps = {
  display: 'block',
  width: '100%',
  bg: 'white',
  p: 2,
  border: '1px solid',
  borderColor: 'gray.8',
};

export default Input;
