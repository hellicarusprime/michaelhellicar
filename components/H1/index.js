import styles from "./styles.module.css"

export const H1 = (props) => {
  return <h1 className={styles.h1}>{props.children}</h1>
}
