import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* 内容区 */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            {t('hero.badge')}
          </div>
          <h1 className={styles.title}>
            {t('hero.title1')}<br />
            <span className={styles.highlight}>{t('hero.title2')}</span>
          </h1>
          <p className={styles.desc}>{t('hero.desc')}</p>
          <div className={styles.actions}>
            <a href="#booking" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
              {t('hero.cta')}
            </a>
            <a href="#services" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}>
              {t('hero.services')}
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{t('hero.stat1Num')}</span>
              <span className={styles.statLabel}>{t('hero.stat1Label')}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{t('hero.stat2Num')}</span>
              <span className={styles.statLabel}>{t('hero.stat2Label')}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{t('hero.stat3Num')}</span>
              <span className={styles.statLabel}>{t('hero.stat3Label')}</span>
            </div>
          </div>
        </div>

        {/* 视觉区 */}
        <div className={styles.visual}>
          <div className={styles.cardMain}>
            <div className={styles.petIllustration}>🐩</div>
          </div>
          <div className={`${styles.floatCard} ${styles.card1}`}>
            <span className={styles.floatIcon}>✂️</span>
            <div className={styles.floatText}>
              <strong>{t('hero.floatCard1Title')}</strong>
              <span>{t('hero.floatCard1Sub')}</span>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.card2}`}>
            <span className={styles.floatIcon}>⭐</span>
            <div className={styles.floatText}>
              <strong>{t('hero.floatCard2Title')}</strong>
              <span className={styles.stars}>★★★★★</span>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.card3}`}>
            <span className={styles.floatIcon}>🛁</span>
            <div className={styles.floatText}>
              <strong>{t('hero.floatCard3Title')}</strong>
              <span>{t('hero.floatCard3Sub')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
