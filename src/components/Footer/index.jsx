import * as S from './styles'

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <S.Footer>
      <span>Copyright &copy;</span>
      {date}
      <p>Diego Capella</p>
    </S.Footer>
  )
}
