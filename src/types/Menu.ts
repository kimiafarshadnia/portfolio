import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type MenuItem = {
    id: number;
    title: string;
    iconName: IconDefinition;
    address: string;
}