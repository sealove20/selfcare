import Image from 'next/image'

import style from './styles.module.css'

interface Props {
  imageUrl: StaticImageData
}

export const ShopCard = ({ imageUrl }: Props) => {
  return (
    <section> 
      <Image src={imageUrl} className={style.shopCardImage} alt="Shop list item" />
      <h2 className={style.cardTitle}>Bacon ipsum</h2>
      <p className={style.cardContent}>R$ <span className={style.price}>50,00</span></p>
    </section>
  )
}