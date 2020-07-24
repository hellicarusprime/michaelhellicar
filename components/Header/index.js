import styles from "./styles.module.css"

export const Header = (props) => {
  return <div className={styles.logo}>{props.children}</div>
}
