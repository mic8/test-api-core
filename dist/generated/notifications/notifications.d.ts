import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { AdaHook, CommunicationWithEventsRequest, ConfirmCodeBody, CreateOperatorBodyExcludeArchivedCreatedIdUpdated, CreateProviderBodyExcludeArchivedCreatedIdUpdated, DataAgregateCollectionCommunicationByTypeResponseMany, DataClientNotificationsAggregatesResponse, DataCollectionNotificationsManyPaginated, DataCollectionStatisticResponse, DataCommunicationFullInfo, DataCommunicationFullInfoManyPaginated, DataCommunicationWithEventResponse, DataCommunications, DataCommunicationsMany, DataCommunicationsManyPaginated, DataCommunicationsResponse, DataEmailAttachmentsResponse, DataEventsDetailsManyPaginated, DataEventsManyPaginated, DataExtendedOTP, DataLivenessResponse, DataLookups, DataLookupsManyPaginated, DataLookupsOnlyRequestId, DataMSEmail, DataMSEmailMany, DataMSEmailOnlyFromBodyPreviewCcRecipientsClientIdHasAttachmentsIdImportanceIsReadReceivedDatetimeSubjectToRecipientsPaginated, DataOTP, DataOperator, DataOperatorExcludeArchived, DataOperatorExcludeArchivedPaginated, DataProvider, DataProviderExcludeArchived, DataProviderExcludeArchivedPaginated, DataReadinessResponse, DataSyncCallsResponse, GetApiNotificationsClientsClientIdEventsDetailsParams, GetApiNotificationsClientsIdNotificationsParams, GetApiNotificationsCrmClientIdNotificationsAggregatesParams, GetApiNotificationsCrmNotificationsSmsOnewayDsParams, GetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusParams, GetApiNotificationsCrmOperatorsParams, GetApiNotificationsCrmProvidersParams, GetApiNotificationsCrmSupportRequestsParams, GetApiNotificationsEventsDetailsParams, GetApiNotificationsEventsParams, GetApiNotificationsLookupsParams, GetApiNotificationsNotificationsCollectionByCollectionStrategyParams, GetApiNotificationsNotificationsCollectionByTypeParams, GetApiNotificationsNotificationsCollectionParams, GetApiNotificationsNotificationsDetailsParams, GetApiNotificationsNotificationsParams, GupshupHookMany, Inc8x8Hook, LookupInfo, LookupsRequest, OperatorExcludeArchivedCreatedIdUpdated, PatchApiNotificationsCrmNotificationsIdParams, ProviderExcludeArchivedCreatedIdUpdated, SendBody, SendEmail, SendEmailSchema, SendPush, SendSMS, SendWA, SendWAFlomni, SyncCallsBody, TextWareHook, VoctivHook } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiNotificationsReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiNotificationsReadinessQueryKey: () => readonly ["/api/notifications/readiness"];
export declare const getGetApiNotificationsReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsReadiness>>>;
export declare type GetApiNotificationsReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiNotificationsReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiNotificationsLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiNotificationsLivenessQueryKey: () => readonly ["/api/notifications/liveness"];
export declare const getGetApiNotificationsLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsLiveness>>>;
export declare type GetApiNotificationsLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiNotificationsLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiNotificationsMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiNotificationsMetricsQueryKey: () => readonly ["/api/notifications/metrics"];
export declare const getGetApiNotificationsMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsMetrics>>>;
export declare type GetApiNotificationsMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiNotificationsMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Retry communication
 */
export declare const postApiNotificationsNotificationsIdRetry: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunications>>;
export declare const getPostApiNotificationsNotificationsIdRetryMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiNotificationsNotificationsIdRetryMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsNotificationsIdRetry>>>;
export declare type PostApiNotificationsNotificationsIdRetryMutationError = AxiosError<unknown>;
/**
 * @summary Retry communication
 */
export declare const usePostApiNotificationsNotificationsIdRetry: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunications, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Search communications
 */
