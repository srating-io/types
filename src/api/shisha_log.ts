
export interface ShishaLog {
  shisha_log_id: number;
  message: string | null;
  class: string | null;
  file: string | null;
  pid: number | null;
  date_of_entry: string;
  deleted: number;
}
