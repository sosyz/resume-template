import { useTranslation } from 'react-i18next';
import GlobeIcon from '@/assets/globe.svg?react';
import PrintIcon from '@/assets/print.svg?react';
import LinkIcon from '@/assets/link.svg?react';

const Footer = () => {
    const { t, i18n } = useTranslation();
    
    const toggleLanguage = () => {
        const nextLang = i18n.language === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(nextLang);
    };

    const handlePrint = () => {
        window.print();
    };

    const buttonClasses = "flex items-center p-2 text-gray-600 hover:text-gray-900 border-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded";

    return (
        <>
            { t('info.online.url') && (
                <div className="hidden print:flex print:justify-center print:items-center print:py-4 print:text-sm print:text-gray-500">
                    <LinkIcon className="h-4 w-4 mr-1" />
                    <a href={`${t('info.online.url')}`}>{t('info.online.name')}</a>
                </div>
            )}
            <footer className="w-[210mm] mx-auto py-4 text-sm text-gray-600 print:hidden">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center">
                        <button 
                            onClick={handlePrint}
                            className={buttonClasses}
                            aria-label={t('footer.print')}
                        >
                            <PrintIcon className="h-5 w-5" />
                        </button>
                        <button 
                            onClick={toggleLanguage}
                            className={`${buttonClasses} gap-1`}
                            aria-label={t('footer.switchLanguage')}
                        >
                            <GlobeIcon className="h-5 w-5" />
                            <span>
                                {i18n.language === 'zh' ? 'English' : '中文'}
                            </span>
                        </button>
                    </div>
                    <div className="text-gray-500">
                        © {new Date().getFullYear()} {t('sections.footer.copyright')}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer; 