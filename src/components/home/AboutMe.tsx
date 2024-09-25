import { useTranslations } from "next-intl";

export const AboutMe = () => {
    const t = useTranslations();
    return (
        <div className="flex flex-col gap-6 basis-2/4">
            <h1 className="w-fit bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize">{t('about.title')}</h1>

            <div className="flex flex-col gap-5 [&>*]:font-normal [&>*]:text-[#87909D] [&>*]:dark:text-white [&>*]:lg:pr-4 [&>*]:text-sm [&>*]:sm:text-base">
                <p>{t('about.description')}</p>
            </div>
        </div>
    )
}
