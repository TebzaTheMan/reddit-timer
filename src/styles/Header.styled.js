import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 32px 80px;
    
    ul{
        display:flex;
        justify-content: space-between;
        list-style-type: none;
        gap:25px;
    }
    a{
        text-decoration: none;
    }
`;
