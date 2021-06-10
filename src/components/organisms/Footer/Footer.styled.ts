import styled, { css } from 'styled-components'

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${theme.background.footer};
  `}

  & > div {
    ${({ theme }) => css`
      max-width: ${theme.contentWidth};
    `}
    margin: 0 auto;

    padding: 16px 15px;

    span {
      font-style: italic;
      font-weight: 600;
    }

    ul {
      margin: 6px 0;
      padding-left: 24px;
    }

    li {
      margin: 6px 0;
      font-size: 1.5rem;

      :last-child {
        margin-bottom: 0;
      }
    }
  }
`
