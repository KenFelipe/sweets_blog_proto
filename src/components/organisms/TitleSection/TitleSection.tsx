import * as Styled from './TitleSection.styled'

export type TitleSectionProps = {
  children: React.ReactNode
}

export const TitleSection = ({
  children,
}: TitleSectionProps) => {
  return (
    <Styled.TitleSection>
      <h1>
        Lorem ipsum sit amet consectetur adipisicing elit.
        <br />
        Iure quam.
        <br />
        <span>
          Tel:
          <br />
          (11)94546-6539
        </span>
      </h1>
    </Styled.TitleSection>
  )
}
