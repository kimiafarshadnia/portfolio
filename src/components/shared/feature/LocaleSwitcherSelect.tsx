"use client";

import { clx } from "Utils";
import { Icon } from "Components";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from '@/src/navigation'
import { ChangeEvent, ReactNode, useTransition } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
}

export default function LocaleSwitcherSelect ({ children, defaultValue, label }: Props){
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                //@ts-ignore
                { pathname, params },
                { locale: nextLocale }
            )
        })
    }

    return (
        <label className={clx('relative', isPending && 'transition-opacity [&:disabled]:opacity-30')}>
            <select className="flex items-center appearance-none bg-transparent p-1 cursor-pointer"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            {/* <Icon iconName={faChevronDown} className="absolute -right-4 top-2.5" size="sm" /> */}
        </label>
    )
}