import Greet from '../components/greet'
import styles from './page.module.css'

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Greet />
    </main>
  )
}
