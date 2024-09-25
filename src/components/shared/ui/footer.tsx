import { useTranslations } from "next-intl";

export const Footer = () => {
    const t  = useTranslations();
    return (
        <footer className='dark:bg-darkMode dark:text-white px-5 md:px-0'>
            <div className='container mx-auto flex flex-col gap-6'>
                <div className='bg-gradient-to-r from-[#C6C6C600] via-[#C6C6C6] to-[#C6C6C600] h-px'></div>
                <div className='w-full pb-6 text-sm'>
                    <p>© {(new Date().getFullYear())} {t('copyRight')}</p>
                </div>
            </div>
        </footer>
    );
};
