import styles from "./styles.module.css"

export const TextLink = (props) => {
  return (
    <a href={props.href} className={styles.a}>
      {props.children}
    </a>
  )
}
