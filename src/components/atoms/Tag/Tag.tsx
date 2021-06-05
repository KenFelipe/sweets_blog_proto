import * as Styled from './Tag.styled'

export type TagProps = {
  // OR onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: () => void
  active?: boolean
  fontSize?: string
  underlineWeight?: string
  children: React.ReactNode
}

export const Tag = ({
  onClick,
  active = false,
  fontSize,
  underlineWeight,
  children,
}: TagProps) => {
  return (
    <Styled.Tag
      onClick={onClick}
      active={active}
      underlineWeight={underlineWeight}
      fontSize={fontSize}
    >
      {children}
    </Styled.Tag>
  )
}
