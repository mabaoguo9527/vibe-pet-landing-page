import { useTranslation } from 'react-i18next'
import styles from './Services.module.css'

const CARD_ACCENTS = [
  { accent: '#2563EB', iconBg: '#DBEAFE' },
  { accent: '#F59E0B', iconBg: '#FEF3C7' },
  { accent: '#10B981', iconBg: '#D1FAE5' },
  { accent: '#38BDF8', iconBg: '#E0F2FE' },
  { accent: '#2563EB', iconBg: '#DBEAFE' },
  { accent: '#F59E0B', iconBg: '#FEF3C7' },
]

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.sectionLabel}>{t('services.label')}</span>
          <h2 className={styles.sectionTitle}>{t('services.title')}</h2>
          <p className={styles.sectionSub}>{t('services.sub')}</p>
        </div>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.card} reveal`}
              style={{ '--card-accent': CARD_ACCENTS[i].accent, '--icon-bg': CARD_ACCENTS[i].iconBg }}
            >
              {item.tag && (
                <span className={styles.tag}>
                  {item.tag === 'popular' ? t('services.popular') : t('services.new')}
                </span>
              )}
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className={styles.price}>
                {item.price} <span>{t('services.perSession')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
