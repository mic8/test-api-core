/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { CalculatorExtendedByClientManyCountryCode } from "./calculatorExtendedByClientManyCountryCode";
import type { OfferExtendedExcludeCalcIdCountryCodeCreatedOfferIdUpdated } from "./offerExtendedExcludeCalcIdCountryCodeCreatedOfferIdUpdated";
export interface CalculatorExtendedByClientMany {
    archived?: boolean;
    assigned_at?: string;
    calc_priority?: number | null;
    code: string;
    country_code?: CalculatorExtendedByClientManyCountryCode;
    created?: string;
    end_of_active?: string | null;
    id?: number;
    name?: string;
    offers?: OfferExtendedExcludeCalcIdCountryCodeCreatedOfferIdUpdated[];
    start_of_active?: string | null;
    updated?: string;
}
