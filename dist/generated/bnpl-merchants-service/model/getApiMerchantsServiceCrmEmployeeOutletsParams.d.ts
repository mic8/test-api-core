/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * merchants
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiMerchantsServiceCrmEmployeeOutletsOrderBy } from "./getApiMerchantsServiceCrmEmployeeOutletsOrderBy";
export declare type GetApiMerchantsServiceCrmEmployeeOutletsParams = {
    id?: string;
    id_in?: string[];
    limit?: number;
    offset?: number;
    order_by?: GetApiMerchantsServiceCrmEmployeeOutletsOrderBy;
    employee_id?: string;
    employee_id_in?: string[];
    trade_outlet_id?: string;
    trade_outlet_id_in?: string[];
    archived?: boolean;
};
