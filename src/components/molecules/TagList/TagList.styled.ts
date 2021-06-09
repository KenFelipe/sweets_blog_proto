import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > a {
    margin: 2px 2px;
  }

  & > div {
    ::after {
      content: '/';
      display: inline-block;
      margin: 0px 6px;

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
