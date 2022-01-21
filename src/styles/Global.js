import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body{
    font-family:  ${({ theme }) => theme.fonts.family.body};
    font-size:  ${({ theme }) => theme.fonts.size.default};
  }
  h1,h2,h3,h4,h5,h6{
    margin:0;
    font-weight:  ${({ theme }) => theme.fonts.weight.normal};
    font-family:  ${({ theme }) => theme.fonts.family.heading};
    letter-spacing: ${({ theme }) => theme.fonts.letterSpacing.wider};
  }
  h1{
    line-height: ${({ theme }) => theme.fonts.lineHeight.h1};
     font-size: ${({ theme }) => theme.fonts.size.h1};
  }
  h2{
      line-height: ${({ theme }) => theme.fonts.lineHeight.h2};
       font-size: ${({ theme }) => theme.fonts.size.h2};
  }
  p{
    margin:0;
    color: ${({ theme }) => theme.colors.lightGray};
    line-height:${({ theme }) => theme.fonts.letterSpacing.tall};
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyles;
