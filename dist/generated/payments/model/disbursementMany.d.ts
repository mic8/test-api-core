/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { DisbursementManyMeta } from "./disbursementManyMeta";
import type { DisbursementManyStatus } from "./disbursementManyStatus";
export interface DisbursementMany {
    amount?: number;
    archived?: boolean;
    client_id?: string;
    contract_id?: number;
    created?: string;
    external_id?: string;
    id?: string;
    meta?: DisbursementManyMeta;
    operation_id?: number;
    reference_id?: string;
    status?: DisbursementManyStatus;
    updated?: string;
}
