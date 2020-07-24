import Head from "next/head"
import styles from "./styles.module.css"

export const Layout = (props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>{props.children}</div>
    </>
  )
}
