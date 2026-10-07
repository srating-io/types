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

/**
 * One row per distinct bug rather than per occurrence: `fingerprint` is derived server side, so a
 * repeat bumps `occurrences` instead of inserting.
 *
 * `stack`, `state` and `json_context` are large and are only sent by `audit_gui.detail` -- the list
 * endpoint leaves them out, which is why they are optional here.
 */
export interface AuditGui {
  audit_gui_id: number;
  fingerprint: string;
  release: string;
  source: string;
  name: string | null;
  message: string | null;
  digest: string | null;
  route: string | null;
  stack?: string | null;
  state?: string | null;
  json_context?: string | null;
  occurrences: number;
  date_of_entry: string;
  last_seen: string;
  resolved: number;
  deleted: number;
}

export type AuditGuis = {[audit_gui_id: number]: AuditGui};

/**
 * One row per request to the public api. Written only when the caller presented an api key, so
 * nothing the gui does lands here.
 */
export interface AuditApi {
  audit_api_id: number;
  api_key_id: number | null;
  class: string | null;
  function: string | null;
  arguments: string | null;
  date_of_entry: string;
  deleted: number;
}

export type AuditApis = {[audit_api_id: number]: AuditApi};

/**
 * A failure inside the api, one row per occurrence -- unlike `audit_gui` these are not grouped.
 */
export interface AuditError {
  audit_error_id: number;
  api_key_id: number | null;
  class: string | null;
  function: string | null;
  arguments: string | null;
  error: string | null;
  date_of_entry: string;
  deleted: number;
}

export type AuditErrors = {[audit_error_id: number]: AuditError};

export interface AuditCreated {
  audit_created_id: number;
  api_key_id: number | null;
  table: string | null;
  id: string | null;
  date_of_entry: string;
  deleted: number;
}

export type AuditCreateds = {[audit_created_id: number]: AuditCreated};

/**
 * One row per *column* changed by a generic update, not one per update.
 */
export interface AuditUpdated {
  audit_updated_id: number;
  api_key_id: number | null;
  table: string | null;
  id: string | null;
  column: string | null;
  old_value: string | null;
  new_value: string | null;
  date_of_entry: string;
  deleted: number;
}

export type AuditUpdateds = {[audit_updated_id: number]: AuditUpdated};
