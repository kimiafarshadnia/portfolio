import Link from "next/link";
import Image from "next/image";
import { withHttps } from "Utils";
import { useTranslations } from "next-intl";

export const Tools = () => {
    const t = useTranslations();
    const tools = [
        {
            id: 0,
            src: '/images/tools/react.svg',
            alt: 'react',
            url: 'react.dev/'
        },
        {
            id: 1,
            src: '/images/tools/next.svg',
            alt: 'next js',
            url: 'nextjs.org/'
        },
        {
            id: 2,
            src: '/images/tools/ts.svg',
            alt: 'typescript',
            url: 'www.typescriptlang.org/'
        },
        {
            id: 3,
            src: '/images/tools/tailwind.svg',
            alt: 'tailwind css',
            url: 'tailwindcss.com/'
        },
        {
            id: 4,
            src: '/images/tools/bootstrap.svg',
            alt: 'bootstrap',
            url: 'getbootstrap.com/'
        },
        {
            id: 5,
            src: '/images/tools/sass.svg',
            alt: 'sass processor',
            url: 'sass-lang.com/'
        },
    ]
    return (
        <div className="container mx-auto px-5 md:px-0">
            <div className="flex flex-col justify-center gap-6">
                <h2 className="w-fit bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize pb-2">{t('tool.title')}</h2>
                <p className="text-primary font-normal md:w-[600px] dark:text-white">{t('tool.description')}</p>

                <div className="flex items-center  flex-wrap gap-6">
                    {tools.map((tool) => (
                        <Link href={withHttps(tool.url)} key={tool.id}>
                            <Image src={tool.src} alt={tool.alt} width={60} height={60} loading="lazy"/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}