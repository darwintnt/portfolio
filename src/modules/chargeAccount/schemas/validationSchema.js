import { object, string } from 'yup';

export const validationSchema = object().shape({
  charge_account_id: string().required(),
  date: string().required(),
  contractor_nit: string().required(),
  contractor_name: string().required(),
  builder_document_type: string().required(),
  builder_id: string().required(),
  builder_name: string().required(),
  total_value: string().required(),
  concept: string().required(),
  // considerations: string().required(),
  // payment_conditions: string().required(),
  // details_activities: string().required(),
  // signature: string().required(),
});
