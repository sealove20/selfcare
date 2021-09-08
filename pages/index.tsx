import type { NextPage } from 'next'
import { Header } from 'components/Header'
import { Shop } from 'components/Shop'
import Image from 'next/image'

import banner from 'public/banner.webp'
import styles from "./styles.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <section className={styles.banner}>
        <Image layout="fill" objectFit="cover" src={banner} alt="a logo in star format" />
      </section>
      <Shop />
    </>
  )
}

export default Home
