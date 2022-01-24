import styled from 'styled-components';
import { Link } from './Global';
import Media from './Media';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1.64rem 1.5rem;
    align-items: center;
    ${Media.tablet`
     padding: 1.64rem 5rem;
    `}

`;
export const NavMenu = styled.ul`
    height: 250px;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.colors.black};
    list-style-type: none;
    padding:0;
    display: flex;
    flex-direction: column;
    width:100%;
    justify-content: space-evenly;
    align-items:center;
    text-align: center;
    ${Media.tablet`
        flex-direction:row;
        justify-content: space-between;
        position: relative;
        top:0;
        height: 100%;
        left: 0;
        width:auto;
        gap:1.563rem;
        background: ${({ theme }) => theme.colors.white};
    `}
`;
export const NavItem = styled.li`
padding: 0 6rem;
    ${Media.tablet`
        padding: 0;
    `}

`;
export const NavLink = styled(Link)`
    line-height: 1.219rem;
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    ${Media.tablet`
        height: 100%;
        color: ${({ theme }) => theme.colors.gray};
    `}
`;

export const NavLogo = styled.img`
`;

export const MobileIcon = styled.div`
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    ${Media.tablet`
    display: none;
    `}
`;
