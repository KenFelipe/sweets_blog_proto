import * as Styled from './Back.styled'
import { Arrow } from '../Arrow/Arrow'

export type BackProps = {
  href?: string
  newTab?: boolean
  onClick?: () => void
}

export const Back = ({
  href,
  newTab = false,
  onClick,
}: BackProps) => {
  return (
    <Styled.Back //
      href={href}
      target={newTab ? '_blank' : '_self'}
      onClick={onClick}
    >
      <Arrow direction="left" />
      <span>Back</span>
    </Styled.Back>
  )
}
