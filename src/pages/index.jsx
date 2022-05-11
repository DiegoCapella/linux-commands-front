import Home from '../templates/Home'

export default function Index(commands) {
  return <Home {...commands} />
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sections`)
  const commands = await res.json()

  return {
    props: {
      commands
    },
    revalidate: 28800
  }
}
