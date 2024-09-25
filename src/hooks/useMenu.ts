// hooks/useMenu.ts
import { MenuItem } from 'Types'; 
import { useTranslations } from 'next-intl';
import { faBriefcase, faHouseChimney, faMobileScreenButton, faUser } from "@fortawesome/free-solid-svg-icons";

export const useMenu = (): MenuItem[] => {
    const t = useTranslations();

    return [
        { id: 0, title: t('menu.home'), iconName: faHouseChimney, address: '/' },
        { id: 1, title: t('menu.projects'), iconName: faBriefcase, address: '/#projects' },
        { id: 2, title: t('menu.skills'), iconName: faUser, address: '/#skills' },
        { id: 3, title: t('menu.about'), iconName: faUser, address: '/#about' },
        { id: 4, title: t('menu.contact'), iconName: faMobileScreenButton, address: '/#get-in-touch' }
    ];
};
