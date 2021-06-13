import styled, { css } from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${theme.background.footer};
  `}

  & > div {
    ${({ theme }) => css`
      max-width: ${theme.contentWidth};
    `}

    margin: 0 auto;
    padding: 16px 16px;

    @media (min-width: ${breakpoints.md}) {
      padding: 16px 32px;
    }

    span {
      font-style: italic;
      font-weight: 600;
    }

    ul {
      margin: 6px 0;
      padding-left: 24px;
    }

    li {
      div {
        display: inline;
      }

      margin: 6px 0;
      font-size: 1.5rem;

      :last-child {
        margin-bottom: 0;
      }
    }
  }
`
