/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { SendBodyChannel } from "./sendBodyChannel";
import type { MessageInfo } from "./messageInfo";
export interface SendBody {
    app_version?: string | null;
    channel: SendBodyChannel;
    client_id?: string | null;
    contact?: string | null;
    entity_id: string;
    message_info?: MessageInfo;
}
