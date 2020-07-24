import styles from "./styles.module.css"

export const Header = (props) => {
  return <header className={styles.logo}>{props.children}</header>
}
