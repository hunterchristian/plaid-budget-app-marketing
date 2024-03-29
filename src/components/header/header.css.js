import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 9% 0 8rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
