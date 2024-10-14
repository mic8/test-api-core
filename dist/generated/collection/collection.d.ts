import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { BlacklistOnlyClientIdContractKeyContractNumberPurposeValidFromDtValidToDt, BlacklistOnlyId, BlacklistOnlyPurposeValidFromDtValidToDt, ClientsInteractionsOnlyChannelClientIdDateResultSource, ClientsPhonesCreate, ClientsPhonesOnlyFullNameIdMetaPhoneAvailabilityPhoneNumberPhoneOwnerSourceType, ClientsPhonesOnlyId, CreateCommunication, DailyCollectionListOnlyClientIdCollectionStrategyContractIdStrategyCommunicationType, DataBlacklist, DataBlacklistManyPaginated, DataClientsInteractions, DataClientsInteractionsMany, DataClientsInteractionsManyPaginated, DataClientsPhones, DataClientsPhonesMany, DataClientsPhonesManyPaginated, DataCreateCommunicationResponse, DataDailyCollectionList, DataDailyListStatisticManyPaginated, DataFieldVisit, DataFieldVisitManyPaginated, DataFullClient, DataLivenessResponse, DataLoaders, DataLoadersLogMany, DataLoadersManyPaginated, DataPaymentRequest, DataPaymentRequestResponse, DataQCStatResponse, DataQCWithTemplateResponse, DataQualityControl, DataQualityControlManyPaginated, DataReadinessResponse, DataSkipTracing, DataSkipTracingManyPaginated, DataSuccessResult, FieldVisitOnlyIdPostControlPtpAmountPtpDateResultStatus, GetApiCollectionBlacklistParams, GetApiCollectionClientsPhonesParams, GetApiCollectionCrmListStatisticParams, GetApiCollectionFieldVisitParams, GetApiCollectionInteractionsParams, GetApiCollectionLoaderParams, GetApiCollectionQualityControlParams, GetApiCollectionSkipTracingParams, LoaderWithTypeValidation, NoContactRequest, PaymentRequestOnlyPayload, QualityControlOnlyIdResultStatusZendeskLink, SkipTracingOnlyClientIdContractNumber, SkipTracingOnlyCommentIdPtpDateResultStatus, StartLoadersSchema, StartLoadersSchema1 } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiCollectionReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiCollectionReadinessQueryKey: () => readonly ["/api/collection/readiness"];
export declare const getGetApiCollectionReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionReadiness>>>;
export declare type GetApiCollectionReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiCollectionReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiCollectionLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiCollectionLivenessQueryKey: () => readonly ["/api/collection/liveness"];
export declare const getGetApiCollectionLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionLiveness>>>;
export declare type GetApiCollectionLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiCollectionLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiCollectionMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiCollectionMetricsQueryKey: () => readonly ["/api/collection/metrics"];
export declare const getGetApiCollectionMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionMetrics>>>;
export declare type GetApiCollectionMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiCollectionMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get client full info by id
 */
export declare const getApiCollectionClientsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullClient>>;
export declare const getGetApiCollectionClientsIdQueryKey: (id: string) => readonly [`/api/collection/clients/${string}`];
export declare const getGetApiCollectionClientsIdQueryOptions: <TData = AxiosResponse<DataFullClient, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullClient, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFullClient, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionClientsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionClientsId>>>;
export declare type GetApiCollectionClientsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get client full info by id
 */
export declare const useGetApiCollectionClientsId: <TData = AxiosResponse<DataFullClient, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullClient, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create client communication
 */
