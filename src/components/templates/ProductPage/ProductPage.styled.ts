import styled, { css } from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

import { Back } from '@/atoms/Back/Back.styled'

export const ProductPage = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    background-color: ${theme.background.main};
  `}

  main {
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;

    flex-grow: 1;
    padding: 64px 0 64px;

    ${({ theme }) => css`
      max-width: ${theme.contentWidth};
      background-color: ${theme.background.main};
    `}

    & > ${Back} {
      position: absolute;
      top: 16px;
      left: 16px;

      @media (min-width: ${breakpoints.md}) {
        top: 32px;
        left: 28px;
      }
    }
  }
`
