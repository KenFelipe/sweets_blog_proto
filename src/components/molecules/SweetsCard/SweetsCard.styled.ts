import styled from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const Content = styled.div`
  background-size: contain;

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

  font-size: 2.4rem;
  font-weight: normal;
  letter-spacing: 0.16rem;

  padding: 2px 22px 2px 10px;

  position: absolute;
  bottom: 0;
  z-index: 1;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 3rem;
    padding: 3px 26px 3px 10px;
    letter-spacing: 0.2rem;
  }
`

export const NameLayer = styled.div.attrs({
  arrowSize: {
    small: 12,
    medium: 16,
  },
})`
  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  height: 32px;

  background-color: #000;
  opacity: 0.4;

  position: absolute;
  bottom: 0;

  @media (min-width: ${breakpoints.sm}) {
    height: 40px;
  }

  /* Arrow */
  ::after {
    content: '';
    display: block;

    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;

    width: ${({ arrowSize }) => `${arrowSize.small}px`};
    height: ${({ arrowSize }) => `${arrowSize.small}px`};
    margin-top: ${({ arrowSize }) =>
      `-${arrowSize.small / 2}px`};

    position: relative;
    top: 50%;
    right: 10px;
    transform: rotate(45deg);

    @media (min-width: ${breakpoints.sm}) {
      width: ${({ arrowSize }) => `${arrowSize.medium}px`};
      height: ${({ arrowSize }) => `${arrowSize.medium}px`};
      margin-top: ${({ arrowSize }) =>
        `-${arrowSize.medium / 2}px`};
    }
  }
`
