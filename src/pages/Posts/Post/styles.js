import styled, { css } from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  
  small {
    opacity: 0.7;
  }

  ${({ theme }) => css`
    background: ${theme.postList};
    padding: ${theme.spacing.medium}px;
    border-radius: ${theme.borderRadius};
    
    h2 {
      margin: 0 0 ${theme.spacing.small}px;
    }

    & + article {
      margin-top: ${theme.spacing.small}px;
    }
  `}
`;