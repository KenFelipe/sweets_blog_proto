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
  flex-flow: column wrap;
  justify-content: space-between;

  /* Name section Overlay */
  ::after {
    content: '';
    display: block;

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 40px;

    background-color: #000;
    opacity: 0.3;
    z-index: 1;
  }
`

export const NameSection = styled.div.attrs({
  arrowSize: 16,
})`
  display: flex;
  z-index: 2;

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

export const Name = styled.p`
  font-size: 3rem;
  flex-grow: 1;

  padding: 3px 10px;
  letter-spacing: 0.12rem;
`

export const Price = styled.p`
  padding: 5px 8px;
  font-style: italic;
`
