import { RelatedParty } from "./related-party.model";
import { RelatedProductUsage } from "./related-product-usage.model";
import { UsageCharacteristic } from "./usage-characteristic.model";
import { UsageSpecificationRef } from "./usage-specification-ref.model";

export interface Usage {
    description: string;
    href?: string;
    id: string;
    status: string;
    usageDate: any;
    usageType: string;

    relatedParty?: RelatedParty[];
    usageSpecificationRef?: UsageSpecificationRef;
    relatedProductUsage?: RelatedProductUsage[];
    usageCharacteristic?: UsageCharacteristic[];
}

