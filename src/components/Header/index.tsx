import star from 'public/star.svg'
import search from 'public/search.svg'
import cart from 'public/cart.svg'
import user from 'public/user.svg'
import Image from 'next/image'

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logo}>
        <Image src={star} alt="a logo in star format" />
        <h2>selfcare</h2>
      </section>
      <section className={styles.nav}>
        <Image src={search} width={21} height={21} alt="a magnifying glass image" />
        <Image src={user} width={21} height={21} alt="an abstract human image" />
        <Image src={cart} width={21} height={21} alt="a cart image" />
      </section>
    </header>
  )
}