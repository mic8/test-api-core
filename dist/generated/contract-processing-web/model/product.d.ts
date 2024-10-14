/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { ProductConstants } from "./productConstants";
import type { ProductCountryCode } from "./productCountryCode";
import type { ProductCreditLimitRules } from "./productCreditLimitRules";
import type { ProductExtra } from "./productExtra";
import type { ProductGraceAmountFormula } from "./productGraceAmountFormula";
import type { ProductGraceFormulasItem } from "./productGraceFormulasItem";
import type { ProductMinAmountForProlongation } from "./productMinAmountForProlongation";
import type { ProductPaydayShift } from "./productPaydayShift";
import type { ProductRoundingType } from "./productRoundingType";
import type { ProductStatus } from "./productStatus";
export interface Product {
    archived?: boolean;
    code: string;
    comment?: string | null;
    constants?: ProductConstants;
    country_code?: ProductCountryCode;
    created?: string;
    credit_limit_rules?: ProductCreditLimitRules;
    customer_type?: string | null;
    end_of_active?: string | null;
    extra?: ProductExtra;
    grace_amount?: number | null;
    grace_amount_formula?: ProductGraceAmountFormula;
    grace_formulas?: ProductGraceFormulasItem[] | null;
    hash?: string | null;
    id?: number;
    max_disbursement_number?: number | null;
    min_amount_for_prolongation?: ProductMinAmountForProlongation;
    name?: string;
    payday_shift?: ProductPaydayShift;
    repay_min_amount?: number | null;
    rounding_multiplicity?: number | null;
    rounding_type?: ProductRoundingType;
    start_of_active?: string | null;
    status?: ProductStatus;
    type?: string;
    updated?: string;
    updated_by?: string | null;
    workflow_id?: number;
}
