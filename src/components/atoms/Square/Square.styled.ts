import styled from 'styled-components'
import { SquareProps } from './Square'

type CubicWrapperProps = Pick<
  SquareProps,
  'minSide' | 'maxSide' | 'background'
>

export const Wrapper = styled.div<CubicWrapperProps>`
  position: relative;

  min-width: ${({ minSide }) => minSide || '0px'};
  max-width: ${({ maxSide }) => maxSide || 'none'};

  background: ${({ background }) => background || 'transparent'};

  ::after {
    content: '';
    display: block;

    padding-top: 100%;
  }
`

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
