import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.white};
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 3rem auto;
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
