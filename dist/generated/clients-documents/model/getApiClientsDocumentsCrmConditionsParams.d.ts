/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * clients-documents
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiClientsDocumentsCrmConditionsOperator } from "./getApiClientsDocumentsCrmConditionsOperator";
export declare type GetApiClientsDocumentsCrmConditionsParams = {
    limit?: number;
    offset?: number;
    order_by?: string[];
    archived?: boolean;
    question_id?: string;
    operator?: GetApiClientsDocumentsCrmConditionsOperator;
    operand?: string;
    rule_id?: string;
};
