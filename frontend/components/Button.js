import styled from 'styled-components';
import Box from './Box';

const InputButton = Box.withComponent('input');

InputButton.defaultProps = {
  display: 'inline-block',
  bg: 'black',
  color: 'white',
  py: 2,
  px: 3,
  border: 'none',
  borderRadius: 1,
};

const Button = styled(InputButton)`
    appearance: none;
    &:hover {
        opacity: 0.9;
    }
`;

Button.button = styled('button')`
    appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding-top: 2px;
    &:hover {
        opacity: 0.9;
    }
`;


export default Button;
