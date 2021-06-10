import styled, { css } from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const Home = styled.div`
  display: block;

  main {
    ${({ theme }) => css`
      background-color: ${theme.background.main};
    `}
    padding: 74px 0 10px;

    h2 {
      color: #181818;
      margin: 0 auto 52px;

      font-size: 5.4rem;
      font-style: italic;
      font-weight: 600;
      letter-spacing: 1.8px;
      text-align: center;

      @media (min-width: ${breakpoints.sm}) {
        font-size: 6.2rem;
      }

      span {
        position: relative;
        display: inline-block;
        padding: 6px 12px;

        ::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;

          width: 100%;
          border: 1px solid #181818;
        }
      }
    }

    /* GoTop */
    & > a {
      margin: 0 auto;
      margin-top: 112px;
    }
  }
`
