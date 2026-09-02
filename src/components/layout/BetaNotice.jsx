import { ArrowUpRight, FlaskConical } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './BetaNotice.module.css'

export default function BetaNotice() {
  const { t } = useLanguage()

  return (
    <aside className={styles.notice} aria-label={t('beta.title')}>
      <span className={styles.badge}><FlaskConical size={15} aria-hidden="true" /> BETA</span>
      <div className={styles.copy}>
        <strong>{t('beta.title')}</strong>
        <p>{t('beta.sharedData')}</p>
      </div>
      <a className={styles.link} href="https://ksois.github.io/GDList/">
        {t('beta.liveSite')} <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </aside>
  )
}
