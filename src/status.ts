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
 * One row per probe. `service` is the pm2 app name where there is one, plus the synthetic
 * `database`, `cert` and `host` targets; `check_type` separates probes that share a service, so a
 * slow http response and a stale scrape are two rows rather than one overwriting the other.
 *
 * Raw rows are pruned past 7 days -- the long history lives in `StatusRollup`.
 */
export interface StatusCheck {
  status_check_id: number;
  service: string;
  check_type: string;
  ok: number;
  latency_ms: number | null;
  status_code: number | null;
  error: string | null;
  date_of_entry: string;
  deleted: number;
}

export type StatusChecks = {[status_check_id: number]: StatusCheck};

/**
 * One row per service per hour, aggregated off `status_check` before the raw rows age out. Kept
 * forever: at ~12 services this is ~105k rows a year.
 *
 * `bucket` is a DATETIME, so a server-side read hands you a `Date` even though it is typed
 * `string` here -- see the note on the package describing the wire format, not the row.
 */
export interface StatusRollup {
  status_rollup_id: number;
  service: string;
  bucket: string;
  checks: number;
  failures: number;
  p50_ms: number | null;
  p95_ms: number | null;
  max_ms: number | null;
  date_of_entry: string;
  deleted: number;
}

export type StatusRollups = {[status_rollup_id: number]: StatusRollup};

/**
 * A human-written note shown on the public page. Opened automatically when a service fails its
 * consecutive-failure threshold, then edited by hand to say what is going on.
 */
export interface StatusIncident {
  status_incident_id: number;
  service: string | null;
  state: string;
  title: string | null;
  body: string | null;
  started_at: string | null;
  resolved_at: string | null;
  date_of_entry: string;
  deleted: number;
}

export type StatusIncidents = {[status_incident_id: number]: StatusIncident};

export type ServiceState = 'operational' | 'degraded' | 'down' | 'maintenance';

/**
 * The shapes below are the contract for the two json files the prober writes to disk and the
 * public page reads. They are deliberately not the row types: the page is public, so nothing here
 * carries a hostname, a port, a queue depth or a row count.
 */
export interface SnapshotService {
  key: string;
  name: string;
  group: string;
  state: ServiceState;
  latency_ms: number | null;
  uptime_24h: number | null;
  uptime_90d: number | null;
}

export interface SnapshotIncident {
  state: string;
  title: string | null;
  body: string | null;
  started_at: string | null;
  resolved_at: string | null;
}

/**
 * `generated_at` and `interval_ms` exist so the page can tell stale from healthy. The prober is a
 * scraper handler, so if it dies the file stops changing while every service in it still reads
 * green -- the page compares the two and says so rather than lying.
 */
export interface Snapshot {
  generated_at: string;
  interval_ms: number;
  state: ServiceState;
  services: SnapshotService[];
  notices: string[];
  incidents: SnapshotIncident[];
}

/**
 * `bucket` is `YYYY-MM-DD` in the daily series and `YYYY-MM-DDTHH:00:00Z` in the hourly one, both
 * UTC. A daily `p95_ms` is the mean of that day's hourly p95s, not a true daily percentile.
 */
export interface HistoryBucket {
  bucket: string;
  uptime: number | null;
  p50_ms: number | null;
  p95_ms?: number | null;
  max_ms?: number | null;
}

/** Shades the charts only; the incident list on the page comes from the snapshot. */
export interface HistoryIncident {
  /** Null for a hand-written notice, which shades the site-wide overview only. */
  service: string | null;
  title: string | null;
  started_at: string | null;
  resolved_at: string | null;
}

/**
 * The newer fields are optional so the page can read a file written by an older prober, and the
 * two can deploy in either order.
 */
export interface History {
  generated_at: string;
  days: number;
  services: {[key: string]: HistoryBucket[]};
  hours?: number;
  /** The last `hours` complete hours, per service. */
  hourly?: {[key: string]: HistoryBucket[]};
  incidents?: HistoryIncident[];
}
