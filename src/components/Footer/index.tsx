import face from 'public/face.svg'
import insta from 'public/insta.svg'
import master from 'public/master.svg'
import paypal from 'public/paypal.svg'
import visa from 'public/visa.svg'

import Image from 'next/image'


import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <section className={styles.footerText}>
          <p>Contato</p>
          <p>Termos de serviço</p>
          <p>Política de privacidade</p>
          <p>Cancelamento, troca e reembolso</p>
        </section>
        <section>
          <p className={styles.newsletterText}>Newsletter</p>
          <div className={styles.newsLetterInputContainer}>
            <input type="email" placeholder="Digite seu melhor e-mail" className={styles.newletterInput}/>
            <span className={styles.newsLetterInputSignButton}>Inscrever</span>
          </div>
        </section>
      </div>
      <hr className={styles.footerLine}/>
      <div className={styles.footerContainer}>
        <section className={styles.socials}>
          <Image src={face} width={30} height={30} alt="a magnifying glass image" />
          <Image src={insta} width={30} height={30} alt="a magnifying glass image" />
        </section>
        <section className={styles.pay}>
          <Image src={master} width={40} height={40} alt="a magnifying glass image" />
          <Image src={paypal} width={40} height={40} alt="a magnifying glass image" />
          <Image src={visa} width={40} height={40} alt="a magnifying glass image" />
        </section>
      </div>
    </footer>
  )
}