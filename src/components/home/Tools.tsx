import Link from "next/link";
import Image from "next/image";
import { withHttps } from "Utils";

export const Tools = () => {
    const tools = [
        {
            id: 0,
            src: '/images/react.svg',
            alt: 'react',
            url: 'react.dev/'
        },
        {
            id: 1,
            src: '/images/next.svg',
            alt: 'next js',
            url: 'nextjs.org/'
        },
        {
            id: 2,
            src: '/images/ts.svg',
            alt: 'typescript',
            url: 'www.typescriptlang.org/'
        },
        {
            id: 3,
            src: '/images/tailwind.svg',
            alt: 'tailwind css',
            url: 'tailwindcss.com/'
        },
        {
            id: 4,
            src: '/images/bootstrap.svg',
            alt: 'bootstrap',
            url: 'getbootstrap.com/'
        },
        {
            id: 5,
            src: '/images/sass.svg',
            alt: 'sass processor',
            url: 'sass-lang.com/'
        },
    ]
    return (
        <div className="container mx-auto px-5 md:px-0">
            <div className="flex flex-col items-center justify-center text-center gap-6">
                <h2 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize pb-2">my tools</h2>
                <p className="text-primary font-normal md:w-[600px] dark:text-white">Discover the tools and technologies I leverage to build efficient and innovative web solutions.</p>

                <div className="flex items-center justify-center flex-wrap gap-6">
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