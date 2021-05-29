export interface RelatedProductUsage {
    bucketValueConvertedInAmount: number;
    isBilled: boolean;
    isTaxExempt: boolean;
    offerTariffType: string;
    ratingAmountType: string;
    ratingDate: Date;
    taxExcludedRatingAmount: number;
    taxIncludedRatingAmount: number;
    taxRate: number;
    usageRatingTag: string;
}
