import styled from 'styled-components';
import { Link } from './Global';

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
`;

export const NavLink = styled(Link)`
        line-height: 1.219rem;
`;
