import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Booking.module.css'

export default function Booking({ onToast }) {
  const { t } = useTranslation()
  const [form, setForm] = useState({ ownerName: '', phone: '', petName: '', petType: '', service: '', date: '' })

  const fields = t('booking.fields', { returnObjects: true })

  const tomorrow = (() => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
  })()

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const { ownerName, phone, petName, date } = form
    if (!ownerName || !phone || !petName || !date) {
      onToast(t('booking.errorMsg'), '#EF4444')
      return
    }
    onToast(t('booking.successMsg').replace('🎉', `🎉 ${petName} 的`), '#10B981')
    setForm({ ownerName: '', phone: '', petName: '', petType: '', service: '', date: '' })
  }

  return (
    <section className={styles.booking} id="booking">
      <div className={styles.container}>
        <div className={styles.inner}>
          <span className={styles.label}>{t('booking.label')}</span>
          <h2 className={styles.title}>{t('booking.title')}</h2>
          <p className={styles.sub}>{t('booking.sub')}</p>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.group}>
              <label>{fields.ownerName}</label>
              <input name="ownerName" value={form.ownerName} onChange={handleChange} placeholder={fields.ownerNamePlaceholder} />
            </div>
            <div className={styles.group}>
              <label>{fields.phone}</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder={fields.phonePlaceholder} />
            </div>
            <div className={styles.group}>
              <label>{fields.petName}</label>
              <input name="petName" value={form.petName} onChange={handleChange} placeholder={fields.petNamePlaceholder} />
            </div>
            <div className={styles.group}>
              <label>{fields.petType}</label>
              <select name="petType" value={form.petType} onChange={handleChange}>
                <option value="">{fields.petTypePlaceholder}</option>
                {fields.petTypes.map(pt => <option key={pt}>{pt}</option>)}
              </select>
            </div>
            <div className={styles.group}>
              <label>{fields.service}</label>
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">{fields.servicePlaceholder}</option>
                {fields.services.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className={styles.group}>
              <label>{fields.date}</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} min={tomorrow} />
            </div>
            <div className={styles.submitWrap}>
              <button type="submit" className={styles.submitBtn}>{t('booking.submit')}</button>
            </div>
          </form>
          <p className={styles.note}>{t('booking.note')}</p>
        </div>
      </div>
    </section>
  )
}
