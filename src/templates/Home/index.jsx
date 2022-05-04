import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as S from './styles'

export default function Home() {
  return (
    <>
      <Header />

      <S.Wrapper>
        <S.Title>Instalação de programas Linux</S.Title>
        <S.Subtitle>
          Bem, o objetivo desse site é disponibilizar conteúdo sobre a
          instalação de programas no linux. Todas as secções de instalação são
          baseadas no meu setup pessoal. Caso tenha interesse em contribuir para
          o projeto ou saber mais sobre mim é só entrar em contato pelo GitHub
          ou LinkedIn. Abaixo estão os links dos repositórios:
        </S.Subtitle>
      </S.Wrapper>

      <Footer />
    </>
  )
}
