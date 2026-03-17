import { useTranslation } from 'react-i18next'
import styles from './TrustBar.module.css'

const LOGOS = ['PetMD', 'BarkBox', 'Rover', 'Chewy', 'PetSmart']

export default function TrustBar() {
  const { t } = useTranslation()
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <span className={styles.label}>{t('trust.label')}</span>
        <div className={styles.logos}>
          {LOGOS.map(l => <span key={l} className={styles.logo}>{l}</span>)}
        </div>
      </div>
    </div>
  )
}
