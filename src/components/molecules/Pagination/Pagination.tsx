import * as Styled from './Pagination.styled'

export type PaginationProps = {
  currentPage: number
  maxPages: number
  onClickPrev: () => void
  onClickNext: () => void
}

export const Pagination = ({
  currentPage,
  maxPages,
  onClickPrev,
  onClickNext,
}: PaginationProps) => {
  return (
    <Styled.Container>
      {currentPage > 1 && <Styled.Prev onClick={onClickPrev} />}
      <span>{currentPage}</span>
      {currentPage < maxPages && (
        <Styled.Next onClick={onClickNext} />
      )}
    </Styled.Container>
  )
}
