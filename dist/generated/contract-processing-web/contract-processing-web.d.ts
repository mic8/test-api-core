import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { AssignCalcsToStrategy, BindDetachProductDocTemplateRequest, BindDetachProductOffersMetaTemplateRequest, BindVariablesToGroup, CalculatorsClientBody, CalculatorsClientOnlyClientUid, CancelContract, CancelContractEvent, CancelContractServicesFilters, CancelPayments, ComputeScheduleBody, CreateContract, CreateContractDisburse, CreateContractEvent, CreateLimitTransactionClientRequest, CreateLimitTransactionRequest, CreateOrUpdateWorkflowSchemaBody, CreateWriteOffEvent, DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, DataBillingEnums, DataCalcOfferServicesSimplifiedCodeSchemaExcludeArchivedCalcIdCountryCodeCreatedIdServiceIdUpdated, DataCalculatorClientsManyPaginated, DataCalculatorClientsOnlyClientUidPaginated, DataCalculatorClientsResponse, DataCalculatorExtendedByClientMany, DataCalculatorExtendedMany, DataCalculatorImportDiffSchema, DataCalculatorManyPaginatedSummarized, DataCategoryExcludeArchived, DataCheckPointMany, DataCodeRegenerationDiffResult, DataContract, DataContractDebtDetails, DataContractDetailsExcludeBalanceTotalDebt, DataContractDetailsManyExcludeBalanceTotalDebt, DataContractDetailsOnlyAmountToPayClientUidDpdIdPaydayPublicStateName, DataContractEventMany, DataContractInfoExcludeBalanceTotalDebt, DataContractLoanHistory, DataContractLogMany, DataContractPeriods, DataCountContractsByPublicStatesResponseMany, DataCountSimulationsByStatusResp, DataCreateOrUpdateWorkflowSchemaResponse, DataDictionariesImportDiffSchema, DataEventTypeMany, DataFileUploadManyPaginated, DataFullOffer, DataGetContractServiceMany, DataGetContractServiceWithInternalDocsMany, DataGetCountedContractsMany, DataGetGroupedProductDocTemplateRespMany, DataGetGroupedProductOffersMetaTemplateRespMany, DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdated, DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdatedPaginatedSummarized, DataGetLimitTransactionManyPaginatedSummarized, DataGetOfferByIDResp, DataGetOperationsResponseMany, DataGetProlongation, DataGetProlongationMany, DataGetRepeatLimit, DataGetServicesInfoExtendedResponse, DataGetSuitableCalculatorFromStrategyResponse, DataImportOffersWithExtendedMetaResponse, DataImportProductResponse, DataLimitTransaction, DataLimitTransactionDetail, DataLimitTransactionDetailMany, DataLimitTransactionExcludeResponsibleUser, DataLivenessResponse, DataOffer, DataOfferFeeMany, DataOfferFeeManyPaginated, DataOfferMany, DataOfferManyPaginated, DataOfferPreview, DataOffersMetaTemplate, DataOffersMetaTemplateMany, DataPaymentMany, DataProduct, DataProductDocTemplateExcludeCreatedUpdated, DataProductFeeMany, DataProductOffersMetaTemplateMany, DataProductResponseMany, DataProductSpecification, DataProductSpecificationExtendedManyPaginated, DataPublicFeeMany, DataPublicStateCounterMany, DataPublicStateMany, DataPublicStateTotalCount, DataReadinessResponse, DataRunSimResponse, DataRunSimulationsFromS3ResponseSchema, DataScenarioFileMany, DataScenariosGroup, DataScenariosGroupMany, DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, DataServicesImportDiffSchema, DataSimplifiedStrategyImportDiffSchema, DataSimulationSchema, DataSimulationSchemaMany, DataSimulationWebResponse, DataStateParamMany, DataStrategiesCalculatorsExtSchemaMany, DataStrategiesCalculatorsExtSchemaManyPaginated, DataStrategiesCalculatorsSchemaMany, DataStrategiesSchema, DataStrategiesSchemaMany, DataStrategiesSchemaManyPaginatedSummarized, DataStrategyProductStats, DataSuccessResponse, DataTechnicalFeeMany, DataTechnicalStateMany, DataTransitionMany, DataVariablesFile, DataVariablesFileMany, DataWorkflow, DataWorkflowCodeV2SchemaExcludeCreatedIdLastUpdatedUserUpdated, DataWorkflowDetails, DataWorkflowExtendedMany, DataWorkflowExtendedManyPaginated, DataWorkflowSchemaEntity, DefaultScenariosGroupsFilters, DefaultSimScenariosFilters, DefaultVariablesFiltersBody, DeleteOffersMetaTemplateFilters, FailContractDisburse, GetApiContractProcessingWebBillingCategoriesParams, GetApiContractProcessingWebBillingCheckpointsParams, GetApiContractProcessingWebBillingEventTypesParams, GetApiContractProcessingWebBillingFileUploadsParams, GetApiContractProcessingWebBillingOfferFeesParams, GetApiContractProcessingWebBillingOffersExtMetaExportProductIdParams, GetApiContractProcessingWebBillingOffersMetaTemplatesParams, GetApiContractProcessingWebBillingOffersParams, GetApiContractProcessingWebBillingProductDocTemplatesGroupedParams, GetApiContractProcessingWebBillingProductDocTemplatesParams, GetApiContractProcessingWebBillingProductExportExportFormatProductIdParams, GetApiContractProcessingWebBillingProductExportSimplifiedProductIdParams, GetApiContractProcessingWebBillingProductFeesParams, GetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedParams, GetApiContractProcessingWebBillingProductOffersMetaTemplatesParams, GetApiContractProcessingWebBillingProductSpecificationsParams, GetApiContractProcessingWebBillingProductsParams, GetApiContractProcessingWebBillingPublicFeesParams, GetApiContractProcessingWebBillingPublicStatesParams, GetApiContractProcessingWebBillingStateParamsParams, GetApiContractProcessingWebBillingTechnicalFeesParams, GetApiContractProcessingWebBillingTechnicalStatesParams, GetApiContractProcessingWebBillingTransitionsParams, GetApiContractProcessingWebBillingV2OffersParams, GetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportParams, GetApiContractProcessingWebBillingWorkflowsPaginatedParams, GetApiContractProcessingWebBillingWorkflowsParams, GetApiContractProcessingWebCalculatorsByClientsParams, GetApiContractProcessingWebCalculatorsClientsParams, GetApiContractProcessingWebCalculatorsExtendedParams, GetApiContractProcessingWebCalculatorsParams, GetApiContractProcessingWebClientsCalculatorsExtendedParams, GetApiContractProcessingWebClientsComputedScheduleParams, GetApiContractProcessingWebClientsContractsIdLimitTransactionsParams, GetApiContractProcessingWebClientsContractsParams, GetApiContractProcessingWebComputedScheduleParams, GetApiContractProcessingWebContractsCountByDaysParams, GetApiContractProcessingWebContractsCountByPublicStatesParams, GetApiContractProcessingWebContractsDetailsParams, GetApiContractProcessingWebContractsIdLimitTransactionsParams, GetApiContractProcessingWebContractsIdLogParams, GetApiContractProcessingWebContractsIdServicesParams, GetApiContractProcessingWebContractsParams, GetApiContractProcessingWebContractsSimulationsCountByStatusParams, GetApiContractProcessingWebContractsSimulationsParams, GetApiContractProcessingWebServiceManagerServicesExtendedParams, GetApiContractProcessingWebSimulationsGroupsParams, GetApiContractProcessingWebSimulationsScenariosParams, GetApiContractProcessingWebSimulationsVariablesParams, GetApiContractProcessingWebStrategiesCalculatorsPaginatedParams, GetApiContractProcessingWebStrategiesCalculatorsParams, GetApiContractProcessingWebStrategiesPaginatedParams, GetApiContractProcessingWebStrategiesParams, GetSuitableCalculatorFromStrategy, LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated, ModifyContractLimitRequest, OfferExcludeArchivedCreatedIdUpdated, OfferFeeExcludeArchivedCreatedIdUpdated, PatchApiContractProcessingWebBillingProductSpecificationsIdBody, PaymentPayload, PaymentPayloadExcludeCorrectedIdExternalId, PostApiContractProcessingWebBillingDictionaryEntitiesFromFileBody, PostApiContractProcessingWebBillingOffersExtMetaImportProductIdBody, PostApiContractProcessingWebBillingOffersMetaTemplatesBody, PostApiContractProcessingWebBillingProductImportImportFormatBody, PostApiContractProcessingWebBillingProductImportSimplifiedBody, PostApiContractProcessingWebBillingProductSpecificationsBody, PostApiContractProcessingWebBillingRunSimulationBody, PostApiContractProcessingWebBillingRunSimulationsBody, PostApiContractProcessingWebBillingServicesFromFileBody, PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileBody, PostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeParams, PostApiContractProcessingWebContractsSimulationFromFileBody, PostApiContractProcessingWebContractsTrOptionsRecalcParams, PostApiContractProcessingWebSimulationsScenariosBody, PostApiContractProcessingWebSimulationsVariablesBody, PostApiContractProcessingWebStrategiesImportSimplifiedBody, ProcessServices, ProductExcludeArchivedCreatedIdUpdated, ProductFeeExcludeArchivedCreatedIdUpdated, Recalculation, RunSimulationFromS3QueryBody, ScenariosGroupExcludeArchivedCountryCodeCreatedIdUpdated, ScenariosGroupExcludeArchivedCreatedIdUpdated, SelectProlongationRequestBody, SelectProlongationRequestOnlyIndexBody, SimulationManyArrayBody, StrategiesFiltersExcludeArchived, StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody, TransferPaymentPayload, TransferProductToAnotherInstallationBodySchema, UnassignCalcsToStrategy, WorkflowOnlyArchivedBcPeriodName, WorkflowOnlyBcPeriodCodeName, WorkflowProductCodeRegenerationSchema, WriteOffV2Event } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiContractProcessingWebReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiContractProcessingWebReadinessQueryKey: () => readonly ["/api/contract-processing-web/readiness"];
export declare const getGetApiContractProcessingWebReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebReadiness>>>;
export declare type GetApiContractProcessingWebReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiContractProcessingWebReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiContractProcessingWebLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiContractProcessingWebLivenessQueryKey: () => readonly ["/api/contract-processing-web/liveness"];
export declare const getGetApiContractProcessingWebLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebLiveness>>>;
export declare type GetApiContractProcessingWebLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiContractProcessingWebLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiContractProcessingWebMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebMetricsQueryKey: () => readonly ["/api/contract-processing-web/metrics"];
export declare const getGetApiContractProcessingWebMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebMetrics>>>;
export declare type GetApiContractProcessingWebMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiContractProcessingWebMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search contracts
 */
