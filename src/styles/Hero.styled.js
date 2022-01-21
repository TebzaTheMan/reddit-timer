import { Link } from 'react-router-dom';
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

export const Button = styled(Link)`
        font-size: ${({ theme }) => theme.fonts.size.smaller};
        line-height: ${({ theme }) => theme.fonts.lineHeight.shorter};
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
export const DefaultSubreddit = styled.p`
        font-weight:  ${({ theme }) => theme.fonts.weight.medium};
        margin-bottom:2.25rem;
`;

export const HeroImg = styled.img`
        max-width: 100%;
        height: auto;
`;
