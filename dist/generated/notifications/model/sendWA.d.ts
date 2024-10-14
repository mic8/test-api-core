/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { SendWADirection } from "./sendWADirection";
import type { MessageWA } from "./messageWA";
import type { SendWAMeta } from "./sendWAMeta";
export interface SendWA {
    campaign_id?: string;
    channel?: unknown;
    client_id?: string[];
    departament?: string | null;
    direction?: SendWADirection;
    is_urgent?: boolean;
    message: MessageWA;
    message_subtype?: string | null;
    message_type?: string | null;
    meta?: SendWAMeta;
    phone_number?: string[];
    provider?: string | null;
    /** @deprecated */
    source?: string | null;
    tag?: string | null;
}
