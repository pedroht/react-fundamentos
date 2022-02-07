import styled, { css } from 'styled-components';

export const Nav = styled.nav`  
  ${({ theme }) => css`
    background: ${theme.postList};
    margin-top: ${theme.spacing.medium}px;
    padding: ${theme.spacing.medium}px;
    border-radius: 4px;
    
    a {
      color: ${theme.textColor};
      text-decoration: none;
      display: inline-block;

      & + a {
        margin-left: ${theme.spacing.medium}px;
      }
    }
  `}
`;