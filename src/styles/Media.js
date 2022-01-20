import { css } from 'styled-components';
import Theme from './Theme';

const { breakpoints } = Theme;
export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
