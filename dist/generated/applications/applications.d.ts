import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { ApplicationConfirmPayload, ApplicationOnlyCalcIdExpectedProductTypeOfferId, ApplicationOnlyCalcIdOfferId, ApplicationOnlyCalcIdOfferIdPurpose, ApplicationOnlyStatus, CallUserActionBody, CompleteCallAttestationBody, CompleteCallVerification, CompleteCreystoVerification, CompleteWorkVerification, ConfirmSigningBody, ContractDocumentOnlyStatus, CreateApplication, DataApplication, DataApplicationExcludeStatusStatusDescription, DataApplicationExcludeStatusStatusDescriptionPaginated, DataApplicationExtendedResponse, DataApplicationMany, DataApplicationManyPaginated, DataApplicationOnlyStatus, DataApplicationsByStatusesMany, DataCanApplicationResponse, DataCanClientCreateApplicationResponse, DataContractDocumentMany, DataGetClientStatusByApplicationsResponse, DataLivenessResponse, DataProcessDefinitionMany, DataReadinessResponse, DataSearchTaskResponseExcludeResultTypePaginated, DataSignaturesManyPaginated, DataSigningsManyPaginated, DataStartCallAttestationOnlyCallInterval, DataSuccessResponse, DataTask, DataTaskMany, FinishOrderCreationBody, GetApiApplicationsApplicationsParams, GetApiApplicationsCrmApplicationsCanCreateParams, GetApiApplicationsCrmApplicationsCountByStatusesParams, GetApiApplicationsCrmApplicationsParams, GetApiApplicationsCrmSigningsParams, GetApiApplicationsCrmTasksParams, GetApiApplicationsDigitalSignaturesParams, PostApiApplicationsApplicationsIdUploadSignatureBody, RestartTaskFiltersExcludeCompleted, RestartVerification, SearchTaskFiltersOnlyIdIn, SelectSignatureBody, StartCallAttestation, TaskOnlyResult, UpdateApplicationPartial } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiApplicationsReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiApplicationsReadinessQueryKey: () => readonly ["/api/applications/readiness"];
export declare const getGetApiApplicationsReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsReadiness>>>;
export declare type GetApiApplicationsReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiApplicationsReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiApplicationsLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiApplicationsLivenessQueryKey: () => readonly ["/api/applications/liveness"];
export declare const getGetApiApplicationsLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsLiveness>>>;
export declare type GetApiApplicationsLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiApplicationsLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiApplicationsMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiApplicationsMetricsQueryKey: () => readonly ["/api/applications/metrics"];
export declare const getGetApiApplicationsMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsMetrics>>>;
export declare type GetApiApplicationsMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiApplicationsMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search applications
 */
export declare const getApiApplicationsApplications: (params?: GetApiApplicationsApplicationsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescriptionPaginated>>;
export declare const getGetApiApplicationsApplicationsQueryKey: (params?: GetApiApplicationsApplicationsParams) => readonly ["/api/applications/applications", ...GetApiApplicationsApplicationsParams[]];
export declare const getGetApiApplicationsApplicationsQueryOptions: <TData = AxiosResponse<DataApplicationExcludeStatusStatusDescriptionPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsApplicationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescriptionPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescriptionPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsApplicationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsApplications>>>;
export declare type GetApiApplicationsApplicationsQueryError = AxiosError<unknown>;
/**
 * @summary Search applications
 */
export declare const useGetApiApplicationsApplications: <TData = AxiosResponse<DataApplicationExcludeStatusStatusDescriptionPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsApplicationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescriptionPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create application
 */
export declare const postApiApplicationsApplications: (applicationOnlyCalcIdExpectedProductTypeOfferId: ApplicationOnlyCalcIdExpectedProductTypeOfferId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        data: ApplicationOnlyCalcIdExpectedProductTypeOfferId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    data: ApplicationOnlyCalcIdExpectedProductTypeOfferId;
}, TContext>;
export declare type PostApiApplicationsApplicationsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplications>>>;
export declare type PostApiApplicationsApplicationsMutationBody = ApplicationOnlyCalcIdExpectedProductTypeOfferId;
export declare type PostApiApplicationsApplicationsMutationError = AxiosError<unknown>;
/**
 * @summary Create application
 */
export declare const usePostApiApplicationsApplications: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        data: ApplicationOnlyCalcIdExpectedProductTypeOfferId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    data: ApplicationOnlyCalcIdExpectedProductTypeOfferId;
}, TContext>;
/**
 * @summary Can applications status
 */
export declare const getApiApplicationsApplicationsCanCreate: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCanApplicationResponse>>;
export declare const getGetApiApplicationsApplicationsCanCreateQueryKey: () => readonly ["/api/applications/applications/can_create"];
export declare const getGetApiApplicationsApplicationsCanCreateQueryOptions: <TData = AxiosResponse<DataCanApplicationResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataCanApplicationResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCanApplicationResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsApplicationsCanCreateQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsApplicationsCanCreate>>>;
export declare type GetApiApplicationsApplicationsCanCreateQueryError = AxiosError<unknown>;
/**
 * @summary Can applications status
 */
export declare const useGetApiApplicationsApplicationsCanCreate: <TData = AxiosResponse<DataCanApplicationResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataCanApplicationResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Call attestation intervals
 */
