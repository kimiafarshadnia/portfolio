import { MenuItem } from 'Types'; 
import { faBriefcase, faHouseChimney, faMobileScreenButton, faUser } from "@fortawesome/free-solid-svg-icons";

export const Menu : MenuItem[] = [
    { id: 0, title: 'Home', iconName: faHouseChimney , address: '/' },
    { id: 1, title: 'About me', iconName: faUser, address: '/#about' },
    { id: 3, title: 'Projects', iconName: faBriefcase, address: '/#projects' },
    { id: 2, title: 'Contact me', iconName: faMobileScreenButton, address: '/#contact-me' }
];