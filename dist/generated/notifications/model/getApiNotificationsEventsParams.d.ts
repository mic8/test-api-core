/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiNotificationsEventsStatus } from "./getApiNotificationsEventsStatus";
import type { GetApiNotificationsEventsOrderBy } from "./getApiNotificationsEventsOrderBy";
export declare type GetApiNotificationsEventsParams = {
    archived?: boolean;
    limit?: number;
    offset?: number;
    created_lt?: string;
    created_gt?: string;
    created_ge?: string;
    created_le?: string;
    communication_id?: string;
    communication_id_in?: string[];
    action?: string;
    provider?: string;
    status?: GetApiNotificationsEventsStatus;
    is_final?: boolean;
    order_by?: GetApiNotificationsEventsOrderBy;
    intention?: string;
    contact_type?: string;
    result?: string;
    agent_name?: string;
};
