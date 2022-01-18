import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1.64rem 5rem;
    align-items: center;
    ul{
        display:flex;
        justify-content: space-between;
        list-style-type: none;
        gap:1.563rem;
    }
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray};
        line-height: 1.219rem;
    }
    a:hover{
        color:${({ theme }) => theme.colors.accent} ;
    }
`;
