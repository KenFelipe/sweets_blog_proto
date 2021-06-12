import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

import { Wrapper as Square } from '@/atoms/Square/Square.styled'
import { Container as ProductDescription } from '@/molecules/ProductDescription/ProductDescription.styled'

export const Wrapper = styled.div`
  display: block;
  padding: 16px 0;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex-basis: 40%;
    padding: 16px 0 8px;

    & > ${Square} {
      margin: 0 auto;

      min-width: 220px;
      max-width: 220px;

      @media (min-width: ${breakpoints.md}) {
        min-width: 260px;
      }

      border-radius: 28px;
      overflow: hidden;
    }
  }

  & > ${ProductDescription} {
    flex-basis: 60%;
  }
`
