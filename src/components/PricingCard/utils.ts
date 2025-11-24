import type { PricingCardTypes } from './types';

export const getInfoText = (packageType: string, props: PricingCardTypes) => {
    const key = packageType.toLowerCase().replace('annal', 'annual'); // fix typo if any
    return props.packages?.[key]?.description || '';
};

export const getUnitText = (packageType: string, props: PricingCardTypes) => {
    const key = packageType.toLowerCase().replace('annal', 'annual');
    return props.packages?.[key]?.periodLabel || '';
};