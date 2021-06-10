import styled, { css } from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const SweetsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: minmax(2fr, 3fr);
  }

  ${({ theme }) => css`
    max-width: ${theme.contentWidth};
  `}
  margin: 0 auto;
`

export const CategoriesWrapper = styled.div`
  margin-bottom: 30px;

  & > h3 {
    color: #282828;
    margin: 16px 0;

    font-size: 3.2rem;
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
  margin: 46px 0;

  & > div {
    margin: 0 auto;
  }
`
