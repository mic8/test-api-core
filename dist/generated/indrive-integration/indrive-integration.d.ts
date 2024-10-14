import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { AcceptedDriver, CreatePreApproveMany, DataAccessTokens, DataContract, DataEncryptDriverMany, DataLivenessResponse, DataPaymentsExcludeStatus, DataPreApproves, DataPreApprovesMany, DataPreApprovesManyPaginated, DataReadinessResponse, DataSendPreApprovesMany, DataUploadedFile, DriverId, EncryptDriverMany, GetApiIndriveIntegrationClientsPreApprovesParams, GetApiIndriveIntegrationCrmPreApprovesParams, IndrivePayment, PostApiIndriveIntegrationDriversLoadBody, PostApiIndriveIntegrationPaymentsRegistryLoadBody, PostApiIndriveIntegrationTripsLoadBody } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiIndriveIntegrationReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiIndriveIntegrationReadinessQueryKey: () => readonly ["/api/indrive-integration/readiness"];
export declare const getGetApiIndriveIntegrationReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiIndriveIntegrationReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiIndriveIntegrationReadiness>>>;
export declare type GetApiIndriveIntegrationReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiIndriveIntegrationReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiIndriveIntegrationLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiIndriveIntegrationLivenessQueryKey: () => readonly ["/api/indrive-integration/liveness"];
export declare const getGetApiIndriveIntegrationLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiIndriveIntegrationLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiIndriveIntegrationLiveness>>>;
export declare type GetApiIndriveIntegrationLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiIndriveIntegrationLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiIndriveIntegrationMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiIndriveIntegrationMetricsQueryKey: () => readonly ["/api/indrive-integration/metrics"];
export declare const getGetApiIndriveIntegrationMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiIndriveIntegrationMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiIndriveIntegrationMetrics>>>;
export declare type GetApiIndriveIntegrationMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiIndriveIntegrationMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Load file with drivers
 */
export declare const postApiIndriveIntegrationDriversLoad: (postApiIndriveIntegrationDriversLoadBody: PostApiIndriveIntegrationDriversLoadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataUploadedFile>>;
export declare const getPostApiIndriveIntegrationDriversLoadMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
        data: PostApiIndriveIntegrationDriversLoadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
    data: PostApiIndriveIntegrationDriversLoadBody;
}, TContext>;
export declare type PostApiIndriveIntegrationDriversLoadMutationResult = NonNullable<Awaited<ReturnType<typeof postApiIndriveIntegrationDriversLoad>>>;
export declare type PostApiIndriveIntegrationDriversLoadMutationBody = PostApiIndriveIntegrationDriversLoadBody;
export declare type PostApiIndriveIntegrationDriversLoadMutationError = AxiosError<unknown>;
/**
 * @summary Load file with drivers
 */
export declare const usePostApiIndriveIntegrationDriversLoad: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
        data: PostApiIndriveIntegrationDriversLoadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataUploadedFile, any>, TError, {
    data: PostApiIndriveIntegrationDriversLoadBody;
}, TContext>;
/**
 * @summary Load file with trips
 */
export declare const postApiIndriveIntegrationTripsLoad: (postApiIndriveIntegrationTripsLoadBody: PostApiIndriveIntegrationTripsLoadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataUploadedFile>>;
export declare const getPostApiIndriveIntegrationTripsLoadMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
        data: PostApiIndriveIntegrationTripsLoadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
    data: PostApiIndriveIntegrationTripsLoadBody;
}, TContext>;
export declare type PostApiIndriveIntegrationTripsLoadMutationResult = NonNullable<Awaited<ReturnType<typeof postApiIndriveIntegrationTripsLoad>>>;
export declare type PostApiIndriveIntegrationTripsLoadMutationBody = PostApiIndriveIntegrationTripsLoadBody;
export declare type PostApiIndriveIntegrationTripsLoadMutationError = AxiosError<unknown>;
/**
 * @summary Load file with trips
 */
export declare const usePostApiIndriveIntegrationTripsLoad: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
        data: PostApiIndriveIntegrationTripsLoadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataUploadedFile, any>, TError, {
    data: PostApiIndriveIntegrationTripsLoadBody;
}, TContext>;
/**
 * @summary Load file with payments registry
 */
export declare const postApiIndriveIntegrationPaymentsRegistryLoad: (postApiIndriveIntegrationPaymentsRegistryLoadBody: PostApiIndriveIntegrationPaymentsRegistryLoadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataUploadedFile>>;
export declare const getPostApiIndriveIntegrationPaymentsRegistryLoadMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
        data: PostApiIndriveIntegrationPaymentsRegistryLoadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
    data: PostApiIndriveIntegrationPaymentsRegistryLoadBody;
}, TContext>;
export declare type PostApiIndriveIntegrationPaymentsRegistryLoadMutationResult = NonNullable<Awaited<ReturnType<typeof postApiIndriveIntegrationPaymentsRegistryLoad>>>;
export declare type PostApiIndriveIntegrationPaymentsRegistryLoadMutationBody = PostApiIndriveIntegrationPaymentsRegistryLoadBody;
export declare type PostApiIndriveIntegrationPaymentsRegistryLoadMutationError = AxiosError<unknown>;
/**
 * @summary Load file with payments registry
 */