export declare const getApiApplicationsApplicationsCallAttestationIntervals: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataStartCallAttestationOnlyCallInterval>>;
export declare const getGetApiApplicationsApplicationsCallAttestationIntervalsQueryKey: () => readonly ["/api/applications/applications/call_attestation_intervals"];
export declare const getGetApiApplicationsApplicationsCallAttestationIntervalsQueryOptions: <TData = AxiosResponse<DataStartCallAttestationOnlyCallInterval, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataStartCallAttestationOnlyCallInterval, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataStartCallAttestationOnlyCallInterval, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsApplicationsCallAttestationIntervalsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsApplicationsCallAttestationIntervals>>>;
export declare type GetApiApplicationsApplicationsCallAttestationIntervalsQueryError = AxiosError<unknown>;
/**
 * @summary Call attestation intervals
 */
export declare const useGetApiApplicationsApplicationsCallAttestationIntervals: <TData = AxiosResponse<DataStartCallAttestationOnlyCallInterval, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataStartCallAttestationOnlyCallInterval, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get application by UUID
 */
export declare const getApiApplicationsApplicationsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getGetApiApplicationsApplicationsIdQueryKey: (id: string) => readonly [`/api/applications/applications/${string}`];
export declare const getGetApiApplicationsApplicationsIdQueryOptions: <TData = AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsApplicationsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsApplicationsId>>>;
export declare type GetApiApplicationsApplicationsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get application by UUID
 */
export declare const useGetApiApplicationsApplicationsId: <TData = AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update application
 */
export declare const patchApiApplicationsApplicationsId: (id: string, applicationOnlyCalcIdOfferIdPurpose: ApplicationOnlyCalcIdOfferIdPurpose, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPatchApiApplicationsApplicationsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: ApplicationOnlyCalcIdOfferIdPurpose;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: ApplicationOnlyCalcIdOfferIdPurpose;
}, TContext>;
export declare type PatchApiApplicationsApplicationsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiApplicationsApplicationsId>>>;
export declare type PatchApiApplicationsApplicationsIdMutationBody = ApplicationOnlyCalcIdOfferIdPurpose;
export declare type PatchApiApplicationsApplicationsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update application
 */
export declare const usePatchApiApplicationsApplicationsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: ApplicationOnlyCalcIdOfferIdPurpose;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: ApplicationOnlyCalcIdOfferIdPurpose;
}, TContext>;
/**
 * @summary Confirm application
 */
export declare const postApiApplicationsApplicationsIdConfirm: (id: string, applicationConfirmPayload: ApplicationConfirmPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdConfirmMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: ApplicationConfirmPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: ApplicationConfirmPayload;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdConfirmMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdConfirm>>>;
export declare type PostApiApplicationsApplicationsIdConfirmMutationBody = ApplicationConfirmPayload;
export declare type PostApiApplicationsApplicationsIdConfirmMutationError = AxiosError<unknown>;
/**
 * @summary Confirm application
 */
export declare const usePostApiApplicationsApplicationsIdConfirm: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: ApplicationConfirmPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: ApplicationConfirmPayload;
}, TContext>;
/**
 * @summary Confirm card
 */
export declare const postApiApplicationsApplicationsIdConfirmCard: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdConfirmCardMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdConfirmCardMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdConfirmCard>>>;
export declare type PostApiApplicationsApplicationsIdConfirmCardMutationError = AxiosError<unknown>;
/**
 * @summary Confirm card
 */
export declare const usePostApiApplicationsApplicationsIdConfirmCard: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Confirm merchants order
 */
export declare const postApiApplicationsApplicationsIdConfirmOrder: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdConfirmOrderMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdConfirmOrderMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdConfirmOrder>>>;
export declare type PostApiApplicationsApplicationsIdConfirmOrderMutationError = AxiosError<unknown>;
/**
 * @summary Confirm merchants order
 */
export declare const usePostApiApplicationsApplicationsIdConfirmOrder: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Cancel application
 */
export declare const postApiApplicationsApplicationsIdCancel: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdCancel>>>;
export declare type PostApiApplicationsApplicationsIdCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel application
 */
export declare const usePostApiApplicationsApplicationsIdCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Select offer
 */
export declare const postApiApplicationsApplicationsIdSelectOffer: (id: string, applicationOnlyCalcIdOfferId: ApplicationOnlyCalcIdOfferId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdSelectOfferMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: ApplicationOnlyCalcIdOfferId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: ApplicationOnlyCalcIdOfferId;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdSelectOfferMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdSelectOffer>>>;
export declare type PostApiApplicationsApplicationsIdSelectOfferMutationBody = ApplicationOnlyCalcIdOfferId;
export declare type PostApiApplicationsApplicationsIdSelectOfferMutationError = AxiosError<unknown>;
/**
 * @summary Select offer
 */
export declare const usePostApiApplicationsApplicationsIdSelectOffer: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: ApplicationOnlyCalcIdOfferId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: ApplicationOnlyCalcIdOfferId;
}, TContext>;
/**
 * @summary Upload digital signature
 */
