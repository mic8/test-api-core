/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiNotificationsClientsIdNotificationsChannel } from "./getApiNotificationsClientsIdNotificationsChannel";
import type { GetApiNotificationsClientsIdNotificationsStatus } from "./getApiNotificationsClientsIdNotificationsStatus";
import type { GetApiNotificationsClientsIdNotificationsDirection } from "./getApiNotificationsClientsIdNotificationsDirection";
import type { GetApiNotificationsClientsIdNotificationsOrderBy } from "./getApiNotificationsClientsIdNotificationsOrderBy";
export declare type GetApiNotificationsClientsIdNotificationsParams = {
    archived?: boolean;
    limit?: number;
    offset?: number;
    created_ge?: string;
    created_le?: string;
    channel?: GetApiNotificationsClientsIdNotificationsChannel;
    status?: GetApiNotificationsClientsIdNotificationsStatus;
    direction?: GetApiNotificationsClientsIdNotificationsDirection;
    execution_time_ge?: string;
    execution_time_le?: string;
    order_by?: GetApiNotificationsClientsIdNotificationsOrderBy;
    contact?: string;
    contact_type?: string;
    agent_name?: string;
    result?: string;
};