export declare const postApiCollectionClientsIdCommunication: (id: string, createCommunication: CreateCommunication, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCreateCommunicationResponse>>;
export declare const getPostApiCollectionClientsIdCommunicationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateCommunicationResponse, any>, TError, {
        id: string;
        data: CreateCommunication;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCreateCommunicationResponse, any>, TError, {
    id: string;
    data: CreateCommunication;
}, TContext>;
export declare type PostApiCollectionClientsIdCommunicationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionClientsIdCommunication>>>;
export declare type PostApiCollectionClientsIdCommunicationMutationBody = CreateCommunication;
export declare type PostApiCollectionClientsIdCommunicationMutationError = AxiosError<unknown>;
/**
 * @summary Create client communication
 */
export declare const usePostApiCollectionClientsIdCommunication: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateCommunicationResponse, any>, TError, {
        id: string;
        data: CreateCommunication;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCreateCommunicationResponse, any>, TError, {
    id: string;
    data: CreateCommunication;
}, TContext>;
/**
 * @summary Send payment request to client
 */
export declare const postApiCollectionClientsIdPaymentRequest: (id: string, paymentRequestOnlyPayload: PaymentRequestOnlyPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentRequest>>;
export declare const getPostApiCollectionClientsIdPaymentRequestMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentRequest, any>, TError, {
        id: string;
        data: PaymentRequestOnlyPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentRequest, any>, TError, {
    id: string;
    data: PaymentRequestOnlyPayload;
}, TContext>;
export declare type PostApiCollectionClientsIdPaymentRequestMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionClientsIdPaymentRequest>>>;
export declare type PostApiCollectionClientsIdPaymentRequestMutationBody = PaymentRequestOnlyPayload;
export declare type PostApiCollectionClientsIdPaymentRequestMutationError = AxiosError<unknown>;
/**
 * @summary Send payment request to client
 */
export declare const usePostApiCollectionClientsIdPaymentRequest: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentRequest, any>, TError, {
        id: string;
        data: PaymentRequestOnlyPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentRequest, any>, TError, {
    id: string;
    data: PaymentRequestOnlyPayload;
}, TContext>;
/**
 * @summary Search payment request per client
 */
export declare const getApiCollectionClientsIdPaymentRequest: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentRequestResponse>>;
export declare const getGetApiCollectionClientsIdPaymentRequestQueryKey: (id: string) => readonly [`/api/collection/clients/${string}/payment_request`];
export declare const getGetApiCollectionClientsIdPaymentRequestQueryOptions: <TData = AxiosResponse<DataPaymentRequestResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentRequestResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentRequestResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionClientsIdPaymentRequestQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionClientsIdPaymentRequest>>>;
export declare type GetApiCollectionClientsIdPaymentRequestQueryError = AxiosError<unknown>;
/**
 * @summary Search payment request per client
 */
export declare const useGetApiCollectionClientsIdPaymentRequest: <TData = AxiosResponse<DataPaymentRequestResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentRequestResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get collection list statistic
 */
export declare const getApiCollectionCrmListStatistic: (params?: GetApiCollectionCrmListStatisticParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDailyListStatisticManyPaginated>>;
export declare const getGetApiCollectionCrmListStatisticQueryKey: (params?: GetApiCollectionCrmListStatisticParams) => readonly ["/api/collection/crm/list_statistic", ...GetApiCollectionCrmListStatisticParams[]];
export declare const getGetApiCollectionCrmListStatisticQueryOptions: <TData = AxiosResponse<DataDailyListStatisticManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionCrmListStatisticParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDailyListStatisticManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDailyListStatisticManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionCrmListStatisticQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionCrmListStatistic>>>;
export declare type GetApiCollectionCrmListStatisticQueryError = AxiosError<unknown>;
/**
 * @summary Get collection list statistic
 */
export declare const useGetApiCollectionCrmListStatistic: <TData = AxiosResponse<DataDailyListStatisticManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionCrmListStatisticParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDailyListStatisticManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create loader
 */
export declare const postApiCollectionLoader: (loaderWithTypeValidation: LoaderWithTypeValidation, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLoaders>>;
export declare const getPostApiCollectionLoaderMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLoaders, any>, TError, {
        data: LoaderWithTypeValidation;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLoaders, any>, TError, {
    data: LoaderWithTypeValidation;
}, TContext>;
export declare type PostApiCollectionLoaderMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionLoader>>>;
export declare type PostApiCollectionLoaderMutationBody = LoaderWithTypeValidation;
export declare type PostApiCollectionLoaderMutationError = AxiosError<unknown>;
/**
 * @summary Create loader
 */
export declare const usePostApiCollectionLoader: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLoaders, any>, TError, {
        data: LoaderWithTypeValidation;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLoaders, any>, TError, {
    data: LoaderWithTypeValidation;
}, TContext>;
/**
 * @summary Get loaders
 */
export declare const getApiCollectionLoader: (params?: GetApiCollectionLoaderParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLoadersManyPaginated>>;
export declare const getGetApiCollectionLoaderQueryKey: (params?: GetApiCollectionLoaderParams) => readonly ["/api/collection/loader", ...GetApiCollectionLoaderParams[]];
export declare const getGetApiCollectionLoaderQueryOptions: <TData = AxiosResponse<DataLoadersManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionLoaderParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataLoadersManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLoadersManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionLoaderQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionLoader>>>;
export declare type GetApiCollectionLoaderQueryError = AxiosError<unknown>;
/**
 * @summary Get loaders
 */
export declare const useGetApiCollectionLoader: <TData = AxiosResponse<DataLoadersManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionLoaderParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataLoadersManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete members from call queue
 */
export declare const deleteApiCollectionLoader: (startLoadersSchema: StartLoadersSchema, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLoadersLogMany>>;
export declare const getDeleteApiCollectionLoaderMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLoadersLogMany, any>, TError, {
        data: StartLoadersSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLoadersLogMany, any>, TError, {
    data: StartLoadersSchema;
}, TContext>;
export declare type DeleteApiCollectionLoaderMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiCollectionLoader>>>;
export declare type DeleteApiCollectionLoaderMutationBody = StartLoadersSchema;
export declare type DeleteApiCollectionLoaderMutationError = AxiosError<unknown>;
/**
 * @summary Delete members from call queue
 */
export declare const useDeleteApiCollectionLoader: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLoadersLogMany, any>, TError, {
        data: StartLoadersSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLoadersLogMany, any>, TError, {
    data: StartLoadersSchema;
}, TContext>;
/**
 * @summary Start loaders by name
 */
export declare const postApiCollectionLoaderStart: (startLoadersSchema1: StartLoadersSchema1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLoadersLogMany>>;
export declare const getPostApiCollectionLoaderStartMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLoadersLogMany, any>, TError, {
        data: StartLoadersSchema1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLoadersLogMany, any>, TError, {
    data: StartLoadersSchema1;
}, TContext>;
export declare type PostApiCollectionLoaderStartMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionLoaderStart>>>;
export declare type PostApiCollectionLoaderStartMutationBody = StartLoadersSchema1;
export declare type PostApiCollectionLoaderStartMutationError = AxiosError<unknown>;
/**
 * @summary Start loaders by name
 */
export declare const usePostApiCollectionLoaderStart: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLoadersLogMany, any>, TError, {
        data: StartLoadersSchema1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLoadersLogMany, any>, TError, {
    data: StartLoadersSchema1;
}, TContext>;
/**
 * @summary Create members from daily call list
 */
export declare const postApiCollectionCall: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResult>>;
export declare const getPostApiCollectionCallMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResult, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResult, any>, TError, void, TContext>;
export declare type PostApiCollectionCallMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionCall>>>;
export declare type PostApiCollectionCallMutationError = AxiosError<unknown>;
/**
 * @summary Create members from daily call list
 */
export declare const usePostApiCollectionCall: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResult, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResult, any>, TError, void, TContext>;
/**
 * @summary Get clients_interactions
 */
export declare const getApiCollectionInteractions: (params?: GetApiCollectionInteractionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsInteractionsManyPaginated>>;
export declare const getGetApiCollectionInteractionsQueryKey: (params?: GetApiCollectionInteractionsParams) => readonly ["/api/collection/interactions", ...GetApiCollectionInteractionsParams[]];
export declare const getGetApiCollectionInteractionsQueryOptions: <TData = AxiosResponse<DataClientsInteractionsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionInteractionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsInteractionsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientsInteractionsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionInteractionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionInteractions>>>;
export declare type GetApiCollectionInteractionsQueryError = AxiosError<unknown>;
/**
 * @summary Get clients_interactions
 */
export declare const useGetApiCollectionInteractions: <TData = AxiosResponse<DataClientsInteractionsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionInteractionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsInteractionsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create clients_interactions
 */
export declare const postApiCollectionInteractions: (clientsInteractionsOnlyChannelClientIdDateResultSource: ClientsInteractionsOnlyChannelClientIdDateResultSource, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsInteractions>>;
export declare const getPostApiCollectionInteractionsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsInteractions, any>, TError, {
        data: ClientsInteractionsOnlyChannelClientIdDateResultSource;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientsInteractions, any>, TError, {
    data: ClientsInteractionsOnlyChannelClientIdDateResultSource;
}, TContext>;
export declare type PostApiCollectionInteractionsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionInteractions>>>;
export declare type PostApiCollectionInteractionsMutationBody = ClientsInteractionsOnlyChannelClientIdDateResultSource;
export declare type PostApiCollectionInteractionsMutationError = AxiosError<unknown>;
/**
 * @summary Create clients_interactions
 */
export declare const usePostApiCollectionInteractions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsInteractions, any>, TError, {
        data: ClientsInteractionsOnlyChannelClientIdDateResultSource;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientsInteractions, any>, TError, {
    data: ClientsInteractionsOnlyChannelClientIdDateResultSource;
}, TContext>;
/**
 * @summary Get client broken ptp
 */
export declare const getApiCollectionInteractionsClientIdBrokenPtp: (clientId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsInteractionsMany>>;
export declare const getGetApiCollectionInteractionsClientIdBrokenPtpQueryKey: (clientId: string) => readonly [`/api/collection/interactions/${string}/broken_ptp`];
export declare const getGetApiCollectionInteractionsClientIdBrokenPtpQueryOptions: <TData = AxiosResponse<DataClientsInteractionsMany, any>, TError = AxiosError<unknown, any>>(clientId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsInteractionsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientsInteractionsMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionInteractionsClientIdBrokenPtpQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionInteractionsClientIdBrokenPtp>>>;
export declare type GetApiCollectionInteractionsClientIdBrokenPtpQueryError = AxiosError<unknown>;
/**
 * @summary Get client broken ptp
 */
export declare const useGetApiCollectionInteractionsClientIdBrokenPtp: <TData = AxiosResponse<DataClientsInteractionsMany, any>, TError = AxiosError<unknown, any>>(clientId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsInteractionsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get clients phones
 */
export declare const getApiCollectionClientsPhones: (params?: GetApiCollectionClientsPhonesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsPhonesManyPaginated>>;
export declare const getGetApiCollectionClientsPhonesQueryKey: (params?: GetApiCollectionClientsPhonesParams) => readonly ["/api/collection/clients_phones", ...GetApiCollectionClientsPhonesParams[]];
export declare const getGetApiCollectionClientsPhonesQueryOptions: <TData = AxiosResponse<DataClientsPhonesManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionClientsPhonesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsPhonesManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientsPhonesManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionClientsPhonesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionClientsPhones>>>;
export declare type GetApiCollectionClientsPhonesQueryError = AxiosError<unknown>;
/**
 * @summary Get clients phones
 */
export declare const useGetApiCollectionClientsPhones: <TData = AxiosResponse<DataClientsPhonesManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionClientsPhonesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsPhonesManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create clients phone
 */
export declare const postApiCollectionClientsPhones: (clientsPhonesCreate: ClientsPhonesCreate, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsPhones>>;
export declare const getPostApiCollectionClientsPhonesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
        data: ClientsPhonesCreate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
    data: ClientsPhonesCreate;
}, TContext>;
export declare type PostApiCollectionClientsPhonesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionClientsPhones>>>;
export declare type PostApiCollectionClientsPhonesMutationBody = ClientsPhonesCreate;
export declare type PostApiCollectionClientsPhonesMutationError = AxiosError<unknown>;
/**
 * @summary Create clients phone
 */
export declare const usePostApiCollectionClientsPhones: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
        data: ClientsPhonesCreate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientsPhones, any>, TError, {
    data: ClientsPhonesCreate;
}, TContext>;
/**
 * @summary Update clients phone by id
 */
export declare const patchApiCollectionClientsPhones: (clientsPhonesOnlyFullNameIdMetaPhoneAvailabilityPhoneNumberPhoneOwnerSourceType: ClientsPhonesOnlyFullNameIdMetaPhoneAvailabilityPhoneNumberPhoneOwnerSourceType, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsPhones>>;
export declare const getPatchApiCollectionClientsPhonesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
        data: ClientsPhonesOnlyFullNameIdMetaPhoneAvailabilityPhoneNumberPhoneOwnerSourceType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
    data: ClientsPhonesOnlyFullNameIdMetaPhoneAvailabilityPhoneNumberPhoneOwnerSourceType;
}, TContext>;
export declare type PatchApiCollectionClientsPhonesMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiCollectionClientsPhones>>>;
export declare type PatchApiCollectionClientsPhonesMutationBody = ClientsPhonesOnlyFullNameIdMetaPhoneAvailabilityPhoneNumberPhoneOwnerSourceType;
export declare type PatchApiCollectionClientsPhonesMutationError = AxiosError<unknown>;
/**
 * @summary Update clients phone by id
 */
export declare const usePatchApiCollectionClientsPhones: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
        data: ClientsPhonesOnlyFullNameIdMetaPhoneAvailabilityPhoneNumberPhoneOwnerSourceType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientsPhones, any>, TError, {
    data: ClientsPhonesOnlyFullNameIdMetaPhoneAvailabilityPhoneNumberPhoneOwnerSourceType;
}, TContext>;
/**
 * @summary Archive clients phone by id
 */
export declare const deleteApiCollectionClientsPhones: (clientsPhonesOnlyId: ClientsPhonesOnlyId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsPhones>>;
export declare const getDeleteApiCollectionClientsPhonesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
        data: ClientsPhonesOnlyId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
    data: ClientsPhonesOnlyId;
}, TContext>;
export declare type DeleteApiCollectionClientsPhonesMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiCollectionClientsPhones>>>;
export declare type DeleteApiCollectionClientsPhonesMutationBody = ClientsPhonesOnlyId;
export declare type DeleteApiCollectionClientsPhonesMutationError = AxiosError<unknown>;
/**
 * @summary Archive clients phone by id
 */
export declare const useDeleteApiCollectionClientsPhones: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsPhones, any>, TError, {
        data: ClientsPhonesOnlyId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientsPhones, any>, TError, {
    data: ClientsPhonesOnlyId;
}, TContext>;
/**
 * @summary Get client by phone
 */
export declare const getApiCollectionClientsPhonesPhoneNumber: (phoneNumber: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsPhonesMany>>;
export declare const getGetApiCollectionClientsPhonesPhoneNumberQueryKey: (phoneNumber: string) => readonly [`/api/collection/clients_phones/${string}`];
export declare const getGetApiCollectionClientsPhonesPhoneNumberQueryOptions: <TData = AxiosResponse<DataClientsPhonesMany, any>, TError = AxiosError<unknown, any>>(phoneNumber: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsPhonesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientsPhonesMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionClientsPhonesPhoneNumberQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionClientsPhonesPhoneNumber>>>;
export declare type GetApiCollectionClientsPhonesPhoneNumberQueryError = AxiosError<unknown>;
/**
 * @summary Get client by phone
 */
export declare const useGetApiCollectionClientsPhonesPhoneNumber: <TData = AxiosResponse<DataClientsPhonesMany, any>, TError = AxiosError<unknown, any>>(phoneNumber: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsPhonesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Import phones by client id
 */
export declare const postApiCollectionClientsPhonesClientIdImport: (clientId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsPhonesMany>>;
export declare const getPostApiCollectionClientsPhonesClientIdImportMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsPhonesMany, any>, TError, {
        clientId: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientsPhonesMany, any>, TError, {
    clientId: string;
}, TContext>;
export declare type PostApiCollectionClientsPhonesClientIdImportMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionClientsPhonesClientIdImport>>>;
export declare type PostApiCollectionClientsPhonesClientIdImportMutationError = AxiosError<unknown>;
/**
 * @summary Import phones by client id
 */
export declare const usePostApiCollectionClientsPhonesClientIdImport: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientsPhonesMany, any>, TError, {
        clientId: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientsPhonesMany, any>, TError, {
    clientId: string;
}, TContext>;
/**
 * @summary Get field visit
 */
export declare const getApiCollectionFieldVisit: (params?: GetApiCollectionFieldVisitParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFieldVisitManyPaginated>>;
export declare const getGetApiCollectionFieldVisitQueryKey: (params?: GetApiCollectionFieldVisitParams) => readonly ["/api/collection/field_visit", ...GetApiCollectionFieldVisitParams[]];
export declare const getGetApiCollectionFieldVisitQueryOptions: <TData = AxiosResponse<DataFieldVisitManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionFieldVisitParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFieldVisitManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFieldVisitManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionFieldVisitQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionFieldVisit>>>;
export declare type GetApiCollectionFieldVisitQueryError = AxiosError<unknown>;
/**
 * @summary Get field visit
 */
export declare const useGetApiCollectionFieldVisit: <TData = AxiosResponse<DataFieldVisitManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionFieldVisitParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFieldVisitManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create field visit
 */
export declare const postApiCollectionFieldVisit: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionFieldVisitMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionFieldVisitMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionFieldVisit>>>;
export declare type PostApiCollectionFieldVisitMutationError = AxiosError<unknown>;
/**
 * @summary Create field visit
 */
export declare const usePostApiCollectionFieldVisit: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Update field visit list by id
 */
export declare const patchApiCollectionFieldVisit: (fieldVisitOnlyIdPostControlPtpAmountPtpDateResultStatus: FieldVisitOnlyIdPostControlPtpAmountPtpDateResultStatus, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFieldVisit>>;
export declare const getPatchApiCollectionFieldVisitMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFieldVisit, any>, TError, {
        data: FieldVisitOnlyIdPostControlPtpAmountPtpDateResultStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFieldVisit, any>, TError, {
    data: FieldVisitOnlyIdPostControlPtpAmountPtpDateResultStatus;
}, TContext>;
export declare type PatchApiCollectionFieldVisitMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiCollectionFieldVisit>>>;
export declare type PatchApiCollectionFieldVisitMutationBody = FieldVisitOnlyIdPostControlPtpAmountPtpDateResultStatus;
export declare type PatchApiCollectionFieldVisitMutationError = AxiosError<unknown>;
/**
 * @summary Update field visit list by id
 */
export declare const usePatchApiCollectionFieldVisit: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFieldVisit, any>, TError, {
        data: FieldVisitOnlyIdPostControlPtpAmountPtpDateResultStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFieldVisit, any>, TError, {
    data: FieldVisitOnlyIdPostControlPtpAmountPtpDateResultStatus;
}, TContext>;
/**
 * @summary Get skip tracing
 */
export declare const getApiCollectionSkipTracing: (params?: GetApiCollectionSkipTracingParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSkipTracingManyPaginated>>;
export declare const getGetApiCollectionSkipTracingQueryKey: (params?: GetApiCollectionSkipTracingParams) => readonly ["/api/collection/skip_tracing", ...GetApiCollectionSkipTracingParams[]];
export declare const getGetApiCollectionSkipTracingQueryOptions: <TData = AxiosResponse<DataSkipTracingManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionSkipTracingParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSkipTracingManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSkipTracingManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionSkipTracingQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionSkipTracing>>>;
export declare type GetApiCollectionSkipTracingQueryError = AxiosError<unknown>;
/**
 * @summary Get skip tracing
 */
export declare const useGetApiCollectionSkipTracing: <TData = AxiosResponse<DataSkipTracingManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionSkipTracingParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSkipTracingManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create skip tracing member manually
 */
export declare const postApiCollectionSkipTracing: (skipTracingOnlyClientIdContractNumber: SkipTracingOnlyClientIdContractNumber, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSkipTracing>>;
export declare const getPostApiCollectionSkipTracingMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSkipTracing, any>, TError, {
        data: SkipTracingOnlyClientIdContractNumber;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSkipTracing, any>, TError, {
    data: SkipTracingOnlyClientIdContractNumber;
}, TContext>;
export declare type PostApiCollectionSkipTracingMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionSkipTracing>>>;
export declare type PostApiCollectionSkipTracingMutationBody = SkipTracingOnlyClientIdContractNumber;
export declare type PostApiCollectionSkipTracingMutationError = AxiosError<unknown>;
/**
 * @summary Create skip tracing member manually
 */
export declare const usePostApiCollectionSkipTracing: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSkipTracing, any>, TError, {
        data: SkipTracingOnlyClientIdContractNumber;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSkipTracing, any>, TError, {
    data: SkipTracingOnlyClientIdContractNumber;
}, TContext>;
/**
 * @summary Update skip tracing list by id
 */
export declare const patchApiCollectionSkipTracing: (skipTracingOnlyCommentIdPtpDateResultStatus: SkipTracingOnlyCommentIdPtpDateResultStatus, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSkipTracing>>;
export declare const getPatchApiCollectionSkipTracingMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSkipTracing, any>, TError, {
        data: SkipTracingOnlyCommentIdPtpDateResultStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSkipTracing, any>, TError, {
    data: SkipTracingOnlyCommentIdPtpDateResultStatus;
}, TContext>;
export declare type PatchApiCollectionSkipTracingMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiCollectionSkipTracing>>>;
export declare type PatchApiCollectionSkipTracingMutationBody = SkipTracingOnlyCommentIdPtpDateResultStatus;
export declare type PatchApiCollectionSkipTracingMutationError = AxiosError<unknown>;
/**
 * @summary Update skip tracing list by id
 */
export declare const usePatchApiCollectionSkipTracing: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSkipTracing, any>, TError, {
        data: SkipTracingOnlyCommentIdPtpDateResultStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSkipTracing, any>, TError, {
    data: SkipTracingOnlyCommentIdPtpDateResultStatus;
}, TContext>;
/**
 * @summary Create skip tracing
 */
export declare const postApiCollectionSkipTracingList: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionSkipTracingListMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionSkipTracingListMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionSkipTracingList>>>;
export declare type PostApiCollectionSkipTracingListMutationError = AxiosError<unknown>;
/**
 * @summary Create skip tracing
 */
export declare const usePostApiCollectionSkipTracingList: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create member in daily_collection_list
 */
export declare const postApiCollectionDailyCollectionListMember: (dailyCollectionListOnlyClientIdCollectionStrategyContractIdStrategyCommunicationType: DailyCollectionListOnlyClientIdCollectionStrategyContractIdStrategyCommunicationType, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDailyCollectionList>>;
export declare const getPostApiCollectionDailyCollectionListMemberMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDailyCollectionList, any>, TError, {
        data: DailyCollectionListOnlyClientIdCollectionStrategyContractIdStrategyCommunicationType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDailyCollectionList, any>, TError, {
    data: DailyCollectionListOnlyClientIdCollectionStrategyContractIdStrategyCommunicationType;
}, TContext>;
export declare type PostApiCollectionDailyCollectionListMemberMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListMember>>>;
export declare type PostApiCollectionDailyCollectionListMemberMutationBody = DailyCollectionListOnlyClientIdCollectionStrategyContractIdStrategyCommunicationType;
export declare type PostApiCollectionDailyCollectionListMemberMutationError = AxiosError<unknown>;
/**
 * @summary Create member in daily_collection_list
 */
export declare const usePostApiCollectionDailyCollectionListMember: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDailyCollectionList, any>, TError, {
        data: DailyCollectionListOnlyClientIdCollectionStrategyContractIdStrategyCommunicationType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDailyCollectionList, any>, TError, {
    data: DailyCollectionListOnlyClientIdCollectionStrategyContractIdStrategyCommunicationType;
}, TContext>;
/**
 * @summary Create precollection list for robot call
 */
export declare const postApiCollectionDailyCollectionListRobotPrecollection: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListRobotPrecollectionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListRobotPrecollectionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListRobotPrecollection>>>;
export declare type PostApiCollectionDailyCollectionListRobotPrecollectionMutationError = AxiosError<unknown>;
/**
 * @summary Create precollection list for robot call
 */
export declare const usePostApiCollectionDailyCollectionListRobotPrecollection: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create collection list for robot call
 */
export declare const postApiCollectionDailyCollectionListRobotCollection: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListRobotCollectionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListRobotCollectionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListRobotCollection>>>;
export declare type PostApiCollectionDailyCollectionListRobotCollectionMutationError = AxiosError<unknown>;
/**
 * @summary Create collection list for robot call
 */
export declare const usePostApiCollectionDailyCollectionListRobotCollection: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create precollection list for sms
 */
export declare const postApiCollectionDailyCollectionListSms: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListSmsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListSmsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListSms>>>;
export declare type PostApiCollectionDailyCollectionListSmsMutationError = AxiosError<unknown>;
/**
 * @summary Create precollection list for sms
 */
export declare const usePostApiCollectionDailyCollectionListSms: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create precollection list for push
 */
export declare const postApiCollectionDailyCollectionListPush: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListPushMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListPushMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListPush>>>;
export declare type PostApiCollectionDailyCollectionListPushMutationError = AxiosError<unknown>;
/**
 * @summary Create precollection list for push
 */
export declare const usePostApiCollectionDailyCollectionListPush: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create precollection list for wa
 */
export declare const postApiCollectionDailyCollectionListWa: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListWaMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListWaMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListWa>>>;
export declare type PostApiCollectionDailyCollectionListWaMutationError = AxiosError<unknown>;
/**
 * @summary Create precollection list for wa
 */
export declare const usePostApiCollectionDailyCollectionListWa: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create PTP follow up list
 */
export declare const postApiCollectionDailyCollectionListPtp: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListPtpMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListPtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListPtp>>>;
export declare type PostApiCollectionDailyCollectionListPtpMutationError = AxiosError<unknown>;
/**
 * @summary Create PTP follow up list
 */
export declare const usePostApiCollectionDailyCollectionListPtp: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create PTP broken list
 */
export declare const postApiCollectionDailyCollectionListPtpBroken: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListPtpBrokenMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListPtpBrokenMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListPtpBroken>>>;
export declare type PostApiCollectionDailyCollectionListPtpBrokenMutationError = AxiosError<unknown>;
/**
 * @summary Create PTP broken list
 */
export declare const usePostApiCollectionDailyCollectionListPtpBroken: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create call list for no contact persons
 */
export declare const postApiCollectionDailyCollectionListCallNoContact: (noContactRequest: NoContactRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListCallNoContactMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, {
        data: NoContactRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, {
    data: NoContactRequest;
}, TContext>;
export declare type PostApiCollectionDailyCollectionListCallNoContactMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListCallNoContact>>>;
export declare type PostApiCollectionDailyCollectionListCallNoContactMutationBody = NoContactRequest;
export declare type PostApiCollectionDailyCollectionListCallNoContactMutationError = AxiosError<unknown>;
/**
 * @summary Create call list for no contact persons
 */
export declare const usePostApiCollectionDailyCollectionListCallNoContact: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, {
        data: NoContactRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, {
    data: NoContactRequest;
}, TContext>;
/**
 * @summary Create call list for precollection client, dpd < 0
 */
export declare const postApiCollectionDailyCollectionListCallPrecollection: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListCallPrecollectionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListCallPrecollectionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListCallPrecollection>>>;
export declare type PostApiCollectionDailyCollectionListCallPrecollectionMutationError = AxiosError<unknown>;
/**
 * @summary Create call list for precollection client, dpd < 0
 */
export declare const usePostApiCollectionDailyCollectionListCallPrecollection: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Create call list for collection client
 */
export declare const postApiCollectionDailyCollectionListCallCollection: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionDailyCollectionListCallCollectionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionDailyCollectionListCallCollectionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionDailyCollectionListCallCollection>>>;
export declare type PostApiCollectionDailyCollectionListCallCollectionMutationError = AxiosError<unknown>;
/**
 * @summary Create call list for collection client
 */
export declare const usePostApiCollectionDailyCollectionListCallCollection: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Get black list members
 */
export declare const getApiCollectionBlacklist: (params?: GetApiCollectionBlacklistParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBlacklistManyPaginated>>;
export declare const getGetApiCollectionBlacklistQueryKey: (params?: GetApiCollectionBlacklistParams) => readonly ["/api/collection/blacklist", ...GetApiCollectionBlacklistParams[]];
export declare const getGetApiCollectionBlacklistQueryOptions: <TData = AxiosResponse<DataBlacklistManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionBlacklistParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBlacklistManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBlacklistManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionBlacklistQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionBlacklist>>>;
export declare type GetApiCollectionBlacklistQueryError = AxiosError<unknown>;
/**
 * @summary Get black list members
 */
export declare const useGetApiCollectionBlacklist: <TData = AxiosResponse<DataBlacklistManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionBlacklistParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBlacklistManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create black list member
 */
export declare const postApiCollectionBlacklist: (blacklistOnlyClientIdContractKeyContractNumberPurposeValidFromDtValidToDt: BlacklistOnlyClientIdContractKeyContractNumberPurposeValidFromDtValidToDt, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBlacklist>>;
export declare const getPostApiCollectionBlacklistMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
        data: BlacklistOnlyClientIdContractKeyContractNumberPurposeValidFromDtValidToDt;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
    data: BlacklistOnlyClientIdContractKeyContractNumberPurposeValidFromDtValidToDt;
}, TContext>;
export declare type PostApiCollectionBlacklistMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionBlacklist>>>;
export declare type PostApiCollectionBlacklistMutationBody = BlacklistOnlyClientIdContractKeyContractNumberPurposeValidFromDtValidToDt;
export declare type PostApiCollectionBlacklistMutationError = AxiosError<unknown>;
/**
 * @summary Create black list member
 */
export declare const usePostApiCollectionBlacklist: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
        data: BlacklistOnlyClientIdContractKeyContractNumberPurposeValidFromDtValidToDt;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBlacklist, any>, TError, {
    data: BlacklistOnlyClientIdContractKeyContractNumberPurposeValidFromDtValidToDt;
}, TContext>;
/**
 * @summary Archive black list member by id
 */
export declare const deleteApiCollectionBlacklist: (blacklistOnlyId: BlacklistOnlyId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBlacklist>>;
export declare const getDeleteApiCollectionBlacklistMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
        data: BlacklistOnlyId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
    data: BlacklistOnlyId;
}, TContext>;
export declare type DeleteApiCollectionBlacklistMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiCollectionBlacklist>>>;
export declare type DeleteApiCollectionBlacklistMutationBody = BlacklistOnlyId;
export declare type DeleteApiCollectionBlacklistMutationError = AxiosError<unknown>;
/**
 * @summary Archive black list member by id
 */
export declare const useDeleteApiCollectionBlacklist: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
        data: BlacklistOnlyId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBlacklist, any>, TError, {
    data: BlacklistOnlyId;
}, TContext>;
/**
 * @summary Update black list member by id
 */
export declare const patchApiCollectionBlacklistId: (id: string, blacklistOnlyPurposeValidFromDtValidToDt: BlacklistOnlyPurposeValidFromDtValidToDt, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBlacklist>>;
export declare const getPatchApiCollectionBlacklistIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
        id: string;
        data: BlacklistOnlyPurposeValidFromDtValidToDt;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
    id: string;
    data: BlacklistOnlyPurposeValidFromDtValidToDt;
}, TContext>;
export declare type PatchApiCollectionBlacklistIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiCollectionBlacklistId>>>;
export declare type PatchApiCollectionBlacklistIdMutationBody = BlacklistOnlyPurposeValidFromDtValidToDt;
export declare type PatchApiCollectionBlacklistIdMutationError = AxiosError<unknown>;
/**
 * @summary Update black list member by id
 */
export declare const usePatchApiCollectionBlacklistId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBlacklist, any>, TError, {
        id: string;
        data: BlacklistOnlyPurposeValidFromDtValidToDt;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBlacklist, any>, TError, {
    id: string;
    data: BlacklistOnlyPurposeValidFromDtValidToDt;
}, TContext>;
/**
 * @summary Get types of call results
 */
export declare const getApiCollectionQualityControlCallResults: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiCollectionQualityControlCallResultsQueryKey: () => readonly ["/api/collection/quality_control/call_results"];
export declare const getGetApiCollectionQualityControlCallResultsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionQualityControlCallResultsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionQualityControlCallResults>>>;
export declare type GetApiCollectionQualityControlCallResultsQueryError = AxiosError<unknown>;
/**
 * @summary Get types of call results
 */
export declare const useGetApiCollectionQualityControlCallResults: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get types of campaign
 */
export declare const getApiCollectionQualityControlCampaigns: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiCollectionQualityControlCampaignsQueryKey: () => readonly ["/api/collection/quality_control/campaigns"];
export declare const getGetApiCollectionQualityControlCampaignsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionQualityControlCampaignsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionQualityControlCampaigns>>>;
export declare type GetApiCollectionQualityControlCampaignsQueryError = AxiosError<unknown>;
/**
 * @summary Get types of campaign
 */
export declare const useGetApiCollectionQualityControlCampaigns: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get types of emails
 */
export declare const getApiCollectionQualityControlEmails: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiCollectionQualityControlEmailsQueryKey: () => readonly ["/api/collection/quality_control/emails"];
export declare const getGetApiCollectionQualityControlEmailsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionQualityControlEmailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionQualityControlEmails>>>;
export declare type GetApiCollectionQualityControlEmailsQueryError = AxiosError<unknown>;
/**
 * @summary Get types of emails
 */
export declare const useGetApiCollectionQualityControlEmails: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get quality control list by id
 */
export declare const getApiCollectionQualityControlId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQCWithTemplateResponse>>;
export declare const getGetApiCollectionQualityControlIdQueryKey: (id: string) => readonly [`/api/collection/quality_control/${string}`];
export declare const getGetApiCollectionQualityControlIdQueryOptions: <TData = AxiosResponse<DataQCWithTemplateResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQCWithTemplateResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQCWithTemplateResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionQualityControlIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionQualityControlId>>>;
export declare type GetApiCollectionQualityControlIdQueryError = AxiosError<unknown>;
/**
 * @summary Get quality control list by id
 */
export declare const useGetApiCollectionQualityControlId: <TData = AxiosResponse<DataQCWithTemplateResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQCWithTemplateResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get quality control stat
 */
export declare const getApiCollectionQualityControlStat: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQCStatResponse>>;
export declare const getGetApiCollectionQualityControlStatQueryKey: () => readonly ["/api/collection/quality_control/stat"];
export declare const getGetApiCollectionQualityControlStatQueryOptions: <TData = AxiosResponse<DataQCStatResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataQCStatResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQCStatResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionQualityControlStatQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionQualityControlStat>>>;
export declare type GetApiCollectionQualityControlStatQueryError = AxiosError<unknown>;
/**
 * @summary Get quality control stat
 */
export declare const useGetApiCollectionQualityControlStat: <TData = AxiosResponse<DataQCStatResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataQCStatResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get quality control list
 */
export declare const getApiCollectionQualityControl: (params?: GetApiCollectionQualityControlParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQualityControlManyPaginated>>;
export declare const getGetApiCollectionQualityControlQueryKey: (params?: GetApiCollectionQualityControlParams) => readonly ["/api/collection/quality_control", ...GetApiCollectionQualityControlParams[]];
export declare const getGetApiCollectionQualityControlQueryOptions: <TData = AxiosResponse<DataQualityControlManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionQualityControlParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQualityControlManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQualityControlManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiCollectionQualityControlQueryResult = NonNullable<Awaited<ReturnType<typeof getApiCollectionQualityControl>>>;
export declare type GetApiCollectionQualityControlQueryError = AxiosError<unknown>;
/**
 * @summary Get quality control list
 */
export declare const useGetApiCollectionQualityControl: <TData = AxiosResponse<DataQualityControlManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiCollectionQualityControlParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQualityControlManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create quality control list
 */
export declare const postApiCollectionQualityControl: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiCollectionQualityControlMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext>;
export declare type PostApiCollectionQualityControlMutationResult = NonNullable<Awaited<ReturnType<typeof postApiCollectionQualityControl>>>;
export declare type PostApiCollectionQualityControlMutationError = AxiosError<unknown>;
/**
 * @summary Create quality control list
 */
export declare const usePostApiCollectionQualityControl: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, void, TContext>;
/**
 * @summary Update quality control list by id
 */
export declare const patchApiCollectionQualityControl: (qualityControlOnlyIdResultStatusZendeskLink: QualityControlOnlyIdResultStatusZendeskLink, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQualityControl>>;
export declare const getPatchApiCollectionQualityControlMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQualityControl, any>, TError, {
        data: QualityControlOnlyIdResultStatusZendeskLink;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQualityControl, any>, TError, {
    data: QualityControlOnlyIdResultStatusZendeskLink;
}, TContext>;
export declare type PatchApiCollectionQualityControlMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiCollectionQualityControl>>>;
export declare type PatchApiCollectionQualityControlMutationBody = QualityControlOnlyIdResultStatusZendeskLink;
export declare type PatchApiCollectionQualityControlMutationError = AxiosError<unknown>;
/**
 * @summary Update quality control list by id
 */
export declare const usePatchApiCollectionQualityControl: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQualityControl, any>, TError, {
        data: QualityControlOnlyIdResultStatusZendeskLink;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQualityControl, any>, TError, {
    data: QualityControlOnlyIdResultStatusZendeskLink;
}, TContext>;
