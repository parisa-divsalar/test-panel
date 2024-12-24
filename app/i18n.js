import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend) // استفاده از backend برای لود کردن فایل‌های ترجمه
    .use(initReactI18next) // اتصال react-i18next به i18next
    .init({
        fallbackLng: 'fa', // زبان پیش‌فرض در صورت عدم وجود ترجمه
        lng: 'fa', // زبان اولیه
        defaultNS: 'translation', // نام‌فضای پیش‌فرض ترجمه
        ns: ['translation'], // لیست namespaceهای ترجمه
        interpolation: {
            escapeValue: false, // برای جلوگیری از XSS (React امن است)
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // مسیر برای لود فایل‌های ترجمه
        },
        react: {
            useSuspense: false, // برای غیر فعال کردن حالت Suspense
        },
    });

export default i18n;
