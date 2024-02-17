import { Breadcrumb, Button } from '@quest/ui'

export default function Page() {
  return (
    <main>
      <h1>페이지</h1>
      <Button variant='solid'>버튼</Button>
      <Breadcrumb pathNames={['billing', 'monitering']} homeName='Home' isCapitalizeFirstChar />
    </main>
  )
}
