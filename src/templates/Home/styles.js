import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 8rem auto;

    ${media.lessThan('medium')`
      padding: 0 2rem;
      margin: 4rem auto;

      &h2, h3 {
        font-size: 1.2rem;
      }
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    color: ${theme.colors.white};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    font-size: 2rem;
    color: ${theme.colors.white};
    font-weight: 400;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 5rem auto;
    color: ${theme.colors.white};
  `}
`
