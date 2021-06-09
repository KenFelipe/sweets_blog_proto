import styled from 'styled-components'

export const GoTopButton = styled.a`
  display: flex;
  flex-direction: column-reverse;

  position: relative;
  cursor: pointer;

  width: 60px;
  height: 58px;
  color: #454545;

  :hover {
    opacity: 0.7;
  }

  :active {
    opacity: 0.4;
  }

  & > span {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 4px 0;
  }
`
