import styled, { css } from 'styled-components'
import { TagProps } from './Tag'

type Props = Pick<
  TagProps,
  'active' | 'fontSize' | 'underlineWeight'
>

const bezier = 'cubic-bezier(.27,.8,.35, 1)'
const activeColor = '#323232'

export const Tag = styled.a<Props>`
  user-select: none;
  white-space: nowrap;

  display: inline-block;
  cursor: pointer;

  position: relative;
  padding: 2px 4px;

  font-size: ${({ fontSize }) => fontSize || '1.8rem'};
  font-style: italic;
  letter-spacing: 0.12rem;
  font-weight: 600;

  color: #626262;
  opacity: 0.7;

  transition: all 0.6s ${bezier};

  :hover {
    opacity: 1;
    color: ${activeColor};

    /* Underline */
    ::after {
      width: calc(100% - 4px);
    }
  }

  /* Underline */
  ::after {
    content: '';
    display: block;
    width: 0;

    border-bottom: ${({ underlineWeight }) =>
        underlineWeight || '2px'}
      dashed ${activeColor};

    position: absolute;
    bottom: 3px;
    left: 3px;

    transition: all 0.6s ${bezier};
  }

  :active {
    opacity: 0.3;
    transition: opacity 0.1s ease;
  }

  ${({ active }) => {
    const activeStyle = css`
      color: ${activeColor};
      opacity: 1;

      /* Underline */
      ::after {
        width: calc(100% - 4px);
      }
      :active {
        opacity: 0.3;
        transition: opacity 0.1s ease;
      }
    `
    return active && activeStyle
  }};
`
