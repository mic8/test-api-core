/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * applications
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiApplicationsCrmTasksOrderBy } from "./getApiApplicationsCrmTasksOrderBy";
export declare type GetApiApplicationsCrmTasksParams = {
    limit?: number;
    offset?: number;
    id_in?: string[];
    application_id?: string;
    application_id_in?: string[];
    task_definition_name?: string;
    task_definition_name_in?: string[];
    status?: string;
    completed?: boolean;
    client_id?: string;
    client_id_in?: string[];
    created_le?: string;
    created_ge?: string;
    created_date?: string;
    order_by?: GetApiApplicationsCrmTasksOrderBy;
};
