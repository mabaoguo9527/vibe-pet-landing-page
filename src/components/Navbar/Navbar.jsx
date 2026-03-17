import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')
  }

  const links = [
    { href: '#services', label: t('nav.services') },
    { href: '#how', label: t('nav.howItWorks') },
    { href: '#reviews', label: t('nav.reviews') },
    { href: '#booking', label: t('nav.booking') },
  ]

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <a href="#" className={styles.brand}>
            {t('nav.brand')}<span>.</span>
          </a>
          <ul className={styles.navLinks}>
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <div className={styles.navCta}>
            <button className={styles.langBtn} onClick={toggleLang}>
              {i18n.language === 'zh' ? '🌐 EN' : '🌐 中文'}
            </button>
            <a href="tel:+86400888888" className={`${styles.btn} ${styles.btnOutline}`}>
              {t('nav.call')}
            </a>
            <a href="#booking" className={`${styles.btn} ${styles.btnPrimary}`}>
              {t('nav.booking')} 🐾
            </a>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)}>
          <div className={styles.mobilePanel} onClick={e => e.stopPropagation()}>
            <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>✕</button>
            <ul className={styles.mobileLinks}>
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
                </li>
              ))}
            </ul>
            <button className={styles.langBtnMobile} onClick={toggleLang}>
              {i18n.language === 'zh' ? '🌐 Switch to EN' : '🌐 切换中文'}
            </button>
            <a
              href="#booking"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.booking')} 🐾
            </a>
          </div>
        </div>
      )}
    </>
  )
}
