import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    padding: 1.5rem 2rem;
    background: var(--shape);
    border-radius: 0.3125rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2.25rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }
  }
`;
