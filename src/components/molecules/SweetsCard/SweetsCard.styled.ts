// eslint-ignore
import styled from 'styled-components'
import { SweetsCardProps } from './SweetsCard'

export const Wrapper = styled.div<Pick<SweetsCardProps, 'imageUrl'>>`
  position: relative;

  min-width: 160px;
  max-width: 320px;

  background-image: url(${({ imageUrl }) => imageUrl});

  ::after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

export const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const Content = styled.div`
  position: relative;
  height: 100%;

  color: #fff;

  display: flex;
  flex-flow: column-reverse wrap;
  justify-content: space-between;

  // Name section Overlay
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

const arrowSize = 16

export const NameSection = styled.div`
  display: flex;
  z-index: 2;

  ::after {
    content: '';
    display: block;

    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;

    width: ${arrowSize}px;
    height: ${arrowSize}px;
    margin-top: -${arrowSize / 2}px;

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
