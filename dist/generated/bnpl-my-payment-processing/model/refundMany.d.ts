/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { RefundManyMeta } from "./refundManyMeta";
export interface RefundMany {
    amount?: number;
    archived?: boolean;
    client_id?: string;
    contract_id?: number;
    created?: string;
    direct_debit_entity_id?: string;
    direct_debit_request_id?: string;
    external_id?: string;
    id?: string;
    meta?: RefundManyMeta;
    sequence_id?: string;
    status?: string;
    system_notified?: boolean;
    updated?: string;
    user_id?: string;
}
