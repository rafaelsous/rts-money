import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E62E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --shape: #FFFFFF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --blue-light: #6933FF;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080) {
      font-size: 93.75%;
    }

    @media (max-width: 720) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    padding: 4rem 3rem;
    background: var(--background);
    border-radius: 0.3125rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    height: 0;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`