export declare const getApiNotificationsNotifications: (params?: GetApiNotificationsNotificationsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationsManyPaginated>>;
export declare const getGetApiNotificationsNotificationsQueryKey: (params?: GetApiNotificationsNotificationsParams) => readonly ["/api/notifications/notifications", ...GetApiNotificationsNotificationsParams[]];
export declare const getGetApiNotificationsNotificationsQueryOptions: <TData = AxiosResponse<DataCommunicationsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsNotificationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunicationsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCommunicationsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsNotifications>>>;
export declare type GetApiNotificationsNotificationsQueryError = AxiosError<unknown>;
/**
 * @summary Search communications
 */
export declare const useGetApiNotificationsNotifications: <TData = AxiosResponse<DataCommunicationsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsNotificationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunicationsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search events
 */
export declare const getApiNotificationsEvents: (params?: GetApiNotificationsEventsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEventsManyPaginated>>;
export declare const getGetApiNotificationsEventsQueryKey: (params?: GetApiNotificationsEventsParams) => readonly ["/api/notifications/events", ...GetApiNotificationsEventsParams[]];
export declare const getGetApiNotificationsEventsQueryOptions: <TData = AxiosResponse<DataEventsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsEventsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEventsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEventsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsEventsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsEvents>>>;
export declare type GetApiNotificationsEventsQueryError = AxiosError<unknown>;
/**
 * @summary Search events
 */
export declare const useGetApiNotificationsEvents: <TData = AxiosResponse<DataEventsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsEventsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEventsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @deprecated
 * @summary Search events with communications details
 */
export declare const getApiNotificationsEventsDetails: (params?: GetApiNotificationsEventsDetailsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEventsDetailsManyPaginated>>;
export declare const getGetApiNotificationsEventsDetailsQueryKey: (params?: GetApiNotificationsEventsDetailsParams) => readonly ["/api/notifications/events/details", ...GetApiNotificationsEventsDetailsParams[]];
export declare const getGetApiNotificationsEventsDetailsQueryOptions: <TData = AxiosResponse<DataEventsDetailsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsEventsDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEventsDetailsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEventsDetailsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsEventsDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsEventsDetails>>>;
export declare type GetApiNotificationsEventsDetailsQueryError = AxiosError<unknown>;
/**
 * @deprecated
 * @summary Search events with communications details
 */
export declare const useGetApiNotificationsEventsDetails: <TData = AxiosResponse<DataEventsDetailsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsEventsDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEventsDetailsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search events with communications details
 */
export declare const getApiNotificationsClientsClientIdEventsDetails: (clientId: string, params?: GetApiNotificationsClientsClientIdEventsDetailsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEventsDetailsManyPaginated>>;
export declare const getGetApiNotificationsClientsClientIdEventsDetailsQueryKey: (clientId: string, params?: GetApiNotificationsClientsClientIdEventsDetailsParams) => readonly [`/api/notifications/clients/${string}/events/details`, ...GetApiNotificationsClientsClientIdEventsDetailsParams[]];
export declare const getGetApiNotificationsClientsClientIdEventsDetailsQueryOptions: <TData = AxiosResponse<DataEventsDetailsManyPaginated, any>, TError = AxiosError<unknown, any>>(clientId: string, params?: GetApiNotificationsClientsClientIdEventsDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEventsDetailsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEventsDetailsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsClientsClientIdEventsDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsClientsClientIdEventsDetails>>>;
export declare type GetApiNotificationsClientsClientIdEventsDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Search events with communications details
 */
export declare const useGetApiNotificationsClientsClientIdEventsDetails: <TData = AxiosResponse<DataEventsDetailsManyPaginated, any>, TError = AxiosError<unknown, any>>(clientId: string, params?: GetApiNotificationsClientsClientIdEventsDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEventsDetailsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search communications with events
 */
export declare const getApiNotificationsNotificationsDetails: (params: GetApiNotificationsNotificationsDetailsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationFullInfoManyPaginated>>;
export declare const getGetApiNotificationsNotificationsDetailsQueryKey: (params: GetApiNotificationsNotificationsDetailsParams) => readonly ["/api/notifications/notifications/details", ...GetApiNotificationsNotificationsDetailsParams[]];
export declare const getGetApiNotificationsNotificationsDetailsQueryOptions: <TData = AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiNotificationsNotificationsDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsNotificationsDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsNotificationsDetails>>>;
export declare type GetApiNotificationsNotificationsDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Search communications with events
 */
export declare const useGetApiNotificationsNotificationsDetails: <TData = AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiNotificationsNotificationsDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update delivery status for verihubs WA message
 */
export declare const getApiNotificationsCrmNotificationsWaVerihubsDeliveryStatus: (params?: GetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunications>>;
export declare const getGetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusQueryKey: (params?: GetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusParams) => readonly ["/api/notifications/crm/notifications/wa/verihubs/delivery_status", ...GetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusParams[]];
export declare const getGetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusQueryOptions: <TData = AxiosResponse<DataCommunications, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunications, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCommunications, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmNotificationsWaVerihubsDeliveryStatus>>>;
export declare type GetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusQueryError = AxiosError<unknown>;
/**
 * @summary Update delivery status for verihubs WA message
 */
export declare const useGetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatus: <TData = AxiosResponse<DataCommunications, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsCrmNotificationsWaVerihubsDeliveryStatusParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunications, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update delivery status for ada WA message
 */
export declare const postApiNotificationsCrmNotificationsWaAdaDeliveryStatus: (adaHook: AdaHook, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunications>>;
export declare const getPostApiNotificationsCrmNotificationsWaAdaDeliveryStatusMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        data: AdaHook;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
    data: AdaHook;
}, TContext>;
export declare type PostApiNotificationsCrmNotificationsWaAdaDeliveryStatusMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmNotificationsWaAdaDeliveryStatus>>>;
export declare type PostApiNotificationsCrmNotificationsWaAdaDeliveryStatusMutationBody = AdaHook;
export declare type PostApiNotificationsCrmNotificationsWaAdaDeliveryStatusMutationError = AxiosError<unknown>;
/**
 * @summary Update delivery status for ada WA message
 */
export declare const usePostApiNotificationsCrmNotificationsWaAdaDeliveryStatus: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        data: AdaHook;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunications, any>, TError, {
    data: AdaHook;
}, TContext>;
/**
 * @summary Update delivery status for gupshup WA message
 */
export declare const postApiNotificationsCrmNotificationsWaGupshupDeliveryStatus: (gupshupHookMany: GupshupHookMany[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationsMany>>;
export declare const getPostApiNotificationsCrmNotificationsWaGupshupDeliveryStatusMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsMany, any>, TError, {
        data: GupshupHookMany[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunicationsMany, any>, TError, {
    data: GupshupHookMany[];
}, TContext>;
export declare type PostApiNotificationsCrmNotificationsWaGupshupDeliveryStatusMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmNotificationsWaGupshupDeliveryStatus>>>;
export declare type PostApiNotificationsCrmNotificationsWaGupshupDeliveryStatusMutationBody = GupshupHookMany[];
export declare type PostApiNotificationsCrmNotificationsWaGupshupDeliveryStatusMutationError = AxiosError<unknown>;
/**
 * @summary Update delivery status for gupshup WA message
 */
export declare const usePostApiNotificationsCrmNotificationsWaGupshupDeliveryStatus: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsMany, any>, TError, {
        data: GupshupHookMany[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunicationsMany, any>, TError, {
    data: GupshupHookMany[];
}, TContext>;
/**
 * @summary Update delivery status for Inc8x8 SMS message
 */
export declare const postApiNotificationsCrmNotificationsSms8x8DeliveryStatus: (inc8x8Hook: Inc8x8Hook, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunications>>;
export declare const getPostApiNotificationsCrmNotificationsSms8x8DeliveryStatusMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        data: Inc8x8Hook;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
    data: Inc8x8Hook;
}, TContext>;
export declare type PostApiNotificationsCrmNotificationsSms8x8DeliveryStatusMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmNotificationsSms8x8DeliveryStatus>>>;
export declare type PostApiNotificationsCrmNotificationsSms8x8DeliveryStatusMutationBody = Inc8x8Hook;
export declare type PostApiNotificationsCrmNotificationsSms8x8DeliveryStatusMutationError = AxiosError<unknown>;
/**
 * @summary Update delivery status for Inc8x8 SMS message
 */
export declare const usePostApiNotificationsCrmNotificationsSms8x8DeliveryStatus: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        data: Inc8x8Hook;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunications, any>, TError, {
    data: Inc8x8Hook;
}, TContext>;
/**
 * @summary Update delivery status for TextWare SMS message
 */
export declare const postApiNotificationsCrmNotificationsSmsTextwareDeliveryStatus: (textWareHook: TextWareHook, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunications>>;
export declare const getPostApiNotificationsCrmNotificationsSmsTextwareDeliveryStatusMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        data: TextWareHook;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
    data: TextWareHook;
}, TContext>;
export declare type PostApiNotificationsCrmNotificationsSmsTextwareDeliveryStatusMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmNotificationsSmsTextwareDeliveryStatus>>>;
export declare type PostApiNotificationsCrmNotificationsSmsTextwareDeliveryStatusMutationBody = TextWareHook;
export declare type PostApiNotificationsCrmNotificationsSmsTextwareDeliveryStatusMutationError = AxiosError<unknown>;
/**
 * @summary Update delivery status for TextWare SMS message
 */
export declare const usePostApiNotificationsCrmNotificationsSmsTextwareDeliveryStatus: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        data: TextWareHook;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunications, any>, TError, {
    data: TextWareHook;
}, TContext>;
/**
 * @summary Update delivery status for OneWay SMS message
 */
export declare const getApiNotificationsCrmNotificationsSmsOnewayDs: (params: GetApiNotificationsCrmNotificationsSmsOnewayDsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunications>>;
export declare const getGetApiNotificationsCrmNotificationsSmsOnewayDsQueryKey: (params: GetApiNotificationsCrmNotificationsSmsOnewayDsParams) => readonly ["/api/notifications/crm/notifications/sms/oneway/ds", ...GetApiNotificationsCrmNotificationsSmsOnewayDsParams[]];
export declare const getGetApiNotificationsCrmNotificationsSmsOnewayDsQueryOptions: <TData = AxiosResponse<DataCommunications, any>, TError = AxiosError<unknown, any>>(params: GetApiNotificationsCrmNotificationsSmsOnewayDsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunications, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCommunications, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmNotificationsSmsOnewayDsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmNotificationsSmsOnewayDs>>>;
export declare type GetApiNotificationsCrmNotificationsSmsOnewayDsQueryError = AxiosError<unknown>;
/**
 * @summary Update delivery status for OneWay SMS message
 */
export declare const useGetApiNotificationsCrmNotificationsSmsOnewayDs: <TData = AxiosResponse<DataCommunications, any>, TError = AxiosError<unknown, any>>(params: GetApiNotificationsCrmNotificationsSmsOnewayDsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunications, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Add hook with call result by Voctiv
 */
export declare const postApiNotificationsCrmNotificationsCallVoctiv: (voctivHook: VoctivHook, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationWithEventResponse>>;
export declare const getPostApiNotificationsCrmNotificationsCallVoctivMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationWithEventResponse, any>, TError, {
        data: VoctivHook;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunicationWithEventResponse, any>, TError, {
    data: VoctivHook;
}, TContext>;
export declare type PostApiNotificationsCrmNotificationsCallVoctivMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmNotificationsCallVoctiv>>>;
export declare type PostApiNotificationsCrmNotificationsCallVoctivMutationBody = VoctivHook;
export declare type PostApiNotificationsCrmNotificationsCallVoctivMutationError = AxiosError<unknown>;
/**
 * @summary Add hook with call result by Voctiv
 */
export declare const usePostApiNotificationsCrmNotificationsCallVoctiv: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationWithEventResponse, any>, TError, {
        data: VoctivHook;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunicationWithEventResponse, any>, TError, {
    data: VoctivHook;
}, TContext>;
/**
 * @summary Search clients communications
 */
export declare const getApiNotificationsClientsIdNotifications: (id: string, params?: GetApiNotificationsClientsIdNotificationsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationFullInfoManyPaginated>>;
export declare const getGetApiNotificationsClientsIdNotificationsQueryKey: (id: string, params?: GetApiNotificationsClientsIdNotificationsParams) => readonly [`/api/notifications/clients/${string}/notifications`, ...GetApiNotificationsClientsIdNotificationsParams[]];
export declare const getGetApiNotificationsClientsIdNotificationsQueryOptions: <TData = AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiNotificationsClientsIdNotificationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsClientsIdNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsClientsIdNotifications>>>;
export declare type GetApiNotificationsClientsIdNotificationsQueryError = AxiosError<unknown>;
/**
 * @summary Search clients communications
 */
export declare const useGetApiNotificationsClientsIdNotifications: <TData = AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiNotificationsClientsIdNotificationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunicationFullInfoManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @deprecated
 * @summary Download calls from webitel by client or queue id
 */
export declare const postApiNotificationsCrmNotificationsCallsSync: (syncCallsBody: SyncCallsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSyncCallsResponse>>;
export declare const getPostApiNotificationsCrmNotificationsCallsSyncMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSyncCallsResponse, any>, TError, {
        data: SyncCallsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSyncCallsResponse, any>, TError, {
    data: SyncCallsBody;
}, TContext>;
export declare type PostApiNotificationsCrmNotificationsCallsSyncMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmNotificationsCallsSync>>>;
export declare type PostApiNotificationsCrmNotificationsCallsSyncMutationBody = SyncCallsBody;
export declare type PostApiNotificationsCrmNotificationsCallsSyncMutationError = AxiosError<unknown>;
/**
 * @deprecated
 * @summary Download calls from webitel by client or queue id
 */
export declare const usePostApiNotificationsCrmNotificationsCallsSync: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSyncCallsResponse, any>, TError, {
        data: SyncCallsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSyncCallsResponse, any>, TError, {
    data: SyncCallsBody;
}, TContext>;
/**
 * @summary Download calls from webitel by client or queue id
 */
export declare const postApiNotificationsCrmNotificationsCallsSyncNew: (syncCallsBody: SyncCallsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSyncCallsResponse>>;
export declare const getPostApiNotificationsCrmNotificationsCallsSyncNewMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSyncCallsResponse, any>, TError, {
        data: SyncCallsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSyncCallsResponse, any>, TError, {
    data: SyncCallsBody;
}, TContext>;
export declare type PostApiNotificationsCrmNotificationsCallsSyncNewMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmNotificationsCallsSyncNew>>>;
export declare type PostApiNotificationsCrmNotificationsCallsSyncNewMutationBody = SyncCallsBody;
export declare type PostApiNotificationsCrmNotificationsCallsSyncNewMutationError = AxiosError<unknown>;
/**
 * @summary Download calls from webitel by client or queue id
 */
export declare const usePostApiNotificationsCrmNotificationsCallsSyncNew: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSyncCallsResponse, any>, TError, {
        data: SyncCallsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSyncCallsResponse, any>, TError, {
    data: SyncCallsBody;
}, TContext>;
/**
 * @summary Create communication without sending
 */
export declare const postApiNotificationsCrmNotificationsWithoutSending: (communicationWithEventsRequest: CommunicationWithEventsRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationWithEventResponse>>;
export declare const getPostApiNotificationsCrmNotificationsWithoutSendingMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationWithEventResponse, any>, TError, {
        data: CommunicationWithEventsRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunicationWithEventResponse, any>, TError, {
    data: CommunicationWithEventsRequest;
}, TContext>;
export declare type PostApiNotificationsCrmNotificationsWithoutSendingMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmNotificationsWithoutSending>>>;
export declare type PostApiNotificationsCrmNotificationsWithoutSendingMutationBody = CommunicationWithEventsRequest;
export declare type PostApiNotificationsCrmNotificationsWithoutSendingMutationError = AxiosError<unknown>;
/**
 * @summary Create communication without sending
 */
export declare const usePostApiNotificationsCrmNotificationsWithoutSending: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationWithEventResponse, any>, TError, {
        data: CommunicationWithEventsRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunicationWithEventResponse, any>, TError, {
    data: CommunicationWithEventsRequest;
}, TContext>;
/**
 * @summary Search communication by id
 */
export declare const getApiNotificationsCrmNotificationsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationFullInfo>>;
export declare const getGetApiNotificationsCrmNotificationsIdQueryKey: (id: string) => readonly [`/api/notifications/crm/notifications/${string}`];
export declare const getGetApiNotificationsCrmNotificationsIdQueryOptions: <TData = AxiosResponse<DataCommunicationFullInfo, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunicationFullInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCommunicationFullInfo, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmNotificationsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmNotificationsId>>>;
export declare type GetApiNotificationsCrmNotificationsIdQueryError = AxiosError<unknown>;
/**
 * @summary Search communication by id
 */
export declare const useGetApiNotificationsCrmNotificationsId: <TData = AxiosResponse<DataCommunicationFullInfo, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCommunicationFullInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Change communication status
 */
export declare const patchApiNotificationsCrmNotificationsId: (id: string, params?: PatchApiNotificationsCrmNotificationsIdParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunications>>;
export declare const getPatchApiNotificationsCrmNotificationsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        id: string;
        params?: PatchApiNotificationsCrmNotificationsIdParams | undefined;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
    id: string;
    params?: PatchApiNotificationsCrmNotificationsIdParams | undefined;
}, TContext>;
export declare type PatchApiNotificationsCrmNotificationsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiNotificationsCrmNotificationsId>>>;
export declare type PatchApiNotificationsCrmNotificationsIdMutationError = AxiosError<unknown>;
/**
 * @summary Change communication status
 */
export declare const usePatchApiNotificationsCrmNotificationsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunications, any>, TError, {
        id: string;
        params?: PatchApiNotificationsCrmNotificationsIdParams | undefined;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunications, any>, TError, {
    id: string;
    params?: PatchApiNotificationsCrmNotificationsIdParams | undefined;
}, TContext>;
/**
 * @summary Send otp code
 */
export declare const postApiNotificationsCrmOtpGetCode: (sendBody: SendBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataExtendedOTP>>;
export declare const getPostApiNotificationsCrmOtpGetCodeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataExtendedOTP, any>, TError, {
        data: SendBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataExtendedOTP, any>, TError, {
    data: SendBody;
}, TContext>;
export declare type PostApiNotificationsCrmOtpGetCodeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmOtpGetCode>>>;
export declare type PostApiNotificationsCrmOtpGetCodeMutationBody = SendBody;
export declare type PostApiNotificationsCrmOtpGetCodeMutationError = AxiosError<unknown>;
/**
 * @summary Send otp code
 */
export declare const usePostApiNotificationsCrmOtpGetCode: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataExtendedOTP, any>, TError, {
        data: SendBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataExtendedOTP, any>, TError, {
    data: SendBody;
}, TContext>;
/**
 * @summary Confirm otp code
 */
export declare const postApiNotificationsCrmOtpConfirmCode: (confirmCodeBody: ConfirmCodeBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOTP>>;
export declare const getPostApiNotificationsCrmOtpConfirmCodeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOTP, any>, TError, {
        data: ConfirmCodeBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOTP, any>, TError, {
    data: ConfirmCodeBody;
}, TContext>;
export declare type PostApiNotificationsCrmOtpConfirmCodeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmOtpConfirmCode>>>;
export declare type PostApiNotificationsCrmOtpConfirmCodeMutationBody = ConfirmCodeBody;
export declare type PostApiNotificationsCrmOtpConfirmCodeMutationError = AxiosError<unknown>;
/**
 * @summary Confirm otp code
 */
export declare const usePostApiNotificationsCrmOtpConfirmCode: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOTP, any>, TError, {
        data: ConfirmCodeBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOTP, any>, TError, {
    data: ConfirmCodeBody;
}, TContext>;
/**
 * @summary Get client notifications aggregates
 */
export declare const getApiNotificationsCrmClientIdNotificationsAggregates: (clientId: string, params?: GetApiNotificationsCrmClientIdNotificationsAggregatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientNotificationsAggregatesResponse>>;
export declare const getGetApiNotificationsCrmClientIdNotificationsAggregatesQueryKey: (clientId: string, params?: GetApiNotificationsCrmClientIdNotificationsAggregatesParams) => readonly [`/api/notifications/crm/${string}/notifications/aggregates`, ...GetApiNotificationsCrmClientIdNotificationsAggregatesParams[]];
export declare const getGetApiNotificationsCrmClientIdNotificationsAggregatesQueryOptions: <TData = AxiosResponse<DataClientNotificationsAggregatesResponse, any>, TError = AxiosError<unknown, any>>(clientId: string, params?: GetApiNotificationsCrmClientIdNotificationsAggregatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientNotificationsAggregatesResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientNotificationsAggregatesResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmClientIdNotificationsAggregatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmClientIdNotificationsAggregates>>>;
export declare type GetApiNotificationsCrmClientIdNotificationsAggregatesQueryError = AxiosError<unknown>;
/**
 * @summary Get client notifications aggregates
 */
export declare const useGetApiNotificationsCrmClientIdNotificationsAggregates: <TData = AxiosResponse<DataClientNotificationsAggregatesResponse, any>, TError = AxiosError<unknown, any>>(clientId: string, params?: GetApiNotificationsCrmClientIdNotificationsAggregatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientNotificationsAggregatesResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search collection communications
 */
export declare const getApiNotificationsNotificationsCollection: (params?: GetApiNotificationsNotificationsCollectionParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCollectionNotificationsManyPaginated>>;
export declare const getGetApiNotificationsNotificationsCollectionQueryKey: (params?: GetApiNotificationsNotificationsCollectionParams) => readonly ["/api/notifications/notifications/collection", ...GetApiNotificationsNotificationsCollectionParams[]];
export declare const getGetApiNotificationsNotificationsCollectionQueryOptions: <TData = AxiosResponse<DataCollectionNotificationsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsNotificationsCollectionParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCollectionNotificationsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCollectionNotificationsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsNotificationsCollectionQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsNotificationsCollection>>>;
export declare type GetApiNotificationsNotificationsCollectionQueryError = AxiosError<unknown>;
/**
 * @summary Search collection communications
 */
export declare const useGetApiNotificationsNotificationsCollection: <TData = AxiosResponse<DataCollectionNotificationsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsNotificationsCollectionParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCollectionNotificationsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search collection communications by message_subtype
 */
export declare const getApiNotificationsNotificationsCollectionByType: (params: GetApiNotificationsNotificationsCollectionByTypeParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAgregateCollectionCommunicationByTypeResponseMany>>;
export declare const getGetApiNotificationsNotificationsCollectionByTypeQueryKey: (params: GetApiNotificationsNotificationsCollectionByTypeParams) => readonly ["/api/notifications/notifications/collection/by_type", ...GetApiNotificationsNotificationsCollectionByTypeParams[]];
export declare const getGetApiNotificationsNotificationsCollectionByTypeQueryOptions: <TData = AxiosResponse<DataAgregateCollectionCommunicationByTypeResponseMany, any>, TError = AxiosError<unknown, any>>(params: GetApiNotificationsNotificationsCollectionByTypeParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAgregateCollectionCommunicationByTypeResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataAgregateCollectionCommunicationByTypeResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsNotificationsCollectionByTypeQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsNotificationsCollectionByType>>>;
export declare type GetApiNotificationsNotificationsCollectionByTypeQueryError = AxiosError<unknown>;
/**
 * @summary Search collection communications by message_subtype
 */
export declare const useGetApiNotificationsNotificationsCollectionByType: <TData = AxiosResponse<DataAgregateCollectionCommunicationByTypeResponseMany, any>, TError = AxiosError<unknown, any>>(params: GetApiNotificationsNotificationsCollectionByTypeParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAgregateCollectionCommunicationByTypeResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search collection communications by collection strategy
 */
export declare const getApiNotificationsNotificationsCollectionByCollectionStrategy: (params: GetApiNotificationsNotificationsCollectionByCollectionStrategyParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCollectionStatisticResponse>>;
export declare const getGetApiNotificationsNotificationsCollectionByCollectionStrategyQueryKey: (params: GetApiNotificationsNotificationsCollectionByCollectionStrategyParams) => readonly ["/api/notifications/notifications/collection/by_collection_strategy", ...GetApiNotificationsNotificationsCollectionByCollectionStrategyParams[]];
export declare const getGetApiNotificationsNotificationsCollectionByCollectionStrategyQueryOptions: <TData = AxiosResponse<DataCollectionStatisticResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiNotificationsNotificationsCollectionByCollectionStrategyParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCollectionStatisticResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCollectionStatisticResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsNotificationsCollectionByCollectionStrategyQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsNotificationsCollectionByCollectionStrategy>>>;
export declare type GetApiNotificationsNotificationsCollectionByCollectionStrategyQueryError = AxiosError<unknown>;
/**
 * @summary Search collection communications by collection strategy
 */
export declare const useGetApiNotificationsNotificationsCollectionByCollectionStrategy: <TData = AxiosResponse<DataCollectionStatisticResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiNotificationsNotificationsCollectionByCollectionStrategyParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCollectionStatisticResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create task for sending SMS
 */
export declare const postApiNotificationsNotificationsSms: (sendSMS: SendSMS, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationsResponse>>;
export declare const getPostApiNotificationsNotificationsSmsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendSMS;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendSMS;
}, TContext>;
export declare type PostApiNotificationsNotificationsSmsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsNotificationsSms>>>;
export declare type PostApiNotificationsNotificationsSmsMutationBody = SendSMS;
export declare type PostApiNotificationsNotificationsSmsMutationError = AxiosError<unknown>;
/**
 * @summary Create task for sending SMS
 */
export declare const usePostApiNotificationsNotificationsSms: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendSMS;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendSMS;
}, TContext>;
/**
 * @summary Create task for sending EMAIL
 */
export declare const postApiNotificationsNotificationsEmail: (sendEmail: SendEmail, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationsResponse>>;
export declare const getPostApiNotificationsNotificationsEmailMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendEmail;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendEmail;
}, TContext>;
export declare type PostApiNotificationsNotificationsEmailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsNotificationsEmail>>>;
export declare type PostApiNotificationsNotificationsEmailMutationBody = SendEmail;
export declare type PostApiNotificationsNotificationsEmailMutationError = AxiosError<unknown>;
/**
 * @summary Create task for sending EMAIL
 */
export declare const usePostApiNotificationsNotificationsEmail: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendEmail;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendEmail;
}, TContext>;
/**
 * @summary Create task for sending PUSH
 */
export declare const postApiNotificationsNotificationsPush: (sendPush: SendPush, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationsResponse>>;
export declare const getPostApiNotificationsNotificationsPushMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendPush;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendPush;
}, TContext>;
export declare type PostApiNotificationsNotificationsPushMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsNotificationsPush>>>;
export declare type PostApiNotificationsNotificationsPushMutationBody = SendPush;
export declare type PostApiNotificationsNotificationsPushMutationError = AxiosError<unknown>;
/**
 * @summary Create task for sending PUSH
 */
export declare const usePostApiNotificationsNotificationsPush: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendPush;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendPush;
}, TContext>;
/**
 * @summary Create task for sending message in WhatsApp
 */
export declare const postApiNotificationsNotificationsWhatsapp: (sendWA: SendWA, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationsResponse>>;
export declare const getPostApiNotificationsNotificationsWhatsappMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendWA;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendWA;
}, TContext>;
export declare type PostApiNotificationsNotificationsWhatsappMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsNotificationsWhatsapp>>>;
export declare type PostApiNotificationsNotificationsWhatsappMutationBody = SendWA;
export declare type PostApiNotificationsNotificationsWhatsappMutationError = AxiosError<unknown>;
/**
 * @summary Create task for sending message in WhatsApp
 */
export declare const usePostApiNotificationsNotificationsWhatsapp: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendWA;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendWA;
}, TContext>;
/**
 * @summary Create task for sending message in WhatsApp using Flomni
 */
export declare const postApiNotificationsNotificationsWhatsappFlomni: (sendWAFlomni: SendWAFlomni, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCommunicationsResponse>>;
export declare const getPostApiNotificationsNotificationsWhatsappFlomniMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendWAFlomni;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendWAFlomni;
}, TContext>;
export declare type PostApiNotificationsNotificationsWhatsappFlomniMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsNotificationsWhatsappFlomni>>>;
export declare type PostApiNotificationsNotificationsWhatsappFlomniMutationBody = SendWAFlomni;
export declare type PostApiNotificationsNotificationsWhatsappFlomniMutationError = AxiosError<unknown>;
/**
 * @summary Create task for sending message in WhatsApp using Flomni
 */
export declare const usePostApiNotificationsNotificationsWhatsappFlomni: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCommunicationsResponse, any>, TError, {
        data: SendWAFlomni;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCommunicationsResponse, any>, TError, {
    data: SendWAFlomni;
}, TContext>;
/**
 * @summary Get client support requests
 */
export declare const getApiNotificationsCrmSupportRequests: (params?: GetApiNotificationsCrmSupportRequestsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMSEmailOnlyFromBodyPreviewCcRecipientsClientIdHasAttachmentsIdImportanceIsReadReceivedDatetimeSubjectToRecipientsPaginated>>;
export declare const getGetApiNotificationsCrmSupportRequestsQueryKey: (params?: GetApiNotificationsCrmSupportRequestsParams) => readonly ["/api/notifications/crm/support_requests", ...GetApiNotificationsCrmSupportRequestsParams[]];
export declare const getGetApiNotificationsCrmSupportRequestsQueryOptions: <TData = AxiosResponse<DataMSEmailOnlyFromBodyPreviewCcRecipientsClientIdHasAttachmentsIdImportanceIsReadReceivedDatetimeSubjectToRecipientsPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsCrmSupportRequestsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMSEmailOnlyFromBodyPreviewCcRecipientsClientIdHasAttachmentsIdImportanceIsReadReceivedDatetimeSubjectToRecipientsPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataMSEmailOnlyFromBodyPreviewCcRecipientsClientIdHasAttachmentsIdImportanceIsReadReceivedDatetimeSubjectToRecipientsPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmSupportRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmSupportRequests>>>;
export declare type GetApiNotificationsCrmSupportRequestsQueryError = AxiosError<unknown>;
/**
 * @summary Get client support requests
 */
export declare const useGetApiNotificationsCrmSupportRequests: <TData = AxiosResponse<DataMSEmailOnlyFromBodyPreviewCcRecipientsClientIdHasAttachmentsIdImportanceIsReadReceivedDatetimeSubjectToRecipientsPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsCrmSupportRequestsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMSEmailOnlyFromBodyPreviewCcRecipientsClientIdHasAttachmentsIdImportanceIsReadReceivedDatetimeSubjectToRecipientsPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send email
 */
export declare const postApiNotificationsCrmSupportRequests: (sendEmailSchema: SendEmailSchema, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiNotificationsCrmSupportRequestsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, {
        data: SendEmailSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, {
    data: SendEmailSchema;
}, TContext>;
export declare type PostApiNotificationsCrmSupportRequestsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmSupportRequests>>>;
export declare type PostApiNotificationsCrmSupportRequestsMutationBody = SendEmailSchema;
export declare type PostApiNotificationsCrmSupportRequestsMutationError = AxiosError<unknown>;
/**
 * @summary Send email
 */
export declare const usePostApiNotificationsCrmSupportRequests: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, {
        data: SendEmailSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, {
    data: SendEmailSchema;
}, TContext>;
/**
 * @summary Get client support requests by client id
 */
export declare const getApiNotificationsCrmSupportRequestsByClientClientId: (clientId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMSEmailMany>>;
export declare const getGetApiNotificationsCrmSupportRequestsByClientClientIdQueryKey: (clientId: string) => readonly [`/api/notifications/crm/support_requests/by_client/${string}`];
export declare const getGetApiNotificationsCrmSupportRequestsByClientClientIdQueryOptions: <TData = AxiosResponse<DataMSEmailMany, any>, TError = AxiosError<unknown, any>>(clientId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMSEmailMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataMSEmailMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmSupportRequestsByClientClientIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmSupportRequestsByClientClientId>>>;
export declare type GetApiNotificationsCrmSupportRequestsByClientClientIdQueryError = AxiosError<unknown>;
/**
 * @summary Get client support requests by client id
 */
export declare const useGetApiNotificationsCrmSupportRequestsByClientClientId: <TData = AxiosResponse<DataMSEmailMany, any>, TError = AxiosError<unknown, any>>(clientId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMSEmailMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get support requests by id
 */
export declare const getApiNotificationsCrmSupportRequestsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMSEmail>>;
export declare const getGetApiNotificationsCrmSupportRequestsIdQueryKey: (id: string) => readonly [`/api/notifications/crm/support_requests/${string}`];
export declare const getGetApiNotificationsCrmSupportRequestsIdQueryOptions: <TData = AxiosResponse<DataMSEmail, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMSEmail, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataMSEmail, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmSupportRequestsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmSupportRequestsId>>>;
export declare type GetApiNotificationsCrmSupportRequestsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get support requests by id
 */
export declare const useGetApiNotificationsCrmSupportRequestsId: <TData = AxiosResponse<DataMSEmail, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMSEmail, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get attachments by email id
 */
export declare const getApiNotificationsCrmSupportRequestsIdAttachments: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmailAttachmentsResponse>>;
export declare const getGetApiNotificationsCrmSupportRequestsIdAttachmentsQueryKey: (id: string) => readonly [`/api/notifications/crm/support_requests/${string}/attachments`];
export declare const getGetApiNotificationsCrmSupportRequestsIdAttachmentsQueryOptions: <TData = AxiosResponse<DataEmailAttachmentsResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEmailAttachmentsResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEmailAttachmentsResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmSupportRequestsIdAttachmentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmSupportRequestsIdAttachments>>>;
export declare type GetApiNotificationsCrmSupportRequestsIdAttachmentsQueryError = AxiosError<unknown>;
/**
 * @summary Get attachments by email id
 */
export declare const useGetApiNotificationsCrmSupportRequestsIdAttachments: <TData = AxiosResponse<DataEmailAttachmentsResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEmailAttachmentsResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download attachment by email id and attachment id
 */
export declare const getApiNotificationsCrmSupportRequestsIdAttachmentsAttachmentId: (id: string, attachmentId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiNotificationsCrmSupportRequestsIdAttachmentsAttachmentIdQueryKey: (id: string, attachmentId: string) => readonly [`/api/notifications/crm/support_requests/${string}/attachments/${string}`];
export declare const getGetApiNotificationsCrmSupportRequestsIdAttachmentsAttachmentIdQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, attachmentId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmSupportRequestsIdAttachmentsAttachmentIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmSupportRequestsIdAttachmentsAttachmentId>>>;
export declare type GetApiNotificationsCrmSupportRequestsIdAttachmentsAttachmentIdQueryError = AxiosError<unknown>;
/**
 * @summary Download attachment by email id and attachment id
 */
export declare const useGetApiNotificationsCrmSupportRequestsIdAttachmentsAttachmentId: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, attachmentId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search providers
 */
export declare const getApiNotificationsCrmProviders: (params?: GetApiNotificationsCrmProvidersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProviderExcludeArchivedPaginated>>;
export declare const getGetApiNotificationsCrmProvidersQueryKey: (params?: GetApiNotificationsCrmProvidersParams) => readonly ["/api/notifications/crm/providers", ...GetApiNotificationsCrmProvidersParams[]];
export declare const getGetApiNotificationsCrmProvidersQueryOptions: <TData = AxiosResponse<DataProviderExcludeArchivedPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsCrmProvidersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProviderExcludeArchivedPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataProviderExcludeArchivedPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmProvidersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmProviders>>>;
export declare type GetApiNotificationsCrmProvidersQueryError = AxiosError<unknown>;
/**
 * @summary Search providers
 */
export declare const useGetApiNotificationsCrmProviders: <TData = AxiosResponse<DataProviderExcludeArchivedPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsCrmProvidersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProviderExcludeArchivedPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create provider
 */
export declare const postApiNotificationsCrmProviders: (createProviderBodyExcludeArchivedCreatedIdUpdated: CreateProviderBodyExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProviderExcludeArchived>>;
export declare const getPostApiNotificationsCrmProvidersMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProviderExcludeArchived, any>, TError, {
        data: CreateProviderBodyExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataProviderExcludeArchived, any>, TError, {
    data: CreateProviderBodyExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiNotificationsCrmProvidersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmProviders>>>;
export declare type PostApiNotificationsCrmProvidersMutationBody = CreateProviderBodyExcludeArchivedCreatedIdUpdated;
export declare type PostApiNotificationsCrmProvidersMutationError = AxiosError<unknown>;
/**
 * @summary Create provider
 */
export declare const usePostApiNotificationsCrmProviders: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProviderExcludeArchived, any>, TError, {
        data: CreateProviderBodyExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataProviderExcludeArchived, any>, TError, {
    data: CreateProviderBodyExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Update provider
 */
export declare const patchApiNotificationsCrmProvidersId: (id: string, providerExcludeArchivedCreatedIdUpdated: ProviderExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProviderExcludeArchived>>;
export declare const getPatchApiNotificationsCrmProvidersIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProviderExcludeArchived, any>, TError, {
        id: string;
        data: ProviderExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataProviderExcludeArchived, any>, TError, {
    id: string;
    data: ProviderExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PatchApiNotificationsCrmProvidersIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiNotificationsCrmProvidersId>>>;
export declare type PatchApiNotificationsCrmProvidersIdMutationBody = ProviderExcludeArchivedCreatedIdUpdated;
export declare type PatchApiNotificationsCrmProvidersIdMutationError = AxiosError<unknown>;
/**
 * @summary Update provider
 */
export declare const usePatchApiNotificationsCrmProvidersId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProviderExcludeArchived, any>, TError, {
        id: string;
        data: ProviderExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataProviderExcludeArchived, any>, TError, {
    id: string;
    data: ProviderExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Delete provider
 */
export declare const deleteApiNotificationsCrmProvidersId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProvider>>;
export declare const getDeleteApiNotificationsCrmProvidersIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProvider, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataProvider, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiNotificationsCrmProvidersIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiNotificationsCrmProvidersId>>>;
export declare type DeleteApiNotificationsCrmProvidersIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete provider
 */
export declare const useDeleteApiNotificationsCrmProvidersId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProvider, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataProvider, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Search operators
 */
export declare const getApiNotificationsCrmOperators: (params?: GetApiNotificationsCrmOperatorsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOperatorExcludeArchivedPaginated>>;
export declare const getGetApiNotificationsCrmOperatorsQueryKey: (params?: GetApiNotificationsCrmOperatorsParams) => readonly ["/api/notifications/crm/operators", ...GetApiNotificationsCrmOperatorsParams[]];
export declare const getGetApiNotificationsCrmOperatorsQueryOptions: <TData = AxiosResponse<DataOperatorExcludeArchivedPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsCrmOperatorsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOperatorExcludeArchivedPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataOperatorExcludeArchivedPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmOperatorsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmOperators>>>;
export declare type GetApiNotificationsCrmOperatorsQueryError = AxiosError<unknown>;
/**
 * @summary Search operators
 */
export declare const useGetApiNotificationsCrmOperators: <TData = AxiosResponse<DataOperatorExcludeArchivedPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsCrmOperatorsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOperatorExcludeArchivedPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create operator
 */
export declare const postApiNotificationsCrmOperators: (createOperatorBodyExcludeArchivedCreatedIdUpdated: CreateOperatorBodyExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOperatorExcludeArchived>>;
export declare const getPostApiNotificationsCrmOperatorsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOperatorExcludeArchived, any>, TError, {
        data: CreateOperatorBodyExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOperatorExcludeArchived, any>, TError, {
    data: CreateOperatorBodyExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiNotificationsCrmOperatorsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsCrmOperators>>>;
export declare type PostApiNotificationsCrmOperatorsMutationBody = CreateOperatorBodyExcludeArchivedCreatedIdUpdated;
export declare type PostApiNotificationsCrmOperatorsMutationError = AxiosError<unknown>;
/**
 * @summary Create operator
 */
export declare const usePostApiNotificationsCrmOperators: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOperatorExcludeArchived, any>, TError, {
        data: CreateOperatorBodyExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOperatorExcludeArchived, any>, TError, {
    data: CreateOperatorBodyExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Update operator
 */
export declare const patchApiNotificationsCrmOperatorsId: (id: string, operatorExcludeArchivedCreatedIdUpdated: OperatorExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOperatorExcludeArchived>>;
export declare const getPatchApiNotificationsCrmOperatorsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOperatorExcludeArchived, any>, TError, {
        id: string;
        data: OperatorExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOperatorExcludeArchived, any>, TError, {
    id: string;
    data: OperatorExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PatchApiNotificationsCrmOperatorsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiNotificationsCrmOperatorsId>>>;
export declare type PatchApiNotificationsCrmOperatorsIdMutationBody = OperatorExcludeArchivedCreatedIdUpdated;
export declare type PatchApiNotificationsCrmOperatorsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update operator
 */
export declare const usePatchApiNotificationsCrmOperatorsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOperatorExcludeArchived, any>, TError, {
        id: string;
        data: OperatorExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOperatorExcludeArchived, any>, TError, {
    id: string;
    data: OperatorExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Delete operator
 */
export declare const deleteApiNotificationsCrmOperatorsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOperator>>;
export declare const getDeleteApiNotificationsCrmOperatorsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOperator, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOperator, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiNotificationsCrmOperatorsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiNotificationsCrmOperatorsId>>>;
export declare type DeleteApiNotificationsCrmOperatorsIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete operator
 */
export declare const useDeleteApiNotificationsCrmOperatorsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOperator, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOperator, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Search lookups
 */
export declare const getApiNotificationsLookups: (params?: GetApiNotificationsLookupsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLookupsManyPaginated>>;
export declare const getGetApiNotificationsLookupsQueryKey: (params?: GetApiNotificationsLookupsParams) => readonly ["/api/notifications/lookups", ...GetApiNotificationsLookupsParams[]];
export declare const getGetApiNotificationsLookupsQueryOptions: <TData = AxiosResponse<DataLookupsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsLookupsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataLookupsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLookupsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsLookupsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsLookups>>>;
export declare type GetApiNotificationsLookupsQueryError = AxiosError<unknown>;
/**
 * @summary Search lookups
 */
export declare const useGetApiNotificationsLookups: <TData = AxiosResponse<DataLookupsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiNotificationsLookupsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataLookupsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create lookup request
 */
export declare const postApiNotificationsLookups: (lookupsRequest: LookupsRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLookupsOnlyRequestId>>;
export declare const getPostApiNotificationsLookupsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLookupsOnlyRequestId, any>, TError, {
        data: LookupsRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLookupsOnlyRequestId, any>, TError, {
    data: LookupsRequest;
}, TContext>;
export declare type PostApiNotificationsLookupsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsLookups>>>;
export declare type PostApiNotificationsLookupsMutationBody = LookupsRequest;
export declare type PostApiNotificationsLookupsMutationError = AxiosError<unknown>;
/**
 * @summary Create lookup request
 */
export declare const usePostApiNotificationsLookups: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLookupsOnlyRequestId, any>, TError, {
        data: LookupsRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLookupsOnlyRequestId, any>, TError, {
    data: LookupsRequest;
}, TContext>;
/**
 * @summary Update info about lookup request
 */
export declare const postApiNotificationsLookupsInfo: (lookupInfo: LookupInfo, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLookups>>;
export declare const getPostApiNotificationsLookupsInfoMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLookups, any>, TError, {
        data: LookupInfo;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLookups, any>, TError, {
    data: LookupInfo;
}, TContext>;
export declare type PostApiNotificationsLookupsInfoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiNotificationsLookupsInfo>>>;
export declare type PostApiNotificationsLookupsInfoMutationBody = LookupInfo;
export declare type PostApiNotificationsLookupsInfoMutationError = AxiosError<unknown>;
/**
 * @summary Update info about lookup request
 */
export declare const usePostApiNotificationsLookupsInfo: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLookups, any>, TError, {
        data: LookupInfo;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLookups, any>, TError, {
    data: LookupInfo;
}, TContext>;
/**
 * @summary Get call records from webitel by id
 */
export declare const getApiNotificationsCrmRecordingsIdDownload: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiNotificationsCrmRecordingsIdDownloadQueryKey: (id: number) => readonly [`/api/notifications/crm/recordings/${number}/download`];
export declare const getGetApiNotificationsCrmRecordingsIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiNotificationsCrmRecordingsIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiNotificationsCrmRecordingsIdDownload>>>;
export declare type GetApiNotificationsCrmRecordingsIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Get call records from webitel by id
 */
export declare const useGetApiNotificationsCrmRecordingsIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
