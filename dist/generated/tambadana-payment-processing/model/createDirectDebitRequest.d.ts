/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
export interface CreateDirectDebitRequest {
    amount: number;
    client_id: string;
    contract_id: number;
    dd_entity_id?: string;
    use_default?: boolean;
}
