import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    :root {
  --santos-primary: #000;
  --santos-secondary: #fff;
  --santos-accent: #F8B319;
  --santos-red: #E31937;
}

body {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--santos-secondary);
    color: var(--santos-primary);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: var(--santos-primary);
    color: var(--santos-secondary);
    padding: 0.7rem 1.5rem;
    border-radius: 30px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s;

    &:hover {
      background: var(--santos-accent);
      color: var(--santos-primary);
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  .size-selector {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.size-selector button {
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}

.size-selector button.active {
  background: var(--santos-primary);
  color: white;
  border-color: var(--santos-primary);
}
`;



export default GlobalStyle;