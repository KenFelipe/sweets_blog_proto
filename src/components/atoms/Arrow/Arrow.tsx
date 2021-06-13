import * as Styled from './Arrow.styled'

export type ArrowProps = {
  direction?: 'right' | 'left' | 'up' | 'down'
  offsetRight?: string
  offsetLeft?: string
  offsetTop?: string
  offsetBottom?: string
}

export const Arrow = ({
  direction = 'left',
  offsetLeft,
  offsetRight,
  offsetTop,
  offsetBottom,
}: ArrowProps) => {
  return (
    <Styled.Arrow
      direction={direction}
      offsetLeft={offsetLeft}
      offsetRight={offsetRight}
      offsetTop={offsetTop}
      offsetBottom={offsetBottom}
    />
  )
}
