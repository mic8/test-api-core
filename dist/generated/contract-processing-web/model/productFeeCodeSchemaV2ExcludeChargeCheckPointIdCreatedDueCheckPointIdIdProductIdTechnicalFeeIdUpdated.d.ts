/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCondition } from "./productFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCondition";
import type { ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCountryCode } from "./productFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCountryCode";
import type { ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCreateActions } from "./productFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCreateActions";
import type { ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedInitialState } from "./productFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedInitialState";
import type { ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedPriorityIncrement } from "./productFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedPriorityIncrement";
import type { ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedRoundingFormula } from "./productFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedRoundingFormula";
import type { ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedRoundingType } from "./productFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedRoundingType";
export interface ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdated {
    apply_discount?: boolean;
    archived?: boolean;
    charge_check_point_code?: string;
    charge_priority?: number | null;
    code: string;
    condition?: ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCondition;
    country_code?: ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCountryCode;
    create_actions?: ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedCreateActions;
    due_check_point_code?: string;
    due_on_payday?: boolean;
    future_repay?: boolean;
    initial_state?: ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedInitialState;
    is_business_fee?: boolean;
    partial_repayment?: boolean;
    priority_increment?: ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedPriorityIncrement;
    product_code?: string;
    repay_priority?: number;
    rounding_formula?: ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedRoundingFormula;
    rounding_multiplicity?: number | null;
    rounding_type?: ProductFeeCodeSchemaV2ExcludeChargeCheckPointIdCreatedDueCheckPointIdIdProductIdTechnicalFeeIdUpdatedRoundingType;
    technical_fee_code?: string;
    use_grace_amount?: boolean;
}
