import React from 'react'
import * as S from './styles'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import Link from 'next/link'

export default function Header() {
  return (
    <S.Header>
      <h1>Linux Command</h1>

      <S.IconsGroup>
        <S.IconsWrapper>
          <Link href="https://www.linkedin.com/in/diego-capella/">
            <a target="_blank">
              <LinkedinSquare aria-label="Logo LinkedIn" />
            </a>
          </Link>
        </S.IconsWrapper>
        <S.IconsWrapper>
          <Link href="https://github.com/DiegoCapella">
            <a target="_blank">
              <Github aria-label="Logo Github" />
            </a>
          </Link>
        </S.IconsWrapper>
      </S.IconsGroup>
    </S.Header>
  )
}
