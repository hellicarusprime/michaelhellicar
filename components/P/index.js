import styles from "./styles.module.css"

export const P = (props) => {
  return <p className={styles.paragraph}>{props.children}</p>
}
