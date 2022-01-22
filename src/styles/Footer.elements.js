import styled from 'styled-components';
import { Link } from './Global';
import Media from './Media';

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
`;
export const FooterLink = styled(Link)`
        font-size: 0.875rem;
        line-height: 1.067rem;
`;
