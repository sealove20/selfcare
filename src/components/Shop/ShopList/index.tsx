import shopImage from 'public/shopImage1.webp'

import style from './styles.module.css'
import { ShopCard } from '../ShopCard'

export const ShopList = () => {
  return (
    <section className={style.shop}>
      <ShopCard imageUrl={shopImage} />
      <ShopCard imageUrl={shopImage} />
      <ShopCard imageUrl={shopImage} />
      <ShopCard imageUrl={shopImage} />
      <ShopCard imageUrl={shopImage} />
      <ShopCard imageUrl={shopImage} />
      <ShopCard imageUrl={shopImage} />
      <ShopCard imageUrl={shopImage} />
      <ShopCard imageUrl={shopImage} /> 
    </section>
  )
}