import * as Styled from './Pagination.styled'

export type PaginationProps = {
  currentPage: number
  onClickPrev: () => void
  onClickNext: () => void
}

export const Pagination = ({
  currentPage,
  onClickPrev,
  onClickNext,
}: PaginationProps) => {
  return (
    <Styled.Container>
      <Styled.Prev onClick={onClickPrev} />
      <span>{currentPage}</span>
      <Styled.Next onClick={onClickNext} />
    </Styled.Container>
  )
}
