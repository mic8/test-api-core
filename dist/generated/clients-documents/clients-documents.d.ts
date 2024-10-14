import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { AnswerOnlyQuestionIdResult, ConditionExcludeArchivedCreatedIdUpdated, ConditionExcludeArchivedCreatedIdUpdated1, CreateDocumentBody, CreateTaskPayloadBody, CreateVerificationsTasksByClientPayload, DataCondition, DataConditionManyPaginated, DataCountVerificationTasksMany, DataDefinitions, DataDefinitionsDocumentsTypes, DataDefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdatedPaginated, DataDefinitionsManyPaginated, DataDocument, DataDocumentFieldDefinition, DataDocumentFieldDefinitionMany, DataDocumentFieldDefinitionManyPaginated, DataDocumentFields, DataDocumentFieldsMany, DataDocumentFieldsManyPaginated, DataDocumentManyPaginated, DataDocumentPhoto, DataDocumentPhotoDefinition, DataDocumentPhotoDefinitionMany, DataDocumentPhotoDefinitionManyPaginated, DataDocumentPhotoManyPaginated, DataDocumentPhotoWithPageManyPaginated, DataDocumentType, DataDocumentTypeManyPaginated, DataDocumentWithDetailsMany, DataFullDefinition, DataFullDocumentInfo, DataFullDocumentsDefinition, DataFullVerificationTask, DataFullVerificationTasksByClient, DataGetDocumentsDataByClientResponse, DataLivenessResponse, DataQuestions, DataQuestionsManyPaginated, DataReadinessResponse, DataRule, DataRuleManyPaginated, DataTasks, DataTasksMany, DataTasksWithMainDocumentTypeManyPaginated, DefinitionsDocumentsTypesExcludeArchivedCreatedDefinitionIdIdUpdated, DefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdated, DefinitionsExcludeArchivedCreatedIdUpdatedBody, DocumentFieldDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated, DocumentFieldDefinitionExcludeArchivedCreatedIdUpdated, DocumentFieldsOnlyData, DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody, DocumentPhotoDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated, DocumentPhotoDefinitionExcludeArchivedCreatedIdUpdated, DocumentTypeExcludeArchivedCreatedIdUpdated, FetchTaskByClientFilters, GetApiClientsDocumentsClientsDocumentFieldsDefinitionsParams, GetApiClientsDocumentsClientsDocumentTypesParams, GetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsParams, GetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoParams, GetApiClientsDocumentsClientsDocumentsParams, GetApiClientsDocumentsClientsDocumentsPhotoDefinitionParams, GetApiClientsDocumentsClientsFullDocumentsDefinitionParams, GetApiClientsDocumentsCrmClientsIdDocumentsDataParams, GetApiClientsDocumentsCrmClientsIdDocumentsParams, GetApiClientsDocumentsCrmConditionsParams, GetApiClientsDocumentsCrmDocumentFieldsDefinitionsParams, GetApiClientsDocumentsCrmDocumentPhotoDefinitionsParams, GetApiClientsDocumentsCrmDocumentsFieldsParams, GetApiClientsDocumentsCrmDocumentsPhotoParams, GetApiClientsDocumentsCrmRulesParams, GetApiClientsDocumentsDocumentTypesParams, GetApiClientsDocumentsVerificationDefinitionsDocumentsTypesParams, GetApiClientsDocumentsVerificationDefinitionsParams, GetApiClientsDocumentsVerificationQuestionsParams, GetApiClientsDocumentsVerificationTasksIdParams, GetApiClientsDocumentsVerificationTasksParams, PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoBody, QuestionsExcludeArchivedCreatedDefinitionIdIdUpdated, QuestionsExcludeArchivedCreatedIdUpdated, RuleExcludeArchivedCreatedIdUpdated, RuleExcludeArchivedCreatedIdUpdated1, TakeTaskFilters } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiClientsDocumentsReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiClientsDocumentsReadinessQueryKey: () => readonly ["/api/clients-documents/readiness"];
export declare const getGetApiClientsDocumentsReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsReadiness>>>;
export declare type GetApiClientsDocumentsReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiClientsDocumentsReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiClientsDocumentsLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiClientsDocumentsLivenessQueryKey: () => readonly ["/api/clients-documents/liveness"];
export declare const getGetApiClientsDocumentsLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsLiveness>>>;
export declare type GetApiClientsDocumentsLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiClientsDocumentsLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiClientsDocumentsMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsDocumentsMetricsQueryKey: () => readonly ["/api/clients-documents/metrics"];
export declare const getGetApiClientsDocumentsMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsMetrics>>>;
export declare type GetApiClientsDocumentsMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiClientsDocumentsMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary search verification tasks
 */
