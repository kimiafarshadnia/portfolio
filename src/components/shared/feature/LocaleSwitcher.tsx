"use client";

import { locales } from "@/src/config";
import { LocaleSwitcherSelect } from "Components";
import { useTranslations, useLocale } from "next-intl";

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale}
            label={t('label')}>
            {
                locales.map((cur) => (
                    <option key={cur} value={cur} className="cursor-pointer text-secondary">
                        {t("locale", { locale: cur })}
                    </option>
                ))
            }
        </LocaleSwitcherSelect>
    )
}