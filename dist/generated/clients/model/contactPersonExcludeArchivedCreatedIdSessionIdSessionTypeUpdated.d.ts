/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedExtra } from "./contactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedExtra";
import type { ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedGender } from "./contactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedGender";
import type { ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedRelationship } from "./contactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedRelationship";
export interface ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated {
    client_id?: string;
    date_of_birth?: string | null;
    email?: string | null;
    extra?: ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedExtra;
    first_name?: string | null;
    full_name?: string | null;
    gender?: ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedGender;
    last_name?: string | null;
    middle_name?: string | null;
    phone_number?: string | null;
    relationship?: ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdatedRelationship;
}
