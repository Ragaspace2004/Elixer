export type CompanyDisplay = {
  id: string;
  company_id: string;
  name: string;
  roles: string;
  skill_set: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
};

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};