import styled, { css } from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

const bezier = 'cubic-bezier(.27,.8,.35, 1)'

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 100vh;

  position: relative;
  color: #fff;

  h1 {
    ${({ theme }) => css`
      max-width: ${theme.contentWidth};
    `}

    display: block;
    width: 100%;

    margin: 0 auto;
    padding: 102px 16px 128px;

    @media (min-width: ${breakpoints.sm}) {
      padding: 102px 24px 128px;
    }

    @media (min-width: ${breakpoints.md}) {
      padding: 102px 32px 128px;
    }

    @media (min-width: ${breakpoints.lg}) {
      padding: 102px 38px 128px;
    }
  }
`

export const BackgroundLayer = styled.div`
  background-color: #000;

  position: absolute;
  top: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
`

export const BackgroundImage = styled.div`
  opacity: 0.7;

  background-size: cover;
  background-attachment: fixed;

  position: absolute;
  top: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`

export const Title = styled.span`
  display: block;

  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1.3;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 4rem;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 4.4rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 4.8rem;
  }
`

export const Tel = styled.div`
  margin-top: 32px;

  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 1.3;

  a {
    display: inline-block;
    margin-top: 10px;

    position: relative;
    z-index: 1;

    transition: all 0.6s ${bezier};

    font-size: 2.4rem;
    padding: 4px 18px 8px;

    @media (min-width: ${breakpoints.sm}) {
      padding: 4px 36px 8px;
      font-size: 2.8rem;
    }

    :hover {
      filter: brightness(1.5);

      /* underline */
      ::after {
        width: calc(100% - 72px);
      }
    }

    /* underline */
    ::after {
      content: '';
      display: block;

      width: 0;
      border-bottom: 2px solid #0d60c8;

      position: absolute;
      bottom: 8px;
      left: 36px;

      transition: all 0.3s ${bezier};
    }

    ::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      ${({ theme }) => css`
        background-color: ${theme.background.main};
      `}

      border-radius: 1000px;
      opacity: 0.9;
      z-index: -1;
    }
  }
`
