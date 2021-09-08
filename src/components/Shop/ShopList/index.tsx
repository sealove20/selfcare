import shopImage from 'public/shopImage1.webp'
import Image from 'next/image'

import style from './styles.module.css'

export const ShopList = () => {
  return (
    <section className={style.shop}>
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" />
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" />
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" />
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" />
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" />
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" />
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" />
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" />
      <Image src={shopImage} className={style.shopCardImage} alt="Shop list item" /> 
    </section>
  )
}