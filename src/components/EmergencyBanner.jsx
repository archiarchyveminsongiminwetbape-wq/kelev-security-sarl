import { site } from '../config/site'
import { useI18n } from '../i18n/i18n.jsx'

export default function EmergencyBanner() {
  const { t } = useI18n()
  
  return (
    <div className="bg-red-900 border-b border-red-800">
      <div className="container-page py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-red-400 animate-pulse">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-medium text-red-100">{t('emergency_banner.text')}</span>
        </div>
        <a 
          href={`tel:${site.phoneLink}`}
          className="flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          {site.phone}
        </a>
      </div>
    </div>
  )
}