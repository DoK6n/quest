'use client'
import { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import { Card } from 'ui'
import { useDidMount } from '../hooks/lifecycle'
import styles from '../app/page.module.css'
// import styles from '~/app/page.module.css'

interface InvokeResponse {
  message: string
  other_val: number
}

export default function Greet() {
  const [greetValue, setGreetValue] = useState('tauri')
  const [message, setMessage] = useState('tauri')
  const [otherVal, setOtherVal] = useState(0)

  const getGreet = async (): Promise<void> => {
    const result = await invoke<string>('greet', { name: 'Tauri App With Turborepo' })
    console.log('🚀 ~ file: greet.tsx:19 ~ getGreet ~ result:', result)
    setGreetValue(result)
  }
  const getInvoke = async (): Promise<void> => {
    const result = await invoke<InvokeResponse>('my_custom_command', {
      number: 42,
    })

    console.log('🚀 ~ file: greet.tsx:10 ~ getInvoke ~ result:', result)
    setMessage(result.message)
    setOtherVal(result.other_val)
  }

  useDidMount(() => {
    getInvoke()
    getGreet()
  })

  return (
    <>
      <div className={styles.grid}>
        <Card className={styles.card} href='' title={message}>
          {otherVal}
        </Card>
      </div>

      <div className={styles.description}>
        {greetValue}&nbsp;
        <code className={styles.code}>greetValue</code>
      </div>
    </>
  )
}
