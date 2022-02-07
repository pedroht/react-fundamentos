import styled, { css } from 'styled-components';

export const Container = styled.header`
  height: 100px;
  display: flex;
  align-items: center;  
  justify-content: space-between; 

  ${({ theme }) => css`
    background: ${theme.header};
    padding: 0 ${theme.spacing.large}px;
    border-radius: ${theme.borderRadius};
    
    button {
      font-size: ${theme.spacing.medium}px;
      cursor: pointer;
      cursor: pointer;
      background: transparent;
      border: none;
    }
  `}
`;