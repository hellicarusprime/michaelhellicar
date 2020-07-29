import Link from "next/link"
import styles from "./styles.module.css"

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <a className={styles.logo}></a>
      </Link>
      <Link href="/writing">
        <a className={styles.nav}>Writing</a>
      </Link>
    </header>
  )
}