export declare const getApiClientsDocumentsVerificationTasks: (params?: GetApiClientsDocumentsVerificationTasksParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTasksWithMainDocumentTypeManyPaginated>>;
export declare const getGetApiClientsDocumentsVerificationTasksQueryKey: (params?: GetApiClientsDocumentsVerificationTasksParams) => readonly ["/api/clients-documents/verification/tasks", ...GetApiClientsDocumentsVerificationTasksParams[]];
export declare const getGetApiClientsDocumentsVerificationTasksQueryOptions: <TData = AxiosResponse<DataTasksWithMainDocumentTypeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsVerificationTasksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTasksWithMainDocumentTypeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTasksWithMainDocumentTypeManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsVerificationTasksQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsVerificationTasks>>>;
export declare type GetApiClientsDocumentsVerificationTasksQueryError = AxiosError<unknown>;
/**
 * @summary search verification tasks
 */
export declare const useGetApiClientsDocumentsVerificationTasks: <TData = AxiosResponse<DataTasksWithMainDocumentTypeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsVerificationTasksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTasksWithMainDocumentTypeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get count verification tasks
 */
export declare const getApiClientsDocumentsVerificationTasksCount: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCountVerificationTasksMany>>;
export declare const getGetApiClientsDocumentsVerificationTasksCountQueryKey: () => readonly ["/api/clients-documents/verification/tasks/count"];
export declare const getGetApiClientsDocumentsVerificationTasksCountQueryOptions: <TData = AxiosResponse<DataCountVerificationTasksMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountVerificationTasksMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCountVerificationTasksMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsVerificationTasksCountQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsVerificationTasksCount>>>;
export declare type GetApiClientsDocumentsVerificationTasksCountQueryError = AxiosError<unknown>;
/**
 * @summary Get count verification tasks
 */
export declare const useGetApiClientsDocumentsVerificationTasksCount: <TData = AxiosResponse<DataCountVerificationTasksMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountVerificationTasksMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary fetch next verification task
 */
export declare const postApiClientsDocumentsVerificationTasksTake: (takeTaskFilters: TakeTaskFilters, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullVerificationTask>>;
export declare const getPostApiClientsDocumentsVerificationTasksTakeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullVerificationTask, any>, TError, {
        data: TakeTaskFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFullVerificationTask, any>, TError, {
    data: TakeTaskFilters;
}, TContext>;
export declare type PostApiClientsDocumentsVerificationTasksTakeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationTasksTake>>>;
export declare type PostApiClientsDocumentsVerificationTasksTakeMutationBody = TakeTaskFilters;
export declare type PostApiClientsDocumentsVerificationTasksTakeMutationError = AxiosError<unknown>;
/**
 * @summary fetch next verification task
 */
export declare const usePostApiClientsDocumentsVerificationTasksTake: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullVerificationTask, any>, TError, {
        data: TakeTaskFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFullVerificationTask, any>, TError, {
    data: TakeTaskFilters;
}, TContext>;
/**
 * @summary Fetch next verification task by client
 */
export declare const postApiClientsDocumentsVerificationTasksTakeByClient: (fetchTaskByClientFilters: FetchTaskByClientFilters, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullVerificationTasksByClient>>;
export declare const getPostApiClientsDocumentsVerificationTasksTakeByClientMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullVerificationTasksByClient, any>, TError, {
        data: FetchTaskByClientFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFullVerificationTasksByClient, any>, TError, {
    data: FetchTaskByClientFilters;
}, TContext>;
export declare type PostApiClientsDocumentsVerificationTasksTakeByClientMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationTasksTakeByClient>>>;
export declare type PostApiClientsDocumentsVerificationTasksTakeByClientMutationBody = FetchTaskByClientFilters;
export declare type PostApiClientsDocumentsVerificationTasksTakeByClientMutationError = AxiosError<unknown>;
/**
 * @summary Fetch next verification task by client
 */
export declare const usePostApiClientsDocumentsVerificationTasksTakeByClient: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullVerificationTasksByClient, any>, TError, {
        data: FetchTaskByClientFilters;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFullVerificationTasksByClient, any>, TError, {
    data: FetchTaskByClientFilters;
}, TContext>;
/**
 * @summary get verification task by id
 */
export declare const getApiClientsDocumentsVerificationTasksId: (id: string, params?: GetApiClientsDocumentsVerificationTasksIdParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullVerificationTask>>;
export declare const getGetApiClientsDocumentsVerificationTasksIdQueryKey: (id: string, params?: GetApiClientsDocumentsVerificationTasksIdParams) => readonly [`/api/clients-documents/verification/tasks/${string}`, ...GetApiClientsDocumentsVerificationTasksIdParams[]];
export declare const getGetApiClientsDocumentsVerificationTasksIdQueryOptions: <TData = AxiosResponse<DataFullVerificationTask, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsVerificationTasksIdParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullVerificationTask, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFullVerificationTask, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsVerificationTasksIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsVerificationTasksId>>>;
export declare type GetApiClientsDocumentsVerificationTasksIdQueryError = AxiosError<unknown>;
/**
 * @summary get verification task by id
 */
export declare const useGetApiClientsDocumentsVerificationTasksId: <TData = AxiosResponse<DataFullVerificationTask, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsVerificationTasksIdParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullVerificationTask, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary complete verification tasks
 */
export declare const postApiClientsDocumentsVerificationTasksIdComplete: (id: string, answerOnlyQuestionIdResult: AnswerOnlyQuestionIdResult[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTasks>>;
export declare const getPostApiClientsDocumentsVerificationTasksIdCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTasks, any>, TError, {
        id: string;
        data: AnswerOnlyQuestionIdResult[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTasks, any>, TError, {
    id: string;
    data: AnswerOnlyQuestionIdResult[];
}, TContext>;
export declare type PostApiClientsDocumentsVerificationTasksIdCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationTasksIdComplete>>>;
export declare type PostApiClientsDocumentsVerificationTasksIdCompleteMutationBody = AnswerOnlyQuestionIdResult[];
export declare type PostApiClientsDocumentsVerificationTasksIdCompleteMutationError = AxiosError<unknown>;
/**
 * @summary complete verification tasks
 */
export declare const usePostApiClientsDocumentsVerificationTasksIdComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTasks, any>, TError, {
        id: string;
        data: AnswerOnlyQuestionIdResult[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTasks, any>, TError, {
    id: string;
    data: AnswerOnlyQuestionIdResult[];
}, TContext>;
/**
 * @summary create task for verification
 */
export declare const postApiClientsDocumentsVerificationDefinitionsIdTasks: (id: string, createTaskPayloadBody: CreateTaskPayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTasksMany>>;
export declare const getPostApiClientsDocumentsVerificationDefinitionsIdTasksMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
        id: string;
        data: CreateTaskPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
    id: string;
    data: CreateTaskPayloadBody;
}, TContext>;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdTasksMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationDefinitionsIdTasks>>>;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdTasksMutationBody = CreateTaskPayloadBody;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdTasksMutationError = AxiosError<unknown>;
/**
 * @summary create task for verification
 */
export declare const usePostApiClientsDocumentsVerificationDefinitionsIdTasks: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
        id: string;
        data: CreateTaskPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTasksMany, any>, TError, {
    id: string;
    data: CreateTaskPayloadBody;
}, TContext>;
/**
 * @summary create task for verification by name
 */
export declare const postApiClientsDocumentsVerificationDefinitionsByNameNameTasks: (name: string, createTaskPayloadBody: CreateTaskPayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTasksMany>>;
export declare const getPostApiClientsDocumentsVerificationDefinitionsByNameNameTasksMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
        name: string;
        data: CreateTaskPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
    name: string;
    data: CreateTaskPayloadBody;
}, TContext>;
export declare type PostApiClientsDocumentsVerificationDefinitionsByNameNameTasksMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationDefinitionsByNameNameTasks>>>;
export declare type PostApiClientsDocumentsVerificationDefinitionsByNameNameTasksMutationBody = CreateTaskPayloadBody;
export declare type PostApiClientsDocumentsVerificationDefinitionsByNameNameTasksMutationError = AxiosError<unknown>;
/**
 * @summary create task for verification by name
 */
export declare const usePostApiClientsDocumentsVerificationDefinitionsByNameNameTasks: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
        name: string;
        data: CreateTaskPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTasksMany, any>, TError, {
    name: string;
    data: CreateTaskPayloadBody;
}, TContext>;
/**
 * @summary Create all tasks by client
 */
export declare const postApiClientsDocumentsVerificationByClientClientIdTasks: (clientId: string, createVerificationsTasksByClientPayload: CreateVerificationsTasksByClientPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTasksMany>>;
export declare const getPostApiClientsDocumentsVerificationByClientClientIdTasksMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
        clientId: string;
        data: CreateVerificationsTasksByClientPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
    clientId: string;
    data: CreateVerificationsTasksByClientPayload;
}, TContext>;
export declare type PostApiClientsDocumentsVerificationByClientClientIdTasksMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationByClientClientIdTasks>>>;
export declare type PostApiClientsDocumentsVerificationByClientClientIdTasksMutationBody = CreateVerificationsTasksByClientPayload;
export declare type PostApiClientsDocumentsVerificationByClientClientIdTasksMutationError = AxiosError<unknown>;
/**
 * @summary Create all tasks by client
 */
export declare const usePostApiClientsDocumentsVerificationByClientClientIdTasks: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTasksMany, any>, TError, {
        clientId: string;
        data: CreateVerificationsTasksByClientPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTasksMany, any>, TError, {
    clientId: string;
    data: CreateVerificationsTasksByClientPayload;
}, TContext>;
/**
 * @summary create definition
 */
export declare const postApiClientsDocumentsVerificationDefinitions: (definitionsExcludeArchivedCreatedIdUpdatedBody: DefinitionsExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDefinitions>>;
export declare const getPostApiClientsDocumentsVerificationDefinitionsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
        data: DefinitionsExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
    data: DefinitionsExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PostApiClientsDocumentsVerificationDefinitionsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationDefinitions>>>;
export declare type PostApiClientsDocumentsVerificationDefinitionsMutationBody = DefinitionsExcludeArchivedCreatedIdUpdatedBody;
export declare type PostApiClientsDocumentsVerificationDefinitionsMutationError = AxiosError<unknown>;
/**
 * @summary create definition
 */
export declare const usePostApiClientsDocumentsVerificationDefinitions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
        data: DefinitionsExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDefinitions, any>, TError, {
    data: DefinitionsExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary search definitions
 */
export declare const getApiClientsDocumentsVerificationDefinitions: (params?: GetApiClientsDocumentsVerificationDefinitionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDefinitionsManyPaginated>>;
export declare const getGetApiClientsDocumentsVerificationDefinitionsQueryKey: (params?: GetApiClientsDocumentsVerificationDefinitionsParams) => readonly ["/api/clients-documents/verification/definitions", ...GetApiClientsDocumentsVerificationDefinitionsParams[]];
export declare const getGetApiClientsDocumentsVerificationDefinitionsQueryOptions: <TData = AxiosResponse<DataDefinitionsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsVerificationDefinitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDefinitionsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDefinitionsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsVerificationDefinitionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsVerificationDefinitions>>>;
export declare type GetApiClientsDocumentsVerificationDefinitionsQueryError = AxiosError<unknown>;
/**
 * @summary search definitions
 */
export declare const useGetApiClientsDocumentsVerificationDefinitions: <TData = AxiosResponse<DataDefinitionsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsVerificationDefinitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDefinitionsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary update definition
 */
export declare const patchApiClientsDocumentsVerificationDefinitionsId: (id: string, definitionsExcludeArchivedCreatedIdUpdatedBody: DefinitionsExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDefinitions>>;
export declare const getPatchApiClientsDocumentsVerificationDefinitionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
        id: string;
        data: DefinitionsExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
    id: string;
    data: DefinitionsExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PatchApiClientsDocumentsVerificationDefinitionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsVerificationDefinitionsId>>>;
export declare type PatchApiClientsDocumentsVerificationDefinitionsIdMutationBody = DefinitionsExcludeArchivedCreatedIdUpdatedBody;
export declare type PatchApiClientsDocumentsVerificationDefinitionsIdMutationError = AxiosError<unknown>;
/**
 * @summary update definition
 */
export declare const usePatchApiClientsDocumentsVerificationDefinitionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
        id: string;
        data: DefinitionsExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDefinitions, any>, TError, {
    id: string;
    data: DefinitionsExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary delete definition
 */
export declare const deleteApiClientsDocumentsVerificationDefinitionsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDefinitions>>;
export declare const getDeleteApiClientsDocumentsVerificationDefinitionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsDocumentsVerificationDefinitionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsDocumentsVerificationDefinitionsId>>>;
export declare type DeleteApiClientsDocumentsVerificationDefinitionsIdMutationError = AxiosError<unknown>;
/**
 * @summary delete definition
 */
export declare const useDeleteApiClientsDocumentsVerificationDefinitionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitions, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDefinitions, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary get definition by ID
 */
export declare const getApiClientsDocumentsVerificationDefinitionsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullDefinition>>;
export declare const getGetApiClientsDocumentsVerificationDefinitionsIdQueryKey: (id: string) => readonly [`/api/clients-documents/verification/definitions/${string}`];
export declare const getGetApiClientsDocumentsVerificationDefinitionsIdQueryOptions: <TData = AxiosResponse<DataFullDefinition, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullDefinition, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFullDefinition, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsVerificationDefinitionsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsVerificationDefinitionsId>>>;
export declare type GetApiClientsDocumentsVerificationDefinitionsIdQueryError = AxiosError<unknown>;
/**
 * @summary get definition by ID
 */
export declare const useGetApiClientsDocumentsVerificationDefinitionsId: <TData = AxiosResponse<DataFullDefinition, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullDefinition, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get document_types
 */
export declare const getApiClientsDocumentsVerificationDefinitionsDocumentsTypes: (params?: GetApiClientsDocumentsVerificationDefinitionsDocumentsTypesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdatedPaginated>>;
export declare const getGetApiClientsDocumentsVerificationDefinitionsDocumentsTypesQueryKey: (params?: GetApiClientsDocumentsVerificationDefinitionsDocumentsTypesParams) => readonly ["/api/clients-documents/verification/definitions_documents_types", ...GetApiClientsDocumentsVerificationDefinitionsDocumentsTypesParams[]];
export declare const getGetApiClientsDocumentsVerificationDefinitionsDocumentsTypesQueryOptions: <TData = AxiosResponse<DataDefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdatedPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsVerificationDefinitionsDocumentsTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdatedPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdatedPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsVerificationDefinitionsDocumentsTypesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsVerificationDefinitionsDocumentsTypes>>>;
export declare type GetApiClientsDocumentsVerificationDefinitionsDocumentsTypesQueryError = AxiosError<unknown>;
/**
 * @summary get document_types
 */
export declare const useGetApiClientsDocumentsVerificationDefinitionsDocumentsTypes: <TData = AxiosResponse<DataDefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdatedPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsVerificationDefinitionsDocumentsTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdatedPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create document_types for definition
 */
export declare const postApiClientsDocumentsVerificationDefinitionsIdDocumentTypes: (id: string, definitionsDocumentsTypesExcludeArchivedCreatedDefinitionIdIdUpdated: DefinitionsDocumentsTypesExcludeArchivedCreatedDefinitionIdIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDefinitionsDocumentsTypes>>;
export declare const getPostApiClientsDocumentsVerificationDefinitionsIdDocumentTypesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
        id: string;
        data: DefinitionsDocumentsTypesExcludeArchivedCreatedDefinitionIdIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
    id: string;
    data: DefinitionsDocumentsTypesExcludeArchivedCreatedDefinitionIdIdUpdated;
}, TContext>;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdDocumentTypesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationDefinitionsIdDocumentTypes>>>;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdDocumentTypesMutationBody = DefinitionsDocumentsTypesExcludeArchivedCreatedDefinitionIdIdUpdated;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdDocumentTypesMutationError = AxiosError<unknown>;
/**
 * @summary create document_types for definition
 */
export declare const usePostApiClientsDocumentsVerificationDefinitionsIdDocumentTypes: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
        id: string;
        data: DefinitionsDocumentsTypesExcludeArchivedCreatedDefinitionIdIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
    id: string;
    data: DefinitionsDocumentsTypesExcludeArchivedCreatedDefinitionIdIdUpdated;
}, TContext>;
/**
 * @summary update document_types for definition
 */
export declare const patchApiClientsDocumentsVerificationDefinitionsDocumentsTypesId: (id: string, definitionsDocumentsTypesExcludeArchivedCreatedIdUpdated: DefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDefinitionsDocumentsTypes>>;
export declare const getPatchApiClientsDocumentsVerificationDefinitionsDocumentsTypesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
        id: string;
        data: DefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
    id: string;
    data: DefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PatchApiClientsDocumentsVerificationDefinitionsDocumentsTypesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsVerificationDefinitionsDocumentsTypesId>>>;
export declare type PatchApiClientsDocumentsVerificationDefinitionsDocumentsTypesIdMutationBody = DefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdated;
export declare type PatchApiClientsDocumentsVerificationDefinitionsDocumentsTypesIdMutationError = AxiosError<unknown>;
/**
 * @summary update document_types for definition
 */
export declare const usePatchApiClientsDocumentsVerificationDefinitionsDocumentsTypesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
        id: string;
        data: DefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
    id: string;
    data: DefinitionsDocumentsTypesExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary delete document_types
 */
export declare const deleteApiClientsDocumentsVerificationDefinitionsDocumentsTypesId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDefinitionsDocumentsTypes>>;
export declare const getDeleteApiClientsDocumentsVerificationDefinitionsDocumentsTypesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsDocumentsVerificationDefinitionsDocumentsTypesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsDocumentsVerificationDefinitionsDocumentsTypesId>>>;
export declare type DeleteApiClientsDocumentsVerificationDefinitionsDocumentsTypesIdMutationError = AxiosError<unknown>;
/**
 * @summary delete document_types
 */
export declare const useDeleteApiClientsDocumentsVerificationDefinitionsDocumentsTypesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDefinitionsDocumentsTypes, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary create question for definition
 */
export declare const postApiClientsDocumentsVerificationDefinitionsIdQuestions: (id: string, questionsExcludeArchivedCreatedDefinitionIdIdUpdated: QuestionsExcludeArchivedCreatedDefinitionIdIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestions>>;
export declare const getPostApiClientsDocumentsVerificationDefinitionsIdQuestionsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
        id: string;
        data: QuestionsExcludeArchivedCreatedDefinitionIdIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
    id: string;
    data: QuestionsExcludeArchivedCreatedDefinitionIdIdUpdated;
}, TContext>;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdQuestionsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsVerificationDefinitionsIdQuestions>>>;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdQuestionsMutationBody = QuestionsExcludeArchivedCreatedDefinitionIdIdUpdated;
export declare type PostApiClientsDocumentsVerificationDefinitionsIdQuestionsMutationError = AxiosError<unknown>;
/**
 * @summary create question for definition
 */
export declare const usePostApiClientsDocumentsVerificationDefinitionsIdQuestions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
        id: string;
        data: QuestionsExcludeArchivedCreatedDefinitionIdIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestions, any>, TError, {
    id: string;
    data: QuestionsExcludeArchivedCreatedDefinitionIdIdUpdated;
}, TContext>;
/**
 * @summary get question for definition
 */
export declare const getApiClientsDocumentsVerificationQuestions: (params?: GetApiClientsDocumentsVerificationQuestionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestionsManyPaginated>>;
export declare const getGetApiClientsDocumentsVerificationQuestionsQueryKey: (params?: GetApiClientsDocumentsVerificationQuestionsParams) => readonly ["/api/clients-documents/verification/questions", ...GetApiClientsDocumentsVerificationQuestionsParams[]];
export declare const getGetApiClientsDocumentsVerificationQuestionsQueryOptions: <TData = AxiosResponse<DataQuestionsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsVerificationQuestionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQuestionsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsVerificationQuestionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsVerificationQuestions>>>;
export declare type GetApiClientsDocumentsVerificationQuestionsQueryError = AxiosError<unknown>;
/**
 * @summary get question for definition
 */
export declare const useGetApiClientsDocumentsVerificationQuestions: <TData = AxiosResponse<DataQuestionsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsVerificationQuestionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary update question by id
 */
export declare const patchApiClientsDocumentsVerificationQuestionsId: (id: string, questionsExcludeArchivedCreatedIdUpdated: QuestionsExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestions>>;
export declare const getPatchApiClientsDocumentsVerificationQuestionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
        id: string;
        data: QuestionsExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
    id: string;
    data: QuestionsExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PatchApiClientsDocumentsVerificationQuestionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsVerificationQuestionsId>>>;
export declare type PatchApiClientsDocumentsVerificationQuestionsIdMutationBody = QuestionsExcludeArchivedCreatedIdUpdated;
export declare type PatchApiClientsDocumentsVerificationQuestionsIdMutationError = AxiosError<unknown>;
/**
 * @summary update question by id
 */
export declare const usePatchApiClientsDocumentsVerificationQuestionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
        id: string;
        data: QuestionsExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestions, any>, TError, {
    id: string;
    data: QuestionsExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary delete question by id
 */
export declare const deleteApiClientsDocumentsVerificationQuestionsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestions>>;
export declare const getDeleteApiClientsDocumentsVerificationQuestionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsDocumentsVerificationQuestionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsDocumentsVerificationQuestionsId>>>;
export declare type DeleteApiClientsDocumentsVerificationQuestionsIdMutationError = AxiosError<unknown>;
/**
 * @summary delete question by id
 */
export declare const useDeleteApiClientsDocumentsVerificationQuestionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestions, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestions, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary search document types
 */
export declare const getApiClientsDocumentsDocumentTypes: (params?: GetApiClientsDocumentsDocumentTypesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentTypeManyPaginated>>;
export declare const getGetApiClientsDocumentsDocumentTypesQueryKey: (params?: GetApiClientsDocumentsDocumentTypesParams) => readonly ["/api/clients-documents/document_types", ...GetApiClientsDocumentsDocumentTypesParams[]];
export declare const getGetApiClientsDocumentsDocumentTypesQueryOptions: <TData = AxiosResponse<DataDocumentTypeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsDocumentTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentTypeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentTypeManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsDocumentTypesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsDocumentTypes>>>;
export declare type GetApiClientsDocumentsDocumentTypesQueryError = AxiosError<unknown>;
/**
 * @summary search document types
 */
export declare const useGetApiClientsDocumentsDocumentTypes: <TData = AxiosResponse<DataDocumentTypeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsDocumentTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentTypeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create document types
 */
export declare const postApiClientsDocumentsDocumentTypes: (documentTypeExcludeArchivedCreatedIdUpdated: DocumentTypeExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentType>>;
export declare const getPostApiClientsDocumentsDocumentTypesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentType, any>, TError, {
        data: DocumentTypeExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentType, any>, TError, {
    data: DocumentTypeExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiClientsDocumentsDocumentTypesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsDocumentTypes>>>;
export declare type PostApiClientsDocumentsDocumentTypesMutationBody = DocumentTypeExcludeArchivedCreatedIdUpdated;
export declare type PostApiClientsDocumentsDocumentTypesMutationError = AxiosError<unknown>;
/**
 * @summary create document types
 */
export declare const usePostApiClientsDocumentsDocumentTypes: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentType, any>, TError, {
        data: DocumentTypeExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentType, any>, TError, {
    data: DocumentTypeExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary get rules by filters
 */
export declare const getApiClientsDocumentsCrmRules: (params?: GetApiClientsDocumentsCrmRulesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRuleManyPaginated>>;
export declare const getGetApiClientsDocumentsCrmRulesQueryKey: (params?: GetApiClientsDocumentsCrmRulesParams) => readonly ["/api/clients-documents/crm/rules", ...GetApiClientsDocumentsCrmRulesParams[]];
export declare const getGetApiClientsDocumentsCrmRulesQueryOptions: <TData = AxiosResponse<DataRuleManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmRulesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRuleManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataRuleManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmRulesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmRules>>>;
export declare type GetApiClientsDocumentsCrmRulesQueryError = AxiosError<unknown>;
/**
 * @summary get rules by filters
 */
export declare const useGetApiClientsDocumentsCrmRules: <TData = AxiosResponse<DataRuleManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmRulesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRuleManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create rule for definition
 */
export declare const postApiClientsDocumentsCrmRules: (ruleExcludeArchivedCreatedIdUpdated: RuleExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRule>>;
export declare const getPostApiClientsDocumentsCrmRulesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
        data: RuleExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
    data: RuleExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiClientsDocumentsCrmRulesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsCrmRules>>>;
export declare type PostApiClientsDocumentsCrmRulesMutationBody = RuleExcludeArchivedCreatedIdUpdated;
export declare type PostApiClientsDocumentsCrmRulesMutationError = AxiosError<unknown>;
/**
 * @summary create rule for definition
 */
export declare const usePostApiClientsDocumentsCrmRules: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
        data: RuleExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRule, any>, TError, {
    data: RuleExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary update rule by id
 */
export declare const patchApiClientsDocumentsCrmRulesId: (id: string, ruleExcludeArchivedCreatedIdUpdated1: RuleExcludeArchivedCreatedIdUpdated1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRule>>;
export declare const getPatchApiClientsDocumentsCrmRulesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
        id: string;
        data: RuleExcludeArchivedCreatedIdUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
    id: string;
    data: RuleExcludeArchivedCreatedIdUpdated1;
}, TContext>;
export declare type PatchApiClientsDocumentsCrmRulesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsCrmRulesId>>>;
export declare type PatchApiClientsDocumentsCrmRulesIdMutationBody = RuleExcludeArchivedCreatedIdUpdated1;
export declare type PatchApiClientsDocumentsCrmRulesIdMutationError = AxiosError<unknown>;
/**
 * @summary update rule by id
 */
export declare const usePatchApiClientsDocumentsCrmRulesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
        id: string;
        data: RuleExcludeArchivedCreatedIdUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRule, any>, TError, {
    id: string;
    data: RuleExcludeArchivedCreatedIdUpdated1;
}, TContext>;
/**
 * @summary delete rule by id
 */
export declare const deleteApiClientsDocumentsCrmRulesId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRule>>;
export declare const getDeleteApiClientsDocumentsCrmRulesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsDocumentsCrmRulesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsDocumentsCrmRulesId>>>;
export declare type DeleteApiClientsDocumentsCrmRulesIdMutationError = AxiosError<unknown>;
/**
 * @summary delete rule by id
 */
export declare const useDeleteApiClientsDocumentsCrmRulesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRule, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRule, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary get rules conditions by filters
 */
export declare const getApiClientsDocumentsCrmConditions: (params?: GetApiClientsDocumentsCrmConditionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataConditionManyPaginated>>;
export declare const getGetApiClientsDocumentsCrmConditionsQueryKey: (params?: GetApiClientsDocumentsCrmConditionsParams) => readonly ["/api/clients-documents/crm/conditions", ...GetApiClientsDocumentsCrmConditionsParams[]];
export declare const getGetApiClientsDocumentsCrmConditionsQueryOptions: <TData = AxiosResponse<DataConditionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmConditionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataConditionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataConditionManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmConditionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmConditions>>>;
export declare type GetApiClientsDocumentsCrmConditionsQueryError = AxiosError<unknown>;
/**
 * @summary get rules conditions by filters
 */
export declare const useGetApiClientsDocumentsCrmConditions: <TData = AxiosResponse<DataConditionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmConditionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataConditionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create condition for rule
 */
export declare const postApiClientsDocumentsCrmConditions: (conditionExcludeArchivedCreatedIdUpdated: ConditionExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCondition>>;
export declare const getPostApiClientsDocumentsCrmConditionsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
        data: ConditionExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
    data: ConditionExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiClientsDocumentsCrmConditionsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsCrmConditions>>>;
export declare type PostApiClientsDocumentsCrmConditionsMutationBody = ConditionExcludeArchivedCreatedIdUpdated;
export declare type PostApiClientsDocumentsCrmConditionsMutationError = AxiosError<unknown>;
/**
 * @summary create condition for rule
 */
export declare const usePostApiClientsDocumentsCrmConditions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
        data: ConditionExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCondition, any>, TError, {
    data: ConditionExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary update condition by id
 */
export declare const patchApiClientsDocumentsCrmConditionsId: (id: string, conditionExcludeArchivedCreatedIdUpdated1: ConditionExcludeArchivedCreatedIdUpdated1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCondition>>;
export declare const getPatchApiClientsDocumentsCrmConditionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
        id: string;
        data: ConditionExcludeArchivedCreatedIdUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
    id: string;
    data: ConditionExcludeArchivedCreatedIdUpdated1;
}, TContext>;
export declare type PatchApiClientsDocumentsCrmConditionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsCrmConditionsId>>>;
export declare type PatchApiClientsDocumentsCrmConditionsIdMutationBody = ConditionExcludeArchivedCreatedIdUpdated1;
export declare type PatchApiClientsDocumentsCrmConditionsIdMutationError = AxiosError<unknown>;
/**
 * @summary update condition by id
 */
export declare const usePatchApiClientsDocumentsCrmConditionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
        id: string;
        data: ConditionExcludeArchivedCreatedIdUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCondition, any>, TError, {
    id: string;
    data: ConditionExcludeArchivedCreatedIdUpdated1;
}, TContext>;
/**
 * @summary delete condition by id
 */
export declare const deleteApiClientsDocumentsCrmConditionsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCondition>>;
export declare const getDeleteApiClientsDocumentsCrmConditionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsDocumentsCrmConditionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsDocumentsCrmConditionsId>>>;
export declare type DeleteApiClientsDocumentsCrmConditionsIdMutationError = AxiosError<unknown>;
/**
 * @summary delete condition by id
 */
export declare const useDeleteApiClientsDocumentsCrmConditionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCondition, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCondition, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary get document definition fields
 */
export declare const getApiClientsDocumentsCrmDocumentFieldsDefinitions: (params?: GetApiClientsDocumentsCrmDocumentFieldsDefinitionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldDefinitionManyPaginated>>;
export declare const getGetApiClientsDocumentsCrmDocumentFieldsDefinitionsQueryKey: (params?: GetApiClientsDocumentsCrmDocumentFieldsDefinitionsParams) => readonly ["/api/clients-documents/crm/document_fields_definitions", ...GetApiClientsDocumentsCrmDocumentFieldsDefinitionsParams[]];
export declare const getGetApiClientsDocumentsCrmDocumentFieldsDefinitionsQueryOptions: <TData = AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmDocumentFieldsDefinitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmDocumentFieldsDefinitionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmDocumentFieldsDefinitions>>>;
export declare type GetApiClientsDocumentsCrmDocumentFieldsDefinitionsQueryError = AxiosError<unknown>;
/**
 * @summary get document definition fields
 */
export declare const useGetApiClientsDocumentsCrmDocumentFieldsDefinitions: <TData = AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmDocumentFieldsDefinitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create document field definition
 */
export declare const postApiClientsDocumentsCrmDocumentTypesIdDocumentFieldsDefinitions: (id: string, documentFieldDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated: DocumentFieldDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldDefinitionMany>>;
export declare const getPostApiClientsDocumentsCrmDocumentTypesIdDocumentFieldsDefinitionsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldDefinitionMany, any>, TError, {
        id: string;
        data: DocumentFieldDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentFieldDefinitionMany, any>, TError, {
    id: string;
    data: DocumentFieldDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
}, TContext>;
export declare type PostApiClientsDocumentsCrmDocumentTypesIdDocumentFieldsDefinitionsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsCrmDocumentTypesIdDocumentFieldsDefinitions>>>;
export declare type PostApiClientsDocumentsCrmDocumentTypesIdDocumentFieldsDefinitionsMutationBody = DocumentFieldDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
export declare type PostApiClientsDocumentsCrmDocumentTypesIdDocumentFieldsDefinitionsMutationError = AxiosError<unknown>;
/**
 * @summary create document field definition
 */
export declare const usePostApiClientsDocumentsCrmDocumentTypesIdDocumentFieldsDefinitions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldDefinitionMany, any>, TError, {
        id: string;
        data: DocumentFieldDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentFieldDefinitionMany, any>, TError, {
    id: string;
    data: DocumentFieldDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
}, TContext>;
/**
 * @summary update document field definition
 */
export declare const patchApiClientsDocumentsCrmDocumentFieldsDefinitionsId: (id: string, documentFieldDefinitionExcludeArchivedCreatedIdUpdated: DocumentFieldDefinitionExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldDefinition>>;
export declare const getPatchApiClientsDocumentsCrmDocumentFieldsDefinitionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldDefinition, any>, TError, {
        id: string;
        data: DocumentFieldDefinitionExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentFieldDefinition, any>, TError, {
    id: string;
    data: DocumentFieldDefinitionExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PatchApiClientsDocumentsCrmDocumentFieldsDefinitionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsCrmDocumentFieldsDefinitionsId>>>;
export declare type PatchApiClientsDocumentsCrmDocumentFieldsDefinitionsIdMutationBody = DocumentFieldDefinitionExcludeArchivedCreatedIdUpdated;
export declare type PatchApiClientsDocumentsCrmDocumentFieldsDefinitionsIdMutationError = AxiosError<unknown>;
/**
 * @summary update document field definition
 */
export declare const usePatchApiClientsDocumentsCrmDocumentFieldsDefinitionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldDefinition, any>, TError, {
        id: string;
        data: DocumentFieldDefinitionExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentFieldDefinition, any>, TError, {
    id: string;
    data: DocumentFieldDefinitionExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary delete document field definition
 */
export declare const deleteApiClientsDocumentsCrmDocumentFieldsDefinitionsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldDefinition>>;
export declare const getDeleteApiClientsDocumentsCrmDocumentFieldsDefinitionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldDefinition, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentFieldDefinition, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsDocumentsCrmDocumentFieldsDefinitionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsDocumentsCrmDocumentFieldsDefinitionsId>>>;
export declare type DeleteApiClientsDocumentsCrmDocumentFieldsDefinitionsIdMutationError = AxiosError<unknown>;
/**
 * @summary delete document field definition
 */
export declare const useDeleteApiClientsDocumentsCrmDocumentFieldsDefinitionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldDefinition, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentFieldDefinition, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary get document photo definitions
 */
export declare const getApiClientsDocumentsCrmDocumentPhotoDefinitions: (params?: GetApiClientsDocumentsCrmDocumentPhotoDefinitionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentPhotoDefinitionManyPaginated>>;
export declare const getGetApiClientsDocumentsCrmDocumentPhotoDefinitionsQueryKey: (params?: GetApiClientsDocumentsCrmDocumentPhotoDefinitionsParams) => readonly ["/api/clients-documents/crm/document_photo_definitions", ...GetApiClientsDocumentsCrmDocumentPhotoDefinitionsParams[]];
export declare const getGetApiClientsDocumentsCrmDocumentPhotoDefinitionsQueryOptions: <TData = AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmDocumentPhotoDefinitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmDocumentPhotoDefinitionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmDocumentPhotoDefinitions>>>;
export declare type GetApiClientsDocumentsCrmDocumentPhotoDefinitionsQueryError = AxiosError<unknown>;
/**
 * @summary get document photo definitions
 */
export declare const useGetApiClientsDocumentsCrmDocumentPhotoDefinitions: <TData = AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmDocumentPhotoDefinitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create document photo definition
 */
export declare const postApiClientsDocumentsCrmDocumentTypesIdDocumentPhotoDefinitions: (id: string, documentPhotoDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated: DocumentPhotoDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentPhotoDefinitionMany>>;
export declare const getPostApiClientsDocumentsCrmDocumentTypesIdDocumentPhotoDefinitionsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinitionMany, any>, TError, {
        id: string;
        data: DocumentPhotoDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinitionMany, any>, TError, {
    id: string;
    data: DocumentPhotoDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
}, TContext>;
export declare type PostApiClientsDocumentsCrmDocumentTypesIdDocumentPhotoDefinitionsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsCrmDocumentTypesIdDocumentPhotoDefinitions>>>;
export declare type PostApiClientsDocumentsCrmDocumentTypesIdDocumentPhotoDefinitionsMutationBody = DocumentPhotoDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
export declare type PostApiClientsDocumentsCrmDocumentTypesIdDocumentPhotoDefinitionsMutationError = AxiosError<unknown>;
/**
 * @summary create document photo definition
 */
export declare const usePostApiClientsDocumentsCrmDocumentTypesIdDocumentPhotoDefinitions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinitionMany, any>, TError, {
        id: string;
        data: DocumentPhotoDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentPhotoDefinitionMany, any>, TError, {
    id: string;
    data: DocumentPhotoDefinitionExcludeArchivedCreatedDocumentTypeIdIdUpdated[];
}, TContext>;
/**
 * @summary update document photo definition
 */
export declare const patchApiClientsDocumentsCrmDocumentPhotoDefinitionsId: (id: string, documentPhotoDefinitionExcludeArchivedCreatedIdUpdated: DocumentPhotoDefinitionExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentPhotoDefinition>>;
export declare const getPatchApiClientsDocumentsCrmDocumentPhotoDefinitionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinition, any>, TError, {
        id: string;
        data: DocumentPhotoDefinitionExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinition, any>, TError, {
    id: string;
    data: DocumentPhotoDefinitionExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PatchApiClientsDocumentsCrmDocumentPhotoDefinitionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsCrmDocumentPhotoDefinitionsId>>>;
export declare type PatchApiClientsDocumentsCrmDocumentPhotoDefinitionsIdMutationBody = DocumentPhotoDefinitionExcludeArchivedCreatedIdUpdated;
export declare type PatchApiClientsDocumentsCrmDocumentPhotoDefinitionsIdMutationError = AxiosError<unknown>;
/**
 * @summary update document photo definition
 */
export declare const usePatchApiClientsDocumentsCrmDocumentPhotoDefinitionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinition, any>, TError, {
        id: string;
        data: DocumentPhotoDefinitionExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentPhotoDefinition, any>, TError, {
    id: string;
    data: DocumentPhotoDefinitionExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary delete document photo definition
 */
export declare const deleteApiClientsDocumentsCrmDocumentPhotoDefinitionsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentPhotoDefinition>>;
export declare const getDeleteApiClientsDocumentsCrmDocumentPhotoDefinitionsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinition, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinition, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsDocumentsCrmDocumentPhotoDefinitionsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsDocumentsCrmDocumentPhotoDefinitionsId>>>;
export declare type DeleteApiClientsDocumentsCrmDocumentPhotoDefinitionsIdMutationError = AxiosError<unknown>;
/**
 * @summary delete document photo definition
 */
export declare const useDeleteApiClientsDocumentsCrmDocumentPhotoDefinitionsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentPhotoDefinition, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentPhotoDefinition, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary search documents fields
 */
export declare const getApiClientsDocumentsCrmDocumentsFields: (params?: GetApiClientsDocumentsCrmDocumentsFieldsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldsManyPaginated>>;
export declare const getGetApiClientsDocumentsCrmDocumentsFieldsQueryKey: (params?: GetApiClientsDocumentsCrmDocumentsFieldsParams) => readonly ["/api/clients-documents/crm/documents_fields", ...GetApiClientsDocumentsCrmDocumentsFieldsParams[]];
export declare const getGetApiClientsDocumentsCrmDocumentsFieldsQueryOptions: <TData = AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmDocumentsFieldsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmDocumentsFieldsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmDocumentsFields>>>;
export declare type GetApiClientsDocumentsCrmDocumentsFieldsQueryError = AxiosError<unknown>;
/**
 * @summary search documents fields
 */
export declare const useGetApiClientsDocumentsCrmDocumentsFields: <TData = AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmDocumentsFieldsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary search documents photo
 */
export declare const getApiClientsDocumentsCrmDocumentsPhoto: (params?: GetApiClientsDocumentsCrmDocumentsPhotoParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentPhotoWithPageManyPaginated>>;
export declare const getGetApiClientsDocumentsCrmDocumentsPhotoQueryKey: (params?: GetApiClientsDocumentsCrmDocumentsPhotoParams) => readonly ["/api/clients-documents/crm/documents_photo", ...GetApiClientsDocumentsCrmDocumentsPhotoParams[]];
export declare const getGetApiClientsDocumentsCrmDocumentsPhotoQueryOptions: <TData = AxiosResponse<DataDocumentPhotoWithPageManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmDocumentsPhotoParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentPhotoWithPageManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentPhotoWithPageManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmDocumentsPhotoQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmDocumentsPhoto>>>;
export declare type GetApiClientsDocumentsCrmDocumentsPhotoQueryError = AxiosError<unknown>;
/**
 * @summary search documents photo
 */
export declare const useGetApiClientsDocumentsCrmDocumentsPhoto: <TData = AxiosResponse<DataDocumentPhotoWithPageManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsCrmDocumentsPhotoParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentPhotoWithPageManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download file by document photo id
 */
export declare const getApiClientsDocumentsCrmDocumentsPhotoIdDownload: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsDocumentsCrmDocumentsPhotoIdDownloadQueryKey: (id: string) => readonly [`/api/clients-documents/crm/documents_photo/${string}/download`];
export declare const getGetApiClientsDocumentsCrmDocumentsPhotoIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmDocumentsPhotoIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmDocumentsPhotoIdDownload>>>;
export declare type GetApiClientsDocumentsCrmDocumentsPhotoIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download file by document photo id
 */
export declare const useGetApiClientsDocumentsCrmDocumentsPhotoIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Get full info about document, if document not found in this service try to get document from clients service from endpoint like this
 * @summary get full documents info
 */
export declare const getApiClientsDocumentsCrmDocumentsIdFull: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullDocumentInfo>>;
export declare const getGetApiClientsDocumentsCrmDocumentsIdFullQueryKey: (id: string) => readonly [`/api/clients-documents/crm/documents/${string}/full`];
export declare const getGetApiClientsDocumentsCrmDocumentsIdFullQueryOptions: <TData = AxiosResponse<DataFullDocumentInfo, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullDocumentInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFullDocumentInfo, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmDocumentsIdFullQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmDocumentsIdFull>>>;
export declare type GetApiClientsDocumentsCrmDocumentsIdFullQueryError = AxiosError<unknown>;
/**
 * @summary get full documents info
 */
export declare const useGetApiClientsDocumentsCrmDocumentsIdFull: <TData = AxiosResponse<DataFullDocumentInfo, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullDocumentInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get documents data
 */
export declare const getApiClientsDocumentsCrmClientsIdDocumentsData: (id: string, params?: GetApiClientsDocumentsCrmClientsIdDocumentsDataParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDocumentsDataByClientResponse>>;
export declare const getGetApiClientsDocumentsCrmClientsIdDocumentsDataQueryKey: (id: string, params?: GetApiClientsDocumentsCrmClientsIdDocumentsDataParams) => readonly [`/api/clients-documents/crm/clients/${string}/documents_data`, ...GetApiClientsDocumentsCrmClientsIdDocumentsDataParams[]];
export declare const getGetApiClientsDocumentsCrmClientsIdDocumentsDataQueryOptions: <TData = AxiosResponse<DataGetDocumentsDataByClientResponse, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsCrmClientsIdDocumentsDataParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDocumentsDataByClientResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetDocumentsDataByClientResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmClientsIdDocumentsDataQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmClientsIdDocumentsData>>>;
export declare type GetApiClientsDocumentsCrmClientsIdDocumentsDataQueryError = AxiosError<unknown>;
/**
 * @summary Get documents data
 */
export declare const useGetApiClientsDocumentsCrmClientsIdDocumentsData: <TData = AxiosResponse<DataGetDocumentsDataByClientResponse, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsCrmClientsIdDocumentsDataParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDocumentsDataByClientResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get clients documents with details
 */
export declare const getApiClientsDocumentsCrmClientsIdDocuments: (id: string, params?: GetApiClientsDocumentsCrmClientsIdDocumentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentWithDetailsMany>>;
export declare const getGetApiClientsDocumentsCrmClientsIdDocumentsQueryKey: (id: string, params?: GetApiClientsDocumentsCrmClientsIdDocumentsParams) => readonly [`/api/clients-documents/crm/clients/${string}/documents`, ...GetApiClientsDocumentsCrmClientsIdDocumentsParams[]];
export declare const getGetApiClientsDocumentsCrmClientsIdDocumentsQueryOptions: <TData = AxiosResponse<DataDocumentWithDetailsMany, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsCrmClientsIdDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentWithDetailsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentWithDetailsMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsCrmClientsIdDocumentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsCrmClientsIdDocuments>>>;
export declare type GetApiClientsDocumentsCrmClientsIdDocumentsQueryError = AxiosError<unknown>;
/**
 * @summary Get clients documents with details
 */
export declare const useGetApiClientsDocumentsCrmClientsIdDocuments: <TData = AxiosResponse<DataDocumentWithDetailsMany, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsCrmClientsIdDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentWithDetailsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get full documents definition
 */
export declare const getApiClientsDocumentsClientsFullDocumentsDefinition: (params?: GetApiClientsDocumentsClientsFullDocumentsDefinitionParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullDocumentsDefinition>>;
export declare const getGetApiClientsDocumentsClientsFullDocumentsDefinitionQueryKey: (params?: GetApiClientsDocumentsClientsFullDocumentsDefinitionParams) => readonly ["/api/clients-documents/clients/full_documents_definition", ...GetApiClientsDocumentsClientsFullDocumentsDefinitionParams[]];
export declare const getGetApiClientsDocumentsClientsFullDocumentsDefinitionQueryOptions: <TData = AxiosResponse<DataFullDocumentsDefinition, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsFullDocumentsDefinitionParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullDocumentsDefinition, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFullDocumentsDefinition, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsClientsFullDocumentsDefinitionQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsClientsFullDocumentsDefinition>>>;
export declare type GetApiClientsDocumentsClientsFullDocumentsDefinitionQueryError = AxiosError<unknown>;
/**
 * @summary get full documents definition
 */
export declare const useGetApiClientsDocumentsClientsFullDocumentsDefinition: <TData = AxiosResponse<DataFullDocumentsDefinition, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsFullDocumentsDefinitionParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullDocumentsDefinition, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get documents
 */
export declare const getApiClientsDocumentsClientsDocuments: (params?: GetApiClientsDocumentsClientsDocumentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentManyPaginated>>;
export declare const getGetApiClientsDocumentsClientsDocumentsQueryKey: (params?: GetApiClientsDocumentsClientsDocumentsParams) => readonly ["/api/clients-documents/clients/documents", ...GetApiClientsDocumentsClientsDocumentsParams[]];
export declare const getGetApiClientsDocumentsClientsDocumentsQueryOptions: <TData = AxiosResponse<DataDocumentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsClientsDocumentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsClientsDocuments>>>;
export declare type GetApiClientsDocumentsClientsDocumentsQueryError = AxiosError<unknown>;
/**
 * @summary get documents
 */
export declare const useGetApiClientsDocumentsClientsDocuments: <TData = AxiosResponse<DataDocumentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create document
 */
export declare const postApiClientsDocumentsClientsDocuments: (createDocumentBody: CreateDocumentBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocument>>;
export declare const getPostApiClientsDocumentsClientsDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        data: CreateDocumentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
    data: CreateDocumentBody;
}, TContext>;
export declare type PostApiClientsDocumentsClientsDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsClientsDocuments>>>;
export declare type PostApiClientsDocumentsClientsDocumentsMutationBody = CreateDocumentBody;
export declare type PostApiClientsDocumentsClientsDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary create document
 */
export declare const usePostApiClientsDocumentsClientsDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        data: CreateDocumentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocument, any>, TError, {
    data: CreateDocumentBody;
}, TContext>;
/**
 * @summary search document types
 */
export declare const getApiClientsDocumentsClientsDocumentTypes: (params?: GetApiClientsDocumentsClientsDocumentTypesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentTypeManyPaginated>>;
export declare const getGetApiClientsDocumentsClientsDocumentTypesQueryKey: (params?: GetApiClientsDocumentsClientsDocumentTypesParams) => readonly ["/api/clients-documents/clients/document_types", ...GetApiClientsDocumentsClientsDocumentTypesParams[]];
export declare const getGetApiClientsDocumentsClientsDocumentTypesQueryOptions: <TData = AxiosResponse<DataDocumentTypeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsDocumentTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentTypeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentTypeManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsClientsDocumentTypesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsClientsDocumentTypes>>>;
export declare type GetApiClientsDocumentsClientsDocumentTypesQueryError = AxiosError<unknown>;
/**
 * @summary search document types
 */
export declare const useGetApiClientsDocumentsClientsDocumentTypes: <TData = AxiosResponse<DataDocumentTypeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsDocumentTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentTypeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary search document definition fields
 */
export declare const getApiClientsDocumentsClientsDocumentFieldsDefinitions: (params?: GetApiClientsDocumentsClientsDocumentFieldsDefinitionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldDefinitionManyPaginated>>;
export declare const getGetApiClientsDocumentsClientsDocumentFieldsDefinitionsQueryKey: (params?: GetApiClientsDocumentsClientsDocumentFieldsDefinitionsParams) => readonly ["/api/clients-documents/clients/document_fields_definitions", ...GetApiClientsDocumentsClientsDocumentFieldsDefinitionsParams[]];
export declare const getGetApiClientsDocumentsClientsDocumentFieldsDefinitionsQueryOptions: <TData = AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsDocumentFieldsDefinitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsClientsDocumentFieldsDefinitionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsClientsDocumentFieldsDefinitions>>>;
export declare type GetApiClientsDocumentsClientsDocumentFieldsDefinitionsQueryError = AxiosError<unknown>;
/**
 * @summary search document definition fields
 */
export declare const useGetApiClientsDocumentsClientsDocumentFieldsDefinitions: <TData = AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsDocumentFieldsDefinitionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFieldDefinitionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary filled documents fields
 */
export declare const getApiClientsDocumentsClientsDocumentsIdDocumentsFields: (id: string, params?: GetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldsManyPaginated>>;
export declare const getGetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsQueryKey: (id: string, params?: GetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsParams) => readonly [`/api/clients-documents/clients/documents/${string}/documents_fields`, ...GetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsParams[]];
export declare const getGetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsQueryOptions: <TData = AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsClientsDocumentsIdDocumentsFields>>>;
export declare type GetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsQueryError = AxiosError<unknown>;
/**
 * @summary filled documents fields
 */
export declare const useGetApiClientsDocumentsClientsDocumentsIdDocumentsFields: <TData = AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsClientsDocumentsIdDocumentsFieldsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFieldsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Fill clients documents fields
 */
export declare const postApiClientsDocumentsClientsDocumentsIdFill: (id: string, documentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldsMany>>;
export declare const getPostApiClientsDocumentsClientsDocumentsIdFillMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldsMany, any>, TError, {
        id: string;
        data: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentFieldsMany, any>, TError, {
    id: string;
    data: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
}, TContext>;
export declare type PostApiClientsDocumentsClientsDocumentsIdFillMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsClientsDocumentsIdFill>>>;
export declare type PostApiClientsDocumentsClientsDocumentsIdFillMutationBody = DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
export declare type PostApiClientsDocumentsClientsDocumentsIdFillMutationError = AxiosError<unknown>;
/**
 * @summary Fill clients documents fields
 */
export declare const usePostApiClientsDocumentsClientsDocumentsIdFill: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldsMany, any>, TError, {
        id: string;
        data: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentFieldsMany, any>, TError, {
    id: string;
    data: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
}, TContext>;
/**
 * @summary Update clients documents fields
 */
export declare const putApiClientsDocumentsClientsDocumentsIdFill: (id: string, documentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFieldsMany>>;
export declare const getPutApiClientsDocumentsClientsDocumentsIdFillMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldsMany, any>, TError, {
        id: string;
        data: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentFieldsMany, any>, TError, {
    id: string;
    data: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
}, TContext>;
export declare type PutApiClientsDocumentsClientsDocumentsIdFillMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsDocumentsClientsDocumentsIdFill>>>;
export declare type PutApiClientsDocumentsClientsDocumentsIdFillMutationBody = DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
export declare type PutApiClientsDocumentsClientsDocumentsIdFillMutationError = AxiosError<unknown>;
/**
 * @summary Update clients documents fields
 */
export declare const usePutApiClientsDocumentsClientsDocumentsIdFill: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFieldsMany, any>, TError, {
        id: string;
        data: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentFieldsMany, any>, TError, {
    id: string;
    data: DocumentFieldsOnlyDataDocumentFieldDefinitionIdArrayBody;
}, TContext>;
/**
 * @summary update clients documents fields
 */
export declare const patchApiClientsDocumentsClientsDocumentsFieldsId: (id: string, documentFieldsOnlyData: DocumentFieldsOnlyData, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFields>>;
export declare const getPatchApiClientsDocumentsClientsDocumentsFieldsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFields, any>, TError, {
        id: string;
        data: DocumentFieldsOnlyData;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentFields, any>, TError, {
    id: string;
    data: DocumentFieldsOnlyData;
}, TContext>;
export declare type PatchApiClientsDocumentsClientsDocumentsFieldsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsClientsDocumentsFieldsId>>>;
export declare type PatchApiClientsDocumentsClientsDocumentsFieldsIdMutationBody = DocumentFieldsOnlyData;
export declare type PatchApiClientsDocumentsClientsDocumentsFieldsIdMutationError = AxiosError<unknown>;
/**
 * @summary update clients documents fields
 */
export declare const usePatchApiClientsDocumentsClientsDocumentsFieldsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFields, any>, TError, {
        id: string;
        data: DocumentFieldsOnlyData;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentFields, any>, TError, {
    id: string;
    data: DocumentFieldsOnlyData;
}, TContext>;
/**
 * @summary search clients documents photo definition
 */
export declare const getApiClientsDocumentsClientsDocumentsPhotoDefinition: (params?: GetApiClientsDocumentsClientsDocumentsPhotoDefinitionParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentPhotoDefinitionManyPaginated>>;
export declare const getGetApiClientsDocumentsClientsDocumentsPhotoDefinitionQueryKey: (params?: GetApiClientsDocumentsClientsDocumentsPhotoDefinitionParams) => readonly ["/api/clients-documents/clients/documents_photo_definition", ...GetApiClientsDocumentsClientsDocumentsPhotoDefinitionParams[]];
export declare const getGetApiClientsDocumentsClientsDocumentsPhotoDefinitionQueryOptions: <TData = AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsDocumentsPhotoDefinitionParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsClientsDocumentsPhotoDefinitionQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsClientsDocumentsPhotoDefinition>>>;
export declare type GetApiClientsDocumentsClientsDocumentsPhotoDefinitionQueryError = AxiosError<unknown>;
/**
 * @summary search clients documents photo definition
 */
export declare const useGetApiClientsDocumentsClientsDocumentsPhotoDefinition: <TData = AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsDocumentsClientsDocumentsPhotoDefinitionParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentPhotoDefinitionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary search clients documents photo
 */
export declare const getApiClientsDocumentsClientsDocumentsIdDocumentsPhoto: (id: string, params?: GetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentPhotoManyPaginated>>;
export declare const getGetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoQueryKey: (id: string, params?: GetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoParams) => readonly [`/api/clients-documents/clients/documents/${string}/documents_photo`, ...GetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoParams[]];
export declare const getGetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoQueryOptions: <TData = AxiosResponse<DataDocumentPhotoManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentPhotoManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentPhotoManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsClientsDocumentsIdDocumentsPhoto>>>;
export declare type GetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoQueryError = AxiosError<unknown>;
/**
 * @summary search clients documents photo
 */
export declare const useGetApiClientsDocumentsClientsDocumentsIdDocumentsPhoto: <TData = AxiosResponse<DataDocumentPhotoManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiClientsDocumentsClientsDocumentsIdDocumentsPhotoParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentPhotoManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary upload document photo
 */
export declare const postApiClientsDocumentsClientsDocumentsDocumentIdUploadPhoto: (documentId: string, postApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoBody: PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentPhoto>>;
export declare const getPostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentPhoto, any>, TError, {
        documentId: string;
        data: PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentPhoto, any>, TError, {
    documentId: string;
    data: PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoBody;
}, TContext>;
export declare type PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsClientsDocumentsDocumentIdUploadPhoto>>>;
export declare type PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoMutationBody = PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoBody;
export declare type PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoMutationError = AxiosError<unknown>;
/**
 * @summary upload document photo
 */
export declare const usePostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhoto: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentPhoto, any>, TError, {
        documentId: string;
        data: PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentPhoto, any>, TError, {
    documentId: string;
    data: PostApiClientsDocumentsClientsDocumentsDocumentIdUploadPhotoBody;
}, TContext>;
