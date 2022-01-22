import styled from 'styled-components';

export const StyledHero = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0 1rem;
        margin-bottom: 8.313rem;
`;
export const Title = styled.h1`
        margin-bottom: 1.25rem;
`;
export const Subtitle = styled.p`
        margin-bottom:2.813rem ;
`;

export const DefaultSubreddit = styled.p`
        font-weight:  ${({ theme }) => theme.fonts.weight.medium};
        margin-bottom:2.25rem;
`;

export const HeroImg = styled.img`
        max-width: 100%;
        height: auto;
`;
