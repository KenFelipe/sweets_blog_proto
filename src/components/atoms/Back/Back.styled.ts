import styled, { css } from 'styled-components'
import { Arrow } from '../Arrow/Arrow.styled'

export const Back = styled.a`
  display: inline-block;
  cursor: pointer;
  position: relative;

  padding: 2px 8px 2px 25px;

  :hover {
    opacity: 0.7;
  }

  :active {
    opacity: 0.4;
  }

  & > ${Arrow} {
    min-width: 0;
    min-height: 0;
    width: 11px;
    height: 11px;
    margin-top: -5.5px;
    margin-left: -5.5px;
    position: absolute;
    left: 16px;
    top: calc(50% - 1px);
  }

  & > span {
    font-size: 2.2rem;
    letter-spacing: 0.8px;

    ${({ theme }) => css`
      color: ${theme.color.black1};
    `}
  }
`
