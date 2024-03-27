'use client'
import { useState } from 'react'
import { NumberForm } from './NumberForm'
import { CodeForm } from './CodeForm'

// function sendSMS (code: string, number) {
//  message = `Tu codigo de verificación es: ${code}`
//  sendTwilioSMS({ to: number, body: message })
// }

export default function PhoneNumber ({ onClose }: { onClose: any }) {
  const [step, setStep] = useState<number>(0)
  const [number, setNumber] = useState('')
  const [code, setCode] = useState<any>(null)

  function createCode () {
    const code = (Math.floor(100000 + Math.random() * 900000)).toString()
    setCode(code)
    console.log(code)
    // sendSMS(code)
  }

  if (step === 0) {
    return (
      <NumberForm
        setStep={setStep}
        number={number}
        setNumber={setNumber}
        createCode={createCode}
      />
    )
  }

  return <CodeForm code={code} setStep={setStep} onClose={onClose} />
}
