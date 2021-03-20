import styled from 'styled-components';

export const Container = styled.form`
  img {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: #E7E9EE;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid #D7D7D7;
    border-radius: 0.3125rem;
    color: var(--text-title);

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    background: var(--green);
    color: var(--shape);
    border: 0;
    border-radius: 0.3125rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
  
    &:hover {
      filter: brightness(1.1);
    }
  }
`;
