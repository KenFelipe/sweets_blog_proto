// eslint-ignore
import styled from 'styled-components'
import { SweetsCardProps } from './SweetsCard'

type Props = Pick<SweetsCardProps, 'imageUrl'>

export const Content = styled.div<Props>`
  background-image: url(${({ imageUrl }) => imageUrl});

  position: relative;
  height: 100%;

  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Price = styled.span`
  padding: 5px 8px;
  font-style: italic;
`

export const Name = styled.span`
  /* flexitems min-width set to default its flexcontent width,
    so need to override to text-overflow works properly */
  min-width: 0;
  max-width: 100%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 3rem;
  letter-spacing: 0.12rem;

  padding: 3px 26px 3px 10px;

  position: absolute;
  bottom: 0;
  z-index: 1;
`

export const NameLayer = styled.div.attrs({
  arrowSize: 16,
})`
  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  height: 40px;

  background-color: #000;
  opacity: 0.3;

  position: absolute;
  bottom: 0;

  /* Arrow */
  ::after {
    content: '';
    display: block;

    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;

    width: ${({ arrowSize }) => `${arrowSize}px`};
    height: ${({ arrowSize }) => `${arrowSize}px`};
    margin-top: ${({ arrowSize }) => `-${arrowSize / 2}px`};

    position: relative;
    top: 50%;
    right: 10px;

    transform: rotate(45deg);
  }
`