export declare const getApiContractProcessingWebContracts: (params?: GetApiContractProcessingWebContractsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated>>;
export declare const getGetApiContractProcessingWebContractsQueryKey: (params?: GetApiContractProcessingWebContractsParams) => readonly ["/api/contract-processing-web/contracts", ...GetApiContractProcessingWebContractsParams[]];
export declare const getGetApiContractProcessingWebContractsQueryOptions: <TData = AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebContractsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContracts>>>;
export declare type GetApiContractProcessingWebContractsQueryError = AxiosError<unknown>;
/**
 * @summary Search contracts
 */
export declare const useGetApiContractProcessingWebContracts: <TData = AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebContractsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create contract
 */
export declare const postApiContractProcessingWebContracts: (createContract: CreateContract, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContract>>;
export declare const getPostApiContractProcessingWebContractsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContract, any>, TError, {
        data: CreateContract;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContract, any>, TError, {
    data: CreateContract;
}, TContext>;
export declare type PostApiContractProcessingWebContractsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContracts>>>;
export declare type PostApiContractProcessingWebContractsMutationBody = CreateContract;
export declare type PostApiContractProcessingWebContractsMutationError = AxiosError<unknown>;
/**
 * @summary Create contract
 */
export declare const usePostApiContractProcessingWebContracts: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContract, any>, TError, {
        data: CreateContract;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContract, any>, TError, {
    data: CreateContract;
}, TContext>;
/**
 * @summary Search contracts details
 */
export declare const getApiContractProcessingWebContractsDetails: (params: GetApiContractProcessingWebContractsDetailsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractDetailsManyExcludeBalanceTotalDebt>>;
export declare const getGetApiContractProcessingWebContractsDetailsQueryKey: (params: GetApiContractProcessingWebContractsDetailsParams) => readonly ["/api/contract-processing-web/contracts/details", ...GetApiContractProcessingWebContractsDetailsParams[]];
export declare const getGetApiContractProcessingWebContractsDetailsQueryOptions: <TData = AxiosResponse<DataContractDetailsManyExcludeBalanceTotalDebt, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebContractsDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDetailsManyExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractDetailsManyExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsDetails>>>;
export declare type GetApiContractProcessingWebContractsDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Search contracts details
 */
export declare const useGetApiContractProcessingWebContractsDetails: <TData = AxiosResponse<DataContractDetailsManyExcludeBalanceTotalDebt, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebContractsDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDetailsManyExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Cancel contract services by filters
 */
export declare const postApiContractProcessingWebContractsServicesCancel: (cancelContractServicesFilters: CancelContractServicesFilters, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsServicesCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: CancelContractServicesFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: CancelContractServicesFilters;
}, TContext>;
export declare type PostApiContractProcessingWebContractsServicesCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsServicesCancel>>>;
export declare type PostApiContractProcessingWebContractsServicesCancelMutationBody = CancelContractServicesFilters;
export declare type PostApiContractProcessingWebContractsServicesCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel contract services by filters
 */
export declare const usePostApiContractProcessingWebContractsServicesCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: CancelContractServicesFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: CancelContractServicesFilters;
}, TContext>;
/**
 * @summary Count contracts by public states
 */
export declare const getApiContractProcessingWebContractsCountByPublicStates: (params?: GetApiContractProcessingWebContractsCountByPublicStatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCountContractsByPublicStatesResponseMany>>;
export declare const getGetApiContractProcessingWebContractsCountByPublicStatesQueryKey: (params?: GetApiContractProcessingWebContractsCountByPublicStatesParams) => readonly ["/api/contract-processing-web/contracts/count/by_public_states", ...GetApiContractProcessingWebContractsCountByPublicStatesParams[]];
export declare const getGetApiContractProcessingWebContractsCountByPublicStatesQueryOptions: <TData = AxiosResponse<DataCountContractsByPublicStatesResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebContractsCountByPublicStatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountContractsByPublicStatesResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCountContractsByPublicStatesResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsCountByPublicStatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsCountByPublicStates>>>;
export declare type GetApiContractProcessingWebContractsCountByPublicStatesQueryError = AxiosError<unknown>;
/**
 * @summary Count contracts by public states
 */
export declare const useGetApiContractProcessingWebContractsCountByPublicStates: <TData = AxiosResponse<DataCountContractsByPublicStatesResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebContractsCountByPublicStatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountContractsByPublicStatesResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get quantity of contracts by days and status
 */
export declare const getApiContractProcessingWebContractsCountByDays: (params: GetApiContractProcessingWebContractsCountByDaysParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetCountedContractsMany>>;
export declare const getGetApiContractProcessingWebContractsCountByDaysQueryKey: (params: GetApiContractProcessingWebContractsCountByDaysParams) => readonly ["/api/contract-processing-web/contracts/count/by_days", ...GetApiContractProcessingWebContractsCountByDaysParams[]];
export declare const getGetApiContractProcessingWebContractsCountByDaysQueryOptions: <TData = AxiosResponse<DataGetCountedContractsMany, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebContractsCountByDaysParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetCountedContractsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetCountedContractsMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsCountByDaysQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsCountByDays>>>;
export declare type GetApiContractProcessingWebContractsCountByDaysQueryError = AxiosError<unknown>;
/**
 * @summary Get quantity of contracts by days and status
 */
export declare const useGetApiContractProcessingWebContractsCountByDays: <TData = AxiosResponse<DataGetCountedContractsMany, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebContractsCountByDaysParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetCountedContractsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Recalculate tr options
 */
export declare const postApiContractProcessingWebContractsTrOptionsRecalc: (params?: PostApiContractProcessingWebContractsTrOptionsRecalcParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsTrOptionsRecalcMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        params?: PostApiContractProcessingWebContractsTrOptionsRecalcParams | undefined;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    params?: PostApiContractProcessingWebContractsTrOptionsRecalcParams | undefined;
}, TContext>;
export declare type PostApiContractProcessingWebContractsTrOptionsRecalcMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsTrOptionsRecalc>>>;
export declare type PostApiContractProcessingWebContractsTrOptionsRecalcMutationError = AxiosError<unknown>;
/**
 * @summary Recalculate tr options
 */
export declare const usePostApiContractProcessingWebContractsTrOptionsRecalc: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        params?: PostApiContractProcessingWebContractsTrOptionsRecalcParams | undefined;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    params?: PostApiContractProcessingWebContractsTrOptionsRecalcParams | undefined;
}, TContext>;
/**
 * @summary Create contract simulation
 */
export declare const postApiContractProcessingWebContractsSimulation: (simulationManyArrayBody: SimulationManyArrayBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsSimulationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: SimulationManyArrayBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: SimulationManyArrayBody;
}, TContext>;
export declare type PostApiContractProcessingWebContractsSimulationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsSimulation>>>;
export declare type PostApiContractProcessingWebContractsSimulationMutationBody = SimulationManyArrayBody;
export declare type PostApiContractProcessingWebContractsSimulationMutationError = AxiosError<unknown>;
/**
 * @summary Create contract simulation
 */
export declare const usePostApiContractProcessingWebContractsSimulation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: SimulationManyArrayBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: SimulationManyArrayBody;
}, TContext>;
/**
 * @summary Get simulations
 */
export declare const getApiContractProcessingWebContractsSimulations: (params?: GetApiContractProcessingWebContractsSimulationsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSimulationSchemaMany>>;
export declare const getGetApiContractProcessingWebContractsSimulationsQueryKey: (params?: GetApiContractProcessingWebContractsSimulationsParams) => readonly ["/api/contract-processing-web/contracts/simulations", ...GetApiContractProcessingWebContractsSimulationsParams[]];
export declare const getGetApiContractProcessingWebContractsSimulationsQueryOptions: <TData = AxiosResponse<DataSimulationSchemaMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebContractsSimulationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSimulationSchemaMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSimulationSchemaMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsSimulationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsSimulations>>>;
export declare type GetApiContractProcessingWebContractsSimulationsQueryError = AxiosError<unknown>;
/**
 * @summary Get simulations
 */
export declare const useGetApiContractProcessingWebContractsSimulations: <TData = AxiosResponse<DataSimulationSchemaMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebContractsSimulationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSimulationSchemaMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Count simulations by status
 */
export declare const getApiContractProcessingWebContractsSimulationsCountByStatus: (params?: GetApiContractProcessingWebContractsSimulationsCountByStatusParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCountSimulationsByStatusResp>>;
export declare const getGetApiContractProcessingWebContractsSimulationsCountByStatusQueryKey: (params?: GetApiContractProcessingWebContractsSimulationsCountByStatusParams) => readonly ["/api/contract-processing-web/contracts/simulations/count_by_status", ...GetApiContractProcessingWebContractsSimulationsCountByStatusParams[]];
export declare const getGetApiContractProcessingWebContractsSimulationsCountByStatusQueryOptions: <TData = AxiosResponse<DataCountSimulationsByStatusResp, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebContractsSimulationsCountByStatusParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountSimulationsByStatusResp, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCountSimulationsByStatusResp, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsSimulationsCountByStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsSimulationsCountByStatus>>>;
export declare type GetApiContractProcessingWebContractsSimulationsCountByStatusQueryError = AxiosError<unknown>;
/**
 * @summary Count simulations by status
 */
export declare const useGetApiContractProcessingWebContractsSimulationsCountByStatus: <TData = AxiosResponse<DataCountSimulationsByStatusResp, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebContractsSimulationsCountByStatusParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountSimulationsByStatusResp, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create contracts recalculation
 */
export declare const postApiContractProcessingWebContractsRecalculation: (recalculation: Recalculation, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsRecalculationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: Recalculation;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: Recalculation;
}, TContext>;
export declare type PostApiContractProcessingWebContractsRecalculationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsRecalculation>>>;
export declare type PostApiContractProcessingWebContractsRecalculationMutationBody = Recalculation;
export declare type PostApiContractProcessingWebContractsRecalculationMutationError = AxiosError<unknown>;
/**
 * @summary Create contracts recalculation
 */
export declare const usePostApiContractProcessingWebContractsRecalculation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: Recalculation;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: Recalculation;
}, TContext>;
/**
 * @summary Create contract simulation with web contract-processing api
 */
export declare const postApiContractProcessingWebContractsSimulationWeb: (simulationManyArrayBody: SimulationManyArrayBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSimulationWebResponse>>;
export declare const getPostApiContractProcessingWebContractsSimulationWebMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSimulationWebResponse, any>, TError, {
        data: SimulationManyArrayBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSimulationWebResponse, any>, TError, {
    data: SimulationManyArrayBody;
}, TContext>;
export declare type PostApiContractProcessingWebContractsSimulationWebMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsSimulationWeb>>>;
export declare type PostApiContractProcessingWebContractsSimulationWebMutationBody = SimulationManyArrayBody;
export declare type PostApiContractProcessingWebContractsSimulationWebMutationError = AxiosError<unknown>;
/**
 * @summary Create contract simulation with web contract-processing api
 */
export declare const usePostApiContractProcessingWebContractsSimulationWeb: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSimulationWebResponse, any>, TError, {
        data: SimulationManyArrayBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSimulationWebResponse, any>, TError, {
    data: SimulationManyArrayBody;
}, TContext>;
/**
 * @summary Create contract simulation from file
 */
export declare const postApiContractProcessingWebContractsSimulationFromFile: (postApiContractProcessingWebContractsSimulationFromFileBody: PostApiContractProcessingWebContractsSimulationFromFileBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSimulationWebResponse>>;
export declare const getPostApiContractProcessingWebContractsSimulationFromFileMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSimulationWebResponse, any>, TError, {
        data: PostApiContractProcessingWebContractsSimulationFromFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSimulationWebResponse, any>, TError, {
    data: PostApiContractProcessingWebContractsSimulationFromFileBody;
}, TContext>;
export declare type PostApiContractProcessingWebContractsSimulationFromFileMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsSimulationFromFile>>>;
export declare type PostApiContractProcessingWebContractsSimulationFromFileMutationBody = PostApiContractProcessingWebContractsSimulationFromFileBody;
export declare type PostApiContractProcessingWebContractsSimulationFromFileMutationError = AxiosError<unknown>;
/**
 * @summary Create contract simulation from file
 */
export declare const usePostApiContractProcessingWebContractsSimulationFromFile: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSimulationWebResponse, any>, TError, {
        data: PostApiContractProcessingWebContractsSimulationFromFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSimulationWebResponse, any>, TError, {
    data: PostApiContractProcessingWebContractsSimulationFromFileBody;
}, TContext>;
/**
 * @summary Expire contract
 */
export declare const postApiContractProcessingWebContractsIdExpire: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdExpireMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdExpireMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdExpire>>>;
export declare type PostApiContractProcessingWebContractsIdExpireMutationError = AxiosError<unknown>;
/**
 * @summary Expire contract
 */
export declare const usePostApiContractProcessingWebContractsIdExpire: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Cancel contract
 */
export declare const postApiContractProcessingWebContractsIdCancel: (id: number, cancelContract: CancelContract, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CancelContract;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CancelContract;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdCancel>>>;
export declare type PostApiContractProcessingWebContractsIdCancelMutationBody = CancelContract;
export declare type PostApiContractProcessingWebContractsIdCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel contract
 */
export declare const usePostApiContractProcessingWebContractsIdCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CancelContract;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CancelContract;
}, TContext>;
/**
 * @summary Get contract log
 */
export declare const getApiContractProcessingWebContractsIdLog: (id: number, params?: GetApiContractProcessingWebContractsIdLogParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractLogMany>>;
export declare const getGetApiContractProcessingWebContractsIdLogQueryKey: (id: number, params?: GetApiContractProcessingWebContractsIdLogParams) => readonly [`/api/contract-processing-web/contracts/${number}/log`, ...GetApiContractProcessingWebContractsIdLogParams[]];
export declare const getGetApiContractProcessingWebContractsIdLogQueryOptions: <TData = AxiosResponse<DataContractLogMany, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebContractsIdLogParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractLogMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractLogMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdLogQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdLog>>>;
export declare type GetApiContractProcessingWebContractsIdLogQueryError = AxiosError<unknown>;
/**
 * @summary Get contract log
 */
export declare const useGetApiContractProcessingWebContractsIdLog: <TData = AxiosResponse<DataContractLogMany, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebContractsIdLogParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractLogMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract details
 */
export declare const getApiContractProcessingWebContractsIdDetails: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt>>;
export declare const getGetApiContractProcessingWebContractsIdDetailsQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/details`];
export declare const getGetApiContractProcessingWebContractsIdDetailsQueryOptions: <TData = AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdDetails>>>;
export declare type GetApiContractProcessingWebContractsIdDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Get contract details
 */
export declare const useGetApiContractProcessingWebContractsIdDetails: <TData = AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract debt details
 */
export declare const getApiContractProcessingWebContractsIdDebtDetails: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractDebtDetails>>;
export declare const getGetApiContractProcessingWebContractsIdDebtDetailsQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/debt_details`];
export declare const getGetApiContractProcessingWebContractsIdDebtDetailsQueryOptions: <TData = AxiosResponse<DataContractDebtDetails, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDebtDetails, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractDebtDetails, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdDebtDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdDebtDetails>>>;
export declare type GetApiContractProcessingWebContractsIdDebtDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Get contract debt details
 */
export declare const useGetApiContractProcessingWebContractsIdDebtDetails: <TData = AxiosResponse<DataContractDebtDetails, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDebtDetails, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract state counters
 */
export declare const getApiContractProcessingWebContractsIdStateCounters: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPublicStateCounterMany>>;
export declare const getGetApiContractProcessingWebContractsIdStateCountersQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/state_counters`];
export declare const getGetApiContractProcessingWebContractsIdStateCountersQueryOptions: <TData = AxiosResponse<DataPublicStateCounterMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPublicStateCounterMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPublicStateCounterMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdStateCountersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdStateCounters>>>;
export declare type GetApiContractProcessingWebContractsIdStateCountersQueryError = AxiosError<unknown>;
/**
 * @summary Get contract state counters
 */
export declare const useGetApiContractProcessingWebContractsIdStateCounters: <TData = AxiosResponse<DataPublicStateCounterMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPublicStateCounterMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract public state count
 */
export declare const getApiContractProcessingWebContractsIdStateCountersPublicCount: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPublicStateTotalCount>>;
export declare const getGetApiContractProcessingWebContractsIdStateCountersPublicCountQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/state_counters/public_count`];
export declare const getGetApiContractProcessingWebContractsIdStateCountersPublicCountQueryOptions: <TData = AxiosResponse<DataPublicStateTotalCount, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPublicStateTotalCount, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPublicStateTotalCount, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdStateCountersPublicCountQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdStateCountersPublicCount>>>;
export declare type GetApiContractProcessingWebContractsIdStateCountersPublicCountQueryError = AxiosError<unknown>;
/**
 * @summary Get contract public state count
 */
export declare const useGetApiContractProcessingWebContractsIdStateCountersPublicCount: <TData = AxiosResponse<DataPublicStateTotalCount, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPublicStateTotalCount, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract periods
 */
export declare const getApiContractProcessingWebContractsIdPeriods: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractPeriods>>;
export declare const getGetApiContractProcessingWebContractsIdPeriodsQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/periods`];
export declare const getGetApiContractProcessingWebContractsIdPeriodsQueryOptions: <TData = AxiosResponse<DataContractPeriods, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractPeriods, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractPeriods, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdPeriodsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdPeriods>>>;
export declare type GetApiContractProcessingWebContractsIdPeriodsQueryError = AxiosError<unknown>;
/**
 * @summary Get contract periods
 */
export declare const useGetApiContractProcessingWebContractsIdPeriods: <TData = AxiosResponse<DataContractPeriods, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractPeriods, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create contract additional data
 */
export declare const postApiContractProcessingWebContractsIdAdditionalData: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdAdditionalDataMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdAdditionalDataMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdAdditionalData>>>;
export declare type PostApiContractProcessingWebContractsIdAdditionalDataMutationError = AxiosError<unknown>;
/**
 * @summary Create contract additional data
 */
export declare const usePostApiContractProcessingWebContractsIdAdditionalData: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get offer by contract
 */
export declare const getApiContractProcessingWebContractsIdFullOffer: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullOffer>>;
export declare const getGetApiContractProcessingWebContractsIdFullOfferQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/full_offer`];
export declare const getGetApiContractProcessingWebContractsIdFullOfferQueryOptions: <TData = AxiosResponse<DataFullOffer, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullOffer, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFullOffer, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdFullOfferQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdFullOffer>>>;
export declare type GetApiContractProcessingWebContractsIdFullOfferQueryError = AxiosError<unknown>;
/**
 * @summary Get offer by contract
 */
export declare const useGetApiContractProcessingWebContractsIdFullOffer: <TData = AxiosResponse<DataFullOffer, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullOffer, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create contracts event
 */
export declare const postApiContractProcessingWebContractsIdEvent: (id: number, createContractEvent: CreateContractEvent, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CreateContractEvent;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CreateContractEvent;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEvent>>>;
export declare type PostApiContractProcessingWebContractsIdEventMutationBody = CreateContractEvent;
export declare type PostApiContractProcessingWebContractsIdEventMutationError = AxiosError<unknown>;
/**
 * @summary Create contracts event
 */
export declare const usePostApiContractProcessingWebContractsIdEvent: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CreateContractEvent;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CreateContractEvent;
}, TContext>;
/**
 * @summary Cancel contract events
 */
export declare const postApiContractProcessingWebContractsIdEventCancel: (id: number, cancelContractEvent: CancelContractEvent, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractEventMany>>;
export declare const getPostApiContractProcessingWebContractsIdEventCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContractEventMany, any>, TError, {
        id: number;
        data: CancelContractEvent;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContractEventMany, any>, TError, {
    id: number;
    data: CancelContractEvent;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventCancel>>>;
export declare type PostApiContractProcessingWebContractsIdEventCancelMutationBody = CancelContractEvent;
export declare type PostApiContractProcessingWebContractsIdEventCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel contract events
 */
export declare const usePostApiContractProcessingWebContractsIdEventCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContractEventMany, any>, TError, {
        id: number;
        data: CancelContractEvent;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContractEventMany, any>, TError, {
    id: number;
    data: CancelContractEvent;
}, TContext>;
/**
 * @summary Create many events for contract in one transaction
 */
export declare const postApiContractProcessingWebContractsIdEvents: (id: number, createContractEvent: CreateContractEvent[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CreateContractEvent[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CreateContractEvent[];
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEvents>>>;
export declare type PostApiContractProcessingWebContractsIdEventsMutationBody = CreateContractEvent[];
export declare type PostApiContractProcessingWebContractsIdEventsMutationError = AxiosError<unknown>;
/**
 * @summary Create many events for contract in one transaction
 */
export declare const usePostApiContractProcessingWebContractsIdEvents: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CreateContractEvent[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CreateContractEvent[];
}, TContext>;
/**
 * @summary Get all events for contract
 */
export declare const getApiContractProcessingWebContractsIdEvents: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractEventMany>>;
export declare const getGetApiContractProcessingWebContractsIdEventsQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/events`];
export declare const getGetApiContractProcessingWebContractsIdEventsQueryOptions: <TData = AxiosResponse<DataContractEventMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractEventMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractEventMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdEventsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdEvents>>>;
export declare type GetApiContractProcessingWebContractsIdEventsQueryError = AxiosError<unknown>;
/**
 * @summary Get all events for contract
 */
export declare const useGetApiContractProcessingWebContractsIdEvents: <TData = AxiosResponse<DataContractEventMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractEventMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Cancel payments by external ids
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentCancel: (id: number, cancelPayments: CancelPayments, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CancelPayments;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CancelPayments;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentCancel>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentCancelMutationBody = CancelPayments;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel payments by external ids
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CancelPayments;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CancelPayments;
}, TContext>;
/**
 * @summary Cancel payments by payment type
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentCancelByType: (id: number, params: PostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentMany>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentMany, any>, TError, {
        id: number;
        params: PostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeParams;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentMany, any>, TError, {
    id: number;
    params: PostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeParams;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentCancelByType>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeMutationError = AxiosError<unknown>;
/**
 * @summary Cancel payments by payment type
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentCancelByType: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentMany, any>, TError, {
        id: number;
        params: PostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeParams;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentMany, any>, TError, {
    id: number;
    params: PostApiContractProcessingWebContractsIdEventsPaymentCancelByTypeParams;
}, TContext>;
/**
 * @summary Create contract client payment event
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentClient: (id: number, paymentPayload: PaymentPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentClientMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: PaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: PaymentPayload;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentClientMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentClient>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentClientMutationBody = PaymentPayload;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentClientMutationError = AxiosError<unknown>;
/**
 * @summary Create contract client payment event
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentClient: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: PaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: PaymentPayload;
}, TContext>;
/**
 * @summary Create contract internal payment event
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentInternal: (id: number, paymentPayloadExcludeCorrectedIdExternalId: PaymentPayloadExcludeCorrectedIdExternalId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentInternalMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: PaymentPayloadExcludeCorrectedIdExternalId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: PaymentPayloadExcludeCorrectedIdExternalId;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentInternalMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentInternal>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentInternalMutationBody = PaymentPayloadExcludeCorrectedIdExternalId;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentInternalMutationError = AxiosError<unknown>;
/**
 * @summary Create contract internal payment event
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentInternal: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: PaymentPayloadExcludeCorrectedIdExternalId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: PaymentPayloadExcludeCorrectedIdExternalId;
}, TContext>;
/**
 * @summary Create contract write off event
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentWriteOff: (id: number, createWriteOffEvent: CreateWriteOffEvent, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentWriteOffMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CreateWriteOffEvent;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CreateWriteOffEvent;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentWriteOff>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffMutationBody = CreateWriteOffEvent;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffMutationError = AxiosError<unknown>;
/**
 * @summary Create contract write off event
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentWriteOff: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CreateWriteOffEvent;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CreateWriteOffEvent;
}, TContext>;
/**
 * @summary Create contract write off event version 2 (with filters)
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentWriteOffV2: (id: number, writeOffV2Event: WriteOffV2Event, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2MutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: WriteOffV2Event;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: WriteOffV2Event;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2MutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentWriteOffV2>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2MutationBody = WriteOffV2Event;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2MutationError = AxiosError<unknown>;
/**
 * @summary Create contract write off event version 2 (with filters)
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: WriteOffV2Event;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: WriteOffV2Event;
}, TContext>;
/**
 * @summary Create many contract write off events version 2 (with filters)
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentWriteOffV2Many: (id: number, writeOffV2Event: WriteOffV2Event[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2ManyMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: WriteOffV2Event[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: WriteOffV2Event[];
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2ManyMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentWriteOffV2Many>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2ManyMutationBody = WriteOffV2Event[];
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2ManyMutationError = AxiosError<unknown>;
/**
 * @summary Create many contract write off events version 2 (with filters)
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentWriteOffV2Many: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: WriteOffV2Event[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: WriteOffV2Event[];
}, TContext>;
/**
 * @summary Cancel all write offs
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentWriteOffCancelAll: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentWriteOffCancelAllMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffCancelAllMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentWriteOffCancelAll>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentWriteOffCancelAllMutationError = AxiosError<unknown>;
/**
 * @summary Cancel all write offs
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentWriteOffCancelAll: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Create contract transfer payment event
 */
export declare const postApiContractProcessingWebContractsIdEventsPaymentExternalIdTransfer: (id: number, externalId: string, transferPaymentPayload: TransferPaymentPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdEventsPaymentExternalIdTransferMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        externalId: string;
        data: TransferPaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    externalId: string;
    data: TransferPaymentPayload;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentExternalIdTransferMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdEventsPaymentExternalIdTransfer>>>;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentExternalIdTransferMutationBody = TransferPaymentPayload;
export declare type PostApiContractProcessingWebContractsIdEventsPaymentExternalIdTransferMutationError = AxiosError<unknown>;
/**
 * @summary Create contract transfer payment event
 */
export declare const usePostApiContractProcessingWebContractsIdEventsPaymentExternalIdTransfer: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        externalId: string;
        data: TransferPaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    externalId: string;
    data: TransferPaymentPayload;
}, TContext>;
/**
 * @summary Update limit transaction detail
 */
export declare const patchApiContractProcessingWebContractsLimitTransactionsDetailsId: (id: number, limitTransactionDetailExcludeCreatedIdLimitTrUidUpdated: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLimitTransactionDetail>>;
export declare const getPatchApiContractProcessingWebContractsLimitTransactionsDetailsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransactionDetail, any>, TError, {
        id: number;
        data: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLimitTransactionDetail, any>, TError, {
    id: number;
    data: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated;
}, TContext>;
export declare type PatchApiContractProcessingWebContractsLimitTransactionsDetailsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiContractProcessingWebContractsLimitTransactionsDetailsId>>>;
export declare type PatchApiContractProcessingWebContractsLimitTransactionsDetailsIdMutationBody = LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated;
export declare type PatchApiContractProcessingWebContractsLimitTransactionsDetailsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update limit transaction detail
 */
export declare const usePatchApiContractProcessingWebContractsLimitTransactionsDetailsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransactionDetail, any>, TError, {
        id: number;
        data: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLimitTransactionDetail, any>, TError, {
    id: number;
    data: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated;
}, TContext>;
/**
 * @summary Get limit transactions
 */
export declare const getApiContractProcessingWebContractsIdLimitTransactions: (id: number, params?: GetApiContractProcessingWebContractsIdLimitTransactionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetLimitTransactionManyPaginatedSummarized>>;
export declare const getGetApiContractProcessingWebContractsIdLimitTransactionsQueryKey: (id: number, params?: GetApiContractProcessingWebContractsIdLimitTransactionsParams) => readonly [`/api/contract-processing-web/contracts/${number}/limit_transactions`, ...GetApiContractProcessingWebContractsIdLimitTransactionsParams[]];
export declare const getGetApiContractProcessingWebContractsIdLimitTransactionsQueryOptions: <TData = AxiosResponse<DataGetLimitTransactionManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebContractsIdLimitTransactionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetLimitTransactionManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetLimitTransactionManyPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdLimitTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdLimitTransactions>>>;
export declare type GetApiContractProcessingWebContractsIdLimitTransactionsQueryError = AxiosError<unknown>;
/**
 * @summary Get limit transactions
 */
export declare const useGetApiContractProcessingWebContractsIdLimitTransactions: <TData = AxiosResponse<DataGetLimitTransactionManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebContractsIdLimitTransactionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetLimitTransactionManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create limit transaction
 */
export declare const postApiContractProcessingWebContractsIdLimitTransactions: (id: number, createLimitTransactionRequest: CreateLimitTransactionRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLimitTransaction>>;
export declare const getPostApiContractProcessingWebContractsIdLimitTransactionsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransaction, any>, TError, {
        id: number;
        data: CreateLimitTransactionRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLimitTransaction, any>, TError, {
    id: number;
    data: CreateLimitTransactionRequest;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdLimitTransactions>>>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsMutationBody = CreateLimitTransactionRequest;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsMutationError = AxiosError<unknown>;
/**
 * @summary Create limit transaction
 */
export declare const usePostApiContractProcessingWebContractsIdLimitTransactions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransaction, any>, TError, {
        id: number;
        data: CreateLimitTransactionRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLimitTransaction, any>, TError, {
    id: number;
    data: CreateLimitTransactionRequest;
}, TContext>;
/**
 * @summary Modify contract limit
 */
export declare const postApiContractProcessingWebContractsIdLimitTransactionsModifyLimit: (id: number, modifyContractLimitRequest: ModifyContractLimitRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLimitTransaction>>;
export declare const getPostApiContractProcessingWebContractsIdLimitTransactionsModifyLimitMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransaction, any>, TError, {
        id: number;
        data: ModifyContractLimitRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLimitTransaction, any>, TError, {
    id: number;
    data: ModifyContractLimitRequest;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsModifyLimitMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdLimitTransactionsModifyLimit>>>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsModifyLimitMutationBody = ModifyContractLimitRequest;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsModifyLimitMutationError = AxiosError<unknown>;
/**
 * @summary Modify contract limit
 */
export declare const usePostApiContractProcessingWebContractsIdLimitTransactionsModifyLimit: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransaction, any>, TError, {
        id: number;
        data: ModifyContractLimitRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLimitTransaction, any>, TError, {
    id: number;
    data: ModifyContractLimitRequest;
}, TContext>;
/**
 * @summary Create or update limit transaction details
 */
export declare const postApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidDetails: (id: number, limitTrUid: string, limitTransactionDetailExcludeCreatedIdLimitTrUidUpdated: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLimitTransactionDetailMany>>;
export declare const getPostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidDetailsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransactionDetailMany, any>, TError, {
        id: number;
        limitTrUid: string;
        data: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLimitTransactionDetailMany, any>, TError, {
    id: number;
    limitTrUid: string;
    data: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated[];
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidDetailsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidDetails>>>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidDetailsMutationBody = LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated[];
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidDetailsMutationError = AxiosError<unknown>;
/**
 * @summary Create or update limit transaction details
 */
export declare const usePostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidDetails: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransactionDetailMany, any>, TError, {
        id: number;
        limitTrUid: string;
        data: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLimitTransactionDetailMany, any>, TError, {
    id: number;
    limitTrUid: string;
    data: LimitTransactionDetailExcludeCreatedIdLimitTrUidUpdated[];
}, TContext>;
/**
 * @summary Complete contract disburse
 */
export declare const postApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidComplete: (id: number, limitTrUid: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        limitTrUid: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    limitTrUid: string;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidComplete>>>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete contract disburse
 */
export declare const usePostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        limitTrUid: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    limitTrUid: string;
}, TContext>;
/**
 * @summary Fail contract disburse
 */
export declare const postApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidFail: (id: number, limitTrUid: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidFailMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        limitTrUid: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    limitTrUid: string;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidFailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidFail>>>;
export declare type PostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidFailMutationError = AxiosError<unknown>;
/**
 * @summary Fail contract disburse
 */
export declare const usePostApiContractProcessingWebContractsIdLimitTransactionsLimitTrUidFail: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        limitTrUid: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    limitTrUid: string;
}, TContext>;
/**
 * @summary Complete contract disburse
 */
export declare const postApiContractProcessingWebContractsIdDisburseComplete: (id: number, createContractDisburse: CreateContractDisburse, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdDisburseCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CreateContractDisburse;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CreateContractDisburse;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdDisburseCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdDisburseComplete>>>;
export declare type PostApiContractProcessingWebContractsIdDisburseCompleteMutationBody = CreateContractDisburse;
export declare type PostApiContractProcessingWebContractsIdDisburseCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete contract disburse
 */
export declare const usePostApiContractProcessingWebContractsIdDisburseComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: CreateContractDisburse;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: CreateContractDisburse;
}, TContext>;
/**
 * @summary Fail contract disburse
 */
export declare const postApiContractProcessingWebContractsIdDisburseFail: (id: number, failContractDisburse: FailContractDisburse, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdDisburseFailMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: FailContractDisburse;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: FailContractDisburse;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdDisburseFailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdDisburseFail>>>;
export declare type PostApiContractProcessingWebContractsIdDisburseFailMutationBody = FailContractDisburse;
export declare type PostApiContractProcessingWebContractsIdDisburseFailMutationError = AxiosError<unknown>;
/**
 * @summary Fail contract disburse
 */
export declare const usePostApiContractProcessingWebContractsIdDisburseFail: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        data: FailContractDisburse;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    data: FailContractDisburse;
}, TContext>;
/**
 * @summary Get contract prolongations
 */
export declare const getApiContractProcessingWebContractsIdProlongations: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetProlongationMany>>;
export declare const getGetApiContractProcessingWebContractsIdProlongationsQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/prolongations`];
export declare const getGetApiContractProcessingWebContractsIdProlongationsQueryOptions: <TData = AxiosResponse<DataGetProlongationMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetProlongationMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetProlongationMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdProlongationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdProlongations>>>;
export declare type GetApiContractProcessingWebContractsIdProlongationsQueryError = AxiosError<unknown>;
/**
 * @summary Get contract prolongations
 */
export declare const useGetApiContractProcessingWebContractsIdProlongations: <TData = AxiosResponse<DataGetProlongationMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetProlongationMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Select prolongation
 */
export declare const postApiContractProcessingWebContractsIdProlongationsSelect: (id: number, selectProlongationRequestBody: SelectProlongationRequestBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetProlongation>>;
export declare const getPostApiContractProcessingWebContractsIdProlongationsSelectMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
        id: number;
        data: SelectProlongationRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
    id: number;
    data: SelectProlongationRequestBody;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdProlongationsSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdProlongationsSelect>>>;
export declare type PostApiContractProcessingWebContractsIdProlongationsSelectMutationBody = SelectProlongationRequestBody;
export declare type PostApiContractProcessingWebContractsIdProlongationsSelectMutationError = AxiosError<unknown>;
/**
 * @summary Select prolongation
 */
export declare const usePostApiContractProcessingWebContractsIdProlongationsSelect: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
        id: number;
        data: SelectProlongationRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetProlongation, any>, TError, {
    id: number;
    data: SelectProlongationRequestBody;
}, TContext>;
/**
 * @summary Pre select prolongation
 */
export declare const postApiContractProcessingWebContractsIdProlongationsPreSelect: (id: number, selectProlongationRequestOnlyIndexBody: SelectProlongationRequestOnlyIndexBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetProlongation>>;
export declare const getPostApiContractProcessingWebContractsIdProlongationsPreSelectMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
        id: number;
        data: SelectProlongationRequestOnlyIndexBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
    id: number;
    data: SelectProlongationRequestOnlyIndexBody;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdProlongationsPreSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdProlongationsPreSelect>>>;
export declare type PostApiContractProcessingWebContractsIdProlongationsPreSelectMutationBody = SelectProlongationRequestOnlyIndexBody;
export declare type PostApiContractProcessingWebContractsIdProlongationsPreSelectMutationError = AxiosError<unknown>;
/**
 * @summary Pre select prolongation
 */
export declare const usePostApiContractProcessingWebContractsIdProlongationsPreSelect: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
        id: number;
        data: SelectProlongationRequestOnlyIndexBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetProlongation, any>, TError, {
    id: number;
    data: SelectProlongationRequestOnlyIndexBody;
}, TContext>;
/**
 * @summary Unselect prolongation
 */
export declare const postApiContractProcessingWebContractsIdProlongationsUnselect: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebContractsIdProlongationsUnselectMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
export declare type PostApiContractProcessingWebContractsIdProlongationsUnselectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebContractsIdProlongationsUnselect>>>;
export declare type PostApiContractProcessingWebContractsIdProlongationsUnselectMutationError = AxiosError<unknown>;
/**
 * @summary Unselect prolongation
 */
export declare const usePostApiContractProcessingWebContractsIdProlongationsUnselect: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get detail info about contract
 */
export declare const getApiContractProcessingWebContractsId: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractInfoExcludeBalanceTotalDebt>>;
export declare const getGetApiContractProcessingWebContractsIdQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}`];
export declare const getGetApiContractProcessingWebContractsIdQueryOptions: <TData = AxiosResponse<DataContractInfoExcludeBalanceTotalDebt, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractInfoExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractInfoExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsId>>>;
export declare type GetApiContractProcessingWebContractsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get detail info about contract
 */
export declare const useGetApiContractProcessingWebContractsId: <TData = AxiosResponse<DataContractInfoExcludeBalanceTotalDebt, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractInfoExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get active contract operations for repay
 */
export declare const getApiContractProcessingWebContractsIdRepayOperations: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOperationsResponseMany>>;
export declare const getGetApiContractProcessingWebContractsIdRepayOperationsQueryKey: (id: number) => readonly [`/api/contract-processing-web/contracts/${number}/repay_operations`];
export declare const getGetApiContractProcessingWebContractsIdRepayOperationsQueryOptions: <TData = AxiosResponse<DataGetOperationsResponseMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOperationsResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOperationsResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdRepayOperationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdRepayOperations>>>;
export declare type GetApiContractProcessingWebContractsIdRepayOperationsQueryError = AxiosError<unknown>;
/**
 * @summary Get active contract operations for repay
 */
export declare const useGetApiContractProcessingWebContractsIdRepayOperations: <TData = AxiosResponse<DataGetOperationsResponseMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOperationsResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract services
 */
export declare const getApiContractProcessingWebContractsIdServices: (id: number, params?: GetApiContractProcessingWebContractsIdServicesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetContractServiceMany>>;
export declare const getGetApiContractProcessingWebContractsIdServicesQueryKey: (id: number, params?: GetApiContractProcessingWebContractsIdServicesParams) => readonly [`/api/contract-processing-web/contracts/${number}/services`, ...GetApiContractProcessingWebContractsIdServicesParams[]];
export declare const getGetApiContractProcessingWebContractsIdServicesQueryOptions: <TData = AxiosResponse<DataGetContractServiceMany, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebContractsIdServicesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetContractServiceMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetContractServiceMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebContractsIdServicesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebContractsIdServices>>>;
export declare type GetApiContractProcessingWebContractsIdServicesQueryError = AxiosError<unknown>;
/**
 * @summary Get contract services
 */
export declare const useGetApiContractProcessingWebContractsIdServices: <TData = AxiosResponse<DataGetContractServiceMany, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebContractsIdServicesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetContractServiceMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search products
 */
export declare const getApiContractProcessingWebBillingProducts: (params?: GetApiContractProcessingWebBillingProductsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProductResponseMany>>;
export declare const getGetApiContractProcessingWebBillingProductsQueryKey: (params?: GetApiContractProcessingWebBillingProductsParams) => readonly ["/api/contract-processing-web/billing/products", ...GetApiContractProcessingWebBillingProductsParams[]];
export declare const getGetApiContractProcessingWebBillingProductsQueryOptions: <TData = AxiosResponse<DataProductResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataProductResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProducts>>>;
export declare type GetApiContractProcessingWebBillingProductsQueryError = AxiosError<unknown>;
/**
 * @summary Search products
 */
export declare const useGetApiContractProcessingWebBillingProducts: <TData = AxiosResponse<DataProductResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create product
 */
export declare const postApiContractProcessingWebBillingProducts: (productExcludeArchivedCreatedIdUpdated: ProductExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProduct>>;
export declare const getPostApiContractProcessingWebBillingProductsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProduct, any>, TError, {
        data: ProductExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataProduct, any>, TError, {
    data: ProductExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiContractProcessingWebBillingProductsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingProducts>>>;
export declare type PostApiContractProcessingWebBillingProductsMutationBody = ProductExcludeArchivedCreatedIdUpdated;
export declare type PostApiContractProcessingWebBillingProductsMutationError = AxiosError<unknown>;
/**
 * @summary Create product
 */
export declare const usePostApiContractProcessingWebBillingProducts: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProduct, any>, TError, {
        data: ProductExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataProduct, any>, TError, {
    data: ProductExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Delete product
 */
export declare const deleteApiContractProcessingWebBillingProductsId: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getDeleteApiContractProcessingWebBillingProductsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
export declare type DeleteApiContractProcessingWebBillingProductsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContractProcessingWebBillingProductsId>>>;
export declare type DeleteApiContractProcessingWebBillingProductsIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete product
 */
export declare const useDeleteApiContractProcessingWebBillingProductsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Paginated Search offers
 */
export declare const getApiContractProcessingWebBillingV2Offers: (params?: GetApiContractProcessingWebBillingV2OffersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOfferManyPaginated>>;
export declare const getGetApiContractProcessingWebBillingV2OffersQueryKey: (params?: GetApiContractProcessingWebBillingV2OffersParams) => readonly ["/api/contract-processing-web/billing/v2/offers", ...GetApiContractProcessingWebBillingV2OffersParams[]];
export declare const getGetApiContractProcessingWebBillingV2OffersQueryOptions: <TData = AxiosResponse<DataOfferManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingV2OffersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOfferManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataOfferManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingV2OffersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingV2Offers>>>;
export declare type GetApiContractProcessingWebBillingV2OffersQueryError = AxiosError<unknown>;
/**
 * @summary Paginated Search offers
 */
export declare const useGetApiContractProcessingWebBillingV2Offers: <TData = AxiosResponse<DataOfferManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingV2OffersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOfferManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @deprecated
 * @summary Search offers
 */
export declare const getApiContractProcessingWebBillingOffers: (params?: GetApiContractProcessingWebBillingOffersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOfferMany>>;
export declare const getGetApiContractProcessingWebBillingOffersQueryKey: (params?: GetApiContractProcessingWebBillingOffersParams) => readonly ["/api/contract-processing-web/billing/offers", ...GetApiContractProcessingWebBillingOffersParams[]];
export declare const getGetApiContractProcessingWebBillingOffersQueryOptions: <TData = AxiosResponse<DataOfferMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingOffersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOfferMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataOfferMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingOffersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingOffers>>>;
export declare type GetApiContractProcessingWebBillingOffersQueryError = AxiosError<unknown>;
/**
 * @deprecated
 * @summary Search offers
 */
export declare const useGetApiContractProcessingWebBillingOffers: <TData = AxiosResponse<DataOfferMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingOffersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOfferMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create offers
 */
export declare const postApiContractProcessingWebBillingOffers: (offerExcludeArchivedCreatedIdUpdated: OfferExcludeArchivedCreatedIdUpdated[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOfferMany>>;
export declare const getPostApiContractProcessingWebBillingOffersMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOfferMany, any>, TError, {
        data: OfferExcludeArchivedCreatedIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOfferMany, any>, TError, {
    data: OfferExcludeArchivedCreatedIdUpdated[];
}, TContext>;
export declare type PostApiContractProcessingWebBillingOffersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingOffers>>>;
export declare type PostApiContractProcessingWebBillingOffersMutationBody = OfferExcludeArchivedCreatedIdUpdated[];
export declare type PostApiContractProcessingWebBillingOffersMutationError = AxiosError<unknown>;
/**
 * @summary Create offers
 */
export declare const usePostApiContractProcessingWebBillingOffers: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOfferMany, any>, TError, {
        data: OfferExcludeArchivedCreatedIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOfferMany, any>, TError, {
    data: OfferExcludeArchivedCreatedIdUpdated[];
}, TContext>;
/**
 * @summary Get offer by id
 */
export declare const getApiContractProcessingWebBillingOffersId: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOfferByIDResp>>;
export declare const getGetApiContractProcessingWebBillingOffersIdQueryKey: (id: number) => readonly [`/api/contract-processing-web/billing/offers/${number}`];
export declare const getGetApiContractProcessingWebBillingOffersIdQueryOptions: <TData = AxiosResponse<DataGetOfferByIDResp, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOfferByIDResp, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOfferByIDResp, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingOffersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingOffersId>>>;
export declare type GetApiContractProcessingWebBillingOffersIdQueryError = AxiosError<unknown>;
/**
 * @summary Get offer by id
 */
export declare const useGetApiContractProcessingWebBillingOffersId: <TData = AxiosResponse<DataGetOfferByIDResp, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOfferByIDResp, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get offer preview
 */
export declare const getApiContractProcessingWebBillingOffersIdPreview: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOfferPreview>>;
export declare const getGetApiContractProcessingWebBillingOffersIdPreviewQueryKey: (id: number) => readonly [`/api/contract-processing-web/billing/offers/${number}/preview`];
export declare const getGetApiContractProcessingWebBillingOffersIdPreviewQueryOptions: <TData = AxiosResponse<DataOfferPreview, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOfferPreview, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataOfferPreview, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingOffersIdPreviewQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingOffersIdPreview>>>;
export declare type GetApiContractProcessingWebBillingOffersIdPreviewQueryError = AxiosError<unknown>;
/**
 * @summary Get offer preview
 */
export declare const useGetApiContractProcessingWebBillingOffersIdPreview: <TData = AxiosResponse<DataOfferPreview, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOfferPreview, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create offer fees
 */
export declare const postApiContractProcessingWebBillingOfferFees: (offerFeeExcludeArchivedCreatedIdUpdated: OfferFeeExcludeArchivedCreatedIdUpdated[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOfferFeeMany>>;
export declare const getPostApiContractProcessingWebBillingOfferFeesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOfferFeeMany, any>, TError, {
        data: OfferFeeExcludeArchivedCreatedIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOfferFeeMany, any>, TError, {
    data: OfferFeeExcludeArchivedCreatedIdUpdated[];
}, TContext>;
export declare type PostApiContractProcessingWebBillingOfferFeesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingOfferFees>>>;
export declare type PostApiContractProcessingWebBillingOfferFeesMutationBody = OfferFeeExcludeArchivedCreatedIdUpdated[];
export declare type PostApiContractProcessingWebBillingOfferFeesMutationError = AxiosError<unknown>;
/**
 * @summary Create offer fees
 */
export declare const usePostApiContractProcessingWebBillingOfferFees: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOfferFeeMany, any>, TError, {
        data: OfferFeeExcludeArchivedCreatedIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOfferFeeMany, any>, TError, {
    data: OfferFeeExcludeArchivedCreatedIdUpdated[];
}, TContext>;
/**
 * @summary Paginated Search offer fees
 */
export declare const getApiContractProcessingWebBillingOfferFees: (params?: GetApiContractProcessingWebBillingOfferFeesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOfferFeeManyPaginated>>;
export declare const getGetApiContractProcessingWebBillingOfferFeesQueryKey: (params?: GetApiContractProcessingWebBillingOfferFeesParams) => readonly ["/api/contract-processing-web/billing/offer_fees", ...GetApiContractProcessingWebBillingOfferFeesParams[]];
export declare const getGetApiContractProcessingWebBillingOfferFeesQueryOptions: <TData = AxiosResponse<DataOfferFeeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingOfferFeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOfferFeeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataOfferFeeManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingOfferFeesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingOfferFees>>>;
export declare type GetApiContractProcessingWebBillingOfferFeesQueryError = AxiosError<unknown>;
/**
 * @summary Paginated Search offer fees
 */
export declare const useGetApiContractProcessingWebBillingOfferFees: <TData = AxiosResponse<DataOfferFeeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingOfferFeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOfferFeeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search public states
 */
export declare const getApiContractProcessingWebBillingPublicStates: (params?: GetApiContractProcessingWebBillingPublicStatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPublicStateMany>>;
export declare const getGetApiContractProcessingWebBillingPublicStatesQueryKey: (params?: GetApiContractProcessingWebBillingPublicStatesParams) => readonly ["/api/contract-processing-web/billing/public_states", ...GetApiContractProcessingWebBillingPublicStatesParams[]];
export declare const getGetApiContractProcessingWebBillingPublicStatesQueryOptions: <TData = AxiosResponse<DataPublicStateMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingPublicStatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPublicStateMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPublicStateMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingPublicStatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingPublicStates>>>;
export declare type GetApiContractProcessingWebBillingPublicStatesQueryError = AxiosError<unknown>;
/**
 * @summary Search public states
 */
export declare const useGetApiContractProcessingWebBillingPublicStates: <TData = AxiosResponse<DataPublicStateMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingPublicStatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPublicStateMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search technical states
 */
export declare const getApiContractProcessingWebBillingTechnicalStates: (params?: GetApiContractProcessingWebBillingTechnicalStatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTechnicalStateMany>>;
export declare const getGetApiContractProcessingWebBillingTechnicalStatesQueryKey: (params?: GetApiContractProcessingWebBillingTechnicalStatesParams) => readonly ["/api/contract-processing-web/billing/technical_states", ...GetApiContractProcessingWebBillingTechnicalStatesParams[]];
export declare const getGetApiContractProcessingWebBillingTechnicalStatesQueryOptions: <TData = AxiosResponse<DataTechnicalStateMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingTechnicalStatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTechnicalStateMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTechnicalStateMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingTechnicalStatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingTechnicalStates>>>;
export declare type GetApiContractProcessingWebBillingTechnicalStatesQueryError = AxiosError<unknown>;
/**
 * @summary Search technical states
 */
export declare const useGetApiContractProcessingWebBillingTechnicalStates: <TData = AxiosResponse<DataTechnicalStateMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingTechnicalStatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTechnicalStateMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search public fees
 */
export declare const getApiContractProcessingWebBillingPublicFees: (params?: GetApiContractProcessingWebBillingPublicFeesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPublicFeeMany>>;
export declare const getGetApiContractProcessingWebBillingPublicFeesQueryKey: (params?: GetApiContractProcessingWebBillingPublicFeesParams) => readonly ["/api/contract-processing-web/billing/public_fees", ...GetApiContractProcessingWebBillingPublicFeesParams[]];
export declare const getGetApiContractProcessingWebBillingPublicFeesQueryOptions: <TData = AxiosResponse<DataPublicFeeMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingPublicFeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPublicFeeMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPublicFeeMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingPublicFeesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingPublicFees>>>;
export declare type GetApiContractProcessingWebBillingPublicFeesQueryError = AxiosError<unknown>;
/**
 * @summary Search public fees
 */
export declare const useGetApiContractProcessingWebBillingPublicFees: <TData = AxiosResponse<DataPublicFeeMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingPublicFeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPublicFeeMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search technical fees
 */
export declare const getApiContractProcessingWebBillingTechnicalFees: (params?: GetApiContractProcessingWebBillingTechnicalFeesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTechnicalFeeMany>>;
export declare const getGetApiContractProcessingWebBillingTechnicalFeesQueryKey: (params?: GetApiContractProcessingWebBillingTechnicalFeesParams) => readonly ["/api/contract-processing-web/billing/technical_fees", ...GetApiContractProcessingWebBillingTechnicalFeesParams[]];
export declare const getGetApiContractProcessingWebBillingTechnicalFeesQueryOptions: <TData = AxiosResponse<DataTechnicalFeeMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingTechnicalFeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTechnicalFeeMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTechnicalFeeMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingTechnicalFeesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingTechnicalFees>>>;
export declare type GetApiContractProcessingWebBillingTechnicalFeesQueryError = AxiosError<unknown>;
/**
 * @summary Search technical fees
 */
export declare const useGetApiContractProcessingWebBillingTechnicalFees: <TData = AxiosResponse<DataTechnicalFeeMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingTechnicalFeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTechnicalFeeMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search product fees
 */
export declare const getApiContractProcessingWebBillingProductFees: (params?: GetApiContractProcessingWebBillingProductFeesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProductFeeMany>>;
export declare const getGetApiContractProcessingWebBillingProductFeesQueryKey: (params?: GetApiContractProcessingWebBillingProductFeesParams) => readonly ["/api/contract-processing-web/billing/product_fees", ...GetApiContractProcessingWebBillingProductFeesParams[]];
export declare const getGetApiContractProcessingWebBillingProductFeesQueryOptions: <TData = AxiosResponse<DataProductFeeMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductFeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductFeeMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataProductFeeMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductFeesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProductFees>>>;
export declare type GetApiContractProcessingWebBillingProductFeesQueryError = AxiosError<unknown>;
/**
 * @summary Search product fees
 */
export declare const useGetApiContractProcessingWebBillingProductFees: <TData = AxiosResponse<DataProductFeeMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductFeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductFeeMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create product fees
 */
export declare const postApiContractProcessingWebBillingProductFees: (productFeeExcludeArchivedCreatedIdUpdated: ProductFeeExcludeArchivedCreatedIdUpdated[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProductFeeMany>>;
export declare const getPostApiContractProcessingWebBillingProductFeesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProductFeeMany, any>, TError, {
        data: ProductFeeExcludeArchivedCreatedIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataProductFeeMany, any>, TError, {
    data: ProductFeeExcludeArchivedCreatedIdUpdated[];
}, TContext>;
export declare type PostApiContractProcessingWebBillingProductFeesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingProductFees>>>;
export declare type PostApiContractProcessingWebBillingProductFeesMutationBody = ProductFeeExcludeArchivedCreatedIdUpdated[];
export declare type PostApiContractProcessingWebBillingProductFeesMutationError = AxiosError<unknown>;
/**
 * @summary Create product fees
 */
export declare const usePostApiContractProcessingWebBillingProductFees: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProductFeeMany, any>, TError, {
        data: ProductFeeExcludeArchivedCreatedIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataProductFeeMany, any>, TError, {
    data: ProductFeeExcludeArchivedCreatedIdUpdated[];
}, TContext>;
/**
 * @summary Search event types
 */
export declare const getApiContractProcessingWebBillingEventTypes: (params?: GetApiContractProcessingWebBillingEventTypesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEventTypeMany>>;
export declare const getGetApiContractProcessingWebBillingEventTypesQueryKey: (params?: GetApiContractProcessingWebBillingEventTypesParams) => readonly ["/api/contract-processing-web/billing/event_types", ...GetApiContractProcessingWebBillingEventTypesParams[]];
export declare const getGetApiContractProcessingWebBillingEventTypesQueryOptions: <TData = AxiosResponse<DataEventTypeMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingEventTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEventTypeMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEventTypeMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingEventTypesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingEventTypes>>>;
export declare type GetApiContractProcessingWebBillingEventTypesQueryError = AxiosError<unknown>;
/**
 * @summary Search event types
 */
export declare const useGetApiContractProcessingWebBillingEventTypes: <TData = AxiosResponse<DataEventTypeMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingEventTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEventTypeMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Paginated Search workflows
 */
export declare const getApiContractProcessingWebBillingWorkflowsPaginated: (params?: GetApiContractProcessingWebBillingWorkflowsPaginatedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkflowExtendedManyPaginated>>;
export declare const getGetApiContractProcessingWebBillingWorkflowsPaginatedQueryKey: (params?: GetApiContractProcessingWebBillingWorkflowsPaginatedParams) => readonly ["/api/contract-processing-web/billing/workflows/paginated", ...GetApiContractProcessingWebBillingWorkflowsPaginatedParams[]];
export declare const getGetApiContractProcessingWebBillingWorkflowsPaginatedQueryOptions: <TData = AxiosResponse<DataWorkflowExtendedManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingWorkflowsPaginatedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowExtendedManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataWorkflowExtendedManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingWorkflowsPaginatedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingWorkflowsPaginated>>>;
export declare type GetApiContractProcessingWebBillingWorkflowsPaginatedQueryError = AxiosError<unknown>;
/**
 * @summary Paginated Search workflows
 */
export declare const useGetApiContractProcessingWebBillingWorkflowsPaginated: <TData = AxiosResponse<DataWorkflowExtendedManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingWorkflowsPaginatedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowExtendedManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get workflow details
 */
export declare const getApiContractProcessingWebBillingWorkflowsIdDetails: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkflowDetails>>;
export declare const getGetApiContractProcessingWebBillingWorkflowsIdDetailsQueryKey: (id: number) => readonly [`/api/contract-processing-web/billing/workflows/${number}/details`];
export declare const getGetApiContractProcessingWebBillingWorkflowsIdDetailsQueryOptions: <TData = AxiosResponse<DataWorkflowDetails, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowDetails, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataWorkflowDetails, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingWorkflowsIdDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingWorkflowsIdDetails>>>;
export declare type GetApiContractProcessingWebBillingWorkflowsIdDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Get workflow details
 */
export declare const useGetApiContractProcessingWebBillingWorkflowsIdDetails: <TData = AxiosResponse<DataWorkflowDetails, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowDetails, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get actual workflow schema for workflow
 */
export declare const getApiContractProcessingWebBillingWorkflowsIdSchemaV2: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkflowSchemaEntity>>;
export declare const getGetApiContractProcessingWebBillingWorkflowsIdSchemaV2QueryKey: (id: number) => readonly [`/api/contract-processing-web/billing/workflows/${number}/schema/v2`];
export declare const getGetApiContractProcessingWebBillingWorkflowsIdSchemaV2QueryOptions: <TData = AxiosResponse<DataWorkflowSchemaEntity, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowSchemaEntity, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataWorkflowSchemaEntity, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingWorkflowsIdSchemaV2QueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingWorkflowsIdSchemaV2>>>;
export declare type GetApiContractProcessingWebBillingWorkflowsIdSchemaV2QueryError = AxiosError<unknown>;
/**
 * @summary get actual workflow schema for workflow
 */
export declare const useGetApiContractProcessingWebBillingWorkflowsIdSchemaV2: <TData = AxiosResponse<DataWorkflowSchemaEntity, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowSchemaEntity, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create or update workflow with entities from schema v2
 */
export declare const postApiContractProcessingWebBillingWorkflowsIdSchemaV2: (id: number, createOrUpdateWorkflowSchemaBody: CreateOrUpdateWorkflowSchemaBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCreateOrUpdateWorkflowSchemaResponse>>;
export declare const getPostApiContractProcessingWebBillingWorkflowsIdSchemaV2MutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrUpdateWorkflowSchemaResponse, any>, TError, {
        id: number;
        data: CreateOrUpdateWorkflowSchemaBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCreateOrUpdateWorkflowSchemaResponse, any>, TError, {
    id: number;
    data: CreateOrUpdateWorkflowSchemaBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingWorkflowsIdSchemaV2MutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingWorkflowsIdSchemaV2>>>;
export declare type PostApiContractProcessingWebBillingWorkflowsIdSchemaV2MutationBody = CreateOrUpdateWorkflowSchemaBody;
export declare type PostApiContractProcessingWebBillingWorkflowsIdSchemaV2MutationError = AxiosError<unknown>;
/**
 * @summary create or update workflow with entities from schema v2
 */
export declare const usePostApiContractProcessingWebBillingWorkflowsIdSchemaV2: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrUpdateWorkflowSchemaResponse, any>, TError, {
        id: number;
        data: CreateOrUpdateWorkflowSchemaBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCreateOrUpdateWorkflowSchemaResponse, any>, TError, {
    id: number;
    data: CreateOrUpdateWorkflowSchemaBody;
}, TContext>;
/**
 * @summary Get workflow dependent data in json format for building workflow schema
 */
export declare const getApiContractProcessingWebBillingWorkflowsIdSchemaV2Export: (id: number, params?: GetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkflowCodeV2SchemaExcludeCreatedIdLastUpdatedUserUpdated>>;
export declare const getGetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportQueryKey: (id: number, params?: GetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportParams) => readonly [`/api/contract-processing-web/billing/workflows/${number}/schema/v2/export`, ...GetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportParams[]];
export declare const getGetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportQueryOptions: <TData = AxiosResponse<DataWorkflowCodeV2SchemaExcludeCreatedIdLastUpdatedUserUpdated, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowCodeV2SchemaExcludeCreatedIdLastUpdatedUserUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataWorkflowCodeV2SchemaExcludeCreatedIdLastUpdatedUserUpdated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingWorkflowsIdSchemaV2Export>>>;
export declare type GetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportQueryError = AxiosError<unknown>;
/**
 * @summary Get workflow dependent data in json format for building workflow schema
 */
export declare const useGetApiContractProcessingWebBillingWorkflowsIdSchemaV2Export: <TData = AxiosResponse<DataWorkflowCodeV2SchemaExcludeCreatedIdLastUpdatedUserUpdated, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebBillingWorkflowsIdSchemaV2ExportParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowCodeV2SchemaExcludeCreatedIdLastUpdatedUserUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get workflow by id
 */
export declare const getApiContractProcessingWebBillingWorkflowsId: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkflow>>;
export declare const getGetApiContractProcessingWebBillingWorkflowsIdQueryKey: (id: number) => readonly [`/api/contract-processing-web/billing/workflows/${number}`];
export declare const getGetApiContractProcessingWebBillingWorkflowsIdQueryOptions: <TData = AxiosResponse<DataWorkflow, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflow, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataWorkflow, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingWorkflowsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingWorkflowsId>>>;
export declare type GetApiContractProcessingWebBillingWorkflowsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get workflow by id
 */
export declare const useGetApiContractProcessingWebBillingWorkflowsId: <TData = AxiosResponse<DataWorkflow, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflow, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update workflow by id
 */
export declare const patchApiContractProcessingWebBillingWorkflowsId: (id: number, workflowOnlyArchivedBcPeriodName: WorkflowOnlyArchivedBcPeriodName, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkflow>>;
export declare const getPatchApiContractProcessingWebBillingWorkflowsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkflow, any>, TError, {
        id: number;
        data: WorkflowOnlyArchivedBcPeriodName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWorkflow, any>, TError, {
    id: number;
    data: WorkflowOnlyArchivedBcPeriodName;
}, TContext>;
export declare type PatchApiContractProcessingWebBillingWorkflowsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiContractProcessingWebBillingWorkflowsId>>>;
export declare type PatchApiContractProcessingWebBillingWorkflowsIdMutationBody = WorkflowOnlyArchivedBcPeriodName;
export declare type PatchApiContractProcessingWebBillingWorkflowsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update workflow by id
 */
export declare const usePatchApiContractProcessingWebBillingWorkflowsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkflow, any>, TError, {
        id: number;
        data: WorkflowOnlyArchivedBcPeriodName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWorkflow, any>, TError, {
    id: number;
    data: WorkflowOnlyArchivedBcPeriodName;
}, TContext>;
/**
 * @summary Delete workflow
 */
export declare const deleteApiContractProcessingWebBillingWorkflowsId: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getDeleteApiContractProcessingWebBillingWorkflowsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
export declare type DeleteApiContractProcessingWebBillingWorkflowsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContractProcessingWebBillingWorkflowsId>>>;
export declare type DeleteApiContractProcessingWebBillingWorkflowsIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete workflow
 */
export declare const useDeleteApiContractProcessingWebBillingWorkflowsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Search workflows
 */
export declare const getApiContractProcessingWebBillingWorkflows: (params?: GetApiContractProcessingWebBillingWorkflowsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkflowExtendedMany>>;
export declare const getGetApiContractProcessingWebBillingWorkflowsQueryKey: (params?: GetApiContractProcessingWebBillingWorkflowsParams) => readonly ["/api/contract-processing-web/billing/workflows", ...GetApiContractProcessingWebBillingWorkflowsParams[]];
export declare const getGetApiContractProcessingWebBillingWorkflowsQueryOptions: <TData = AxiosResponse<DataWorkflowExtendedMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingWorkflowsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowExtendedMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataWorkflowExtendedMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingWorkflowsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingWorkflows>>>;
export declare type GetApiContractProcessingWebBillingWorkflowsQueryError = AxiosError<unknown>;
/**
 * @summary Search workflows
 */
export declare const useGetApiContractProcessingWebBillingWorkflows: <TData = AxiosResponse<DataWorkflowExtendedMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingWorkflowsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWorkflowExtendedMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create workflow
 */
export declare const postApiContractProcessingWebBillingWorkflows: (workflowOnlyBcPeriodCodeName: WorkflowOnlyBcPeriodCodeName, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkflow>>;
export declare const getPostApiContractProcessingWebBillingWorkflowsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkflow, any>, TError, {
        data: WorkflowOnlyBcPeriodCodeName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWorkflow, any>, TError, {
    data: WorkflowOnlyBcPeriodCodeName;
}, TContext>;
export declare type PostApiContractProcessingWebBillingWorkflowsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingWorkflows>>>;
export declare type PostApiContractProcessingWebBillingWorkflowsMutationBody = WorkflowOnlyBcPeriodCodeName;
export declare type PostApiContractProcessingWebBillingWorkflowsMutationError = AxiosError<unknown>;
/**
 * @summary Create workflow
 */
export declare const usePostApiContractProcessingWebBillingWorkflows: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkflow, any>, TError, {
        data: WorkflowOnlyBcPeriodCodeName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWorkflow, any>, TError, {
    data: WorkflowOnlyBcPeriodCodeName;
}, TContext>;
/**
 * @summary get billing enums
 */
export declare const getApiContractProcessingWebBillingEnums: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBillingEnums>>;
export declare const getGetApiContractProcessingWebBillingEnumsQueryKey: () => readonly ["/api/contract-processing-web/billing/enums"];
export declare const getGetApiContractProcessingWebBillingEnumsQueryOptions: <TData = AxiosResponse<DataBillingEnums, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataBillingEnums, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBillingEnums, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingEnumsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingEnums>>>;
export declare type GetApiContractProcessingWebBillingEnumsQueryError = AxiosError<unknown>;
/**
 * @summary get billing enums
 */
export declare const useGetApiContractProcessingWebBillingEnums: <TData = AxiosResponse<DataBillingEnums, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataBillingEnums, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search state params
 */
export declare const getApiContractProcessingWebBillingStateParams: (params?: GetApiContractProcessingWebBillingStateParamsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStateParamMany>>;
export declare const getGetApiContractProcessingWebBillingStateParamsQueryKey: (params?: GetApiContractProcessingWebBillingStateParamsParams) => readonly ["/api/contract-processing-web/billing/state_params", ...GetApiContractProcessingWebBillingStateParamsParams[]];
export declare const getGetApiContractProcessingWebBillingStateParamsQueryOptions: <TData = AxiosResponse<DataStateParamMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingStateParamsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStateParamMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataStateParamMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingStateParamsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingStateParams>>>;
export declare type GetApiContractProcessingWebBillingStateParamsQueryError = AxiosError<unknown>;
/**
 * @summary Search state params
 */
export declare const useGetApiContractProcessingWebBillingStateParams: <TData = AxiosResponse<DataStateParamMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingStateParamsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStateParamMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search transitions
 */
export declare const getApiContractProcessingWebBillingTransitions: (params?: GetApiContractProcessingWebBillingTransitionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTransitionMany>>;
export declare const getGetApiContractProcessingWebBillingTransitionsQueryKey: (params?: GetApiContractProcessingWebBillingTransitionsParams) => readonly ["/api/contract-processing-web/billing/transitions", ...GetApiContractProcessingWebBillingTransitionsParams[]];
export declare const getGetApiContractProcessingWebBillingTransitionsQueryOptions: <TData = AxiosResponse<DataTransitionMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingTransitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTransitionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTransitionMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingTransitionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingTransitions>>>;
export declare type GetApiContractProcessingWebBillingTransitionsQueryError = AxiosError<unknown>;
/**
 * @summary Search transitions
 */
export declare const useGetApiContractProcessingWebBillingTransitions: <TData = AxiosResponse<DataTransitionMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingTransitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTransitionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search checkpoints
 */
export declare const getApiContractProcessingWebBillingCheckpoints: (params?: GetApiContractProcessingWebBillingCheckpointsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCheckPointMany>>;
export declare const getGetApiContractProcessingWebBillingCheckpointsQueryKey: (params?: GetApiContractProcessingWebBillingCheckpointsParams) => readonly ["/api/contract-processing-web/billing/checkpoints", ...GetApiContractProcessingWebBillingCheckpointsParams[]];
export declare const getGetApiContractProcessingWebBillingCheckpointsQueryOptions: <TData = AxiosResponse<DataCheckPointMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingCheckpointsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCheckPointMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCheckPointMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingCheckpointsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingCheckpoints>>>;
export declare type GetApiContractProcessingWebBillingCheckpointsQueryError = AxiosError<unknown>;
/**
 * @summary Search checkpoints
 */
export declare const useGetApiContractProcessingWebBillingCheckpoints: <TData = AxiosResponse<DataCheckPointMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingCheckpointsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCheckPointMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get product doc templates
 */
export declare const getApiContractProcessingWebBillingProductDocTemplates: (params?: GetApiContractProcessingWebBillingProductDocTemplatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProductDocTemplateExcludeCreatedUpdated>>;
export declare const getGetApiContractProcessingWebBillingProductDocTemplatesQueryKey: (params?: GetApiContractProcessingWebBillingProductDocTemplatesParams) => readonly ["/api/contract-processing-web/billing/product_doc_templates", ...GetApiContractProcessingWebBillingProductDocTemplatesParams[]];
export declare const getGetApiContractProcessingWebBillingProductDocTemplatesQueryOptions: <TData = AxiosResponse<DataProductDocTemplateExcludeCreatedUpdated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductDocTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductDocTemplateExcludeCreatedUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataProductDocTemplateExcludeCreatedUpdated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductDocTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProductDocTemplates>>>;
export declare type GetApiContractProcessingWebBillingProductDocTemplatesQueryError = AxiosError<unknown>;
/**
 * @summary Get product doc templates
 */
export declare const useGetApiContractProcessingWebBillingProductDocTemplates: <TData = AxiosResponse<DataProductDocTemplateExcludeCreatedUpdated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductDocTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductDocTemplateExcludeCreatedUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get grouped product doc templates by doc template uuid
 */
export declare const getApiContractProcessingWebBillingProductDocTemplatesGrouped: (params?: GetApiContractProcessingWebBillingProductDocTemplatesGroupedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetGroupedProductDocTemplateRespMany>>;
export declare const getGetApiContractProcessingWebBillingProductDocTemplatesGroupedQueryKey: (params?: GetApiContractProcessingWebBillingProductDocTemplatesGroupedParams) => readonly ["/api/contract-processing-web/billing/product_doc_templates/grouped", ...GetApiContractProcessingWebBillingProductDocTemplatesGroupedParams[]];
export declare const getGetApiContractProcessingWebBillingProductDocTemplatesGroupedQueryOptions: <TData = AxiosResponse<DataGetGroupedProductDocTemplateRespMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductDocTemplatesGroupedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetGroupedProductDocTemplateRespMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetGroupedProductDocTemplateRespMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductDocTemplatesGroupedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProductDocTemplatesGrouped>>>;
export declare type GetApiContractProcessingWebBillingProductDocTemplatesGroupedQueryError = AxiosError<unknown>;
/**
 * @summary Get grouped product doc templates by doc template uuid
 */
export declare const useGetApiContractProcessingWebBillingProductDocTemplatesGrouped: <TData = AxiosResponse<DataGetGroupedProductDocTemplateRespMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductDocTemplatesGroupedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetGroupedProductDocTemplateRespMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Bind and detach product doc templates and products
 */
export declare const postApiContractProcessingWebBillingProductDocTemplatesBind: (bindDetachProductDocTemplateRequest: BindDetachProductDocTemplateRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebBillingProductDocTemplatesBindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: BindDetachProductDocTemplateRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: BindDetachProductDocTemplateRequest;
}, TContext>;
export declare type PostApiContractProcessingWebBillingProductDocTemplatesBindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingProductDocTemplatesBind>>>;
export declare type PostApiContractProcessingWebBillingProductDocTemplatesBindMutationBody = BindDetachProductDocTemplateRequest;
export declare type PostApiContractProcessingWebBillingProductDocTemplatesBindMutationError = AxiosError<unknown>;
/**
 * @summary Bind and detach product doc templates and products
 */
export declare const usePostApiContractProcessingWebBillingProductDocTemplatesBind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: BindDetachProductDocTemplateRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: BindDetachProductDocTemplateRequest;
}, TContext>;
/**
 * @summary Run simulation
 */
export declare const postApiContractProcessingWebBillingRunSimulation: (postApiContractProcessingWebBillingRunSimulationBody: PostApiContractProcessingWebBillingRunSimulationBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSimulationSchema>>;
export declare const getPostApiContractProcessingWebBillingRunSimulationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSimulationSchema, any>, TError, {
        data: PostApiContractProcessingWebBillingRunSimulationBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSimulationSchema, any>, TError, {
    data: PostApiContractProcessingWebBillingRunSimulationBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingRunSimulationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingRunSimulation>>>;
export declare type PostApiContractProcessingWebBillingRunSimulationMutationBody = PostApiContractProcessingWebBillingRunSimulationBody;
export declare type PostApiContractProcessingWebBillingRunSimulationMutationError = AxiosError<unknown>;
/**
 * @summary Run simulation
 */
export declare const usePostApiContractProcessingWebBillingRunSimulation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSimulationSchema, any>, TError, {
        data: PostApiContractProcessingWebBillingRunSimulationBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSimulationSchema, any>, TError, {
    data: PostApiContractProcessingWebBillingRunSimulationBody;
}, TContext>;
/**
 * @summary Create or update entities and run simulation
 */
export declare const postApiContractProcessingWebBillingRunSimulations: (postApiContractProcessingWebBillingRunSimulationsBody: PostApiContractProcessingWebBillingRunSimulationsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRunSimResponse>>;
export declare const getPostApiContractProcessingWebBillingRunSimulationsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRunSimResponse, any>, TError, {
        data: PostApiContractProcessingWebBillingRunSimulationsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRunSimResponse, any>, TError, {
    data: PostApiContractProcessingWebBillingRunSimulationsBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingRunSimulationsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingRunSimulations>>>;
export declare type PostApiContractProcessingWebBillingRunSimulationsMutationBody = PostApiContractProcessingWebBillingRunSimulationsBody;
export declare type PostApiContractProcessingWebBillingRunSimulationsMutationError = AxiosError<unknown>;
/**
 * @summary Create or update entities and run simulation
 */
export declare const usePostApiContractProcessingWebBillingRunSimulations: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRunSimResponse, any>, TError, {
        data: PostApiContractProcessingWebBillingRunSimulationsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRunSimResponse, any>, TError, {
    data: PostApiContractProcessingWebBillingRunSimulationsBody;
}, TContext>;
/**
 * @summary Search categories
 */
export declare const getApiContractProcessingWebBillingCategories: (params?: GetApiContractProcessingWebBillingCategoriesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCategoryExcludeArchived>>;
export declare const getGetApiContractProcessingWebBillingCategoriesQueryKey: (params?: GetApiContractProcessingWebBillingCategoriesParams) => readonly ["/api/contract-processing-web/billing/categories", ...GetApiContractProcessingWebBillingCategoriesParams[]];
export declare const getGetApiContractProcessingWebBillingCategoriesQueryOptions: <TData = AxiosResponse<DataCategoryExcludeArchived, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingCategoriesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCategoryExcludeArchived, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCategoryExcludeArchived, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingCategories>>>;
export declare type GetApiContractProcessingWebBillingCategoriesQueryError = AxiosError<unknown>;
/**
 * @summary Search categories
 */
export declare const useGetApiContractProcessingWebBillingCategories: <TData = AxiosResponse<DataCategoryExcludeArchived, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingCategoriesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCategoryExcludeArchived, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download services and related entities new
 */
export declare const getApiContractProcessingWebBillingServicesExport: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebBillingServicesExportQueryKey: () => readonly ["/api/contract-processing-web/billing/services/export"];
export declare const getGetApiContractProcessingWebBillingServicesExportQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingServicesExportQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingServicesExport>>>;
export declare type GetApiContractProcessingWebBillingServicesExportQueryError = AxiosError<unknown>;
/**
 * @summary Download services and related entities new
 */
export declare const useGetApiContractProcessingWebBillingServicesExport: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Upload services and related entities new
 */
export declare const postApiContractProcessingWebBillingServicesFromFile: (postApiContractProcessingWebBillingServicesFromFileBody: PostApiContractProcessingWebBillingServicesFromFileBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataServicesImportDiffSchema>>;
export declare const getPostApiContractProcessingWebBillingServicesFromFileMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataServicesImportDiffSchema, any>, TError, {
        data: PostApiContractProcessingWebBillingServicesFromFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataServicesImportDiffSchema, any>, TError, {
    data: PostApiContractProcessingWebBillingServicesFromFileBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingServicesFromFileMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingServicesFromFile>>>;
export declare type PostApiContractProcessingWebBillingServicesFromFileMutationBody = PostApiContractProcessingWebBillingServicesFromFileBody;
export declare type PostApiContractProcessingWebBillingServicesFromFileMutationError = AxiosError<unknown>;
/**
 * @summary Upload services and related entities new
 */
export declare const usePostApiContractProcessingWebBillingServicesFromFile: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataServicesImportDiffSchema, any>, TError, {
        data: PostApiContractProcessingWebBillingServicesFromFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataServicesImportDiffSchema, any>, TError, {
    data: PostApiContractProcessingWebBillingServicesFromFileBody;
}, TContext>;
/**
 * @summary Download product related entities by id
 */
export declare const getApiContractProcessingWebBillingProductExportExportFormatProductId: (exportFormat: "EXCEL_SIMPLE" | "JSON", productId: number, params?: GetApiContractProcessingWebBillingProductExportExportFormatProductIdParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebBillingProductExportExportFormatProductIdQueryKey: (exportFormat: "EXCEL_SIMPLE" | "JSON", productId: number, params?: GetApiContractProcessingWebBillingProductExportExportFormatProductIdParams) => readonly [`/api/contract-processing-web/billing/product_export/EXCEL_SIMPLE/${number}` | `/api/contract-processing-web/billing/product_export/JSON/${number}`, ...GetApiContractProcessingWebBillingProductExportExportFormatProductIdParams[]];
export declare const getGetApiContractProcessingWebBillingProductExportExportFormatProductIdQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(exportFormat: "EXCEL_SIMPLE" | "JSON", productId: number, params?: GetApiContractProcessingWebBillingProductExportExportFormatProductIdParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductExportExportFormatProductIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProductExportExportFormatProductId>>>;
export declare type GetApiContractProcessingWebBillingProductExportExportFormatProductIdQueryError = AxiosError<unknown>;
/**
 * @summary Download product related entities by id
 */
export declare const useGetApiContractProcessingWebBillingProductExportExportFormatProductId: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(exportFormat: "EXCEL_SIMPLE" | "JSON", productId: number, params?: GetApiContractProcessingWebBillingProductExportExportFormatProductIdParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Import product and related entities from file
 */
export declare const postApiContractProcessingWebBillingProductImportImportFormat: (importFormat: "EXCEL_SIMPLE" | "JSON", postApiContractProcessingWebBillingProductImportImportFormatBody: PostApiContractProcessingWebBillingProductImportImportFormatBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataImportProductResponse>>;
export declare const getPostApiContractProcessingWebBillingProductImportImportFormatMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
        importFormat: "EXCEL_SIMPLE" | "JSON";
        data: PostApiContractProcessingWebBillingProductImportImportFormatBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
    importFormat: "EXCEL_SIMPLE" | "JSON";
    data: PostApiContractProcessingWebBillingProductImportImportFormatBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingProductImportImportFormatMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingProductImportImportFormat>>>;
export declare type PostApiContractProcessingWebBillingProductImportImportFormatMutationBody = PostApiContractProcessingWebBillingProductImportImportFormatBody;
export declare type PostApiContractProcessingWebBillingProductImportImportFormatMutationError = AxiosError<unknown>;
/**
 * @summary Import product and related entities from file
 */
export declare const usePostApiContractProcessingWebBillingProductImportImportFormat: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
        importFormat: "EXCEL_SIMPLE" | "JSON";
        data: PostApiContractProcessingWebBillingProductImportImportFormatBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataImportProductResponse, any>, TError, {
    importFormat: "EXCEL_SIMPLE" | "JSON";
    data: PostApiContractProcessingWebBillingProductImportImportFormatBody;
}, TContext>;
/**
 * @summary Transfer product and related entities from current installation to another
 */
export declare const postApiContractProcessingWebBillingProductTransfer: (transferProductToAnotherInstallationBodySchema: TransferProductToAnotherInstallationBodySchema, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataImportProductResponse>>;
export declare const getPostApiContractProcessingWebBillingProductTransferMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
        data: TransferProductToAnotherInstallationBodySchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
    data: TransferProductToAnotherInstallationBodySchema;
}, TContext>;
export declare type PostApiContractProcessingWebBillingProductTransferMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingProductTransfer>>>;
export declare type PostApiContractProcessingWebBillingProductTransferMutationBody = TransferProductToAnotherInstallationBodySchema;
export declare type PostApiContractProcessingWebBillingProductTransferMutationError = AxiosError<unknown>;
/**
 * @summary Transfer product and related entities from current installation to another
 */
export declare const usePostApiContractProcessingWebBillingProductTransfer: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
        data: TransferProductToAnotherInstallationBodySchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataImportProductResponse, any>, TError, {
    data: TransferProductToAnotherInstallationBodySchema;
}, TContext>;
/**
 * @summary Download offers with extended meta by template
 */
export declare const getApiContractProcessingWebBillingOffersExtMetaExportProductId: (productId: number, params?: GetApiContractProcessingWebBillingOffersExtMetaExportProductIdParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebBillingOffersExtMetaExportProductIdQueryKey: (productId: number, params?: GetApiContractProcessingWebBillingOffersExtMetaExportProductIdParams) => readonly [`/api/contract-processing-web/billing/offers_ext_meta/export/${number}`, ...GetApiContractProcessingWebBillingOffersExtMetaExportProductIdParams[]];
export declare const getGetApiContractProcessingWebBillingOffersExtMetaExportProductIdQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(productId: number, params?: GetApiContractProcessingWebBillingOffersExtMetaExportProductIdParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingOffersExtMetaExportProductIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingOffersExtMetaExportProductId>>>;
export declare type GetApiContractProcessingWebBillingOffersExtMetaExportProductIdQueryError = AxiosError<unknown>;
/**
 * @summary Download offers with extended meta by template
 */
export declare const useGetApiContractProcessingWebBillingOffersExtMetaExportProductId: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(productId: number, params?: GetApiContractProcessingWebBillingOffersExtMetaExportProductIdParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Import offers with extended meta
 */
export declare const postApiContractProcessingWebBillingOffersExtMetaImportProductId: (productId: number, postApiContractProcessingWebBillingOffersExtMetaImportProductIdBody: PostApiContractProcessingWebBillingOffersExtMetaImportProductIdBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataImportOffersWithExtendedMetaResponse>>;
export declare const getPostApiContractProcessingWebBillingOffersExtMetaImportProductIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportOffersWithExtendedMetaResponse, any>, TError, {
        productId: number;
        data: PostApiContractProcessingWebBillingOffersExtMetaImportProductIdBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataImportOffersWithExtendedMetaResponse, any>, TError, {
    productId: number;
    data: PostApiContractProcessingWebBillingOffersExtMetaImportProductIdBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingOffersExtMetaImportProductIdMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingOffersExtMetaImportProductId>>>;
export declare type PostApiContractProcessingWebBillingOffersExtMetaImportProductIdMutationBody = PostApiContractProcessingWebBillingOffersExtMetaImportProductIdBody;
export declare type PostApiContractProcessingWebBillingOffersExtMetaImportProductIdMutationError = AxiosError<unknown>;
/**
 * @summary Import offers with extended meta
 */
export declare const usePostApiContractProcessingWebBillingOffersExtMetaImportProductId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportOffersWithExtendedMetaResponse, any>, TError, {
        productId: number;
        data: PostApiContractProcessingWebBillingOffersExtMetaImportProductIdBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataImportOffersWithExtendedMetaResponse, any>, TError, {
    productId: number;
    data: PostApiContractProcessingWebBillingOffersExtMetaImportProductIdBody;
}, TContext>;
/**
 * @summary Download offers and product metadata for simplified product creation
 */
export declare const getApiContractProcessingWebBillingProductExportSimplifiedProductId: (productId: number, params?: GetApiContractProcessingWebBillingProductExportSimplifiedProductIdParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebBillingProductExportSimplifiedProductIdQueryKey: (productId: number, params?: GetApiContractProcessingWebBillingProductExportSimplifiedProductIdParams) => readonly [`/api/contract-processing-web/billing/product/export/simplified/${number}`, ...GetApiContractProcessingWebBillingProductExportSimplifiedProductIdParams[]];
export declare const getGetApiContractProcessingWebBillingProductExportSimplifiedProductIdQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(productId: number, params?: GetApiContractProcessingWebBillingProductExportSimplifiedProductIdParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductExportSimplifiedProductIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProductExportSimplifiedProductId>>>;
export declare type GetApiContractProcessingWebBillingProductExportSimplifiedProductIdQueryError = AxiosError<unknown>;
/**
 * @summary Download offers and product metadata for simplified product creation
 */
export declare const useGetApiContractProcessingWebBillingProductExportSimplifiedProductId: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(productId: number, params?: GetApiContractProcessingWebBillingProductExportSimplifiedProductIdParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Upload offers and product metadata for simplified product creation
 */
export declare const postApiContractProcessingWebBillingProductImportSimplified: (postApiContractProcessingWebBillingProductImportSimplifiedBody: PostApiContractProcessingWebBillingProductImportSimplifiedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataImportProductResponse>>;
export declare const getPostApiContractProcessingWebBillingProductImportSimplifiedMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
        data: PostApiContractProcessingWebBillingProductImportSimplifiedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
    data: PostApiContractProcessingWebBillingProductImportSimplifiedBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingProductImportSimplifiedMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingProductImportSimplified>>>;
export declare type PostApiContractProcessingWebBillingProductImportSimplifiedMutationBody = PostApiContractProcessingWebBillingProductImportSimplifiedBody;
export declare type PostApiContractProcessingWebBillingProductImportSimplifiedMutationError = AxiosError<unknown>;
/**
 * @summary Upload offers and product metadata for simplified product creation
 */
export declare const usePostApiContractProcessingWebBillingProductImportSimplified: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportProductResponse, any>, TError, {
        data: PostApiContractProcessingWebBillingProductImportSimplifiedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataImportProductResponse, any>, TError, {
    data: PostApiContractProcessingWebBillingProductImportSimplifiedBody;
}, TContext>;
/**
 * @summary Create billing dictionary entities from file
 */
export declare const postApiContractProcessingWebBillingDictionaryEntitiesFromFile: (postApiContractProcessingWebBillingDictionaryEntitiesFromFileBody: PostApiContractProcessingWebBillingDictionaryEntitiesFromFileBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDictionariesImportDiffSchema>>;
export declare const getPostApiContractProcessingWebBillingDictionaryEntitiesFromFileMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDictionariesImportDiffSchema, any>, TError, {
        data: PostApiContractProcessingWebBillingDictionaryEntitiesFromFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDictionariesImportDiffSchema, any>, TError, {
    data: PostApiContractProcessingWebBillingDictionaryEntitiesFromFileBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingDictionaryEntitiesFromFileMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingDictionaryEntitiesFromFile>>>;
export declare type PostApiContractProcessingWebBillingDictionaryEntitiesFromFileMutationBody = PostApiContractProcessingWebBillingDictionaryEntitiesFromFileBody;
export declare type PostApiContractProcessingWebBillingDictionaryEntitiesFromFileMutationError = AxiosError<unknown>;
/**
 * @summary Create billing dictionary entities from file
 */
export declare const usePostApiContractProcessingWebBillingDictionaryEntitiesFromFile: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDictionariesImportDiffSchema, any>, TError, {
        data: PostApiContractProcessingWebBillingDictionaryEntitiesFromFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDictionariesImportDiffSchema, any>, TError, {
    data: PostApiContractProcessingWebBillingDictionaryEntitiesFromFileBody;
}, TContext>;
/**
 * @summary Download last dictionary file
 */
export declare const getApiContractProcessingWebBillingDictionaryEntitiesFilesLastDownload: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebBillingDictionaryEntitiesFilesLastDownloadQueryKey: () => readonly ["/api/contract-processing-web/billing/dictionary_entities/files/last/download"];
export declare const getGetApiContractProcessingWebBillingDictionaryEntitiesFilesLastDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingDictionaryEntitiesFilesLastDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingDictionaryEntitiesFilesLastDownload>>>;
export declare type GetApiContractProcessingWebBillingDictionaryEntitiesFilesLastDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download last dictionary file
 */
export declare const useGetApiContractProcessingWebBillingDictionaryEntitiesFilesLastDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download uploaded file by id
 */
export declare const getApiContractProcessingWebBillingFileUploadsIdDownload: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebBillingFileUploadsIdDownloadQueryKey: (id: number) => readonly [`/api/contract-processing-web/billing/file_uploads/${number}/download`];
export declare const getGetApiContractProcessingWebBillingFileUploadsIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingFileUploadsIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingFileUploadsIdDownload>>>;
export declare type GetApiContractProcessingWebBillingFileUploadsIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download uploaded file by id
 */
export declare const useGetApiContractProcessingWebBillingFileUploadsIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get list of file uploads
 */
export declare const getApiContractProcessingWebBillingFileUploads: (params: GetApiContractProcessingWebBillingFileUploadsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFileUploadManyPaginated>>;
export declare const getGetApiContractProcessingWebBillingFileUploadsQueryKey: (params: GetApiContractProcessingWebBillingFileUploadsParams) => readonly ["/api/contract-processing-web/billing/file_uploads", ...GetApiContractProcessingWebBillingFileUploadsParams[]];
export declare const getGetApiContractProcessingWebBillingFileUploadsQueryOptions: <TData = AxiosResponse<DataFileUploadManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebBillingFileUploadsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFileUploadManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFileUploadManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingFileUploadsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingFileUploads>>>;
export declare type GetApiContractProcessingWebBillingFileUploadsQueryError = AxiosError<unknown>;
/**
 * @summary Get list of file uploads
 */
export declare const useGetApiContractProcessingWebBillingFileUploads: <TData = AxiosResponse<DataFileUploadManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebBillingFileUploadsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFileUploadManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Regenerate codes for workflow or product dependent entities guided by code generation rules
 */
export declare const postApiContractProcessingWebBillingCodeRegeneration: (workflowProductCodeRegenerationSchema: WorkflowProductCodeRegenerationSchema, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCodeRegenerationDiffResult>>;
export declare const getPostApiContractProcessingWebBillingCodeRegenerationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCodeRegenerationDiffResult, any>, TError, {
        data: WorkflowProductCodeRegenerationSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCodeRegenerationDiffResult, any>, TError, {
    data: WorkflowProductCodeRegenerationSchema;
}, TContext>;
export declare type PostApiContractProcessingWebBillingCodeRegenerationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingCodeRegeneration>>>;
export declare type PostApiContractProcessingWebBillingCodeRegenerationMutationBody = WorkflowProductCodeRegenerationSchema;
export declare type PostApiContractProcessingWebBillingCodeRegenerationMutationError = AxiosError<unknown>;
/**
 * @summary Regenerate codes for workflow or product dependent entities guided by code generation rules
 */
export declare const usePostApiContractProcessingWebBillingCodeRegeneration: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCodeRegenerationDiffResult, any>, TError, {
        data: WorkflowProductCodeRegenerationSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCodeRegenerationDiffResult, any>, TError, {
    data: WorkflowProductCodeRegenerationSchema;
}, TContext>;
/**
 * @summary Get offers meta templates
 */
export declare const getApiContractProcessingWebBillingOffersMetaTemplates: (params?: GetApiContractProcessingWebBillingOffersMetaTemplatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOffersMetaTemplateMany>>;
export declare const getGetApiContractProcessingWebBillingOffersMetaTemplatesQueryKey: (params?: GetApiContractProcessingWebBillingOffersMetaTemplatesParams) => readonly ["/api/contract-processing-web/billing/offers_meta_templates", ...GetApiContractProcessingWebBillingOffersMetaTemplatesParams[]];
export declare const getGetApiContractProcessingWebBillingOffersMetaTemplatesQueryOptions: <TData = AxiosResponse<DataOffersMetaTemplateMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingOffersMetaTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOffersMetaTemplateMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataOffersMetaTemplateMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingOffersMetaTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingOffersMetaTemplates>>>;
export declare type GetApiContractProcessingWebBillingOffersMetaTemplatesQueryError = AxiosError<unknown>;
/**
 * @summary Get offers meta templates
 */
export declare const useGetApiContractProcessingWebBillingOffersMetaTemplates: <TData = AxiosResponse<DataOffersMetaTemplateMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingOffersMetaTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOffersMetaTemplateMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create offers meta template
 */
export declare const postApiContractProcessingWebBillingOffersMetaTemplates: (postApiContractProcessingWebBillingOffersMetaTemplatesBody: PostApiContractProcessingWebBillingOffersMetaTemplatesBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOffersMetaTemplate>>;
export declare const getPostApiContractProcessingWebBillingOffersMetaTemplatesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOffersMetaTemplate, any>, TError, {
        data: PostApiContractProcessingWebBillingOffersMetaTemplatesBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOffersMetaTemplate, any>, TError, {
    data: PostApiContractProcessingWebBillingOffersMetaTemplatesBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingOffersMetaTemplatesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingOffersMetaTemplates>>>;
export declare type PostApiContractProcessingWebBillingOffersMetaTemplatesMutationBody = PostApiContractProcessingWebBillingOffersMetaTemplatesBody;
export declare type PostApiContractProcessingWebBillingOffersMetaTemplatesMutationError = AxiosError<unknown>;
/**
 * @summary Create offers meta template
 */
export declare const usePostApiContractProcessingWebBillingOffersMetaTemplates: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOffersMetaTemplate, any>, TError, {
        data: PostApiContractProcessingWebBillingOffersMetaTemplatesBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOffersMetaTemplate, any>, TError, {
    data: PostApiContractProcessingWebBillingOffersMetaTemplatesBody;
}, TContext>;
/**
 * @summary Delete offers meta templates
 */
export declare const deleteApiContractProcessingWebBillingOffersMetaTemplates: (deleteOffersMetaTemplateFilters: DeleteOffersMetaTemplateFilters, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOffersMetaTemplateMany>>;
export declare const getDeleteApiContractProcessingWebBillingOffersMetaTemplatesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOffersMetaTemplateMany, any>, TError, {
        data: DeleteOffersMetaTemplateFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOffersMetaTemplateMany, any>, TError, {
    data: DeleteOffersMetaTemplateFilters;
}, TContext>;
export declare type DeleteApiContractProcessingWebBillingOffersMetaTemplatesMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContractProcessingWebBillingOffersMetaTemplates>>>;
export declare type DeleteApiContractProcessingWebBillingOffersMetaTemplatesMutationBody = DeleteOffersMetaTemplateFilters;
export declare type DeleteApiContractProcessingWebBillingOffersMetaTemplatesMutationError = AxiosError<unknown>;
/**
 * @summary Delete offers meta templates
 */
export declare const useDeleteApiContractProcessingWebBillingOffersMetaTemplates: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOffersMetaTemplateMany, any>, TError, {
        data: DeleteOffersMetaTemplateFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOffersMetaTemplateMany, any>, TError, {
    data: DeleteOffersMetaTemplateFilters;
}, TContext>;
/**
 * @summary Get product offers meta templates
 */
export declare const getApiContractProcessingWebBillingProductOffersMetaTemplates: (params?: GetApiContractProcessingWebBillingProductOffersMetaTemplatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProductOffersMetaTemplateMany>>;
export declare const getGetApiContractProcessingWebBillingProductOffersMetaTemplatesQueryKey: (params?: GetApiContractProcessingWebBillingProductOffersMetaTemplatesParams) => readonly ["/api/contract-processing-web/billing/product_offers_meta_templates", ...GetApiContractProcessingWebBillingProductOffersMetaTemplatesParams[]];
export declare const getGetApiContractProcessingWebBillingProductOffersMetaTemplatesQueryOptions: <TData = AxiosResponse<DataProductOffersMetaTemplateMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductOffersMetaTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductOffersMetaTemplateMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataProductOffersMetaTemplateMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductOffersMetaTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProductOffersMetaTemplates>>>;
export declare type GetApiContractProcessingWebBillingProductOffersMetaTemplatesQueryError = AxiosError<unknown>;
/**
 * @summary Get product offers meta templates
 */
export declare const useGetApiContractProcessingWebBillingProductOffersMetaTemplates: <TData = AxiosResponse<DataProductOffersMetaTemplateMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductOffersMetaTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductOffersMetaTemplateMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get grouped product offers meta templates by offers meta templates
 */
export declare const getApiContractProcessingWebBillingProductOffersMetaTemplatesGrouped: (params?: GetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetGroupedProductOffersMetaTemplateRespMany>>;
export declare const getGetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedQueryKey: (params?: GetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedParams) => readonly ["/api/contract-processing-web/billing/product_offers_meta_templates/grouped", ...GetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedParams[]];
export declare const getGetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedQueryOptions: <TData = AxiosResponse<DataGetGroupedProductOffersMetaTemplateRespMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetGroupedProductOffersMetaTemplateRespMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetGroupedProductOffersMetaTemplateRespMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProductOffersMetaTemplatesGrouped>>>;
export declare type GetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedQueryError = AxiosError<unknown>;
/**
 * @summary Get grouped product offers meta templates by offers meta templates
 */
export declare const useGetApiContractProcessingWebBillingProductOffersMetaTemplatesGrouped: <TData = AxiosResponse<DataGetGroupedProductOffersMetaTemplateRespMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductOffersMetaTemplatesGroupedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetGroupedProductOffersMetaTemplateRespMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Bind and detach offers meta templates to/from products
 */
export declare const postApiContractProcessingWebBillingProductOffersMetaTemplatesBindDetach: (bindDetachProductOffersMetaTemplateRequest: BindDetachProductOffersMetaTemplateRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebBillingProductOffersMetaTemplatesBindDetachMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: BindDetachProductOffersMetaTemplateRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: BindDetachProductOffersMetaTemplateRequest;
}, TContext>;
export declare type PostApiContractProcessingWebBillingProductOffersMetaTemplatesBindDetachMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingProductOffersMetaTemplatesBindDetach>>>;
export declare type PostApiContractProcessingWebBillingProductOffersMetaTemplatesBindDetachMutationBody = BindDetachProductOffersMetaTemplateRequest;
export declare type PostApiContractProcessingWebBillingProductOffersMetaTemplatesBindDetachMutationError = AxiosError<unknown>;
/**
 * @summary Bind and detach offers meta templates to/from products
 */
export declare const usePostApiContractProcessingWebBillingProductOffersMetaTemplatesBindDetach: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: BindDetachProductOffersMetaTemplateRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: BindDetachProductOffersMetaTemplateRequest;
}, TContext>;
/**
 * @summary Get product specifications
 */
export declare const getApiContractProcessingWebBillingProductSpecifications: (params?: GetApiContractProcessingWebBillingProductSpecificationsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProductSpecificationExtendedManyPaginated>>;
export declare const getGetApiContractProcessingWebBillingProductSpecificationsQueryKey: (params?: GetApiContractProcessingWebBillingProductSpecificationsParams) => readonly ["/api/contract-processing-web/billing/product_specifications", ...GetApiContractProcessingWebBillingProductSpecificationsParams[]];
export declare const getGetApiContractProcessingWebBillingProductSpecificationsQueryOptions: <TData = AxiosResponse<DataProductSpecificationExtendedManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductSpecificationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductSpecificationExtendedManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataProductSpecificationExtendedManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebBillingProductSpecificationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebBillingProductSpecifications>>>;
export declare type GetApiContractProcessingWebBillingProductSpecificationsQueryError = AxiosError<unknown>;
/**
 * @summary Get product specifications
 */
export declare const useGetApiContractProcessingWebBillingProductSpecifications: <TData = AxiosResponse<DataProductSpecificationExtendedManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebBillingProductSpecificationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProductSpecificationExtendedManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create product specification
 */
export declare const postApiContractProcessingWebBillingProductSpecifications: (postApiContractProcessingWebBillingProductSpecificationsBody: PostApiContractProcessingWebBillingProductSpecificationsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProductSpecification>>;
export declare const getPostApiContractProcessingWebBillingProductSpecificationsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProductSpecification, any>, TError, {
        data: PostApiContractProcessingWebBillingProductSpecificationsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataProductSpecification, any>, TError, {
    data: PostApiContractProcessingWebBillingProductSpecificationsBody;
}, TContext>;
export declare type PostApiContractProcessingWebBillingProductSpecificationsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebBillingProductSpecifications>>>;
export declare type PostApiContractProcessingWebBillingProductSpecificationsMutationBody = PostApiContractProcessingWebBillingProductSpecificationsBody;
export declare type PostApiContractProcessingWebBillingProductSpecificationsMutationError = AxiosError<unknown>;
/**
 * @summary Create product specification
 */
export declare const usePostApiContractProcessingWebBillingProductSpecifications: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProductSpecification, any>, TError, {
        data: PostApiContractProcessingWebBillingProductSpecificationsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataProductSpecification, any>, TError, {
    data: PostApiContractProcessingWebBillingProductSpecificationsBody;
}, TContext>;
/**
 * @summary Patch product specification
 */
export declare const patchApiContractProcessingWebBillingProductSpecificationsId: (id: number, patchApiContractProcessingWebBillingProductSpecificationsIdBody: PatchApiContractProcessingWebBillingProductSpecificationsIdBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProductSpecification>>;
export declare const getPatchApiContractProcessingWebBillingProductSpecificationsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProductSpecification, any>, TError, {
        id: number;
        data: PatchApiContractProcessingWebBillingProductSpecificationsIdBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataProductSpecification, any>, TError, {
    id: number;
    data: PatchApiContractProcessingWebBillingProductSpecificationsIdBody;
}, TContext>;
export declare type PatchApiContractProcessingWebBillingProductSpecificationsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiContractProcessingWebBillingProductSpecificationsId>>>;
export declare type PatchApiContractProcessingWebBillingProductSpecificationsIdMutationBody = PatchApiContractProcessingWebBillingProductSpecificationsIdBody;
export declare type PatchApiContractProcessingWebBillingProductSpecificationsIdMutationError = AxiosError<unknown>;
/**
 * @summary Patch product specification
 */
export declare const usePatchApiContractProcessingWebBillingProductSpecificationsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProductSpecification, any>, TError, {
        id: number;
        data: PatchApiContractProcessingWebBillingProductSpecificationsIdBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataProductSpecification, any>, TError, {
    id: number;
    data: PatchApiContractProcessingWebBillingProductSpecificationsIdBody;
}, TContext>;
/**
 * @summary Get calculators by filters
 */
export declare const getApiContractProcessingWebCalculators: (params?: GetApiContractProcessingWebCalculatorsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorManyPaginatedSummarized>>;
export declare const getGetApiContractProcessingWebCalculatorsQueryKey: (params?: GetApiContractProcessingWebCalculatorsParams) => readonly ["/api/contract-processing-web/calculators", ...GetApiContractProcessingWebCalculatorsParams[]];
export declare const getGetApiContractProcessingWebCalculatorsQueryOptions: <TData = AxiosResponse<DataCalculatorManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebCalculatorsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalculatorManyPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebCalculatorsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebCalculators>>>;
export declare type GetApiContractProcessingWebCalculatorsQueryError = AxiosError<unknown>;
/**
 * @summary Get calculators by filters
 */
export declare const useGetApiContractProcessingWebCalculators: <TData = AxiosResponse<DataCalculatorManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebCalculatorsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Assign calculators to clients
 */
export declare const postApiContractProcessingWebCalculators: (calculatorsClientBody: CalculatorsClientBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorClientsResponse>>;
export declare const getPostApiContractProcessingWebCalculatorsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
        data: CalculatorsClientBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
    data: CalculatorsClientBody;
}, TContext>;
export declare type PostApiContractProcessingWebCalculatorsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebCalculators>>>;
export declare type PostApiContractProcessingWebCalculatorsMutationBody = CalculatorsClientBody;
export declare type PostApiContractProcessingWebCalculatorsMutationError = AxiosError<unknown>;
/**
 * @summary Assign calculators to clients
 */
export declare const usePostApiContractProcessingWebCalculators: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
        data: CalculatorsClientBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
    data: CalculatorsClientBody;
}, TContext>;
/**
 * @summary Update client's calculators
 */
export declare const putApiContractProcessingWebCalculators: (calculatorsClientBody: CalculatorsClientBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorClientsResponse>>;
export declare const getPutApiContractProcessingWebCalculatorsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
        data: CalculatorsClientBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
    data: CalculatorsClientBody;
}, TContext>;
export declare type PutApiContractProcessingWebCalculatorsMutationResult = NonNullable<Awaited<ReturnType<typeof putApiContractProcessingWebCalculators>>>;
export declare type PutApiContractProcessingWebCalculatorsMutationBody = CalculatorsClientBody;
export declare type PutApiContractProcessingWebCalculatorsMutationError = AxiosError<unknown>;
/**
 * @summary Update client's calculators
 */
export declare const usePutApiContractProcessingWebCalculators: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
        data: CalculatorsClientBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
    data: CalculatorsClientBody;
}, TContext>;
/**
 * @summary Delete all client's calculators
 */
export declare const deleteApiContractProcessingWebCalculators: (calculatorsClientOnlyClientUid: CalculatorsClientOnlyClientUid, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorClientsResponse>>;
export declare const getDeleteApiContractProcessingWebCalculatorsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
        data: CalculatorsClientOnlyClientUid;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
    data: CalculatorsClientOnlyClientUid;
}, TContext>;
export declare type DeleteApiContractProcessingWebCalculatorsMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContractProcessingWebCalculators>>>;
export declare type DeleteApiContractProcessingWebCalculatorsMutationBody = CalculatorsClientOnlyClientUid;
export declare type DeleteApiContractProcessingWebCalculatorsMutationError = AxiosError<unknown>;
/**
 * @summary Delete all client's calculators
 */
export declare const useDeleteApiContractProcessingWebCalculators: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
        data: CalculatorsClientOnlyClientUid;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCalculatorClientsResponse, any>, TError, {
    data: CalculatorsClientOnlyClientUid;
}, TContext>;
/**
 * @summary Get clients by filters
 */
export declare const getApiContractProcessingWebCalculatorsClients: (params?: GetApiContractProcessingWebCalculatorsClientsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorClientsOnlyClientUidPaginated>>;
export declare const getGetApiContractProcessingWebCalculatorsClientsQueryKey: (params?: GetApiContractProcessingWebCalculatorsClientsParams) => readonly ["/api/contract-processing-web/calculators/clients", ...GetApiContractProcessingWebCalculatorsClientsParams[]];
export declare const getGetApiContractProcessingWebCalculatorsClientsQueryOptions: <TData = AxiosResponse<DataCalculatorClientsOnlyClientUidPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebCalculatorsClientsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorClientsOnlyClientUidPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalculatorClientsOnlyClientUidPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebCalculatorsClientsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebCalculatorsClients>>>;
export declare type GetApiContractProcessingWebCalculatorsClientsQueryError = AxiosError<unknown>;
/**
 * @summary Get clients by filters
 */
export declare const useGetApiContractProcessingWebCalculatorsClients: <TData = AxiosResponse<DataCalculatorClientsOnlyClientUidPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebCalculatorsClientsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorClientsOnlyClientUidPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get extended calculators by filters
 */
export declare const getApiContractProcessingWebCalculatorsExtended: (params?: GetApiContractProcessingWebCalculatorsExtendedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorExtendedMany>>;
export declare const getGetApiContractProcessingWebCalculatorsExtendedQueryKey: (params?: GetApiContractProcessingWebCalculatorsExtendedParams) => readonly ["/api/contract-processing-web/calculators/extended", ...GetApiContractProcessingWebCalculatorsExtendedParams[]];
export declare const getGetApiContractProcessingWebCalculatorsExtendedQueryOptions: <TData = AxiosResponse<DataCalculatorExtendedMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebCalculatorsExtendedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorExtendedMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalculatorExtendedMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebCalculatorsExtendedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebCalculatorsExtended>>>;
export declare type GetApiContractProcessingWebCalculatorsExtendedQueryError = AxiosError<unknown>;
/**
 * @summary Get extended calculators by filters
 */
export declare const useGetApiContractProcessingWebCalculatorsExtended: <TData = AxiosResponse<DataCalculatorExtendedMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebCalculatorsExtendedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorExtendedMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get offer services for calc
 */
export declare const getApiContractProcessingWebCalculatorsIdOfferServices: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalcOfferServicesSimplifiedCodeSchemaExcludeArchivedCalcIdCountryCodeCreatedIdServiceIdUpdated>>;
export declare const getGetApiContractProcessingWebCalculatorsIdOfferServicesQueryKey: (id: number) => readonly [`/api/contract-processing-web/calculators/${number}/offer_services`];
export declare const getGetApiContractProcessingWebCalculatorsIdOfferServicesQueryOptions: <TData = AxiosResponse<DataCalcOfferServicesSimplifiedCodeSchemaExcludeArchivedCalcIdCountryCodeCreatedIdServiceIdUpdated, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalcOfferServicesSimplifiedCodeSchemaExcludeArchivedCalcIdCountryCodeCreatedIdServiceIdUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalcOfferServicesSimplifiedCodeSchemaExcludeArchivedCalcIdCountryCodeCreatedIdServiceIdUpdated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebCalculatorsIdOfferServicesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebCalculatorsIdOfferServices>>>;
export declare type GetApiContractProcessingWebCalculatorsIdOfferServicesQueryError = AxiosError<unknown>;
/**
 * @summary Get offer services for calc
 */
export declare const useGetApiContractProcessingWebCalculatorsIdOfferServices: <TData = AxiosResponse<DataCalcOfferServicesSimplifiedCodeSchemaExcludeArchivedCalcIdCountryCodeCreatedIdServiceIdUpdated, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalcOfferServicesSimplifiedCodeSchemaExcludeArchivedCalcIdCountryCodeCreatedIdServiceIdUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get calculators by clients
 */
export declare const getApiContractProcessingWebCalculatorsByClients: (params?: GetApiContractProcessingWebCalculatorsByClientsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorClientsManyPaginated>>;
export declare const getGetApiContractProcessingWebCalculatorsByClientsQueryKey: (params?: GetApiContractProcessingWebCalculatorsByClientsParams) => readonly ["/api/contract-processing-web/calculators/by_clients", ...GetApiContractProcessingWebCalculatorsByClientsParams[]];
export declare const getGetApiContractProcessingWebCalculatorsByClientsQueryOptions: <TData = AxiosResponse<DataCalculatorClientsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebCalculatorsByClientsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorClientsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalculatorClientsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebCalculatorsByClientsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebCalculatorsByClients>>>;
export declare type GetApiContractProcessingWebCalculatorsByClientsQueryError = AxiosError<unknown>;
/**
 * @summary Get calculators by clients
 */
export declare const useGetApiContractProcessingWebCalculatorsByClients: <TData = AxiosResponse<DataCalculatorClientsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebCalculatorsByClientsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorClientsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get extended calculators by client_id
 */
export declare const getApiContractProcessingWebCalculatorsByClientClientUid: (clientUid: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorExtendedByClientMany>>;
export declare const getGetApiContractProcessingWebCalculatorsByClientClientUidQueryKey: (clientUid: string) => readonly [`/api/contract-processing-web/calculators/by_client/${string}`];
export declare const getGetApiContractProcessingWebCalculatorsByClientClientUidQueryOptions: <TData = AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError = AxiosError<unknown, any>>(clientUid: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebCalculatorsByClientClientUidQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebCalculatorsByClientClientUid>>>;
export declare type GetApiContractProcessingWebCalculatorsByClientClientUidQueryError = AxiosError<unknown>;
/**
 * @summary Get extended calculators by client_id
 */
export declare const useGetApiContractProcessingWebCalculatorsByClientClientUid: <TData = AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError = AxiosError<unknown, any>>(clientUid: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get offer with max amount for a given client
 */
export declare const getApiContractProcessingWebCalculatorsByClientClientUidOffersMax: (clientUid: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOffer>>;
export declare const getGetApiContractProcessingWebCalculatorsByClientClientUidOffersMaxQueryKey: (clientUid: string) => readonly [`/api/contract-processing-web/calculators/by_client/${string}/offers/max`];
export declare const getGetApiContractProcessingWebCalculatorsByClientClientUidOffersMaxQueryOptions: <TData = AxiosResponse<DataOffer, any>, TError = AxiosError<unknown, any>>(clientUid: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOffer, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataOffer, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebCalculatorsByClientClientUidOffersMaxQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebCalculatorsByClientClientUidOffersMax>>>;
export declare type GetApiContractProcessingWebCalculatorsByClientClientUidOffersMaxQueryError = AxiosError<unknown>;
/**
 * @summary Get offer with max amount for a given client
 */
export declare const useGetApiContractProcessingWebCalculatorsByClientClientUidOffersMax: <TData = AxiosResponse<DataOffer, any>, TError = AxiosError<unknown, any>>(clientUid: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOffer, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download calculator dictionary
 */
export declare const getApiContractProcessingWebCalculatorsDictionaryEntitiesExport: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebCalculatorsDictionaryEntitiesExportQueryKey: () => readonly ["/api/contract-processing-web/calculators/dictionary_entities/export"];
export declare const getGetApiContractProcessingWebCalculatorsDictionaryEntitiesExportQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebCalculatorsDictionaryEntitiesExportQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebCalculatorsDictionaryEntitiesExport>>>;
export declare type GetApiContractProcessingWebCalculatorsDictionaryEntitiesExportQueryError = AxiosError<unknown>;
/**
 * @summary Download calculator dictionary
 */
export declare const useGetApiContractProcessingWebCalculatorsDictionaryEntitiesExport: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Import calculators and related entities from file
 */
export declare const postApiContractProcessingWebCalculatorsDictionaryEntitiesFromFile: (postApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileBody: PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorImportDiffSchema>>;
export declare const getPostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorImportDiffSchema, any>, TError, {
        data: PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCalculatorImportDiffSchema, any>, TError, {
    data: PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileBody;
}, TContext>;
export declare type PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebCalculatorsDictionaryEntitiesFromFile>>>;
export declare type PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileMutationBody = PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileBody;
export declare type PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileMutationError = AxiosError<unknown>;
/**
 * @summary Import calculators and related entities from file
 */
export declare const usePostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFile: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorImportDiffSchema, any>, TError, {
        data: PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCalculatorImportDiffSchema, any>, TError, {
    data: PostApiContractProcessingWebCalculatorsDictionaryEntitiesFromFileBody;
}, TContext>;
/**
 * @summary Get strategies
 */
export declare const getApiContractProcessingWebStrategies: (params?: GetApiContractProcessingWebStrategiesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesSchemaMany>>;
export declare const getGetApiContractProcessingWebStrategiesQueryKey: (params?: GetApiContractProcessingWebStrategiesParams) => readonly ["/api/contract-processing-web/strategies", ...GetApiContractProcessingWebStrategiesParams[]];
export declare const getGetApiContractProcessingWebStrategiesQueryOptions: <TData = AxiosResponse<DataStrategiesSchemaMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebStrategiesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategiesSchemaMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataStrategiesSchemaMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebStrategiesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebStrategies>>>;
export declare type GetApiContractProcessingWebStrategiesQueryError = AxiosError<unknown>;
/**
 * @summary Get strategies
 */
export declare const useGetApiContractProcessingWebStrategies: <TData = AxiosResponse<DataStrategiesSchemaMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebStrategiesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategiesSchemaMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create strategy
 */
export declare const postApiContractProcessingWebStrategies: (strategiesSchemaExcludeArchivedCreatedIdUpdatedBody: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesSchema>>;
export declare const getPostApiContractProcessingWebStrategiesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesSchema, any>, TError, {
        data: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataStrategiesSchema, any>, TError, {
    data: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PostApiContractProcessingWebStrategiesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebStrategies>>>;
export declare type PostApiContractProcessingWebStrategiesMutationBody = StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
export declare type PostApiContractProcessingWebStrategiesMutationError = AxiosError<unknown>;
/**
 * @summary Create strategy
 */
export declare const usePostApiContractProcessingWebStrategies: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesSchema, any>, TError, {
        data: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataStrategiesSchema, any>, TError, {
    data: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Archive strategies
 */
export declare const deleteApiContractProcessingWebStrategies: (strategiesFiltersExcludeArchived: StrategiesFiltersExcludeArchived, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesSchemaMany>>;
export declare const getDeleteApiContractProcessingWebStrategiesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesSchemaMany, any>, TError, {
        data: StrategiesFiltersExcludeArchived;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataStrategiesSchemaMany, any>, TError, {
    data: StrategiesFiltersExcludeArchived;
}, TContext>;
export declare type DeleteApiContractProcessingWebStrategiesMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContractProcessingWebStrategies>>>;
export declare type DeleteApiContractProcessingWebStrategiesMutationBody = StrategiesFiltersExcludeArchived;
export declare type DeleteApiContractProcessingWebStrategiesMutationError = AxiosError<unknown>;
/**
 * @summary Archive strategies
 */
export declare const useDeleteApiContractProcessingWebStrategies: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesSchemaMany, any>, TError, {
        data: StrategiesFiltersExcludeArchived;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataStrategiesSchemaMany, any>, TError, {
    data: StrategiesFiltersExcludeArchived;
}, TContext>;
/**
 * @summary Get strategies paginated
 */
export declare const getApiContractProcessingWebStrategiesPaginated: (params?: GetApiContractProcessingWebStrategiesPaginatedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesSchemaManyPaginatedSummarized>>;
export declare const getGetApiContractProcessingWebStrategiesPaginatedQueryKey: (params?: GetApiContractProcessingWebStrategiesPaginatedParams) => readonly ["/api/contract-processing-web/strategies/paginated", ...GetApiContractProcessingWebStrategiesPaginatedParams[]];
export declare const getGetApiContractProcessingWebStrategiesPaginatedQueryOptions: <TData = AxiosResponse<DataStrategiesSchemaManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebStrategiesPaginatedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategiesSchemaManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataStrategiesSchemaManyPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebStrategiesPaginatedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebStrategiesPaginated>>>;
export declare type GetApiContractProcessingWebStrategiesPaginatedQueryError = AxiosError<unknown>;
/**
 * @summary Get strategies paginated
 */
export declare const useGetApiContractProcessingWebStrategiesPaginated: <TData = AxiosResponse<DataStrategiesSchemaManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebStrategiesPaginatedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategiesSchemaManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get strategies product stats
 */
export declare const getApiContractProcessingWebStrategiesProductStats: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategyProductStats>>;
export declare const getGetApiContractProcessingWebStrategiesProductStatsQueryKey: () => readonly ["/api/contract-processing-web/strategies/product_stats"];
export declare const getGetApiContractProcessingWebStrategiesProductStatsQueryOptions: <TData = AxiosResponse<DataStrategyProductStats, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategyProductStats, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataStrategyProductStats, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebStrategiesProductStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebStrategiesProductStats>>>;
export declare type GetApiContractProcessingWebStrategiesProductStatsQueryError = AxiosError<unknown>;
/**
 * @summary Get strategies product stats
 */
export declare const useGetApiContractProcessingWebStrategiesProductStats: <TData = AxiosResponse<DataStrategyProductStats, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategyProductStats, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get calculators strategies
 */
export declare const getApiContractProcessingWebStrategiesCalculators: (params?: GetApiContractProcessingWebStrategiesCalculatorsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesCalculatorsExtSchemaMany>>;
export declare const getGetApiContractProcessingWebStrategiesCalculatorsQueryKey: (params?: GetApiContractProcessingWebStrategiesCalculatorsParams) => readonly ["/api/contract-processing-web/strategies/calculators", ...GetApiContractProcessingWebStrategiesCalculatorsParams[]];
export declare const getGetApiContractProcessingWebStrategiesCalculatorsQueryOptions: <TData = AxiosResponse<DataStrategiesCalculatorsExtSchemaMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebStrategiesCalculatorsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategiesCalculatorsExtSchemaMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataStrategiesCalculatorsExtSchemaMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebStrategiesCalculatorsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebStrategiesCalculators>>>;
export declare type GetApiContractProcessingWebStrategiesCalculatorsQueryError = AxiosError<unknown>;
/**
 * @summary Get calculators strategies
 */
export declare const useGetApiContractProcessingWebStrategiesCalculators: <TData = AxiosResponse<DataStrategiesCalculatorsExtSchemaMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebStrategiesCalculatorsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategiesCalculatorsExtSchemaMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get paginated calculators strategies
 */
export declare const getApiContractProcessingWebStrategiesCalculatorsPaginated: (params?: GetApiContractProcessingWebStrategiesCalculatorsPaginatedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesCalculatorsExtSchemaManyPaginated>>;
export declare const getGetApiContractProcessingWebStrategiesCalculatorsPaginatedQueryKey: (params?: GetApiContractProcessingWebStrategiesCalculatorsPaginatedParams) => readonly ["/api/contract-processing-web/strategies/calculators/paginated", ...GetApiContractProcessingWebStrategiesCalculatorsPaginatedParams[]];
export declare const getGetApiContractProcessingWebStrategiesCalculatorsPaginatedQueryOptions: <TData = AxiosResponse<DataStrategiesCalculatorsExtSchemaManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebStrategiesCalculatorsPaginatedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategiesCalculatorsExtSchemaManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataStrategiesCalculatorsExtSchemaManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebStrategiesCalculatorsPaginatedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebStrategiesCalculatorsPaginated>>>;
export declare type GetApiContractProcessingWebStrategiesCalculatorsPaginatedQueryError = AxiosError<unknown>;
/**
 * @summary Get paginated calculators strategies
 */
export declare const useGetApiContractProcessingWebStrategiesCalculatorsPaginated: <TData = AxiosResponse<DataStrategiesCalculatorsExtSchemaManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebStrategiesCalculatorsPaginatedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataStrategiesCalculatorsExtSchemaManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Assign calculators to strategy
 */
export declare const postApiContractProcessingWebStrategiesCalculatorsBind: (assignCalcsToStrategy: AssignCalcsToStrategy, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesCalculatorsSchemaMany>>;
export declare const getPostApiContractProcessingWebStrategiesCalculatorsBindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesCalculatorsSchemaMany, any>, TError, {
        data: AssignCalcsToStrategy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataStrategiesCalculatorsSchemaMany, any>, TError, {
    data: AssignCalcsToStrategy;
}, TContext>;
export declare type PostApiContractProcessingWebStrategiesCalculatorsBindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebStrategiesCalculatorsBind>>>;
export declare type PostApiContractProcessingWebStrategiesCalculatorsBindMutationBody = AssignCalcsToStrategy;
export declare type PostApiContractProcessingWebStrategiesCalculatorsBindMutationError = AxiosError<unknown>;
/**
 * @summary Assign calculators to strategy
 */
export declare const usePostApiContractProcessingWebStrategiesCalculatorsBind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesCalculatorsSchemaMany, any>, TError, {
        data: AssignCalcsToStrategy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataStrategiesCalculatorsSchemaMany, any>, TError, {
    data: AssignCalcsToStrategy;
}, TContext>;
/**
 * @summary Unassign calculators from strategy
 */
export declare const postApiContractProcessingWebStrategiesCalculatorsUnbind: (unassignCalcsToStrategy: UnassignCalcsToStrategy, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesCalculatorsSchemaMany>>;
export declare const getPostApiContractProcessingWebStrategiesCalculatorsUnbindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesCalculatorsSchemaMany, any>, TError, {
        data: UnassignCalcsToStrategy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataStrategiesCalculatorsSchemaMany, any>, TError, {
    data: UnassignCalcsToStrategy;
}, TContext>;
export declare type PostApiContractProcessingWebStrategiesCalculatorsUnbindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebStrategiesCalculatorsUnbind>>>;
export declare type PostApiContractProcessingWebStrategiesCalculatorsUnbindMutationBody = UnassignCalcsToStrategy;
export declare type PostApiContractProcessingWebStrategiesCalculatorsUnbindMutationError = AxiosError<unknown>;
/**
 * @summary Unassign calculators from strategy
 */
export declare const usePostApiContractProcessingWebStrategiesCalculatorsUnbind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesCalculatorsSchemaMany, any>, TError, {
        data: UnassignCalcsToStrategy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataStrategiesCalculatorsSchemaMany, any>, TError, {
    data: UnassignCalcsToStrategy;
}, TContext>;
/**
 * @summary Find suitable calculator for client by strategy with limitations
 */
export declare const postApiContractProcessingWebStrategiesCalculatorsSuitable: (getSuitableCalculatorFromStrategy: GetSuitableCalculatorFromStrategy, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetSuitableCalculatorFromStrategyResponse>>;
export declare const getPostApiContractProcessingWebStrategiesCalculatorsSuitableMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetSuitableCalculatorFromStrategyResponse, any>, TError, {
        data: GetSuitableCalculatorFromStrategy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetSuitableCalculatorFromStrategyResponse, any>, TError, {
    data: GetSuitableCalculatorFromStrategy;
}, TContext>;
export declare type PostApiContractProcessingWebStrategiesCalculatorsSuitableMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebStrategiesCalculatorsSuitable>>>;
export declare type PostApiContractProcessingWebStrategiesCalculatorsSuitableMutationBody = GetSuitableCalculatorFromStrategy;
export declare type PostApiContractProcessingWebStrategiesCalculatorsSuitableMutationError = AxiosError<unknown>;
/**
 * @summary Find suitable calculator for client by strategy with limitations
 */
export declare const usePostApiContractProcessingWebStrategiesCalculatorsSuitable: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetSuitableCalculatorFromStrategyResponse, any>, TError, {
        data: GetSuitableCalculatorFromStrategy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetSuitableCalculatorFromStrategyResponse, any>, TError, {
    data: GetSuitableCalculatorFromStrategy;
}, TContext>;
/**
 * @summary Download strategy and calcs for simplified product creation
 */
export declare const getApiContractProcessingWebStrategiesExportSimplifiedStrategyId: (strategyId: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebStrategiesExportSimplifiedStrategyIdQueryKey: (strategyId: number) => readonly [`/api/contract-processing-web/strategies/export/simplified/${number}`];
export declare const getGetApiContractProcessingWebStrategiesExportSimplifiedStrategyIdQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(strategyId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebStrategiesExportSimplifiedStrategyIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebStrategiesExportSimplifiedStrategyId>>>;
export declare type GetApiContractProcessingWebStrategiesExportSimplifiedStrategyIdQueryError = AxiosError<unknown>;
/**
 * @summary Download strategy and calcs for simplified product creation
 */
export declare const useGetApiContractProcessingWebStrategiesExportSimplifiedStrategyId: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(strategyId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Import strategy and calcs for simplified product creation from excel file
 */
export declare const postApiContractProcessingWebStrategiesImportSimplified: (postApiContractProcessingWebStrategiesImportSimplifiedBody: PostApiContractProcessingWebStrategiesImportSimplifiedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSimplifiedStrategyImportDiffSchema>>;
export declare const getPostApiContractProcessingWebStrategiesImportSimplifiedMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSimplifiedStrategyImportDiffSchema, any>, TError, {
        data: PostApiContractProcessingWebStrategiesImportSimplifiedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSimplifiedStrategyImportDiffSchema, any>, TError, {
    data: PostApiContractProcessingWebStrategiesImportSimplifiedBody;
}, TContext>;
export declare type PostApiContractProcessingWebStrategiesImportSimplifiedMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebStrategiesImportSimplified>>>;
export declare type PostApiContractProcessingWebStrategiesImportSimplifiedMutationBody = PostApiContractProcessingWebStrategiesImportSimplifiedBody;
export declare type PostApiContractProcessingWebStrategiesImportSimplifiedMutationError = AxiosError<unknown>;
/**
 * @summary Import strategy and calcs for simplified product creation from excel file
 */
export declare const usePostApiContractProcessingWebStrategiesImportSimplified: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSimplifiedStrategyImportDiffSchema, any>, TError, {
        data: PostApiContractProcessingWebStrategiesImportSimplifiedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSimplifiedStrategyImportDiffSchema, any>, TError, {
    data: PostApiContractProcessingWebStrategiesImportSimplifiedBody;
}, TContext>;
/**
 * @summary Update strategy
 */
export declare const patchApiContractProcessingWebStrategiesId: (id: number, strategiesSchemaExcludeArchivedCreatedIdUpdatedBody: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStrategiesSchema>>;
export declare const getPatchApiContractProcessingWebStrategiesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesSchema, any>, TError, {
        id: number;
        data: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataStrategiesSchema, any>, TError, {
    id: number;
    data: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PatchApiContractProcessingWebStrategiesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiContractProcessingWebStrategiesId>>>;
export declare type PatchApiContractProcessingWebStrategiesIdMutationBody = StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
export declare type PatchApiContractProcessingWebStrategiesIdMutationError = AxiosError<unknown>;
/**
 * @summary Update strategy
 */
export declare const usePatchApiContractProcessingWebStrategiesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataStrategiesSchema, any>, TError, {
        id: number;
        data: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataStrategiesSchema, any>, TError, {
    id: number;
    data: StrategiesSchemaExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Get calculators extended info for current client
 */
export declare const getApiContractProcessingWebClientsCalculators: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorExtendedByClientMany>>;
export declare const getGetApiContractProcessingWebClientsCalculatorsQueryKey: () => readonly ["/api/contract-processing-web/clients/calculators"];
export declare const getGetApiContractProcessingWebClientsCalculatorsQueryOptions: <TData = AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsCalculatorsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsCalculators>>>;
export declare type GetApiContractProcessingWebClientsCalculatorsQueryError = AxiosError<unknown>;
/**
 * @summary Get calculators extended info for current client
 */
export declare const useGetApiContractProcessingWebClientsCalculators: <TData = AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorExtendedByClientMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get extended calculators by filters
 */
export declare const getApiContractProcessingWebClientsCalculatorsExtended: (params?: GetApiContractProcessingWebClientsCalculatorsExtendedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorExtendedMany>>;
export declare const getGetApiContractProcessingWebClientsCalculatorsExtendedQueryKey: (params?: GetApiContractProcessingWebClientsCalculatorsExtendedParams) => readonly ["/api/contract-processing-web/clients/calculators/extended", ...GetApiContractProcessingWebClientsCalculatorsExtendedParams[]];
export declare const getGetApiContractProcessingWebClientsCalculatorsExtendedQueryOptions: <TData = AxiosResponse<DataCalculatorExtendedMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebClientsCalculatorsExtendedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorExtendedMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalculatorExtendedMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsCalculatorsExtendedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsCalculatorsExtended>>>;
export declare type GetApiContractProcessingWebClientsCalculatorsExtendedQueryError = AxiosError<unknown>;
/**
 * @summary Get extended calculators by filters
 */
export declare const useGetApiContractProcessingWebClientsCalculatorsExtended: <TData = AxiosResponse<DataCalculatorExtendedMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebClientsCalculatorsExtendedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorExtendedMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get repeat limit on contract closing
 */
export declare const getApiContractProcessingWebClientsCalculatorsRepeatLimit: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetRepeatLimit>>;
export declare const getGetApiContractProcessingWebClientsCalculatorsRepeatLimitQueryKey: () => readonly ["/api/contract-processing-web/clients/calculators/repeat_limit"];
export declare const getGetApiContractProcessingWebClientsCalculatorsRepeatLimitQueryOptions: <TData = AxiosResponse<DataGetRepeatLimit, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetRepeatLimit, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetRepeatLimit, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsCalculatorsRepeatLimitQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsCalculatorsRepeatLimit>>>;
export declare type GetApiContractProcessingWebClientsCalculatorsRepeatLimitQueryError = AxiosError<unknown>;
/**
 * @summary Get repeat limit on contract closing
 */
export declare const useGetApiContractProcessingWebClientsCalculatorsRepeatLimit: <TData = AxiosResponse<DataGetRepeatLimit, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetRepeatLimit, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get all client services with documents
 */
export declare const getApiContractProcessingWebClientsServicesWithDocuments: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetContractServiceWithInternalDocsMany>>;
export declare const getGetApiContractProcessingWebClientsServicesWithDocumentsQueryKey: () => readonly ["/api/contract-processing-web/clients/services_with_documents"];
export declare const getGetApiContractProcessingWebClientsServicesWithDocumentsQueryOptions: <TData = AxiosResponse<DataGetContractServiceWithInternalDocsMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetContractServiceWithInternalDocsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetContractServiceWithInternalDocsMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsServicesWithDocumentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsServicesWithDocuments>>>;
export declare type GetApiContractProcessingWebClientsServicesWithDocumentsQueryError = AxiosError<unknown>;
/**
 * @summary Get all client services with documents
 */
export declare const useGetApiContractProcessingWebClientsServicesWithDocuments: <TData = AxiosResponse<DataGetContractServiceWithInternalDocsMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetContractServiceWithInternalDocsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get client contract services
 */
export declare const getApiContractProcessingWebClientsContractsIdServices: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetContractServiceMany>>;
export declare const getGetApiContractProcessingWebClientsContractsIdServicesQueryKey: (id: number) => readonly [`/api/contract-processing-web/clients/contracts/${number}/services`];
export declare const getGetApiContractProcessingWebClientsContractsIdServicesQueryOptions: <TData = AxiosResponse<DataGetContractServiceMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetContractServiceMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetContractServiceMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsContractsIdServicesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsContractsIdServices>>>;
export declare type GetApiContractProcessingWebClientsContractsIdServicesQueryError = AxiosError<unknown>;
/**
 * @summary Get client contract services
 */
export declare const useGetApiContractProcessingWebClientsContractsIdServices: <TData = AxiosResponse<DataGetContractServiceMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetContractServiceMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get client contracts
 */
export declare const getApiContractProcessingWebClientsContracts: (params?: GetApiContractProcessingWebClientsContractsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated>>;
export declare const getGetApiContractProcessingWebClientsContractsQueryKey: (params?: GetApiContractProcessingWebClientsContractsParams) => readonly ["/api/contract-processing-web/clients/contracts", ...GetApiContractProcessingWebClientsContractsParams[]];
export declare const getGetApiContractProcessingWebClientsContractsQueryOptions: <TData = AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebClientsContractsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsContractsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsContracts>>>;
export declare type GetApiContractProcessingWebClientsContractsQueryError = AxiosError<unknown>;
/**
 * @summary Get client contracts
 */
export declare const useGetApiContractProcessingWebClientsContracts: <TData = AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebClientsContractsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSearchContractsResponseExcludeBalanceTotalDebtPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract details
 */
export declare const getApiContractProcessingWebClientsContractsIdDetails: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt>>;
export declare const getGetApiContractProcessingWebClientsContractsIdDetailsQueryKey: (id: number) => readonly [`/api/contract-processing-web/clients/contracts/${number}/details`];
export declare const getGetApiContractProcessingWebClientsContractsIdDetailsQueryOptions: <TData = AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsContractsIdDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsContractsIdDetails>>>;
export declare type GetApiContractProcessingWebClientsContractsIdDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Get contract details
 */
export declare const useGetApiContractProcessingWebClientsContractsIdDetails: <TData = AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDetailsExcludeBalanceTotalDebt, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract loan history
 */
export declare const getApiContractProcessingWebClientsContractsIdLoanHistory: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractLoanHistory>>;
export declare const getGetApiContractProcessingWebClientsContractsIdLoanHistoryQueryKey: (id: number) => readonly [`/api/contract-processing-web/clients/contracts/${number}/loan_history`];
export declare const getGetApiContractProcessingWebClientsContractsIdLoanHistoryQueryOptions: <TData = AxiosResponse<DataContractLoanHistory, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractLoanHistory, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractLoanHistory, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsContractsIdLoanHistoryQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsContractsIdLoanHistory>>>;
export declare type GetApiContractProcessingWebClientsContractsIdLoanHistoryQueryError = AxiosError<unknown>;
/**
 * @summary Get contract loan history
 */
export declare const useGetApiContractProcessingWebClientsContractsIdLoanHistory: <TData = AxiosResponse<DataContractLoanHistory, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractLoanHistory, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get offer by contract
 */
export declare const getApiContractProcessingWebClientsContractsIdOffer: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullOffer>>;
export declare const getGetApiContractProcessingWebClientsContractsIdOfferQueryKey: (id: number) => readonly [`/api/contract-processing-web/clients/contracts/${number}/offer`];
export declare const getGetApiContractProcessingWebClientsContractsIdOfferQueryOptions: <TData = AxiosResponse<DataFullOffer, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullOffer, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFullOffer, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsContractsIdOfferQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsContractsIdOffer>>>;
export declare type GetApiContractProcessingWebClientsContractsIdOfferQueryError = AxiosError<unknown>;
/**
 * @summary Get offer by contract
 */
export declare const useGetApiContractProcessingWebClientsContractsIdOffer: <TData = AxiosResponse<DataFullOffer, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullOffer, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get limit transactions
 */
export declare const getApiContractProcessingWebClientsContractsIdLimitTransactions: (id: number, params?: GetApiContractProcessingWebClientsContractsIdLimitTransactionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdatedPaginatedSummarized>>;
export declare const getGetApiContractProcessingWebClientsContractsIdLimitTransactionsQueryKey: (id: number, params?: GetApiContractProcessingWebClientsContractsIdLimitTransactionsParams) => readonly [`/api/contract-processing-web/clients/contracts/${number}/limit_transactions`, ...GetApiContractProcessingWebClientsContractsIdLimitTransactionsParams[]];
export declare const getGetApiContractProcessingWebClientsContractsIdLimitTransactionsQueryOptions: <TData = AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdatedPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebClientsContractsIdLimitTransactionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdatedPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdatedPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsContractsIdLimitTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsContractsIdLimitTransactions>>>;
export declare type GetApiContractProcessingWebClientsContractsIdLimitTransactionsQueryError = AxiosError<unknown>;
/**
 * @summary Get limit transactions
 */
export declare const useGetApiContractProcessingWebClientsContractsIdLimitTransactions: <TData = AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdatedPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(id: number, params?: GetApiContractProcessingWebClientsContractsIdLimitTransactionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdatedPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create limit transaction
 */
export declare const postApiContractProcessingWebClientsContractsIdLimitTransactions: (id: number, createLimitTransactionClientRequest: CreateLimitTransactionClientRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLimitTransactionExcludeResponsibleUser>>;
export declare const getPostApiContractProcessingWebClientsContractsIdLimitTransactionsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransactionExcludeResponsibleUser, any>, TError, {
        id: number;
        data: CreateLimitTransactionClientRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLimitTransactionExcludeResponsibleUser, any>, TError, {
    id: number;
    data: CreateLimitTransactionClientRequest;
}, TContext>;
export declare type PostApiContractProcessingWebClientsContractsIdLimitTransactionsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebClientsContractsIdLimitTransactions>>>;
export declare type PostApiContractProcessingWebClientsContractsIdLimitTransactionsMutationBody = CreateLimitTransactionClientRequest;
export declare type PostApiContractProcessingWebClientsContractsIdLimitTransactionsMutationError = AxiosError<unknown>;
/**
 * @summary Create limit transaction
 */
export declare const usePostApiContractProcessingWebClientsContractsIdLimitTransactions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLimitTransactionExcludeResponsibleUser, any>, TError, {
        id: number;
        data: CreateLimitTransactionClientRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLimitTransactionExcludeResponsibleUser, any>, TError, {
    id: number;
    data: CreateLimitTransactionClientRequest;
}, TContext>;
/**
 * @summary Get limit transaction
 */
export declare const getApiContractProcessingWebClientsContractsIdLimitTransactionsLimitTrUid: (id: number, limitTrUid: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdated>>;
export declare const getGetApiContractProcessingWebClientsContractsIdLimitTransactionsLimitTrUidQueryKey: (id: number, limitTrUid: string) => readonly [`/api/contract-processing-web/clients/contracts/${number}/limit_transactions/${string}`];
export declare const getGetApiContractProcessingWebClientsContractsIdLimitTransactionsLimitTrUidQueryOptions: <TData = AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdated, any>, TError = AxiosError<unknown, any>>(id: number, limitTrUid: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsContractsIdLimitTransactionsLimitTrUidQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsContractsIdLimitTransactionsLimitTrUid>>>;
export declare type GetApiContractProcessingWebClientsContractsIdLimitTransactionsLimitTrUidQueryError = AxiosError<unknown>;
/**
 * @summary Get limit transaction
 */
export declare const useGetApiContractProcessingWebClientsContractsIdLimitTransactionsLimitTrUid: <TData = AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdated, any>, TError = AxiosError<unknown, any>>(id: number, limitTrUid: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetLimitTransactionExcludeEventIdResponsibleUserTotalUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get client contract prolongations
 */
export declare const getApiContractProcessingWebClientsContractsIdProlongations: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetProlongationMany>>;
export declare const getGetApiContractProcessingWebClientsContractsIdProlongationsQueryKey: (id: number) => readonly [`/api/contract-processing-web/clients/contracts/${number}/prolongations`];
export declare const getGetApiContractProcessingWebClientsContractsIdProlongationsQueryOptions: <TData = AxiosResponse<DataGetProlongationMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetProlongationMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetProlongationMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsContractsIdProlongationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsContractsIdProlongations>>>;
export declare type GetApiContractProcessingWebClientsContractsIdProlongationsQueryError = AxiosError<unknown>;
/**
 * @summary Get client contract prolongations
 */
export declare const useGetApiContractProcessingWebClientsContractsIdProlongations: <TData = AxiosResponse<DataGetProlongationMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetProlongationMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Select prolongation
 */
export declare const postApiContractProcessingWebClientsContractsIdProlongationsSelect: (id: number, selectProlongationRequestBody: SelectProlongationRequestBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetProlongation>>;
export declare const getPostApiContractProcessingWebClientsContractsIdProlongationsSelectMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
        id: number;
        data: SelectProlongationRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
    id: number;
    data: SelectProlongationRequestBody;
}, TContext>;
export declare type PostApiContractProcessingWebClientsContractsIdProlongationsSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebClientsContractsIdProlongationsSelect>>>;
export declare type PostApiContractProcessingWebClientsContractsIdProlongationsSelectMutationBody = SelectProlongationRequestBody;
export declare type PostApiContractProcessingWebClientsContractsIdProlongationsSelectMutationError = AxiosError<unknown>;
/**
 * @summary Select prolongation
 */
export declare const usePostApiContractProcessingWebClientsContractsIdProlongationsSelect: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
        id: number;
        data: SelectProlongationRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetProlongation, any>, TError, {
    id: number;
    data: SelectProlongationRequestBody;
}, TContext>;
/**
 * @summary Pre select prolongation
 */
export declare const postApiContractProcessingWebClientsContractsIdProlongationsPreSelect: (id: number, selectProlongationRequestOnlyIndexBody: SelectProlongationRequestOnlyIndexBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetProlongation>>;
export declare const getPostApiContractProcessingWebClientsContractsIdProlongationsPreSelectMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
        id: number;
        data: SelectProlongationRequestOnlyIndexBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
    id: number;
    data: SelectProlongationRequestOnlyIndexBody;
}, TContext>;
export declare type PostApiContractProcessingWebClientsContractsIdProlongationsPreSelectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebClientsContractsIdProlongationsPreSelect>>>;
export declare type PostApiContractProcessingWebClientsContractsIdProlongationsPreSelectMutationBody = SelectProlongationRequestOnlyIndexBody;
export declare type PostApiContractProcessingWebClientsContractsIdProlongationsPreSelectMutationError = AxiosError<unknown>;
/**
 * @summary Pre select prolongation
 */
export declare const usePostApiContractProcessingWebClientsContractsIdProlongationsPreSelect: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetProlongation, any>, TError, {
        id: number;
        data: SelectProlongationRequestOnlyIndexBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetProlongation, any>, TError, {
    id: number;
    data: SelectProlongationRequestOnlyIndexBody;
}, TContext>;
/**
 * @summary Unselect prolongation
 */
export declare const postApiContractProcessingWebClientsContractsIdProlongationsUnselect: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebClientsContractsIdProlongationsUnselectMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
export declare type PostApiContractProcessingWebClientsContractsIdProlongationsUnselectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebClientsContractsIdProlongationsUnselect>>>;
export declare type PostApiContractProcessingWebClientsContractsIdProlongationsUnselectMutationError = AxiosError<unknown>;
/**
 * @summary Unselect prolongation
 */
export declare const usePostApiContractProcessingWebClientsContractsIdProlongationsUnselect: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get contract details
 */
export declare const getApiContractProcessingWebExternalClientsClientUidContractsIdDetails: (clientUid: string, id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractDetailsOnlyAmountToPayClientUidDpdIdPaydayPublicStateName>>;
export declare const getGetApiContractProcessingWebExternalClientsClientUidContractsIdDetailsQueryKey: (clientUid: string, id: number) => readonly [`/api/contract-processing-web/external/clients/${string}/contracts/${number}/details`];
export declare const getGetApiContractProcessingWebExternalClientsClientUidContractsIdDetailsQueryOptions: <TData = AxiosResponse<DataContractDetailsOnlyAmountToPayClientUidDpdIdPaydayPublicStateName, any>, TError = AxiosError<unknown, any>>(clientUid: string, id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDetailsOnlyAmountToPayClientUidDpdIdPaydayPublicStateName, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractDetailsOnlyAmountToPayClientUidDpdIdPaydayPublicStateName, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebExternalClientsClientUidContractsIdDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebExternalClientsClientUidContractsIdDetails>>>;
export declare type GetApiContractProcessingWebExternalClientsClientUidContractsIdDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Get contract details
 */
export declare const useGetApiContractProcessingWebExternalClientsClientUidContractsIdDetails: <TData = AxiosResponse<DataContractDetailsOnlyAmountToPayClientUidDpdIdPaydayPublicStateName, any>, TError = AxiosError<unknown, any>>(clientUid: string, id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDetailsOnlyAmountToPayClientUidDpdIdPaydayPublicStateName, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get sim scenarios groups
 */
export declare const getApiContractProcessingWebSimulationsGroups: (params?: GetApiContractProcessingWebSimulationsGroupsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenariosGroupMany>>;
export declare const getGetApiContractProcessingWebSimulationsGroupsQueryKey: (params?: GetApiContractProcessingWebSimulationsGroupsParams) => readonly ["/api/contract-processing-web/simulations/groups", ...GetApiContractProcessingWebSimulationsGroupsParams[]];
export declare const getGetApiContractProcessingWebSimulationsGroupsQueryOptions: <TData = AxiosResponse<DataScenariosGroupMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebSimulationsGroupsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataScenariosGroupMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataScenariosGroupMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebSimulationsGroupsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebSimulationsGroups>>>;
export declare type GetApiContractProcessingWebSimulationsGroupsQueryError = AxiosError<unknown>;
/**
 * @summary Get sim scenarios groups
 */
export declare const useGetApiContractProcessingWebSimulationsGroups: <TData = AxiosResponse<DataScenariosGroupMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebSimulationsGroupsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataScenariosGroupMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create sim scenarios group
 */
export declare const postApiContractProcessingWebSimulationsGroups: (scenariosGroupExcludeArchivedCreatedIdUpdated: ScenariosGroupExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenariosGroup>>;
export declare const getPostApiContractProcessingWebSimulationsGroupsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenariosGroup, any>, TError, {
        data: ScenariosGroupExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataScenariosGroup, any>, TError, {
    data: ScenariosGroupExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiContractProcessingWebSimulationsGroupsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebSimulationsGroups>>>;
export declare type PostApiContractProcessingWebSimulationsGroupsMutationBody = ScenariosGroupExcludeArchivedCreatedIdUpdated;
export declare type PostApiContractProcessingWebSimulationsGroupsMutationError = AxiosError<unknown>;
/**
 * @summary Create sim scenarios group
 */
export declare const usePostApiContractProcessingWebSimulationsGroups: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenariosGroup, any>, TError, {
        data: ScenariosGroupExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataScenariosGroup, any>, TError, {
    data: ScenariosGroupExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Delete(archive) scenario groups
 */
export declare const deleteApiContractProcessingWebSimulationsGroups: (defaultScenariosGroupsFilters: DefaultScenariosGroupsFilters, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenariosGroupMany>>;
export declare const getDeleteApiContractProcessingWebSimulationsGroupsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenariosGroupMany, any>, TError, {
        data: DefaultScenariosGroupsFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataScenariosGroupMany, any>, TError, {
    data: DefaultScenariosGroupsFilters;
}, TContext>;
export declare type DeleteApiContractProcessingWebSimulationsGroupsMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContractProcessingWebSimulationsGroups>>>;
export declare type DeleteApiContractProcessingWebSimulationsGroupsMutationBody = DefaultScenariosGroupsFilters;
export declare type DeleteApiContractProcessingWebSimulationsGroupsMutationError = AxiosError<unknown>;
/**
 * @summary Delete(archive) scenario groups
 */
export declare const useDeleteApiContractProcessingWebSimulationsGroups: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenariosGroupMany, any>, TError, {
        data: DefaultScenariosGroupsFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataScenariosGroupMany, any>, TError, {
    data: DefaultScenariosGroupsFilters;
}, TContext>;
/**
 * @summary Update sim scenarios group
 */
export declare const patchApiContractProcessingWebSimulationsGroupsGroupId: (groupId: number, scenariosGroupExcludeArchivedCountryCodeCreatedIdUpdated: ScenariosGroupExcludeArchivedCountryCodeCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenariosGroup>>;
export declare const getPatchApiContractProcessingWebSimulationsGroupsGroupIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenariosGroup, any>, TError, {
        groupId: number;
        data: ScenariosGroupExcludeArchivedCountryCodeCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataScenariosGroup, any>, TError, {
    groupId: number;
    data: ScenariosGroupExcludeArchivedCountryCodeCreatedIdUpdated;
}, TContext>;
export declare type PatchApiContractProcessingWebSimulationsGroupsGroupIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiContractProcessingWebSimulationsGroupsGroupId>>>;
export declare type PatchApiContractProcessingWebSimulationsGroupsGroupIdMutationBody = ScenariosGroupExcludeArchivedCountryCodeCreatedIdUpdated;
export declare type PatchApiContractProcessingWebSimulationsGroupsGroupIdMutationError = AxiosError<unknown>;
/**
 * @summary Update sim scenarios group
 */
export declare const usePatchApiContractProcessingWebSimulationsGroupsGroupId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenariosGroup, any>, TError, {
        groupId: number;
        data: ScenariosGroupExcludeArchivedCountryCodeCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataScenariosGroup, any>, TError, {
    groupId: number;
    data: ScenariosGroupExcludeArchivedCountryCodeCreatedIdUpdated;
}, TContext>;
/**
 * @summary Download archive with sim scenarios (maybe variables) in group
 */
export declare const getApiContractProcessingWebSimulationsGroupsGroupIdDownloadRelated: (groupId: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiContractProcessingWebSimulationsGroupsGroupIdDownloadRelatedQueryKey: (groupId: number) => readonly [`/api/contract-processing-web/simulations/groups/${number}/download_related`];
export declare const getGetApiContractProcessingWebSimulationsGroupsGroupIdDownloadRelatedQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(groupId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebSimulationsGroupsGroupIdDownloadRelatedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebSimulationsGroupsGroupIdDownloadRelated>>>;
export declare type GetApiContractProcessingWebSimulationsGroupsGroupIdDownloadRelatedQueryError = AxiosError<unknown>;
/**
 * @summary Download archive with sim scenarios (maybe variables) in group
 */
export declare const useGetApiContractProcessingWebSimulationsGroupsGroupIdDownloadRelated: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(groupId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get sim scenarios models
 */
export declare const getApiContractProcessingWebSimulationsScenarios: (params?: GetApiContractProcessingWebSimulationsScenariosParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenarioFileMany>>;
export declare const getGetApiContractProcessingWebSimulationsScenariosQueryKey: (params?: GetApiContractProcessingWebSimulationsScenariosParams) => readonly ["/api/contract-processing-web/simulations/scenarios", ...GetApiContractProcessingWebSimulationsScenariosParams[]];
export declare const getGetApiContractProcessingWebSimulationsScenariosQueryOptions: <TData = AxiosResponse<DataScenarioFileMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebSimulationsScenariosParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebSimulationsScenariosQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebSimulationsScenarios>>>;
export declare type GetApiContractProcessingWebSimulationsScenariosQueryError = AxiosError<unknown>;
/**
 * @summary Get sim scenarios models
 */
export declare const useGetApiContractProcessingWebSimulationsScenarios: <TData = AxiosResponse<DataScenarioFileMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebSimulationsScenariosParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Upload and bind simulation to group
 */
export declare const postApiContractProcessingWebSimulationsScenarios: (postApiContractProcessingWebSimulationsScenariosBody: PostApiContractProcessingWebSimulationsScenariosBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenarioFileMany>>;
export declare const getPostApiContractProcessingWebSimulationsScenariosMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenarioFileMany, any>, TError, {
        data: PostApiContractProcessingWebSimulationsScenariosBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataScenarioFileMany, any>, TError, {
    data: PostApiContractProcessingWebSimulationsScenariosBody;
}, TContext>;
export declare type PostApiContractProcessingWebSimulationsScenariosMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebSimulationsScenarios>>>;
export declare type PostApiContractProcessingWebSimulationsScenariosMutationBody = PostApiContractProcessingWebSimulationsScenariosBody;
export declare type PostApiContractProcessingWebSimulationsScenariosMutationError = AxiosError<unknown>;
/**
 * @summary Upload and bind simulation to group
 */
export declare const usePostApiContractProcessingWebSimulationsScenarios: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenarioFileMany, any>, TError, {
        data: PostApiContractProcessingWebSimulationsScenariosBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataScenarioFileMany, any>, TError, {
    data: PostApiContractProcessingWebSimulationsScenariosBody;
}, TContext>;
/**
 * @summary Delete(archive) simulations scenarios and connections
 */
export declare const deleteApiContractProcessingWebSimulationsScenarios: (defaultSimScenariosFilters: DefaultSimScenariosFilters, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenarioFileMany>>;
export declare const getDeleteApiContractProcessingWebSimulationsScenariosMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenarioFileMany, any>, TError, {
        data: DefaultSimScenariosFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataScenarioFileMany, any>, TError, {
    data: DefaultSimScenariosFilters;
}, TContext>;
export declare type DeleteApiContractProcessingWebSimulationsScenariosMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContractProcessingWebSimulationsScenarios>>>;
export declare type DeleteApiContractProcessingWebSimulationsScenariosMutationBody = DefaultSimScenariosFilters;
export declare type DeleteApiContractProcessingWebSimulationsScenariosMutationError = AxiosError<unknown>;
/**
 * @summary Delete(archive) simulations scenarios and connections
 */
export declare const useDeleteApiContractProcessingWebSimulationsScenarios: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataScenarioFileMany, any>, TError, {
        data: DefaultSimScenariosFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataScenarioFileMany, any>, TError, {
    data: DefaultSimScenariosFilters;
}, TContext>;
/**
 * @summary Download sim scenario file from s3
 */
export declare const getApiContractProcessingWebSimulationsScenariosScenarioIdDownload: (scenarioId: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenarioFileMany>>;
export declare const getGetApiContractProcessingWebSimulationsScenariosScenarioIdDownloadQueryKey: (scenarioId: number) => readonly [`/api/contract-processing-web/simulations/scenarios/${number}/download`];
export declare const getGetApiContractProcessingWebSimulationsScenariosScenarioIdDownloadQueryOptions: <TData = AxiosResponse<DataScenarioFileMany, any>, TError = AxiosError<unknown, any>>(scenarioId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebSimulationsScenariosScenarioIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebSimulationsScenariosScenarioIdDownload>>>;
export declare type GetApiContractProcessingWebSimulationsScenariosScenarioIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download sim scenario file from s3
 */
export declare const useGetApiContractProcessingWebSimulationsScenariosScenarioIdDownload: <TData = AxiosResponse<DataScenarioFileMany, any>, TError = AxiosError<unknown, any>>(scenarioId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get all sim variables
 */
export declare const getApiContractProcessingWebSimulationsVariables: (params?: GetApiContractProcessingWebSimulationsVariablesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataVariablesFileMany>>;
export declare const getGetApiContractProcessingWebSimulationsVariablesQueryKey: (params?: GetApiContractProcessingWebSimulationsVariablesParams) => readonly ["/api/contract-processing-web/simulations/variables", ...GetApiContractProcessingWebSimulationsVariablesParams[]];
export declare const getGetApiContractProcessingWebSimulationsVariablesQueryOptions: <TData = AxiosResponse<DataVariablesFileMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebSimulationsVariablesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataVariablesFileMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataVariablesFileMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebSimulationsVariablesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebSimulationsVariables>>>;
export declare type GetApiContractProcessingWebSimulationsVariablesQueryError = AxiosError<unknown>;
/**
 * @summary Get all sim variables
 */
export declare const useGetApiContractProcessingWebSimulationsVariables: <TData = AxiosResponse<DataVariablesFileMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebSimulationsVariablesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataVariablesFileMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Upload variables to s3
 */
export declare const postApiContractProcessingWebSimulationsVariables: (postApiContractProcessingWebSimulationsVariablesBody: PostApiContractProcessingWebSimulationsVariablesBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataVariablesFile>>;
export declare const getPostApiContractProcessingWebSimulationsVariablesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataVariablesFile, any>, TError, {
        data: PostApiContractProcessingWebSimulationsVariablesBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataVariablesFile, any>, TError, {
    data: PostApiContractProcessingWebSimulationsVariablesBody;
}, TContext>;
export declare type PostApiContractProcessingWebSimulationsVariablesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebSimulationsVariables>>>;
export declare type PostApiContractProcessingWebSimulationsVariablesMutationBody = PostApiContractProcessingWebSimulationsVariablesBody;
export declare type PostApiContractProcessingWebSimulationsVariablesMutationError = AxiosError<unknown>;
/**
 * @summary Upload variables to s3
 */
export declare const usePostApiContractProcessingWebSimulationsVariables: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataVariablesFile, any>, TError, {
        data: PostApiContractProcessingWebSimulationsVariablesBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataVariablesFile, any>, TError, {
    data: PostApiContractProcessingWebSimulationsVariablesBody;
}, TContext>;
/**
 * @summary Delete variables and connections with variables
 */
export declare const deleteApiContractProcessingWebSimulationsVariables: (defaultVariablesFiltersBody: DefaultVariablesFiltersBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataVariablesFileMany>>;
export declare const getDeleteApiContractProcessingWebSimulationsVariablesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataVariablesFileMany, any>, TError, {
        data: DefaultVariablesFiltersBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataVariablesFileMany, any>, TError, {
    data: DefaultVariablesFiltersBody;
}, TContext>;
export declare type DeleteApiContractProcessingWebSimulationsVariablesMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiContractProcessingWebSimulationsVariables>>>;
export declare type DeleteApiContractProcessingWebSimulationsVariablesMutationBody = DefaultVariablesFiltersBody;
export declare type DeleteApiContractProcessingWebSimulationsVariablesMutationError = AxiosError<unknown>;
/**
 * @summary Delete variables and connections with variables
 */
export declare const useDeleteApiContractProcessingWebSimulationsVariables: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataVariablesFileMany, any>, TError, {
        data: DefaultVariablesFiltersBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataVariablesFileMany, any>, TError, {
    data: DefaultVariablesFiltersBody;
}, TContext>;
/**
 * @summary Download variables file from s3
 */
export declare const getApiContractProcessingWebSimulationsVariablesVariablesIdDownload: (variablesId: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataScenarioFileMany>>;
export declare const getGetApiContractProcessingWebSimulationsVariablesVariablesIdDownloadQueryKey: (variablesId: number) => readonly [`/api/contract-processing-web/simulations/variables/${number}/download`];
export declare const getGetApiContractProcessingWebSimulationsVariablesVariablesIdDownloadQueryOptions: <TData = AxiosResponse<DataScenarioFileMany, any>, TError = AxiosError<unknown, any>>(variablesId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebSimulationsVariablesVariablesIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebSimulationsVariablesVariablesIdDownload>>>;
export declare type GetApiContractProcessingWebSimulationsVariablesVariablesIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download variables file from s3
 */
export declare const useGetApiContractProcessingWebSimulationsVariablesVariablesIdDownload: <TData = AxiosResponse<DataScenarioFileMany, any>, TError = AxiosError<unknown, any>>(variablesId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataScenarioFileMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Bind variables to scenarios
 */
export declare const postApiContractProcessingWebSimulationsVariablesBind: (bindVariablesToGroup: BindVariablesToGroup, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataVariablesFile>>;
export declare const getPostApiContractProcessingWebSimulationsVariablesBindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataVariablesFile, any>, TError, {
        data: BindVariablesToGroup;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataVariablesFile, any>, TError, {
    data: BindVariablesToGroup;
}, TContext>;
export declare type PostApiContractProcessingWebSimulationsVariablesBindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebSimulationsVariablesBind>>>;
export declare type PostApiContractProcessingWebSimulationsVariablesBindMutationBody = BindVariablesToGroup;
export declare type PostApiContractProcessingWebSimulationsVariablesBindMutationError = AxiosError<unknown>;
/**
 * @summary Bind variables to scenarios
 */
export declare const usePostApiContractProcessingWebSimulationsVariablesBind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataVariablesFile, any>, TError, {
        data: BindVariablesToGroup;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataVariablesFile, any>, TError, {
    data: BindVariablesToGroup;
}, TContext>;
/**
 * @summary Unbind variables from scenario groups
 */
export declare const postApiContractProcessingWebSimulationsVariablesUnbind: (defaultVariablesFiltersBody: DefaultVariablesFiltersBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataVariablesFileMany>>;
export declare const getPostApiContractProcessingWebSimulationsVariablesUnbindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataVariablesFileMany, any>, TError, {
        data: DefaultVariablesFiltersBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataVariablesFileMany, any>, TError, {
    data: DefaultVariablesFiltersBody;
}, TContext>;
export declare type PostApiContractProcessingWebSimulationsVariablesUnbindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebSimulationsVariablesUnbind>>>;
export declare type PostApiContractProcessingWebSimulationsVariablesUnbindMutationBody = DefaultVariablesFiltersBody;
export declare type PostApiContractProcessingWebSimulationsVariablesUnbindMutationError = AxiosError<unknown>;
/**
 * @summary Unbind variables from scenario groups
 */
export declare const usePostApiContractProcessingWebSimulationsVariablesUnbind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataVariablesFileMany, any>, TError, {
        data: DefaultVariablesFiltersBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataVariablesFileMany, any>, TError, {
    data: DefaultVariablesFiltersBody;
}, TContext>;
/**
 * @summary Run simulations from s3 (filters by groups)
 */
export declare const postApiContractProcessingWebSimulationsRun: (runSimulationFromS3QueryBody: RunSimulationFromS3QueryBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRunSimulationsFromS3ResponseSchema>>;
export declare const getPostApiContractProcessingWebSimulationsRunMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRunSimulationsFromS3ResponseSchema, any>, TError, {
        data: RunSimulationFromS3QueryBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRunSimulationsFromS3ResponseSchema, any>, TError, {
    data: RunSimulationFromS3QueryBody;
}, TContext>;
export declare type PostApiContractProcessingWebSimulationsRunMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebSimulationsRun>>>;
export declare type PostApiContractProcessingWebSimulationsRunMutationBody = RunSimulationFromS3QueryBody;
export declare type PostApiContractProcessingWebSimulationsRunMutationError = AxiosError<unknown>;
/**
 * @summary Run simulations from s3 (filters by groups)
 */
export declare const usePostApiContractProcessingWebSimulationsRun: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRunSimulationsFromS3ResponseSchema, any>, TError, {
        data: RunSimulationFromS3QueryBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRunSimulationsFromS3ResponseSchema, any>, TError, {
    data: RunSimulationFromS3QueryBody;
}, TContext>;
/**
 * @summary Get actual schedule for offer in calculator
 */
export declare const getApiContractProcessingWebComputedSchedule: (params: GetApiContractProcessingWebComputedScheduleParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule>>;
export declare const getGetApiContractProcessingWebComputedScheduleQueryKey: (params: GetApiContractProcessingWebComputedScheduleParams) => readonly ["/api/contract-processing-web/computed/schedule", ...GetApiContractProcessingWebComputedScheduleParams[]];
export declare const getGetApiContractProcessingWebComputedScheduleQueryOptions: <TData = AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebComputedScheduleParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebComputedScheduleQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebComputedSchedule>>>;
export declare type GetApiContractProcessingWebComputedScheduleQueryError = AxiosError<unknown>;
/**
 * @summary Get actual schedule for offer in calculator
 */
export declare const useGetApiContractProcessingWebComputedSchedule: <TData = AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebComputedScheduleParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Calc schedule for offer in calculator for today
 */
export declare const postApiContractProcessingWebComputedSchedule: (computeScheduleBody: ComputeScheduleBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule>>;
export declare const getPostApiContractProcessingWebComputedScheduleMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, {
        data: ComputeScheduleBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, {
    data: ComputeScheduleBody;
}, TContext>;
export declare type PostApiContractProcessingWebComputedScheduleMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebComputedSchedule>>>;
export declare type PostApiContractProcessingWebComputedScheduleMutationBody = ComputeScheduleBody;
export declare type PostApiContractProcessingWebComputedScheduleMutationError = AxiosError<unknown>;
/**
 * @summary Calc schedule for offer in calculator for today
 */
export declare const usePostApiContractProcessingWebComputedSchedule: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, {
        data: ComputeScheduleBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, {
    data: ComputeScheduleBody;
}, TContext>;
/**
 * @summary Get actual schedule for offer in calculator for client
 */
export declare const getApiContractProcessingWebClientsComputedSchedule: (params: GetApiContractProcessingWebClientsComputedScheduleParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule>>;
export declare const getGetApiContractProcessingWebClientsComputedScheduleQueryKey: (params: GetApiContractProcessingWebClientsComputedScheduleParams) => readonly ["/api/contract-processing-web/clients/computed/schedule", ...GetApiContractProcessingWebClientsComputedScheduleParams[]];
export declare const getGetApiContractProcessingWebClientsComputedScheduleQueryOptions: <TData = AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebClientsComputedScheduleParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebClientsComputedScheduleQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebClientsComputedSchedule>>>;
export declare type GetApiContractProcessingWebClientsComputedScheduleQueryError = AxiosError<unknown>;
/**
 * @summary Get actual schedule for offer in calculator for client
 */
export declare const useGetApiContractProcessingWebClientsComputedSchedule: <TData = AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError = AxiosError<unknown, any>>(params: GetApiContractProcessingWebClientsComputedScheduleParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataActualOfferScheduleOnlyAggregatedEffectiveDateSchedule, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Process services. Creat all necessary entities and handle related logic
 */
export declare const postApiContractProcessingWebServiceManagerProcess: (processServices: ProcessServices, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiContractProcessingWebServiceManagerProcessMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: ProcessServices;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: ProcessServices;
}, TContext>;
export declare type PostApiContractProcessingWebServiceManagerProcessMutationResult = NonNullable<Awaited<ReturnType<typeof postApiContractProcessingWebServiceManagerProcess>>>;
export declare type PostApiContractProcessingWebServiceManagerProcessMutationBody = ProcessServices;
export declare type PostApiContractProcessingWebServiceManagerProcessMutationError = AxiosError<unknown>;
/**
 * @summary Process services. Creat all necessary entities and handle related logic
 */
export declare const usePostApiContractProcessingWebServiceManagerProcess: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: ProcessServices;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: ProcessServices;
}, TContext>;
/**
 * @summary Get extended info about services
 */
export declare const getApiContractProcessingWebServiceManagerServicesExtended: (params?: GetApiContractProcessingWebServiceManagerServicesExtendedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetServicesInfoExtendedResponse>>;
export declare const getGetApiContractProcessingWebServiceManagerServicesExtendedQueryKey: (params?: GetApiContractProcessingWebServiceManagerServicesExtendedParams) => readonly ["/api/contract-processing-web/service_manager/services/extended", ...GetApiContractProcessingWebServiceManagerServicesExtendedParams[]];
export declare const getGetApiContractProcessingWebServiceManagerServicesExtendedQueryOptions: <TData = AxiosResponse<DataGetServicesInfoExtendedResponse, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebServiceManagerServicesExtendedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetServicesInfoExtendedResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetServicesInfoExtendedResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiContractProcessingWebServiceManagerServicesExtendedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiContractProcessingWebServiceManagerServicesExtended>>>;
export declare type GetApiContractProcessingWebServiceManagerServicesExtendedQueryError = AxiosError<unknown>;
/**
 * @summary Get extended info about services
 */
export declare const useGetApiContractProcessingWebServiceManagerServicesExtended: <TData = AxiosResponse<DataGetServicesInfoExtendedResponse, any>, TError = AxiosError<unknown, any>>(params?: GetApiContractProcessingWebServiceManagerServicesExtendedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetServicesInfoExtendedResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
