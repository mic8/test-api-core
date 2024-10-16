/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { EventsDetailsManyAction } from "./eventsDetailsManyAction";
import type { EventsDetailsManyChannel } from "./eventsDetailsManyChannel";
import type { EventsDetailsManyCommunicationMeta } from "./eventsDetailsManyCommunicationMeta";
import type { EventsDetailsManyProviderResp } from "./eventsDetailsManyProviderResp";
import type { EventsDetailsManyStatus } from "./eventsDetailsManyStatus";
export interface EventsDetailsMany {
    action?: EventsDetailsManyAction;
    archived?: boolean;
    channel?: EventsDetailsManyChannel;
    communication_id?: string;
    communication_meta?: EventsDetailsManyCommunicationMeta;
    contact?: string;
    created?: string;
    direction?: string;
    execution_time?: string;
    id?: string;
    is_final?: boolean;
    provider?: string | null;
    provider_resp?: EventsDetailsManyProviderResp;
    status?: EventsDetailsManyStatus;
    updated?: string;
}
