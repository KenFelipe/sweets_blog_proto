import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0 15px;

  & > a {
    margin: 2px 2px;
  }

  & > div {
    ::after {
      content: '/';
      display: inline-block;
      margin: 0px 4px;

      @media (min-width: ${breakpoints.sm}) {
        margin: 0px 6px;
      }

      /* content: '|';
      position: relative;
      bottom: 2px; */
    }

    :last-child,
    &.prewraps {
      ::after {
        display: none;
      }
    }
  }
`
