import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { CreateClientQuestionnaireByPointsNames, CreateClientQuestionnaireByTemplateNameBody, DataExtendedQuestionnaireManyPaginated, DataFullQuestionnaire, DataFullQuestionnaireMany, DataGroupStatusMany, DataLivenessResponse, DataQuestion, DataQuestionManyPaginated, DataQuestionnairePointMany, DataQuestionnairePointManyPaginated, DataQuestionsTemplates, DataQuestionsTemplatesMany, DataQuestionsTemplatesManyPaginated, DataReadinessResponse, DataTemplate, DataTemplateManyPaginated, DeleteClientQuestionnaireByTemplateName, GetApiQuestionnaireCrmPointsParams, GetApiQuestionnaireCrmQuestionnairesParams, GetApiQuestionnaireCrmQuestionsParams, GetApiQuestionnaireCrmQuestionsTemplatesParams, GetApiQuestionnaireCrmTemplatesParams, GetApiQuestionnairePointsParams, GetApiQuestionnairePointsStatusByGroupsParams, QuestionExcludeArchivedCreatedIdUpdatedBody, QuestionnaireOnlyClientIdTemplateId, QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody, ReorderQuestionTemplatesMany, TemplateExcludeArchivedCreatedIdUpdatedBody } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiQuestionnaireReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiQuestionnaireReadinessQueryKey: () => readonly ["/api/questionnaire/readiness"];
export declare const getGetApiQuestionnaireReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireReadiness>>>;
export declare type GetApiQuestionnaireReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiQuestionnaireReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiQuestionnaireLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiQuestionnaireLivenessQueryKey: () => readonly ["/api/questionnaire/liveness"];
export declare const getGetApiQuestionnaireLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireLiveness>>>;
export declare type GetApiQuestionnaireLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiQuestionnaireLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiQuestionnaireMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiQuestionnaireMetricsQueryKey: () => readonly ["/api/questionnaire/metrics"];
export declare const getGetApiQuestionnaireMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireMetrics>>>;
export declare type GetApiQuestionnaireMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiQuestionnaireMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get self full questionnaires
 */
export declare const getApiQuestionnaireQuestionnaires: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullQuestionnaireMany>>;
export declare const getGetApiQuestionnaireQuestionnairesQueryKey: () => readonly ["/api/questionnaire/questionnaires"];
export declare const getGetApiQuestionnaireQuestionnairesQueryOptions: <TData = AxiosResponse<DataFullQuestionnaireMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullQuestionnaireMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFullQuestionnaireMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireQuestionnairesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireQuestionnaires>>>;
export declare type GetApiQuestionnaireQuestionnairesQueryError = AxiosError<unknown>;
/**
 * @summary Get self full questionnaires
 */
export declare const useGetApiQuestionnaireQuestionnaires: <TData = AxiosResponse<DataFullQuestionnaireMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataFullQuestionnaireMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get self questions
 */
