import styled from 'styled-components'
// import { SweetsListProps } from './SweetsList'
import { breakpoints } from '@/styles/breakpoints'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: minmax(2fr, 3fr);
  }

  max-width: 960px;
`
