import styled, { css } from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

const bezier = 'cubic-bezier(.27,.8,.35, 1)'
const interval = '1.8s'

const expandBackground = css`
  transform: scale(1.1, 1.1);
  transition: transform ${interval} ${bezier};
`

export const Background = styled.div`
  background-size: contain;

  position: absolute;
  width: 100%;
  height: 100%;

  transition: transform ${interval} ${bezier};
`

export const Price = styled.span`
  padding: 5px 8px;
  font-style: italic;
  z-index: 1;
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

  transition: all 1.2s ${bezier};

  @media (min-width: ${breakpoints.sm}) {
    height: 40px;
  }

  /* Arrow */
  ::after {
    content: '';
    display: block;

    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;

    position: relative;
    top: 50%;
    right: 10px;
    transform: rotate(45deg);

    transition: all 0.7s ease-out;

    width: ${({ arrowSize }) => `${arrowSize.small}px`};
    height: ${({ arrowSize }) => `${arrowSize.small}px`};
    margin-top: ${({ arrowSize }) =>
      `-${arrowSize.small / 2}px`};

    @media (min-width: ${breakpoints.sm}) {
      width: ${({ arrowSize }) => `${arrowSize.medium}px`};
      height: ${({ arrowSize }) => `${arrowSize.medium}px`};
      margin-top: ${({ arrowSize }) =>
        `-${arrowSize.medium / 2}px`};
    }
  }
`

export const Content = styled.div`
  overflow: hidden;

  position: relative;
  height: 100%;

  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.lg}) {
    :hover {
      ${Background} {
        ${expandBackground};
      }

      ${NameLayer} {
        opacity: 0.85;

        ::after {
          border-top: 1px solid #eee;
          border-right: 1px solid #eee;
        }
      }
    }
  }
`
