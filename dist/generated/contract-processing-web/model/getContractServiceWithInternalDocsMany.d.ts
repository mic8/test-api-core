/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { InternalDocument } from "./internalDocument";
import type { GetContractServiceWithInternalDocsManyMeta } from "./getContractServiceWithInternalDocsManyMeta";
import type { GetContractServiceWithInternalDocsManyServiceType } from "./getContractServiceWithInternalDocsManyServiceType";
import type { GetContractServiceWithInternalDocsManyServiceTypeData } from "./getContractServiceWithInternalDocsManyServiceTypeData";
export interface GetContractServiceWithInternalDocsMany {
    active?: boolean;
    amount?: number;
    amount_per_day?: number;
    archived?: boolean;
    cancel_date?: string;
    cert_number?: string;
    computed_amount?: number | null;
    contract_id?: number;
    created?: string;
    description?: string;
    documents?: InternalDocument[];
    end_date?: string;
    id?: number;
    is_cert_created?: boolean;
    meta?: GetContractServiceWithInternalDocsManyMeta;
    name?: string;
    processed?: boolean;
    service_id?: number;
    service_type?: GetContractServiceWithInternalDocsManyServiceType;
    service_type_data?: GetContractServiceWithInternalDocsManyServiceTypeData;
    start_date?: string;
    transaction_id?: string;
    updated?: string;
}
