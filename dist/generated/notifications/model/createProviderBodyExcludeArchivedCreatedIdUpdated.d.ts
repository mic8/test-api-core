/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { CreateProviderBodyExcludeArchivedCreatedIdUpdatedChannel } from "./createProviderBodyExcludeArchivedCreatedIdUpdatedChannel";
import type { ProviderOperatorExcludeArchivedCreatedIdProviderIdUpdated } from "./providerOperatorExcludeArchivedCreatedIdProviderIdUpdated";
export interface CreateProviderBodyExcludeArchivedCreatedIdUpdated {
    channel: CreateProviderBodyExcludeArchivedCreatedIdUpdatedChannel;
    name: string;
    operators?: ProviderOperatorExcludeArchivedCreatedIdProviderIdUpdated[];
}
