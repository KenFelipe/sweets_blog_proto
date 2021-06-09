import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const SweetsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: minmax(2fr, 3fr);
  }

  max-width: 960px;
`

export const CategoriesWrapper = styled.div`
  margin-bottom: 30px;

  & > h3 {
    margin: 16px 0;
    font-size: 4.2rem;
    font-style: italic;
    font-weight: 600;
    text-align: center;
  }

  & > div {
    margin: 0 auto;
    max-width: 460px;
  }
`

export const PaginationWrapper = styled.div`
  margin: 26px 0;

  & > div {
    margin: 0 auto;
  }
`
