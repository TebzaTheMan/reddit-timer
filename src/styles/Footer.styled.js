import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 1.64rem 15.625rem;
    align-items: center;
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
