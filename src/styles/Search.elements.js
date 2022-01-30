import styled from 'styled-components';

export const SubredditForm = styled.form`
    display: flex;
    align-items: stretch;
    flex-wrap:wrap;
    justify-content: center;
    gap:10px;
    
`;
export const Input = styled.input`
    border: 1px ${({ theme }) => theme.colors.lightGray} solid;
    border-radius: 4px;
    padding:10px;
`;
export const LoadingIndicator = styled.img`
    margin-top:30px; 
 `;
