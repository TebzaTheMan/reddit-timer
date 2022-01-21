import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHero = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0 1rem;
        h1, p { 
                margin-top:0;
        }
        margin-bottom: 8.313rem;
`;
export const Title = styled.h1`
        font-size: 2.375rem; 
        font-family: 'Bitter', serif; 
        font-weight: 400;
        line-height: 2.875rem;
        margin-bottom: 1.25rem;
        letter-spacing: 0.02em;
`;
export const Subtitle = styled.p`
        color: ${({ theme }) => theme.colors.lightGray};
        font-size: 1rem;
        line-height: 1.25rem;
        margin-bottom:2.813rem ;
`;

export const Button = styled(Link)`
        background-color: ${({ theme }) => theme.colors.accent};
        border: .1px ${({ theme }) => theme.colors.accent} solid; 
        border-radius: 4px;
        color: white;
        line-height: 0.563rem;
        padding: 0.844rem 0.927rem 0.844rem 0.948rem;
        margin-bottom: 2.875rem;
        font-size: 0.875rem;
        text-decoration: none;
        cursor: pointer;

        &:hover{
                background-color: white;
                color:${({ theme }) => theme.colors.accent};
        }
`;
export const DefaultSubreddit = styled.p`
        color: ${({ theme }) => theme.colors.lightGray};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.25rem;
        margin-bottom:2.25rem;
`;

export const HeroImg = styled.img`
        max-width: 100%;
        height: auto;
`;
