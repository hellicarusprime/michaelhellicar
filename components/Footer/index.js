import styles from "./styles.module.css"

export const Footer = () => {
  return (
    <div className={styles.copyright}>
      {" "}
      © {new Date().getFullYear()} Michael Hellicar
    </div>
  )
}
