/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1HowLongWorkThisCompany } from "./workInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1HowLongWorkThisCompany";
import type { WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1Industry } from "./workInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1Industry";
export interface WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1 {
    company_name?: string | null;
    contact_phone?: string | null;
    employer_type_id?: string | null;
    frequency_of_income_id?: string | null;
    how_long_work_this_company?: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1HowLongWorkThisCompany;
    how_long_work_this_company_id?: string | null;
    income?: number | null;
    industry?: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1Industry;
    industry_id?: string | null;
    office_address?: string | null;
    office_phone_number?: string | null;
    position?: string | null;
    relationship_id?: string | null;
    salary_payday?: number | null;
}
