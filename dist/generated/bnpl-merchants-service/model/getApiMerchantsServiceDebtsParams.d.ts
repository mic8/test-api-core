/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * merchants
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiMerchantsServiceDebtsOrderBy } from "./getApiMerchantsServiceDebtsOrderBy";
export declare type GetApiMerchantsServiceDebtsParams = {
    id?: string;
    id_in?: string[];
    limit?: number;
    offset?: number;
    order_by?: GetApiMerchantsServiceDebtsOrderBy;
    order_id?: string;
    order_id_in?: string[];
    trade_outlet_id?: string;
    trade_outlet_ids?: string[];
    merchant_id?: string;
    archived?: boolean;
};