export declare const usePostApiIndriveIntegrationPaymentsRegistryLoad: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataUploadedFile, any>, TError, {
        data: PostApiIndriveIntegrationPaymentsRegistryLoadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataUploadedFile, any>, TError, {
    data: PostApiIndriveIntegrationPaymentsRegistryLoadBody;
}, TContext>;
/**
 * @summary Accept pre_approve and create client
 */
export declare const postApiIndriveIntegrationPreApprovesIdAccept: (id: string, acceptedDriver: AcceptedDriver, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPreApproves>>;
export declare const getPostApiIndriveIntegrationPreApprovesIdAcceptMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPreApproves, any>, TError, {
        id: string;
        data: AcceptedDriver;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPreApproves, any>, TError, {
    id: string;
    data: AcceptedDriver;
}, TContext>;
export declare type PostApiIndriveIntegrationPreApprovesIdAcceptMutationResult = NonNullable<Awaited<ReturnType<typeof postApiIndriveIntegrationPreApprovesIdAccept>>>;
export declare type PostApiIndriveIntegrationPreApprovesIdAcceptMutationBody = AcceptedDriver;
export declare type PostApiIndriveIntegrationPreApprovesIdAcceptMutationError = AxiosError<unknown>;
/**
 * @summary Accept pre_approve and create client
 */
export declare const usePostApiIndriveIntegrationPreApprovesIdAccept: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPreApproves, any>, TError, {
        id: string;
        data: AcceptedDriver;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPreApproves, any>, TError, {
    id: string;
    data: AcceptedDriver;
}, TContext>;
/**
 * @summary Get contract
 */
export declare const getApiIndriveIntegrationContractId: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContract>>;
export declare const getGetApiIndriveIntegrationContractIdQueryKey: (id: number) => readonly [`/api/indrive-integration/contract/${number}`];
export declare const getGetApiIndriveIntegrationContractIdQueryOptions: <TData = AxiosResponse<DataContract, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContract, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContract, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiIndriveIntegrationContractIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiIndriveIntegrationContractId>>>;
export declare type GetApiIndriveIntegrationContractIdQueryError = AxiosError<unknown>;
/**
 * @summary Get contract
 */
export declare const useGetApiIndriveIntegrationContractId: <TData = AxiosResponse<DataContract, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContract, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Post data about received commission
 */
export declare const postApiIndriveIntegrationContractsIdPayment: (id: number, indrivePayment: IndrivePayment, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentsExcludeStatus>>;
export declare const getPostApiIndriveIntegrationContractsIdPaymentMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentsExcludeStatus, any>, TError, {
        id: number;
        data: IndrivePayment;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentsExcludeStatus, any>, TError, {
    id: number;
    data: IndrivePayment;
}, TContext>;
export declare type PostApiIndriveIntegrationContractsIdPaymentMutationResult = NonNullable<Awaited<ReturnType<typeof postApiIndriveIntegrationContractsIdPayment>>>;
export declare type PostApiIndriveIntegrationContractsIdPaymentMutationBody = IndrivePayment;
export declare type PostApiIndriveIntegrationContractsIdPaymentMutationError = AxiosError<unknown>;
/**
 * @summary Post data about received commission
 */
export declare const usePostApiIndriveIntegrationContractsIdPayment: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentsExcludeStatus, any>, TError, {
        id: number;
        data: IndrivePayment;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentsExcludeStatus, any>, TError, {
    id: number;
    data: IndrivePayment;
}, TContext>;
/**
 * @summary Get access token
 */
export declare const postApiIndriveIntegrationAccessToken: (driverId: DriverId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAccessTokens>>;
export declare const getPostApiIndriveIntegrationAccessTokenMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAccessTokens, any>, TError, {
        data: DriverId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAccessTokens, any>, TError, {
    data: DriverId;
}, TContext>;
export declare type PostApiIndriveIntegrationAccessTokenMutationResult = NonNullable<Awaited<ReturnType<typeof postApiIndriveIntegrationAccessToken>>>;
export declare type PostApiIndriveIntegrationAccessTokenMutationBody = DriverId;
export declare type PostApiIndriveIntegrationAccessTokenMutationError = AxiosError<unknown>;
/**
 * @summary Get access token
 */
export declare const usePostApiIndriveIntegrationAccessToken: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAccessTokens, any>, TError, {
        data: DriverId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAccessTokens, any>, TError, {
    data: DriverId;
}, TContext>;
/**
 * @summary Get client pre_approves
 */
export declare const getApiIndriveIntegrationClientsPreApproves: (params?: GetApiIndriveIntegrationClientsPreApprovesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSendPreApprovesMany>>;
export declare const getGetApiIndriveIntegrationClientsPreApprovesQueryKey: (params?: GetApiIndriveIntegrationClientsPreApprovesParams) => readonly ["/api/indrive-integration/clients/pre_approves", ...GetApiIndriveIntegrationClientsPreApprovesParams[]];
export declare const getGetApiIndriveIntegrationClientsPreApprovesQueryOptions: <TData = AxiosResponse<DataSendPreApprovesMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiIndriveIntegrationClientsPreApprovesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSendPreApprovesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSendPreApprovesMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiIndriveIntegrationClientsPreApprovesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiIndriveIntegrationClientsPreApproves>>>;
export declare type GetApiIndriveIntegrationClientsPreApprovesQueryError = AxiosError<unknown>;
/**
 * @summary Get client pre_approves
 */
export declare const useGetApiIndriveIntegrationClientsPreApproves: <TData = AxiosResponse<DataSendPreApprovesMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiIndriveIntegrationClientsPreApprovesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSendPreApprovesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download file from S3 by id
 */
export declare const getApiIndriveIntegrationCrmUploadedFilesIdDownload: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiIndriveIntegrationCrmUploadedFilesIdDownloadQueryKey: (id: string) => readonly [`/api/indrive-integration/crm/uploaded_files/${string}/download`];
export declare const getGetApiIndriveIntegrationCrmUploadedFilesIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiIndriveIntegrationCrmUploadedFilesIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiIndriveIntegrationCrmUploadedFilesIdDownload>>>;
export declare type GetApiIndriveIntegrationCrmUploadedFilesIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download file from S3 by id
 */
export declare const useGetApiIndriveIntegrationCrmUploadedFilesIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create pre_approve instances
 */
export declare const postApiIndriveIntegrationCrmPreApprove: (createPreApproveMany: CreatePreApproveMany[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPreApprovesMany>>;
export declare const getPostApiIndriveIntegrationCrmPreApproveMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPreApprovesMany, any>, TError, {
        data: CreatePreApproveMany[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPreApprovesMany, any>, TError, {
    data: CreatePreApproveMany[];
}, TContext>;
export declare type PostApiIndriveIntegrationCrmPreApproveMutationResult = NonNullable<Awaited<ReturnType<typeof postApiIndriveIntegrationCrmPreApprove>>>;
export declare type PostApiIndriveIntegrationCrmPreApproveMutationBody = CreatePreApproveMany[];
export declare type PostApiIndriveIntegrationCrmPreApproveMutationError = AxiosError<unknown>;
/**
 * @summary Create pre_approve instances
 */
export declare const usePostApiIndriveIntegrationCrmPreApprove: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPreApprovesMany, any>, TError, {
        data: CreatePreApproveMany[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPreApprovesMany, any>, TError, {
    data: CreatePreApproveMany[];
}, TContext>;
/**
 * @summary Search pre_approves
 */
export declare const getApiIndriveIntegrationCrmPreApproves: (params?: GetApiIndriveIntegrationCrmPreApprovesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPreApprovesManyPaginated>>;
export declare const getGetApiIndriveIntegrationCrmPreApprovesQueryKey: (params?: GetApiIndriveIntegrationCrmPreApprovesParams) => readonly ["/api/indrive-integration/crm/pre_approves", ...GetApiIndriveIntegrationCrmPreApprovesParams[]];
export declare const getGetApiIndriveIntegrationCrmPreApprovesQueryOptions: <TData = AxiosResponse<DataPreApprovesManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiIndriveIntegrationCrmPreApprovesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPreApprovesManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPreApprovesManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiIndriveIntegrationCrmPreApprovesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiIndriveIntegrationCrmPreApproves>>>;
export declare type GetApiIndriveIntegrationCrmPreApprovesQueryError = AxiosError<unknown>;
/**
 * @summary Search pre_approves
 */
export declare const useGetApiIndriveIntegrationCrmPreApproves: <TData = AxiosResponse<DataPreApprovesManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiIndriveIntegrationCrmPreApprovesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPreApprovesManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Encrypt drivers data
 */
export declare const postApiIndriveIntegrationCrmEncryptDrivers: (encryptDriverMany: EncryptDriverMany[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEncryptDriverMany>>;
export declare const getPostApiIndriveIntegrationCrmEncryptDriversMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEncryptDriverMany, any>, TError, {
        data: EncryptDriverMany[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEncryptDriverMany, any>, TError, {
    data: EncryptDriverMany[];
}, TContext>;
export declare type PostApiIndriveIntegrationCrmEncryptDriversMutationResult = NonNullable<Awaited<ReturnType<typeof postApiIndriveIntegrationCrmEncryptDrivers>>>;
export declare type PostApiIndriveIntegrationCrmEncryptDriversMutationBody = EncryptDriverMany[];
export declare type PostApiIndriveIntegrationCrmEncryptDriversMutationError = AxiosError<unknown>;
/**
 * @summary Encrypt drivers data
 */
export declare const usePostApiIndriveIntegrationCrmEncryptDrivers: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEncryptDriverMany, any>, TError, {
        data: EncryptDriverMany[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEncryptDriverMany, any>, TError, {
    data: EncryptDriverMany[];
}, TContext>;