export declare const getApiQuestionnairePoints: (params?: GetApiQuestionnairePointsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestionnairePointMany>>;
export declare const getGetApiQuestionnairePointsQueryKey: (params?: GetApiQuestionnairePointsParams) => readonly ["/api/questionnaire/points", ...GetApiQuestionnairePointsParams[]];
export declare const getGetApiQuestionnairePointsQueryOptions: <TData = AxiosResponse<DataQuestionnairePointMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnairePointsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionnairePointMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQuestionnairePointMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnairePointsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnairePoints>>>;
export declare type GetApiQuestionnairePointsQueryError = AxiosError<unknown>;
/**
 * @summary Get self questions
 */
export declare const useGetApiQuestionnairePoints: <TData = AxiosResponse<DataQuestionnairePointMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnairePointsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionnairePointMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get status by groups
 */
export declare const getApiQuestionnairePointsStatusByGroups: (params?: GetApiQuestionnairePointsStatusByGroupsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGroupStatusMany>>;
export declare const getGetApiQuestionnairePointsStatusByGroupsQueryKey: (params?: GetApiQuestionnairePointsStatusByGroupsParams) => readonly ["/api/questionnaire/points/status_by_groups", ...GetApiQuestionnairePointsStatusByGroupsParams[]];
export declare const getGetApiQuestionnairePointsStatusByGroupsQueryOptions: <TData = AxiosResponse<DataGroupStatusMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnairePointsStatusByGroupsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGroupStatusMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGroupStatusMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnairePointsStatusByGroupsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnairePointsStatusByGroups>>>;
export declare type GetApiQuestionnairePointsStatusByGroupsQueryError = AxiosError<unknown>;
/**
 * @summary Get status by groups
 */
export declare const useGetApiQuestionnairePointsStatusByGroups: <TData = AxiosResponse<DataGroupStatusMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnairePointsStatusByGroupsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGroupStatusMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create questionnaire template
 */
export declare const postApiQuestionnaireCrmTemplates: (templateExcludeArchivedCreatedIdUpdatedBody: TemplateExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTemplate>>;
export declare const getPostApiQuestionnaireCrmTemplatesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTemplate, any>, TError, {
        data: TemplateExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTemplate, any>, TError, {
    data: TemplateExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PostApiQuestionnaireCrmTemplatesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiQuestionnaireCrmTemplates>>>;
export declare type PostApiQuestionnaireCrmTemplatesMutationBody = TemplateExcludeArchivedCreatedIdUpdatedBody;
export declare type PostApiQuestionnaireCrmTemplatesMutationError = AxiosError<unknown>;
/**
 * @summary Create questionnaire template
 */
export declare const usePostApiQuestionnaireCrmTemplates: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTemplate, any>, TError, {
        data: TemplateExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTemplate, any>, TError, {
    data: TemplateExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Search templates
 */
export declare const getApiQuestionnaireCrmTemplates: (params?: GetApiQuestionnaireCrmTemplatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTemplateManyPaginated>>;
export declare const getGetApiQuestionnaireCrmTemplatesQueryKey: (params?: GetApiQuestionnaireCrmTemplatesParams) => readonly ["/api/questionnaire/crm/templates", ...GetApiQuestionnaireCrmTemplatesParams[]];
export declare const getGetApiQuestionnaireCrmTemplatesQueryOptions: <TData = AxiosResponse<DataTemplateManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTemplateManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTemplateManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireCrmTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireCrmTemplates>>>;
export declare type GetApiQuestionnaireCrmTemplatesQueryError = AxiosError<unknown>;
/**
 * @summary Search templates
 */
export declare const useGetApiQuestionnaireCrmTemplates: <TData = AxiosResponse<DataTemplateManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTemplateManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update template by id
 */
export declare const patchApiQuestionnaireCrmTemplatesId: (id: string, templateExcludeArchivedCreatedIdUpdatedBody: TemplateExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTemplate>>;
export declare const getPatchApiQuestionnaireCrmTemplatesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTemplate, any>, TError, {
        id: string;
        data: TemplateExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTemplate, any>, TError, {
    id: string;
    data: TemplateExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PatchApiQuestionnaireCrmTemplatesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiQuestionnaireCrmTemplatesId>>>;
export declare type PatchApiQuestionnaireCrmTemplatesIdMutationBody = TemplateExcludeArchivedCreatedIdUpdatedBody;
export declare type PatchApiQuestionnaireCrmTemplatesIdMutationError = AxiosError<unknown>;
/**
 * @summary Update template by id
 */
export declare const usePatchApiQuestionnaireCrmTemplatesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTemplate, any>, TError, {
        id: string;
        data: TemplateExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTemplate, any>, TError, {
    id: string;
    data: TemplateExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Get questions templates
 */
export declare const getApiQuestionnaireCrmQuestionsTemplates: (params?: GetApiQuestionnaireCrmQuestionsTemplatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestionsTemplatesManyPaginated>>;
export declare const getGetApiQuestionnaireCrmQuestionsTemplatesQueryKey: (params?: GetApiQuestionnaireCrmQuestionsTemplatesParams) => readonly ["/api/questionnaire/crm/questions_templates", ...GetApiQuestionnaireCrmQuestionsTemplatesParams[]];
export declare const getGetApiQuestionnaireCrmQuestionsTemplatesQueryOptions: <TData = AxiosResponse<DataQuestionsTemplatesManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmQuestionsTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionsTemplatesManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQuestionsTemplatesManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireCrmQuestionsTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireCrmQuestionsTemplates>>>;
export declare type GetApiQuestionnaireCrmQuestionsTemplatesQueryError = AxiosError<unknown>;
/**
 * @summary Get questions templates
 */
export declare const useGetApiQuestionnaireCrmQuestionsTemplates: <TData = AxiosResponse<DataQuestionsTemplatesManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmQuestionsTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionsTemplatesManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * link a question to a template
 * @summary Create questions templates
 */
export declare const postApiQuestionnaireCrmQuestionsTemplates: (questionsTemplatesExcludeArchivedCreatedIdUpdatedBody: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestionsTemplates>>;
export declare const getPostApiQuestionnaireCrmQuestionsTemplatesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestionsTemplates, any>, TError, {
        data: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestionsTemplates, any>, TError, {
    data: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PostApiQuestionnaireCrmQuestionsTemplatesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiQuestionnaireCrmQuestionsTemplates>>>;
export declare type PostApiQuestionnaireCrmQuestionsTemplatesMutationBody = QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
export declare type PostApiQuestionnaireCrmQuestionsTemplatesMutationError = AxiosError<unknown>;
/**
 * @summary Create questions templates
 */
export declare const usePostApiQuestionnaireCrmQuestionsTemplates: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestionsTemplates, any>, TError, {
        data: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestionsTemplates, any>, TError, {
    data: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Update questions templates
 */
export declare const patchApiQuestionnaireCrmQuestionsTemplatesId: (id: string, questionsTemplatesExcludeArchivedCreatedIdUpdatedBody: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestionsTemplates>>;
export declare const getPatchApiQuestionnaireCrmQuestionsTemplatesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestionsTemplates, any>, TError, {
        id: string;
        data: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestionsTemplates, any>, TError, {
    id: string;
    data: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PatchApiQuestionnaireCrmQuestionsTemplatesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiQuestionnaireCrmQuestionsTemplatesId>>>;
export declare type PatchApiQuestionnaireCrmQuestionsTemplatesIdMutationBody = QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
export declare type PatchApiQuestionnaireCrmQuestionsTemplatesIdMutationError = AxiosError<unknown>;
/**
 * @summary Update questions templates
 */
export declare const usePatchApiQuestionnaireCrmQuestionsTemplatesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestionsTemplates, any>, TError, {
        id: string;
        data: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestionsTemplates, any>, TError, {
    id: string;
    data: QuestionsTemplatesExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Reorder questions for questionnaire
 */
export declare const putApiQuestionnaireCrmReorderQuestionTemplates: (reorderQuestionTemplatesMany: ReorderQuestionTemplatesMany[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestionsTemplatesMany>>;
export declare const getPutApiQuestionnaireCrmReorderQuestionTemplatesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestionsTemplatesMany, any>, TError, {
        data: ReorderQuestionTemplatesMany[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestionsTemplatesMany, any>, TError, {
    data: ReorderQuestionTemplatesMany[];
}, TContext>;
export declare type PutApiQuestionnaireCrmReorderQuestionTemplatesMutationResult = NonNullable<Awaited<ReturnType<typeof putApiQuestionnaireCrmReorderQuestionTemplates>>>;
export declare type PutApiQuestionnaireCrmReorderQuestionTemplatesMutationBody = ReorderQuestionTemplatesMany[];
export declare type PutApiQuestionnaireCrmReorderQuestionTemplatesMutationError = AxiosError<unknown>;
/**
 * @summary Reorder questions for questionnaire
 */
export declare const usePutApiQuestionnaireCrmReorderQuestionTemplates: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestionsTemplatesMany, any>, TError, {
        data: ReorderQuestionTemplatesMany[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestionsTemplatesMany, any>, TError, {
    data: ReorderQuestionTemplatesMany[];
}, TContext>;
/**
 * @summary Get questions for client
 */
export declare const getApiQuestionnaireCrmPoints: (params?: GetApiQuestionnaireCrmPointsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestionnairePointManyPaginated>>;
export declare const getGetApiQuestionnaireCrmPointsQueryKey: (params?: GetApiQuestionnaireCrmPointsParams) => readonly ["/api/questionnaire/crm/points", ...GetApiQuestionnaireCrmPointsParams[]];
export declare const getGetApiQuestionnaireCrmPointsQueryOptions: <TData = AxiosResponse<DataQuestionnairePointManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmPointsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionnairePointManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQuestionnairePointManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireCrmPointsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireCrmPoints>>>;
export declare type GetApiQuestionnaireCrmPointsQueryError = AxiosError<unknown>;
/**
 * @summary Get questions for client
 */
export declare const useGetApiQuestionnaireCrmPoints: <TData = AxiosResponse<DataQuestionnairePointManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmPointsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionnairePointManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create point for questionnaires
 */
export declare const postApiQuestionnaireCrmPoints: (questionExcludeArchivedCreatedIdUpdatedBody: QuestionExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestion>>;
export declare const getPostApiQuestionnaireCrmPointsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
        data: QuestionExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
    data: QuestionExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PostApiQuestionnaireCrmPointsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiQuestionnaireCrmPoints>>>;
export declare type PostApiQuestionnaireCrmPointsMutationBody = QuestionExcludeArchivedCreatedIdUpdatedBody;
export declare type PostApiQuestionnaireCrmPointsMutationError = AxiosError<unknown>;
/**
 * @summary Create point for questionnaires
 */
export declare const usePostApiQuestionnaireCrmPoints: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
        data: QuestionExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestion, any>, TError, {
    data: QuestionExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Update question by id
 */
export declare const patchApiQuestionnaireCrmPointsId: (id: string, questionExcludeArchivedCreatedIdUpdatedBody: QuestionExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestion>>;
export declare const getPatchApiQuestionnaireCrmPointsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
        id: string;
        data: QuestionExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
    id: string;
    data: QuestionExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PatchApiQuestionnaireCrmPointsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiQuestionnaireCrmPointsId>>>;
export declare type PatchApiQuestionnaireCrmPointsIdMutationBody = QuestionExcludeArchivedCreatedIdUpdatedBody;
export declare type PatchApiQuestionnaireCrmPointsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update question by id
 */
export declare const usePatchApiQuestionnaireCrmPointsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
        id: string;
        data: QuestionExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestion, any>, TError, {
    id: string;
    data: QuestionExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Delete question by id
 */
export declare const deleteApiQuestionnaireCrmPointsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestion>>;
export declare const getDeleteApiQuestionnaireCrmPointsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiQuestionnaireCrmPointsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiQuestionnaireCrmPointsId>>>;
export declare type DeleteApiQuestionnaireCrmPointsIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete question by id
 */
export declare const useDeleteApiQuestionnaireCrmPointsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQuestion, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQuestion, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get questions
 */
export declare const getApiQuestionnaireCrmQuestions: (params?: GetApiQuestionnaireCrmQuestionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQuestionManyPaginated>>;
export declare const getGetApiQuestionnaireCrmQuestionsQueryKey: (params?: GetApiQuestionnaireCrmQuestionsParams) => readonly ["/api/questionnaire/crm/questions", ...GetApiQuestionnaireCrmQuestionsParams[]];
export declare const getGetApiQuestionnaireCrmQuestionsQueryOptions: <TData = AxiosResponse<DataQuestionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmQuestionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQuestionManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireCrmQuestionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireCrmQuestions>>>;
export declare type GetApiQuestionnaireCrmQuestionsQueryError = AxiosError<unknown>;
/**
 * @summary Get questions
 */
export declare const useGetApiQuestionnaireCrmQuestions: <TData = AxiosResponse<DataQuestionManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmQuestionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQuestionManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get questionnaires with templates
 */
export declare const getApiQuestionnaireCrmQuestionnaires: (params?: GetApiQuestionnaireCrmQuestionnairesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataExtendedQuestionnaireManyPaginated>>;
export declare const getGetApiQuestionnaireCrmQuestionnairesQueryKey: (params?: GetApiQuestionnaireCrmQuestionnairesParams) => readonly ["/api/questionnaire/crm/questionnaires", ...GetApiQuestionnaireCrmQuestionnairesParams[]];
export declare const getGetApiQuestionnaireCrmQuestionnairesQueryOptions: <TData = AxiosResponse<DataExtendedQuestionnaireManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmQuestionnairesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataExtendedQuestionnaireManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataExtendedQuestionnaireManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiQuestionnaireCrmQuestionnairesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQuestionnaireCrmQuestionnaires>>>;
export declare type GetApiQuestionnaireCrmQuestionnairesQueryError = AxiosError<unknown>;
/**
 * @summary Get questionnaires with templates
 */
export declare const useGetApiQuestionnaireCrmQuestionnaires: <TData = AxiosResponse<DataExtendedQuestionnaireManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiQuestionnaireCrmQuestionnairesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataExtendedQuestionnaireManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create questionnaire by fields
 */
export declare const postApiQuestionnaireCrmQuestionnaireByPointsNames: (createClientQuestionnaireByPointsNames: CreateClientQuestionnaireByPointsNames, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullQuestionnaire>>;
export declare const getPostApiQuestionnaireCrmQuestionnaireByPointsNamesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        data: CreateClientQuestionnaireByPointsNames;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    data: CreateClientQuestionnaireByPointsNames;
}, TContext>;
export declare type PostApiQuestionnaireCrmQuestionnaireByPointsNamesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiQuestionnaireCrmQuestionnaireByPointsNames>>>;
export declare type PostApiQuestionnaireCrmQuestionnaireByPointsNamesMutationBody = CreateClientQuestionnaireByPointsNames;
export declare type PostApiQuestionnaireCrmQuestionnaireByPointsNamesMutationError = AxiosError<unknown>;
/**
 * @summary Create questionnaire by fields
 */
export declare const usePostApiQuestionnaireCrmQuestionnaireByPointsNames: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        data: CreateClientQuestionnaireByPointsNames;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    data: CreateClientQuestionnaireByPointsNames;
}, TContext>;
/**
 * @summary Create questionnaire by template name
 */
export declare const postApiQuestionnaireCrmQuestionnaireByTemplateName: (createClientQuestionnaireByTemplateNameBody: CreateClientQuestionnaireByTemplateNameBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullQuestionnaire>>;
export declare const getPostApiQuestionnaireCrmQuestionnaireByTemplateNameMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        data: CreateClientQuestionnaireByTemplateNameBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    data: CreateClientQuestionnaireByTemplateNameBody;
}, TContext>;
export declare type PostApiQuestionnaireCrmQuestionnaireByTemplateNameMutationResult = NonNullable<Awaited<ReturnType<typeof postApiQuestionnaireCrmQuestionnaireByTemplateName>>>;
export declare type PostApiQuestionnaireCrmQuestionnaireByTemplateNameMutationBody = CreateClientQuestionnaireByTemplateNameBody;
export declare type PostApiQuestionnaireCrmQuestionnaireByTemplateNameMutationError = AxiosError<unknown>;
/**
 * @summary Create questionnaire by template name
 */
export declare const usePostApiQuestionnaireCrmQuestionnaireByTemplateName: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        data: CreateClientQuestionnaireByTemplateNameBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    data: CreateClientQuestionnaireByTemplateNameBody;
}, TContext>;
/**
 * @summary Delete questionnaire by template name
 */
export declare const deleteApiQuestionnaireCrmQuestionnaireByTemplateName: (deleteClientQuestionnaireByTemplateName: DeleteClientQuestionnaireByTemplateName, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullQuestionnaireMany>>;
export declare const getDeleteApiQuestionnaireCrmQuestionnaireByTemplateNameMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaireMany, any>, TError, {
        data: DeleteClientQuestionnaireByTemplateName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFullQuestionnaireMany, any>, TError, {
    data: DeleteClientQuestionnaireByTemplateName;
}, TContext>;
export declare type DeleteApiQuestionnaireCrmQuestionnaireByTemplateNameMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiQuestionnaireCrmQuestionnaireByTemplateName>>>;
export declare type DeleteApiQuestionnaireCrmQuestionnaireByTemplateNameMutationBody = DeleteClientQuestionnaireByTemplateName;
export declare type DeleteApiQuestionnaireCrmQuestionnaireByTemplateNameMutationError = AxiosError<unknown>;
/**
 * @summary Delete questionnaire by template name
 */
export declare const useDeleteApiQuestionnaireCrmQuestionnaireByTemplateName: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaireMany, any>, TError, {
        data: DeleteClientQuestionnaireByTemplateName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFullQuestionnaireMany, any>, TError, {
    data: DeleteClientQuestionnaireByTemplateName;
}, TContext>;
/**
 * @summary Restore questionnaire by template name
 */
export declare const postApiQuestionnaireCrmQuestionnaireRestoreByTemplateName: (createClientQuestionnaireByTemplateNameBody: CreateClientQuestionnaireByTemplateNameBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullQuestionnaire>>;
export declare const getPostApiQuestionnaireCrmQuestionnaireRestoreByTemplateNameMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        data: CreateClientQuestionnaireByTemplateNameBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    data: CreateClientQuestionnaireByTemplateNameBody;
}, TContext>;
export declare type PostApiQuestionnaireCrmQuestionnaireRestoreByTemplateNameMutationResult = NonNullable<Awaited<ReturnType<typeof postApiQuestionnaireCrmQuestionnaireRestoreByTemplateName>>>;
export declare type PostApiQuestionnaireCrmQuestionnaireRestoreByTemplateNameMutationBody = CreateClientQuestionnaireByTemplateNameBody;
export declare type PostApiQuestionnaireCrmQuestionnaireRestoreByTemplateNameMutationError = AxiosError<unknown>;
/**
 * @summary Restore questionnaire by template name
 */
export declare const usePostApiQuestionnaireCrmQuestionnaireRestoreByTemplateName: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        data: CreateClientQuestionnaireByTemplateNameBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    data: CreateClientQuestionnaireByTemplateNameBody;
}, TContext>;
/**
 * @summary Create clients questionnaire from template
 */
export declare const postApiQuestionnaireCrmQuestionnaire: (questionnaireOnlyClientIdTemplateId: QuestionnaireOnlyClientIdTemplateId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullQuestionnaire>>;
export declare const getPostApiQuestionnaireCrmQuestionnaireMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        data: QuestionnaireOnlyClientIdTemplateId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    data: QuestionnaireOnlyClientIdTemplateId;
}, TContext>;
export declare type PostApiQuestionnaireCrmQuestionnaireMutationResult = NonNullable<Awaited<ReturnType<typeof postApiQuestionnaireCrmQuestionnaire>>>;
export declare type PostApiQuestionnaireCrmQuestionnaireMutationBody = QuestionnaireOnlyClientIdTemplateId;
export declare type PostApiQuestionnaireCrmQuestionnaireMutationError = AxiosError<unknown>;
/**
 * @summary Create clients questionnaire from template
 */
export declare const usePostApiQuestionnaireCrmQuestionnaire: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        data: QuestionnaireOnlyClientIdTemplateId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    data: QuestionnaireOnlyClientIdTemplateId;
}, TContext>;
/**
 * @summary Delete clients questionnaire
 */
export declare const deleteApiQuestionnaireCrmQuestionnaireId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFullQuestionnaire>>;
export declare const getDeleteApiQuestionnaireCrmQuestionnaireIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiQuestionnaireCrmQuestionnaireIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiQuestionnaireCrmQuestionnaireId>>>;
export declare type DeleteApiQuestionnaireCrmQuestionnaireIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete clients questionnaire
 */
export declare const useDeleteApiQuestionnaireCrmQuestionnaireId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFullQuestionnaire, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFullQuestionnaire, any>, TError, {
    id: string;
}, TContext>;
