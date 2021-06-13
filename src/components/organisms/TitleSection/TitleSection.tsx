import * as Styled from './TitleSection.styled'

export type TitleSectionProps = {
  title: string
  align: string
  tel: string
  tel_label: string
  background: {
    url: string
  }
  background_position_x: string
  background_position_y: string
}

export const TitleSection = ({
  title,
  align,
  tel,
  tel_label,
  background,
  background_position_x,
  background_position_y,
}: TitleSectionProps) => {
  return (
    <Styled.TitleSection>
      <Styled.BackgroundLayer />
      <Styled.BackgroundImage
        style={{
          backgroundImage: background.url
            ? `url('${background.url}')`
            : 'none',
          backgroundPositionX: background_position_x,
          backgroundPositionY: background_position_y,
        }}
      />
      <h1 style={{ textAlign: align }}>
        {title.split('\n').map((line, i) => (
          <Styled.Title key={i}>
            {line}
            <br />
          </Styled.Title>
        ))}
        <Styled.Tel>
          <span>{tel_label}&nbsp;</span>
          <br />
          <a
            href={`https://web.whatsapp.com/send?phone=55${tel.replace(
              /[^0-9]/g,
              '',
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            {tel}
          </a>
        </Styled.Tel>
      </h1>
    </Styled.TitleSection>
  )
}
