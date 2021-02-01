import Link from "next/link"
import styles from "./styles.module.css"

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <a className={styles.logo}></a>
    </header>
  )
}
