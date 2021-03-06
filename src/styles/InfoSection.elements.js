import styled from 'styled-components';
import Media from './Media';

export const InfoSection = styled.div`
    padding: 0 2rem;
    ${Media.tablet`
    padding: 0 5rem;
    `}    
    ${Media.laptop`
    padding: 0 21.938rem;
    `}
    margin-bottom: 6.188rem;   
`;

export const HowItWorks = styled.section`
    margin-bottom:6.563rem;
`;

export const About = styled.section`

`;

export const Text = styled.p`
        line-height:${({ theme }) => theme.fonts.lineHeight.taller} ;
        max-width: 40.875rem;
`;
