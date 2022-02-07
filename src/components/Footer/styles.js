import styled, { css } from 'styled-components';

export const Container = styled.footer`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  ${({ theme }) => css`
    background: ${({ theme }) => theme.footer};
    padding: 0 ${theme.spacing.large}px;
    border-radius: ${theme.borderRadius};
    margin-top: ${theme.spacing.large}px;
  `}
`;