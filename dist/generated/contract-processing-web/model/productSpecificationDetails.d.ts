/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { PsAdditionalInfo } from "./psAdditionalInfo";
import type { PsDetails } from "./psDetails";
import type { PsProductFees } from "./psProductFees";
import type { ProductSpecificationDetailsProlongationRules } from "./productSpecificationDetailsProlongationRules";
export interface ProductSpecificationDetails {
    additional_info: PsAdditionalInfo;
    general_info: PsDetails;
    product_fees: PsProductFees[];
    prolongation_rules?: ProductSpecificationDetailsProlongationRules;
}