export declare const postApiApplicationsApplicationsIdUploadSignature: (id: string, postApiApplicationsApplicationsIdUploadSignatureBody: PostApiApplicationsApplicationsIdUploadSignatureBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdUploadSignatureMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: PostApiApplicationsApplicationsIdUploadSignatureBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: PostApiApplicationsApplicationsIdUploadSignatureBody;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdUploadSignatureMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdUploadSignature>>>;
export declare type PostApiApplicationsApplicationsIdUploadSignatureMutationBody = PostApiApplicationsApplicationsIdUploadSignatureBody;
export declare type PostApiApplicationsApplicationsIdUploadSignatureMutationError = AxiosError<unknown>;
/**
 * @summary Upload digital signature
 */
export declare const usePostApiApplicationsApplicationsIdUploadSignature: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: PostApiApplicationsApplicationsIdUploadSignatureBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: PostApiApplicationsApplicationsIdUploadSignatureBody;
}, TContext>;
/**
 * @summary Select digital signature
 */
export declare const postApiApplicationsApplicationsIdSelectSignature: (id: string, selectSignatureBody: SelectSignatureBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdSelectSignatureMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: SelectSignatureBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: SelectSignatureBody;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdSelectSignatureMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdSelectSignature>>>;
export declare type PostApiApplicationsApplicationsIdSelectSignatureMutationBody = SelectSignatureBody;
export declare type PostApiApplicationsApplicationsIdSelectSignatureMutationError = AxiosError<unknown>;
/**
 * @summary Select digital signature
 */
export declare const usePostApiApplicationsApplicationsIdSelectSignature: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: SelectSignatureBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: SelectSignatureBody;
}, TContext>;
/**
 * @summary Confirm data correction task and send to risks
 */
export declare const postApiApplicationsApplicationsIdCompleteDataCorrection: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdCompleteDataCorrectionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdCompleteDataCorrectionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdCompleteDataCorrection>>>;
export declare type PostApiApplicationsApplicationsIdCompleteDataCorrectionMutationError = AxiosError<unknown>;
/**
 * @summary Confirm data correction task and send to risks
 */
export declare const usePostApiApplicationsApplicationsIdCompleteDataCorrection: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Cancel offer
 */
export declare const postApiApplicationsApplicationsIdCancelOffer: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdCancelOfferMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdCancelOfferMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdCancelOffer>>>;
export declare type PostApiApplicationsApplicationsIdCancelOfferMutationError = AxiosError<unknown>;
/**
 * @summary Cancel offer
 */
export declare const usePostApiApplicationsApplicationsIdCancelOffer: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Call user action
 */
export declare const postApiApplicationsApplicationsIdCallAction: (id: string, callUserActionBody: CallUserActionBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdCallActionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: CallUserActionBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: CallUserActionBody;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdCallActionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdCallAction>>>;
export declare type PostApiApplicationsApplicationsIdCallActionMutationBody = CallUserActionBody;
export declare type PostApiApplicationsApplicationsIdCallActionMutationError = AxiosError<unknown>;
/**
 * @summary Call user action
 */
export declare const usePostApiApplicationsApplicationsIdCallAction: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: CallUserActionBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: CallUserActionBody;
}, TContext>;
/**
 * @summary Start call attestation
 */
export declare const postApiApplicationsApplicationsIdStartCallAttestation: (id: string, startCallAttestation: StartCallAttestation, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdStartCallAttestationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: StartCallAttestation;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: StartCallAttestation;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdStartCallAttestationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdStartCallAttestation>>>;
export declare type PostApiApplicationsApplicationsIdStartCallAttestationMutationBody = StartCallAttestation;
export declare type PostApiApplicationsApplicationsIdStartCallAttestationMutationError = AxiosError<unknown>;
/**
 * @summary Start call attestation
 */
export declare const usePostApiApplicationsApplicationsIdStartCallAttestation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: StartCallAttestation;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: StartCallAttestation;
}, TContext>;
/**
 * @summary Complete questionnaire
 */
export declare const postApiApplicationsApplicationsIdCompleteQuestionnaire: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdCompleteQuestionnaireMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdCompleteQuestionnaireMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdCompleteQuestionnaire>>>;
export declare type PostApiApplicationsApplicationsIdCompleteQuestionnaireMutationError = AxiosError<unknown>;
/**
 * @summary Complete questionnaire
 */
export declare const usePostApiApplicationsApplicationsIdCompleteQuestionnaire: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Confirm signing
 */
export declare const postApiApplicationsApplicationsIdConfirmSigning: (id: string, confirmSigningBody: ConfirmSigningBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExcludeStatusStatusDescription>>;
export declare const getPostApiApplicationsApplicationsIdConfirmSigningMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: ConfirmSigningBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: ConfirmSigningBody;
}, TContext>;
export declare type PostApiApplicationsApplicationsIdConfirmSigningMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsApplicationsIdConfirmSigning>>>;
export declare type PostApiApplicationsApplicationsIdConfirmSigningMutationBody = ConfirmSigningBody;
export declare type PostApiApplicationsApplicationsIdConfirmSigningMutationError = AxiosError<unknown>;
/**
 * @summary Confirm signing
 */
export declare const usePostApiApplicationsApplicationsIdConfirmSigning: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
        id: string;
        data: ConfirmSigningBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationExcludeStatusStatusDescription, any>, TError, {
    id: string;
    data: ConfirmSigningBody;
}, TContext>;
/**
 * @summary Search signatures
 */
