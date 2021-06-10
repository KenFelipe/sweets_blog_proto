import styled, { css } from 'styled-components'
import { breakpoints } from '@/styles/breakpoints'

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 100vh;

  color: #fff;
  background-image: url('https://res.cloudinary.com/cloudken/image/upload/v1623294407/decorating-delicious-homemade-eclairs-with-chocolate-peanuts_gjzrex.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position-x: right;

  h1 {
    ${({ theme }) => css`
      max-width: ${theme.contentWidth};
    `}

    display: block;
    margin: 0 auto;

    text-align: left;
    text-align: right;

    padding: 54px 16px 128px;

    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 1.3;

    @media (min-width: ${breakpoints.sm}) {
      font-size: 4rem;
      padding: 48px 24px 128px;
    }

    @media (min-width: ${breakpoints.md}) {
      font-size: 4.4rem;
      padding: 48px 32px 128px;
    }

    @media (min-width: ${breakpoints.lg}) {
      font-size: 4.8rem;
      padding: 48px 38px 128px;
    }

    span {
      display: block;
      margin-top: 32px;

      font-size: 2.8rem;
    }
  }
`
