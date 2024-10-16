/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { DeletedClientExtra } from "./deletedClientExtra";
import type { DeletedClientSessionType } from "./deletedClientSessionType";
import type { DeletedClientSourceOfCreation } from "./deletedClientSourceOfCreation";
export interface DeletedClient {
    archived?: boolean;
    created?: string;
    email?: string | null;
    extra?: DeletedClientExtra;
    first_name?: string | null;
    id?: string;
    is_email_confirmed?: boolean | null;
    is_repeat?: boolean | null;
    is_test?: boolean | null;
    last_name?: string | null;
    middle_name?: string | null;
    phone_number?: string;
    session_id?: string | null;
    session_type?: DeletedClientSessionType;
    source_of_creation?: DeletedClientSourceOfCreation;
    updated?: string;
}
