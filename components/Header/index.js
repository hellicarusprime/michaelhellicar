import styles from "./styles.module.css"

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <a href="/">
        <div className={styles.logo}></div>
      </a>
    </header>
  )
}
