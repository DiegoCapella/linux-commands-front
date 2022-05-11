import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.white};
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 3rem auto;

    ${media.lessThan('medium')`
      font-size: 1.2rem;
      padding: 0 2rem;
    `}
  `}
`

export const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 5rem;
    height: 5rem;
    cursor: pointer;

    a {
      color: ${theme.colors.white};
    }
  `}
`
