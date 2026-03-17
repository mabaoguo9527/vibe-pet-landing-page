import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'
import type { ServiceItem, ContactInfo } from '../../types'

export default function Footer() {
  const { t } = useTranslation()
  const company = t('footer.company', { returnObjects: true }) as string[]
  const contact = t('footer.contact', { returnObjects: true }) as ContactInfo
  const services = t('services.items', { returnObjects: true }) as ServiceItem[]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Pawfect<span>.</span></span>
            <p>{t('footer.desc')}</p>
          </div>
          <div className={styles.col}>
            <h5>{t('footer.servicesTitle')}</h5>
            <ul>
              {services.map(s => (
                <li key={s.title}><a href="#services">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <h5>{t('footer.companyTitle')}</h5>
            <ul>
              {company.map(c => <li key={c}><a href="#">{c}</a></li>)}
            </ul>
          </div>
          <div className={styles.col}>
            <h5>{t('footer.contactTitle')}</h5>
            <ul>
              <li><a href="tel:+86400888888">{contact.phone}</a></li>
              <li><a href="mailto:hello@pawfect.cn">{contact.email}</a></li>
              <li><a href="#">{contact.address}</a></li>
              <li><span>{contact.weekday}</span></li>
              <li><span>{contact.weekend}</span></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{t('footer.copyright')}</p>
          <div className={styles.socials}>
            <a href="#" className={styles.social} aria-label="Instagram">📸</a>
            <a href="#" className={styles.social} aria-label="Facebook">👍</a>
            <a href="#" className={styles.social} aria-label="TikTok">🎵</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
