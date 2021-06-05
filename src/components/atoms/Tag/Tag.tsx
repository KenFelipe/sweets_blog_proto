import React from 'react'
import * as Styled from './Tag.styled'

export type TagProps = {
  // OR onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: () => void
  active?: boolean
  fontSize?: string
  underlineWeight?: string
  children: React.ReactNode
}

/* eslint-disable */
export const Tag = React.forwardRef<HTMLDivElement, TagProps>(({
  onClick,
  active = false,
  fontSize,
  underlineWeight,
  children,
}, ref) => {
  return (
    <div ref={ref}>
      <Styled.Tag
        onClick={onClick}
        active={active}
        underlineWeight={underlineWeight}
        fontSize={fontSize}
      >
        {children}
      </Styled.Tag>
    </div>
  )
})
