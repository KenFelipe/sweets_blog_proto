import styled, { css } from 'styled-components'
import { ArrowProps } from './Arrow'

export const Arrow = styled.div<ArrowProps>`
  display: block;
  position: absolute;

  width: 15px;
  height: 15px;
  min-width: 15px;
  min-height: 15px;

  border-bottom: 1.8px solid #121212;
  border-left: 1.8px solid #121212;

  margin-top: -9px;
  margin-left: -9px;
  left: ${({ offsetLeft }) => offsetLeft || 'auto'};
  right: ${({ offsetRight }) => offsetRight || 'auto'};
  top: ${({ offsetTop }) => offsetTop || 'auto'};
  bottom: ${({ offsetBottom }) => offsetBottom || 'auto'};

  ${({ direction }) => {
    switch (direction) {
      case 'left':
        return css`
          transform: rotate(45deg);
        `
      case 'right':
        return css`
          transform: rotate(225deg);
        `
      case 'up':
        return css`
          transform: rotate(135deg);
        `
      case 'down':
        return css`
          transform: rotate(-45deg);
        `
    }
  }}
`
