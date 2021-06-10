import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.6rem;
    margin: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #0f73ee;

    :hover {
      color: #0d60c8;
    }
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
    font-size: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    ::marker {
      font-size: 10px;
    }
  }
`
