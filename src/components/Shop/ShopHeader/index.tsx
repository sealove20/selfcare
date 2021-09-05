import style from './styles.module.css'

export const ShopHeader = () => {
  return (
    <>
    <section className={style.shopHeader}>
      <h2 className={style.promotion}>PROMOÇÃO</h2>
      <p className={style.product}>9 produtos</p>
    </section>
    <hr className={style.line} />
    </>
  )
}