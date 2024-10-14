/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { GetOfferByIDRespCountryCode } from "./getOfferByIDRespCountryCode";
import type { GetOfferByIDRespMeta } from "./getOfferByIDRespMeta";
import type { OfferSchedule } from "./offerSchedule";
import type { Period } from "./period";
import type { GetOfferByIDRespVisibility } from "./getOfferByIDRespVisibility";
export interface GetOfferByIDResp {
    amount?: number;
    archived?: boolean;
    code: string;
    country_code?: GetOfferByIDRespCountryCode;
    created?: string;
    hash?: string | null;
    id?: number;
    meta?: GetOfferByIDRespMeta;
    product_id?: number;
    schedule: OfferSchedule;
    source?: string | null;
    term?: Period;
    updated?: string;
    visibility?: GetOfferByIDRespVisibility;
}
