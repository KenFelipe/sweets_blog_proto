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
      <Styled.Prev
        onClick={onClickPrev}
        hidden={currentPage <= 1}
      />
      <span>{currentPage}</span>
      <Styled.Next
        onClick={onClickNext}
        hidden={currentPage >= maxPages}
      />
    </Styled.Container>
  )
}
