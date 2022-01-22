import { Link as RouterLink } from 'react-router-dom';
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
`;
export const Button = styled(RouterLink)`
  font-size: ${({ theme }) => theme.fonts.size.smaller};
  line-height: ${({ theme }) => theme.fonts.lineHeight.shorter};
  text-decoration: none;
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

export const SecHeading = styled.h2`
    margin-bottom: ${({ mb }) => mb};
    letter-spacing: ${({ theme }) => theme.fonts.letterSpacing.normal};
`;

export const List = styled.ul`
        list-style-position: inside;
        padding-left: 0;
        margin: 0px;
`;
export const ListItem = styled.li`
        color: ${({ theme }) => theme.colors.lightGray};
        line-height:${({ theme }) => theme.fonts.lineHeight.taller};
`;
export const Link = styled(RouterLink)`
        font-size: 1em;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray};
        &:hover{
                color:${({ theme }) => theme.colors.accent} ;
        }
`;
export const ExtLink = styled(Link).attrs({ as: 'a' })`
        color: ${({ theme }) => theme.colors.link};
`;

export default GlobalStyles;
