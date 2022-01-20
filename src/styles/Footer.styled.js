import styled from 'styled-components';
import Media from './Media';
// eslint-disable-next-line import/prefer-default-export
export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
    
    ${Media.tablet`
     padding: 0 5rem;
    `}
    ${Media.laptop`
     padding: 0 15.625rem;
    `}
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray};
        font-size: 0.875rem;
        line-height: 1.067rem;
    }
    a:hover{
        color:${({ theme }) => theme.colors.accent} ;
    }
`;
