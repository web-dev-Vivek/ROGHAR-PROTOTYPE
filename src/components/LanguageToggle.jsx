import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

const LanguageToggle = () => {
  const { language, changeLanguage, t } = useLanguage()

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2">
        <Globe className="w-5 h-5 text-gray-600" />
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="en">{t('english')}</option>
          <option value="hi">{t('hindi')}</option>
          <option value="ml">{t('malayalam')}</option>
        </select>
      </div>
    </div>
  )
}

export default LanguageToggle