export declare const getApiApplicationsDigitalSignatures: (params?: GetApiApplicationsDigitalSignaturesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSignaturesManyPaginated>>;
export declare const getGetApiApplicationsDigitalSignaturesQueryKey: (params?: GetApiApplicationsDigitalSignaturesParams) => readonly ["/api/applications/digital_signatures", ...GetApiApplicationsDigitalSignaturesParams[]];
export declare const getGetApiApplicationsDigitalSignaturesQueryOptions: <TData = AxiosResponse<DataSignaturesManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsDigitalSignaturesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSignaturesManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSignaturesManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsDigitalSignaturesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsDigitalSignatures>>>;
export declare type GetApiApplicationsDigitalSignaturesQueryError = AxiosError<unknown>;
/**
 * @summary Search signatures
 */
export declare const useGetApiApplicationsDigitalSignatures: <TData = AxiosResponse<DataSignaturesManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsDigitalSignaturesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSignaturesManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download signature
 */
export declare const getApiApplicationsDigitalSignaturesFileIdDownload: (fileId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiApplicationsDigitalSignaturesFileIdDownloadQueryKey: (fileId: string) => readonly [`/api/applications/digital_signatures/${string}/download`];
export declare const getGetApiApplicationsDigitalSignaturesFileIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(fileId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsDigitalSignaturesFileIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsDigitalSignaturesFileIdDownload>>>;
export declare type GetApiApplicationsDigitalSignaturesFileIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download signature
 */
export declare const useGetApiApplicationsDigitalSignaturesFileIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(fileId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get documents by contract id
 */
export declare const getApiApplicationsDocumentsContractsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractDocumentMany>>;
export declare const getGetApiApplicationsDocumentsContractsIdQueryKey: (id: string) => readonly [`/api/applications/documents/contracts/${string}`];
export declare const getGetApiApplicationsDocumentsContractsIdQueryOptions: <TData = AxiosResponse<DataContractDocumentMany, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDocumentMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContractDocumentMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsDocumentsContractsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsDocumentsContractsId>>>;
export declare type GetApiApplicationsDocumentsContractsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get documents by contract id
 */
export declare const useGetApiApplicationsDocumentsContractsId: <TData = AxiosResponse<DataContractDocumentMany, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContractDocumentMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download document
 */
export declare const getApiApplicationsDocumentsContractsIdDocumentIdDownload: (id: number, documentId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiApplicationsDocumentsContractsIdDocumentIdDownloadQueryKey: (id: number, documentId: string) => readonly [`/api/applications/documents/contracts/${number}/${string}/download`];
export declare const getGetApiApplicationsDocumentsContractsIdDocumentIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: number, documentId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsDocumentsContractsIdDocumentIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsDocumentsContractsIdDocumentIdDownload>>>;
export declare type GetApiApplicationsDocumentsContractsIdDocumentIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download document
 */
export declare const useGetApiApplicationsDocumentsContractsIdDocumentIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: number, documentId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Confirm all documents by contract id
 */
export declare const patchApiApplicationsDocumentsContractsIdConfirm: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContractDocumentMany>>;
export declare const getPatchApiApplicationsDocumentsContractsIdConfirmMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContractDocumentMany, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContractDocumentMany, any>, TError, {
    id: number;
}, TContext>;
export declare type PatchApiApplicationsDocumentsContractsIdConfirmMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiApplicationsDocumentsContractsIdConfirm>>>;
export declare type PatchApiApplicationsDocumentsContractsIdConfirmMutationError = AxiosError<unknown>;
/**
 * @summary Confirm all documents by contract id
 */
export declare const usePatchApiApplicationsDocumentsContractsIdConfirm: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContractDocumentMany, any>, TError, {
        id: number;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContractDocumentMany, any>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Confirm document by id
 */
export declare const patchApiApplicationsDocumentsContractsIdDocumentId: (id: number, documentId: string, contractDocumentOnlyStatus: ContractDocumentOnlyStatus, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPatchApiApplicationsDocumentsContractsIdDocumentIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        documentId: string;
        data: ContractDocumentOnlyStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    documentId: string;
    data: ContractDocumentOnlyStatus;
}, TContext>;
export declare type PatchApiApplicationsDocumentsContractsIdDocumentIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiApplicationsDocumentsContractsIdDocumentId>>>;
export declare type PatchApiApplicationsDocumentsContractsIdDocumentIdMutationBody = ContractDocumentOnlyStatus;
export declare type PatchApiApplicationsDocumentsContractsIdDocumentIdMutationError = AxiosError<unknown>;
/**
 * @summary Confirm document by id
 */
export declare const usePatchApiApplicationsDocumentsContractsIdDocumentId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: number;
        documentId: string;
        data: ContractDocumentOnlyStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: number;
    documentId: string;
    data: ContractDocumentOnlyStatus;
}, TContext>;
/**
 * @summary Search applications
 */
export declare const getApiApplicationsCrmApplications: (params?: GetApiApplicationsCrmApplicationsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationManyPaginated>>;
export declare const getGetApiApplicationsCrmApplicationsQueryKey: (params?: GetApiApplicationsCrmApplicationsParams) => readonly ["/api/applications/crm/applications", ...GetApiApplicationsCrmApplicationsParams[]];
export declare const getGetApiApplicationsCrmApplicationsQueryOptions: <TData = AxiosResponse<DataApplicationManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsCrmApplicationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataApplicationManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmApplicationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmApplications>>>;
export declare type GetApiApplicationsCrmApplicationsQueryError = AxiosError<unknown>;
/**
 * @summary Search applications
 */
export declare const useGetApiApplicationsCrmApplications: <TData = AxiosResponse<DataApplicationManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsCrmApplicationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create application
 */
export declare const postApiApplicationsCrmApplications: (createApplication: CreateApplication, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        data: CreateApplication;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    data: CreateApplication;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplications>>>;
export declare type PostApiApplicationsCrmApplicationsMutationBody = CreateApplication;
export declare type PostApiApplicationsCrmApplicationsMutationError = AxiosError<unknown>;
/**
 * @summary Create application
 */
export declare const usePostApiApplicationsCrmApplications: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        data: CreateApplication;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    data: CreateApplication;
}, TContext>;
/**
 * @summary Restart verification
 */
export declare const postApiApplicationsCrmApplicationsRestartVerification: (restartVerification: RestartVerification, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationMany>>;
export declare const getPostApiApplicationsCrmApplicationsRestartVerificationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationMany, any>, TError, {
        data: RestartVerification;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplicationMany, any>, TError, {
    data: RestartVerification;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsRestartVerificationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsRestartVerification>>>;
export declare type PostApiApplicationsCrmApplicationsRestartVerificationMutationBody = RestartVerification;
export declare type PostApiApplicationsCrmApplicationsRestartVerificationMutationError = AxiosError<unknown>;
/**
 * @summary Restart verification
 */
export declare const usePostApiApplicationsCrmApplicationsRestartVerification: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplicationMany, any>, TError, {
        data: RestartVerification;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplicationMany, any>, TError, {
    data: RestartVerification;
}, TContext>;
/**
 * @summary Can client create application
 */
export declare const getApiApplicationsCrmApplicationsCanCreate: (params: GetApiApplicationsCrmApplicationsCanCreateParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCanClientCreateApplicationResponse>>;
export declare const getGetApiApplicationsCrmApplicationsCanCreateQueryKey: (params: GetApiApplicationsCrmApplicationsCanCreateParams) => readonly ["/api/applications/crm/applications/can_create", ...GetApiApplicationsCrmApplicationsCanCreateParams[]];
export declare const getGetApiApplicationsCrmApplicationsCanCreateQueryOptions: <TData = AxiosResponse<DataCanClientCreateApplicationResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiApplicationsCrmApplicationsCanCreateParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCanClientCreateApplicationResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCanClientCreateApplicationResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmApplicationsCanCreateQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmApplicationsCanCreate>>>;
export declare type GetApiApplicationsCrmApplicationsCanCreateQueryError = AxiosError<unknown>;
/**
 * @summary Can client create application
 */
export declare const useGetApiApplicationsCrmApplicationsCanCreate: <TData = AxiosResponse<DataCanClientCreateApplicationResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiApplicationsCrmApplicationsCanCreateParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCanClientCreateApplicationResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get application technical statuses
 */
export declare const getApiApplicationsCrmApplicationsTechnicalStatuses: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationOnlyStatus>>;
export declare const getGetApiApplicationsCrmApplicationsTechnicalStatusesQueryKey: () => readonly ["/api/applications/crm/applications/technical_statuses"];
export declare const getGetApiApplicationsCrmApplicationsTechnicalStatusesQueryOptions: <TData = AxiosResponse<DataApplicationOnlyStatus, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationOnlyStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataApplicationOnlyStatus, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmApplicationsTechnicalStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmApplicationsTechnicalStatuses>>>;
export declare type GetApiApplicationsCrmApplicationsTechnicalStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Get application technical statuses
 */
export declare const useGetApiApplicationsCrmApplicationsTechnicalStatuses: <TData = AxiosResponse<DataApplicationOnlyStatus, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationOnlyStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get application public statuses
 */
export declare const getApiApplicationsCrmApplicationsPublicStatuses: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationOnlyStatus>>;
export declare const getGetApiApplicationsCrmApplicationsPublicStatusesQueryKey: () => readonly ["/api/applications/crm/applications/public_statuses"];
export declare const getGetApiApplicationsCrmApplicationsPublicStatusesQueryOptions: <TData = AxiosResponse<DataApplicationOnlyStatus, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationOnlyStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataApplicationOnlyStatus, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmApplicationsPublicStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmApplicationsPublicStatuses>>>;
export declare type GetApiApplicationsCrmApplicationsPublicStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Get application public statuses
 */
export declare const useGetApiApplicationsCrmApplicationsPublicStatuses: <TData = AxiosResponse<DataApplicationOnlyStatus, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationOnlyStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get applications stats
 */
export declare const getApiApplicationsCrmApplicationsCountByStatuses: (params?: GetApiApplicationsCrmApplicationsCountByStatusesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationsByStatusesMany>>;
export declare const getGetApiApplicationsCrmApplicationsCountByStatusesQueryKey: (params?: GetApiApplicationsCrmApplicationsCountByStatusesParams) => readonly ["/api/applications/crm/applications/count/by_statuses", ...GetApiApplicationsCrmApplicationsCountByStatusesParams[]];
export declare const getGetApiApplicationsCrmApplicationsCountByStatusesQueryOptions: <TData = AxiosResponse<DataApplicationsByStatusesMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsCrmApplicationsCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationsByStatusesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataApplicationsByStatusesMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmApplicationsCountByStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmApplicationsCountByStatuses>>>;
export declare type GetApiApplicationsCrmApplicationsCountByStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Get applications stats
 */
export declare const useGetApiApplicationsCrmApplicationsCountByStatuses: <TData = AxiosResponse<DataApplicationsByStatusesMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsCrmApplicationsCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationsByStatusesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get application by ID
 */
export declare const getApiApplicationsCrmApplicationsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplicationExtendedResponse>>;
export declare const getGetApiApplicationsCrmApplicationsIdQueryKey: (id: string) => readonly [`/api/applications/crm/applications/${string}`];
export declare const getGetApiApplicationsCrmApplicationsIdQueryOptions: <TData = AxiosResponse<DataApplicationExtendedResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationExtendedResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataApplicationExtendedResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmApplicationsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmApplicationsId>>>;
export declare type GetApiApplicationsCrmApplicationsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get application by ID
 */
export declare const useGetApiApplicationsCrmApplicationsId: <TData = AxiosResponse<DataApplicationExtendedResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataApplicationExtendedResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update application
 */
export declare const patchApiApplicationsCrmApplicationsId: (id: string, updateApplicationPartial: UpdateApplicationPartial, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPatchApiApplicationsCrmApplicationsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: UpdateApplicationPartial;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: UpdateApplicationPartial;
}, TContext>;
export declare type PatchApiApplicationsCrmApplicationsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiApplicationsCrmApplicationsId>>>;
export declare type PatchApiApplicationsCrmApplicationsIdMutationBody = UpdateApplicationPartial;
export declare type PatchApiApplicationsCrmApplicationsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update application
 */
export declare const usePatchApiApplicationsCrmApplicationsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: UpdateApplicationPartial;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: UpdateApplicationPartial;
}, TContext>;
/**
 * @summary Rollback risks decision
 */
export declare const postApiApplicationsCrmApplicationsIdRollbackRisksDecision: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdRollbackRisksDecisionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdRollbackRisksDecisionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdRollbackRisksDecision>>>;
export declare type PostApiApplicationsCrmApplicationsIdRollbackRisksDecisionMutationError = AxiosError<unknown>;
/**
 * @summary Rollback risks decision
 */
export declare const usePostApiApplicationsCrmApplicationsIdRollbackRisksDecision: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Cancel application
 */
export declare const postApiApplicationsCrmApplicationsIdCancel: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdCancel>>>;
export declare type PostApiApplicationsCrmApplicationsIdCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel application
 */
export declare const usePostApiApplicationsCrmApplicationsIdCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Set scoring result
 */
export declare const postApiApplicationsCrmApplicationsIdSetScoringResult: (id: string, applicationOnlyStatus: ApplicationOnlyStatus, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdSetScoringResultMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: ApplicationOnlyStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: ApplicationOnlyStatus;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdSetScoringResultMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdSetScoringResult>>>;
export declare type PostApiApplicationsCrmApplicationsIdSetScoringResultMutationBody = ApplicationOnlyStatus;
export declare type PostApiApplicationsCrmApplicationsIdSetScoringResultMutationError = AxiosError<unknown>;
/**
 * @summary Set scoring result
 */
export declare const usePostApiApplicationsCrmApplicationsIdSetScoringResult: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: ApplicationOnlyStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: ApplicationOnlyStatus;
}, TContext>;
/**
 * @deprecated
 * @summary Confirm doc verification task and send to risks
 */
export declare const postApiApplicationsCrmApplicationsIdCompleteDocVerification: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdCompleteDocVerificationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteDocVerificationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdCompleteDocVerification>>>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteDocVerificationMutationError = AxiosError<unknown>;
/**
 * @deprecated
 * @summary Confirm doc verification task and send to risks
 */
export declare const usePostApiApplicationsCrmApplicationsIdCompleteDocVerification: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Confirm call verification task and send to risks
 */
export declare const postApiApplicationsCrmApplicationsIdCompleteCallVerification: (id: string, completeCallVerification: CompleteCallVerification, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdCompleteCallVerificationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: CompleteCallVerification;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: CompleteCallVerification;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCallVerificationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdCompleteCallVerification>>>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCallVerificationMutationBody = CompleteCallVerification;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCallVerificationMutationError = AxiosError<unknown>;
/**
 * @summary Confirm call verification task and send to risks
 */
export declare const usePostApiApplicationsCrmApplicationsIdCompleteCallVerification: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: CompleteCallVerification;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: CompleteCallVerification;
}, TContext>;
/**
 * @summary Confirm work verification task and send to risks
 */
export declare const postApiApplicationsCrmApplicationsIdCompleteWorkVerification: (id: string, completeWorkVerification: CompleteWorkVerification, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdCompleteWorkVerificationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: CompleteWorkVerification;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: CompleteWorkVerification;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteWorkVerificationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdCompleteWorkVerification>>>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteWorkVerificationMutationBody = CompleteWorkVerification;
export declare type PostApiApplicationsCrmApplicationsIdCompleteWorkVerificationMutationError = AxiosError<unknown>;
/**
 * @summary Confirm work verification task and send to risks
 */
export declare const usePostApiApplicationsCrmApplicationsIdCompleteWorkVerification: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: CompleteWorkVerification;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: CompleteWorkVerification;
}, TContext>;
/**
 * @summary Complete Creysto verification
 */
export declare const postApiApplicationsCrmApplicationsIdCompleteCreystoVerification: (id: string, completeCreystoVerification: CompleteCreystoVerification, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdCompleteCreystoVerificationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: CompleteCreystoVerification;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: CompleteCreystoVerification;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCreystoVerificationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdCompleteCreystoVerification>>>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCreystoVerificationMutationBody = CompleteCreystoVerification;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCreystoVerificationMutationError = AxiosError<unknown>;
/**
 * @summary Complete Creysto verification
 */
export declare const usePostApiApplicationsCrmApplicationsIdCompleteCreystoVerification: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: CompleteCreystoVerification;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: CompleteCreystoVerification;
}, TContext>;
/**
 * @summary Finish merchants order confirmation
 */
export declare const postApiApplicationsCrmApplicationsIdFinishOrderConfirmation: (id: string, finishOrderCreationBody: FinishOrderCreationBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdFinishOrderConfirmationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: FinishOrderCreationBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: FinishOrderCreationBody;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdFinishOrderConfirmationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdFinishOrderConfirmation>>>;
export declare type PostApiApplicationsCrmApplicationsIdFinishOrderConfirmationMutationBody = FinishOrderCreationBody;
export declare type PostApiApplicationsCrmApplicationsIdFinishOrderConfirmationMutationError = AxiosError<unknown>;
/**
 * @summary Finish merchants order confirmation
 */
export declare const usePostApiApplicationsCrmApplicationsIdFinishOrderConfirmation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: FinishOrderCreationBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: FinishOrderCreationBody;
}, TContext>;
/**
 * @summary Complete call attestation
 */
export declare const postApiApplicationsCrmApplicationsIdCompleteCallAttestation: (id: string, completeCallAttestationBody: CompleteCallAttestationBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataApplication>>;
export declare const getPostApiApplicationsCrmApplicationsIdCompleteCallAttestationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: CompleteCallAttestationBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: CompleteCallAttestationBody;
}, TContext>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCallAttestationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmApplicationsIdCompleteCallAttestation>>>;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCallAttestationMutationBody = CompleteCallAttestationBody;
export declare type PostApiApplicationsCrmApplicationsIdCompleteCallAttestationMutationError = AxiosError<unknown>;
/**
 * @summary Complete call attestation
 */
export declare const usePostApiApplicationsCrmApplicationsIdCompleteCallAttestation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataApplication, any>, TError, {
        id: string;
        data: CompleteCallAttestationBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataApplication, any>, TError, {
    id: string;
    data: CompleteCallAttestationBody;
}, TContext>;
/**
 * @summary Get client status by applications for webitel
 */
export declare const getApiApplicationsCrmApplicationsPhoneNumberWebitel: (phoneNumber?: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetClientStatusByApplicationsResponse>>;
export declare const getGetApiApplicationsCrmApplicationsPhoneNumberWebitelQueryKey: (phoneNumber?: string) => readonly [`/api/applications/crm/applications/${string}/webitel`];
export declare const getGetApiApplicationsCrmApplicationsPhoneNumberWebitelQueryOptions: <TData = AxiosResponse<DataGetClientStatusByApplicationsResponse, any>, TError = AxiosError<unknown, any>>(phoneNumber?: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetClientStatusByApplicationsResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetClientStatusByApplicationsResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmApplicationsPhoneNumberWebitelQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmApplicationsPhoneNumberWebitel>>>;
export declare type GetApiApplicationsCrmApplicationsPhoneNumberWebitelQueryError = AxiosError<unknown>;
/**
 * @summary Get client status by applications for webitel
 */
export declare const useGetApiApplicationsCrmApplicationsPhoneNumberWebitel: <TData = AxiosResponse<DataGetClientStatusByApplicationsResponse, any>, TError = AxiosError<unknown, any>>(phoneNumber?: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetClientStatusByApplicationsResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search signings
 */
export declare const getApiApplicationsCrmSignings: (params?: GetApiApplicationsCrmSigningsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSigningsManyPaginated>>;
export declare const getGetApiApplicationsCrmSigningsQueryKey: (params?: GetApiApplicationsCrmSigningsParams) => readonly ["/api/applications/crm/signings", ...GetApiApplicationsCrmSigningsParams[]];
export declare const getGetApiApplicationsCrmSigningsQueryOptions: <TData = AxiosResponse<DataSigningsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsCrmSigningsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSigningsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSigningsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmSigningsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmSignings>>>;
export declare type GetApiApplicationsCrmSigningsQueryError = AxiosError<unknown>;
/**
 * @summary Search signings
 */
export declare const useGetApiApplicationsCrmSignings: <TData = AxiosResponse<DataSigningsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsCrmSigningsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSigningsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get process definitions
 */
export declare const getApiApplicationsCrmProcessDefinitions: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProcessDefinitionMany>>;
export declare const getGetApiApplicationsCrmProcessDefinitionsQueryKey: () => readonly ["/api/applications/crm/process_definitions"];
export declare const getGetApiApplicationsCrmProcessDefinitionsQueryOptions: <TData = AxiosResponse<DataProcessDefinitionMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataProcessDefinitionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataProcessDefinitionMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmProcessDefinitionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmProcessDefinitions>>>;
export declare type GetApiApplicationsCrmProcessDefinitionsQueryError = AxiosError<unknown>;
/**
 * @summary Get process definitions
 */
export declare const useGetApiApplicationsCrmProcessDefinitions: <TData = AxiosResponse<DataProcessDefinitionMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataProcessDefinitionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search tasks
 */
export declare const getApiApplicationsCrmTasks: (params?: GetApiApplicationsCrmTasksParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSearchTaskResponseExcludeResultTypePaginated>>;
export declare const getGetApiApplicationsCrmTasksQueryKey: (params?: GetApiApplicationsCrmTasksParams) => readonly ["/api/applications/crm/tasks", ...GetApiApplicationsCrmTasksParams[]];
export declare const getGetApiApplicationsCrmTasksQueryOptions: <TData = AxiosResponse<DataSearchTaskResponseExcludeResultTypePaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsCrmTasksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSearchTaskResponseExcludeResultTypePaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSearchTaskResponseExcludeResultTypePaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiApplicationsCrmTasksQueryResult = NonNullable<Awaited<ReturnType<typeof getApiApplicationsCrmTasks>>>;
export declare type GetApiApplicationsCrmTasksQueryError = AxiosError<unknown>;
/**
 * @summary Search tasks
 */
export declare const useGetApiApplicationsCrmTasks: <TData = AxiosResponse<DataSearchTaskResponseExcludeResultTypePaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiApplicationsCrmTasksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSearchTaskResponseExcludeResultTypePaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Bulk restart uncompleted tasks
 */
export declare const postApiApplicationsCrmTasksRestart: (restartTaskFiltersExcludeCompleted: RestartTaskFiltersExcludeCompleted, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTaskMany>>;
export declare const getPostApiApplicationsCrmTasksRestartMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTaskMany, any>, TError, {
        data: RestartTaskFiltersExcludeCompleted;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTaskMany, any>, TError, {
    data: RestartTaskFiltersExcludeCompleted;
}, TContext>;
export declare type PostApiApplicationsCrmTasksRestartMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmTasksRestart>>>;
export declare type PostApiApplicationsCrmTasksRestartMutationBody = RestartTaskFiltersExcludeCompleted;
export declare type PostApiApplicationsCrmTasksRestartMutationError = AxiosError<unknown>;
/**
 * @summary Bulk restart uncompleted tasks
 */
export declare const usePostApiApplicationsCrmTasksRestart: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTaskMany, any>, TError, {
        data: RestartTaskFiltersExcludeCompleted;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTaskMany, any>, TError, {
    data: RestartTaskFiltersExcludeCompleted;
}, TContext>;
/**
 * @summary Bulk cancel tasks
 */
export declare const postApiApplicationsCrmTasksCancel: (searchTaskFiltersOnlyIdIn: SearchTaskFiltersOnlyIdIn, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTaskMany>>;
export declare const getPostApiApplicationsCrmTasksCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTaskMany, any>, TError, {
        data: SearchTaskFiltersOnlyIdIn;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTaskMany, any>, TError, {
    data: SearchTaskFiltersOnlyIdIn;
}, TContext>;
export declare type PostApiApplicationsCrmTasksCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmTasksCancel>>>;
export declare type PostApiApplicationsCrmTasksCancelMutationBody = SearchTaskFiltersOnlyIdIn;
export declare type PostApiApplicationsCrmTasksCancelMutationError = AxiosError<unknown>;
/**
 * @summary Bulk cancel tasks
 */
export declare const usePostApiApplicationsCrmTasksCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTaskMany, any>, TError, {
        data: SearchTaskFiltersOnlyIdIn;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTaskMany, any>, TError, {
    data: SearchTaskFiltersOnlyIdIn;
}, TContext>;
/**
 * @summary Restart uncompleted task
 */
export declare const postApiApplicationsCrmTasksIdRestart: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTask>>;
export declare const getPostApiApplicationsCrmTasksIdRestartMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsCrmTasksIdRestartMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmTasksIdRestart>>>;
export declare type PostApiApplicationsCrmTasksIdRestartMutationError = AxiosError<unknown>;
/**
 * @summary Restart uncompleted task
 */
export declare const usePostApiApplicationsCrmTasksIdRestart: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTask, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Complete task
 */
export declare const postApiApplicationsCrmTasksIdComplete: (id: string, taskOnlyResult: TaskOnlyResult, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTask>>;
export declare const getPostApiApplicationsCrmTasksIdCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
        id: string;
        data: TaskOnlyResult;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
    id: string;
    data: TaskOnlyResult;
}, TContext>;
export declare type PostApiApplicationsCrmTasksIdCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmTasksIdComplete>>>;
export declare type PostApiApplicationsCrmTasksIdCompleteMutationBody = TaskOnlyResult;
export declare type PostApiApplicationsCrmTasksIdCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete task
 */
export declare const usePostApiApplicationsCrmTasksIdComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
        id: string;
        data: TaskOnlyResult;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTask, any>, TError, {
    id: string;
    data: TaskOnlyResult;
}, TContext>;
/**
 * @summary Make task incomplete
 */
export declare const postApiApplicationsCrmTasksIdNotComplete: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTask>>;
export declare const getPostApiApplicationsCrmTasksIdNotCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsCrmTasksIdNotCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmTasksIdNotComplete>>>;
export declare type PostApiApplicationsCrmTasksIdNotCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Make task incomplete
 */
export declare const usePostApiApplicationsCrmTasksIdNotComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTask, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Cancel task
 */
export declare const postApiApplicationsCrmTasksIdCancel: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTask>>;
export declare const getPostApiApplicationsCrmTasksIdCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiApplicationsCrmTasksIdCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiApplicationsCrmTasksIdCancel>>>;
export declare type PostApiApplicationsCrmTasksIdCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel task
 */
export declare const usePostApiApplicationsCrmTasksIdCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTask, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTask, any>, TError, {
    id: string;
}, TContext>;
