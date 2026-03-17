import { useTranslation } from 'react-i18next'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('reviews.items', { returnObjects: true })

  return (
    <section className={styles.testimonials} id="reviews">
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.sectionLabel}>{t('reviews.label')}</span>
          <h2 className={styles.sectionTitle}>{t('reviews.title')}</h2>
          <p className={styles.sectionSub}>{t('reviews.sub')}</p>
        </div>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={`${styles.card} reveal`}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: item.avatarBg }}>
                  {item.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
