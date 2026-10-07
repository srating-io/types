/*
 * Copyright 2026 Evan Smalley.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 */

import { AuditGui } from '../audit.ts';

export type listOrderBy = 'last_seen' | 'occurrences' | 'date_of_entry';

export type listArguments = {
  /** 0 or 1. Left out means both, which is what the "all" filter sends. */
  resolved?: number;
  release?: string;
  source?: string;
  route?: string;
  /** Matched against `name` and `message`. */
  search?: string;
  order_by?: listOrderBy;
  order?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

/**
 * `rows` is an array rather than the id-keyed map the generic `read` returns. `audit_gui_id` is an
 * integer, and an object with integer-like keys is iterated in numeric order by every javascript
 * engine -- which would silently throw away the sort the caller asked for.
 *
 * `release` and `source` are the distinct values present in the table, for populating the filters.
 */
export type listResults = { error: string } | {
  rows: AuditGui[];
  total: number;
  release: string[];
  source: string[];
}

export type detailArguments = {
  audit_gui_id: number | string;
}

export type detailResults = { error: string } | {
  row: AuditGui | null;
}

export type resolveArguments = {
  audit_gui_id: number | string;
  resolved: number | string;
}

export type resolveResults = { error: string } | {
  audit_gui_id: number;
  resolved: number;
}
