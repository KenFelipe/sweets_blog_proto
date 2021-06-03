import * as Styled from './Square.styled'

export type SquareProps = {
  minSide?: string
  maxSide?: string
  background?: string
  children: React.ReactNode
}

export const Square = ({
  minSide,
  maxSide,
  background,
  children,
}: SquareProps) => {
  return (
    <Styled.Wrapper //
      minSide={minSide}
      maxSide={maxSide}
      background={background}
    >
      <Styled.ContentContainer>
        {children}
      </Styled.ContentContainer>
    </Styled.Wrapper>
  )
}
