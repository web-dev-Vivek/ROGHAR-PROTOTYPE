import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    welcome: 'Welcome to Kerala Migrant Health Portal',
    workerLogin: 'Worker Login',
    doctorLogin: 'Doctor Login',
    signup: 'Sign Up',
    login: 'Login',
    aadharNumber: 'Aadhar Number',
    abhaId: 'ABHA ID',
    password: 'Password',
    name: 'Name',
    phone: 'Phone Number',
    address: 'Address',
    healthRecords: 'Health Records',
    testReports: 'Test Reports',
    bookAppointment: 'Book Appointment',
    dashboard: 'Dashboard',
    logout: 'Logout',
    appointments: 'Appointments',
    patients: 'Patients',
    profile: 'Profile',
    language: 'Language',
    english: 'English',
    hindi: 'Hindi',
    malayalam: 'Malayalam',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    date: 'Date',
    time: 'Time',
    doctor: 'Doctor',
    hospital: 'Hospital',
    status: 'Status',
    pending: 'Pending',
    confirmed: 'Confirmed',
    completed: 'Completed',
    selectHospital: 'Select Hospital',
    selectDoctor: 'Select Doctor',
    selectDate: 'Select Date',
    selectTime: 'Select Time',
    reason: 'Reason for Visit',
    symptoms: 'Symptoms',
    uploadReport: 'Upload Report',
    downloadReport: 'Download Report',
    reportDate: 'Report Date',
    reportType: 'Report Type',
    bloodTest: 'Blood Test',
    xray: 'X-Ray',
    mri: 'MRI',
    ct: 'CT Scan',
    other: 'Other'
  },
  hi: {
    welcome: 'केरल प्रवासी स्वास्थ्य पोर्टल में आपका स्वागत है',
    workerLogin: 'श्रमिक लॉगिन',
    doctorLogin: 'डॉक्टर लॉगिन',
    signup: 'साइन अप',
    login: 'लॉगिन',
    aadharNumber: 'आधार नंबर',
    abhaId: 'आभा आईडी',
    password: 'पासवर्ड',
    name: 'नाम',
    phone: 'फोन नंबर',
    address: 'पता',
    healthRecords: 'स्वास्थ्य रिकॉर्ड',
    testReports: 'टेस्ट रिपोर्ट',
    bookAppointment: 'अपॉइंटमेंट बुक करें',
    dashboard: 'डैशबोर्ड',
    logout: 'लॉगआउट',
    appointments: 'अपॉइंटमेंट',
    patients: 'मरीज़',
    profile: 'प्रोफाइल',
    language: 'भाषा',
    english: 'अंग्रेजी',
    hindi: 'हिंदी',
    malayalam: 'मलयालम',
    submit: 'जमा करें',
    cancel: 'रद्द करें',
    save: 'सेव करें',
    edit: 'संपादित करें',
    delete: 'हटाएं',
    view: 'देखें',
    date: 'तारीख',
    time: 'समय',
    doctor: 'डॉक्टर',
    hospital: 'अस्पताल',
    status: 'स्थिति',
    pending: 'लंबित',
    confirmed: 'पुष्ट',
    completed: 'पूर्ण',
    selectHospital: 'अस्पताल चुनें',
    selectDoctor: 'डॉक्टर चुनें',
    selectDate: 'तारीख चुनें',
    selectTime: 'समय चुनें',
    reason: 'मुलाकात का कारण',
    symptoms: 'लक्षण',
    uploadReport: 'रिपोर्ट अपलोड करें',
    downloadReport: 'रिपोर्ट डाउनलोड करें',
    reportDate: 'रिपोर्ट की तारीख',
    reportType: 'रिपोर्ट का प्रकार',
    bloodTest: 'रक्त जांच',
    xray: 'एक्स-रे',
    mri: 'एमआरआई',
    ct: 'सीटी स्कैन',
    other: 'अन्य'
  },
  ml: {
    welcome: 'കേരള കുടിയേറ്റ ആരോഗ്യ പോർട്ടലിലേക്ക് സ്വാഗതം',
    workerLogin: 'തൊഴിലാളി ലോഗിൻ',
    doctorLogin: 'ഡോക്ടർ ലോഗിൻ',
    signup: 'സൈൻ അപ്പ്',
    login: 'ലോഗിൻ',
    aadharNumber: 'ആധാർ നമ്പർ',
    abhaId: 'അഭാ ഐഡി',
    password: 'പാസ്‌വേഡ്',
    name: 'പേര്',
    phone: 'ഫോൺ നമ്പർ',
    address: 'വിലാസം',
    healthRecords: 'ആരോഗ്യ രേഖകൾ',
    testReports: 'ടെസ്റ്റ് റിപ്പോർട്ടുകൾ',
    bookAppointment: 'അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക',
    dashboard: 'ഡാഷ്ബോർഡ്',
    logout: 'ലോഗൗട്ട്',
    appointments: 'അപ്പോയിന്റ്മെന്റുകൾ',
    patients: 'രോഗികൾ',
    profile: 'പ്രൊഫൈൽ',
    language: 'ഭാഷ',
    english: 'ഇംഗ്ലീഷ്',
    hindi: 'ഹിന്ദി',
    malayalam: 'മലയാളം',
    submit: 'സമർപ്പിക്കുക',
    cancel: 'റദ്ദാക്കുക',
    save: 'സേവ് ചെയ്യുക',
    edit: 'എഡിറ്റ് ചെയ്യുക',
    delete: 'ഇല്ലാതാക്കുക',
    view: 'കാണുക',
    date: 'തീയതി',
    time: 'സമയം',
    doctor: 'ഡോക്ടർ',
    hospital: 'ആശുപത്രി',
    status: 'നില',
    pending: 'തീർപ്പുകൽപ്പിക്കാത്ത',
    confirmed: 'സ്ഥിരീകരിച്ചു',
    completed: 'പൂർത്തിയായി',
    selectHospital: 'ആശുപത്രി തിരഞ്ഞെടുക്കുക',
    selectDoctor: 'ഡോക്ടറെ തിരഞ്ഞെടുക്കുക',
    selectDate: 'തീയതി തിരഞ്ഞെടുക്കുക',
    selectTime: 'സമയം തിരഞ്ഞെടുക്കുക',
    reason: 'സന്ദർശനത്തിന്റെ കാരണം',
    symptoms: 'ലക്ഷണങ്ങൾ',
    uploadReport: 'റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക',
    downloadReport: 'റിപ്പോർട്ട് ഡൗൺലോഡ് ചെയ്യുക',
    reportDate: 'റിപ്പോർട്ട് തീയതി',
    reportType: 'റിപ്പോർട്ട് തരം',
    bloodTest: 'രക്തപരിശോധന',
    xray: 'എക്സ്-റേ',
    mri: 'എംആർഐ',
    ct: 'സിടി സ്കാൻ',
    other: 'മറ്റുള്ളവ'
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const t = (key) => {
    return translations[language][key] || key
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}