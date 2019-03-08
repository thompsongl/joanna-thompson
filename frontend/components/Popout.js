import styled from 'styled-components';
import Box from './Box';
import theme from './theme';

const Popout = styled(Box)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.blackfade20};
  z-index: 100;

  display: flex;
`;


export default Popout;
