/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiContractProcessingWebContractsCountByDaysStatus } from "./getApiContractProcessingWebContractsCountByDaysStatus";
import type { GetApiContractProcessingWebContractsCountByDaysTimezone } from "./getApiContractProcessingWebContractsCountByDaysTimezone";
export declare type GetApiContractProcessingWebContractsCountByDaysParams = {
    date_lt: string;
    date_ge: string;
    is_test?: boolean;
    status?: GetApiContractProcessingWebContractsCountByDaysStatus;
    timezone?: GetApiContractProcessingWebContractsCountByDaysTimezone;
};
