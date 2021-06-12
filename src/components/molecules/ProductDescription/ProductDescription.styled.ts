import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  color: #282828;
  padding: 16px 15px 12px;

  & > h2 {
    margin: 0 0 16px;
    text-align: left;

    font-size: 3.2rem;
    font-style: italic;
    font-weight: 600;

    border-bottom: 1.5px solid #181818;
  }

  & > p {
    margin: 16px 0 12px;
    padding: 0 2px;

    & > span {
      font-size: 1.8rem;
      font-weight: 500;
      font-style: italic;
      letter-spacing: 0.5px;
    }
  }

  & > span:last-child {
    font-size: 2.2rem;
    font-weight: 600;
    font-style: italic;

    position: relative;
    display: inline-block;

    ::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;

      width: calc(100% + 4px);
      border-bottom: 1.5px solid #181818;
    }
  }
`
