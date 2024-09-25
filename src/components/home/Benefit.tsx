import { useTranslations } from "next-intl";

export const Benefit = () => {
    const t = useTranslations();
    return (
        <div className="basis-2/4 flex flex-col gap-6">
            <div className="bg-lavender pl-1 rounded-md">
                <div className="flex flex-col gap-4 shadow-lg p-5 sm:p-6 rounded-md bg-white dark:bg-[#2C2C2C]">
                    <h3 className="bg-lavender bg-clip-text text-transparent font-medium text-lg capitalize">{t('about.benefits.benefit-1.title')}</h3>
                    <p>{t('about.benefits.benefit-1.description')}</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 shadow-lg p-5 sm:p-6 rounded-md bg-white dark:bg-[#2C2C2C]">
                <h3 className="bg-lavender bg-clip-text text-transparent font-medium text-lg capitalize">{t('about.benefits.benefit-2.title')}</h3>
                <p>{t('about.benefits.benefit-2.description')}</p>
            </div>

            <div className="flex flex-col gap-4 shadow-lg p-5 sm:p-6 rounded-md bg-white dark:bg-[#2C2C2C]">
                <h3 className="bg-lavender bg-clip-text text-transparent font-medium text-lg capitalize">{t('about.benefits.benefit-3.title')}</h3>
                <p>{t('about.benefits.benefit-3.description')}</p>
            </div>
        </div>
    )
}
