import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  width: 132px;

  font-size: 3.2rem;
  font-weight: 600;

  color: #454545;

  & > span {
    display: inline-block;
    padding: 0px 16px;
  }

  & > a {
    display: inline-block;
    cursor: pointer;
    min-width: 15px;
    min-height: 15px;

    position: relative;

    ::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;

      min-width: 15px;
      min-height: 15px;
      margin-top: -7.5px;
    }

    :hover {
      opacity: 0.7;
    }
  }
`

export const Prev = styled.a`
  ::after {
    transform: rotate(45deg);
    border-bottom: 1.8px solid #121212;
    border-left: 1.8px solid #121212;
    left: 40%;
  }
`

export const Next = styled.a`
  ::after {
    transform: rotate(45deg);
    border-top: 1.8px solid #121212;
    border-right: 1.8px solid #121212;
    right: 40%;
  }
`
