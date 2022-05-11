import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import * as S from './styles'

export default function Section(item) {
  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text)
    toast.success('Copied!', {
      autoClose: 2000,
      pauseOnHover: false
    })
  }

  return (
    <>
      {/* Same as */}
      <S.Section>
        <ToastContainer pauseOnFocusLoss={false} />
        <S.Title>{item.commands.title}</S.Title>

        {item.commands.step.map((step) => (
          <S.Content key={step.id}>
            <p>{step?.description}</p>
            <S.Command>
              <code>{step.command}</code>
              <button onClick={() => copyToClipboard(step.command)}>
                Copy
              </button>
            </S.Command>
          </S.Content>
        ))}
      </S.Section>
    </>
  )
}
