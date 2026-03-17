import { useTranslation } from 'react-i18next'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('how.steps', { returnObjects: true })

  return (
    <section className={styles.how} id="how">
      <div className={styles.container}>
        <div className={`${styles.visual} reveal`}>🐕</div>
        <div className={styles.content}>
          <span className={`${styles.sectionLabel} reveal`}>{t('how.label')}</span>
          <h2 className={`${styles.sectionTitle} reveal`}>{t('how.title')}</h2>
          <p className={`${styles.sectionSub} reveal`}>{t('how.sub')}</p>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i} className={`${styles.step} reveal`}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepContent}>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
