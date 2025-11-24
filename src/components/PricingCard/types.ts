export type SkeletonTypes = {
    packageType: string;
}

type PackageInfo = {
    title: string;
    description: string;
    periodLabel: string;
};

export type PricingCardTypes = {
    packageType: string;
    priceString: string;
    onPress: () => void;
    theBestValueText?: string;
  	skeleton?: number;
    packages?: Record<string, PackageInfo>;
};

export type TheBestValueTagTypes = {
    packageType: string;
    theBestValueText?: string;
}

export type TitleTypes = {
  packageType: string;
	packages?: Record<string, PackageInfo>;
}

