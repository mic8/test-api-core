/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * merchants
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiMerchantsServiceCrmMerchCategoriesOrderBy } from "./getApiMerchantsServiceCrmMerchCategoriesOrderBy";
export declare type GetApiMerchantsServiceCrmMerchCategoriesParams = {
    id?: string;
    id_in?: string[];
    limit?: number;
    offset?: number;
    order_by?: GetApiMerchantsServiceCrmMerchCategoriesOrderBy;
    merchant_id: string;
    archived?: boolean;
    goods_category_name_ilike?: string;
    goods_category_id?: string;
    goods_category_id_in?: string[];
    business_type_id?: string;
    business_type_id_in?: string[];
};
