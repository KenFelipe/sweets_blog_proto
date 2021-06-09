import { Arrow } from '@/atoms/Arrow/Arrow'
import * as Styled from './GoTop.styled'

export const GoTop = () => {
  return (
    <Styled.GoTopButton
      onClick={() =>
        document.body.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    >
      <Arrow
        direction="up"
        offsetLeft="50%"
        offsetBottom="32px"
      />
      <span>Top</span>
    </Styled.GoTopButton>
  )
}
