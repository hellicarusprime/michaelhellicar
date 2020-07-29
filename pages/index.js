import Head from "next/head"
import { Layout } from "../components/Layout"
import { H1 } from "../components/H1"
import { P } from "../components/P"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { TextLink } from "../components/TextLink"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Michael Hellicar | Product Design</title>
      </Head>
      <Header />
      <H1>
        Hello, <br /> I'm Michael.
      </H1>
      <P>
        I'm a Product Designer based in London—currently designing for Clinical
        Care at{" "}
        <TextLink href="https://babylonhealth.com">Babylon Health</TextLink>.
        Before Babylon, I worked with the great people at{" "}
        <TextLink href="https://shopify.com">Shopify</TextLink>,{" "}
        <TextLink href="https://simplybusiness.co.uk">Simply Business</TextLink>
        , and <TextLink href="https://kahoot.com">Kahoot!</TextLink>
      </P>
      <P>
        With an appetite for collaborative design practice, my primary skills
        lie in interaction design and connecting systems with interfaces. You
        will usually find me working with multi-disciplinary teams to create
        compelling and scalable digital products.
      </P>
      <P>
        If you fancy a chat, please{" "}
        <TextLink href="mailto:michael.hellicar@hey.com">get in touch</TextLink>
        .
      </P>
      <Footer />
    </Layout>
  )
}

export default Home
