import * as Styled from './Footer.styled'

export const Footer = () => {
  return (
    <Styled.Footer>
      <div>
        <span>resources used: </span>
        <ul>
          <li>
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
            <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <a
              href="https://source.unsplash.com/"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash Source
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/photos/food"
              target="_blank"
              rel="noreferrer"
            >
              Food photo created by master1305 - www.freepik.com
            </a>
          </li>
        </ul>
      </div>
    </Styled.Footer>
  )
}
