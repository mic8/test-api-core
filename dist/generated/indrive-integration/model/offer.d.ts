/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * indrive-integration
 * OpenAPI spec version: 0.0.1
 */
import type { OfferAmountDetails } from "./offerAmountDetails";
import type { PeriodExcludeHoursMinutesSecondsYears } from "./periodExcludeHoursMinutesSecondsYears";
export interface Offer {
    amount_details: OfferAmountDetails;
    bc_term: PeriodExcludeHoursMinutesSecondsYears;
    id: number;
    regular_payment_cents: number;
    repayment_rate: number;
    term: PeriodExcludeHoursMinutesSecondsYears;
}
