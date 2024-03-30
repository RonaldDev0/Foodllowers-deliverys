'use client'
import { useState } from 'react'
import { NumberForm } from './NumberForm'
import { CodeForm } from './CodeForm'

export function PhoneNumber ({ onClose }: { onClose: any }) {
  const [step, setStep] = useState<number>(0)
  const [number, setNumber] = useState('')
  const [code, setCode] = useState<any>(null)

  function createCode () {
    const code = (Math.floor(100000 + Math.random() * 900000)).toString()
    setCode(code)
    fetch('/api/send-sms', {
      cache: 'no-store',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, number })
    }).then(res => res.json()).then(console.log)
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

  return (
    <CodeForm
      code={code}
      setStep={setStep}
      onClose={onClose}
      number={number}
    />
  )
}
