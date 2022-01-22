import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
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
export const Button = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.size.smaller};
  line-height: ${({ theme }) => theme.fonts.lineHeight.shorter};
  background-color: ${({ theme }) => theme.colors.accent};
  border: .1px ${({ theme }) => theme.colors.accent} solid; 
  border-radius: 4px;
  color:  ${({ theme }) => theme.colors.white};
  padding: 0.844rem 0.927rem 0.844rem 0.948rem;
  margin-bottom: 2.875rem;
  &:hover{
          background-color: white;
          color:${({ theme }) => theme.colors.accent};
  }
`;

export default GlobalStyles;
