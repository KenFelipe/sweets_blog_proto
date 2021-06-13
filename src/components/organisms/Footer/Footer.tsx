import * as Styled from './Footer.styled'

export type LicenceType = {
  label: string
  url: string
}

export type LicencesProps = {
  dz: LicenceType[]
}[]

export type FooterProps = {
  licenceData: {
    dz: LicenceType[]
  }[]
}

export const Footer = ({ licenceData }: FooterProps) => {
  return (
    <Styled.Footer>
      <div>
        <span>resources used: </span>
        <ul>
          {licenceData.map((dzone, i) => (
            <li key={i}>
              {dzone.dz.map((licence, ii) => (
                <div key={`${i}${ii}`}>
                  <a
                    href={licence.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {licence.label}
                  </a>
                  {ii < dzone.dz.length - 1 && (
                    <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </Styled.Footer>
  )
}
