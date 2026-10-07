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

import { AuditApi, AuditError } from '../audit.ts';
import { Pricings } from '../payments.ts';

/**
 * Every endpoint on this class is admin only and answers `{ error }` to everyone else, so each
 * result is a union with the refusal rather than an optional-everything object.
 */

export type overviewResults = { error: string } | {
  audit_gui: {
    unresolved: number;
    /** Summed `occurrences` over the unresolved rows -- how much the open bugs are actually firing. */
    occurrences: number;
    last_24h: number;
  };
  audit_error: {
    last_24h: number;
    last_7d: number;
  };
  audit_api: {
    last_24h: number;
  };
  subscription: {
    active: number;
    type_x_active: {[type: string]: number};
  };
  user: {
    total: number;
    last_7d: number;
  };
  payment_router: {
    unhandled: number;
  };
  api_key: {
    total: number;
    /** Keys at or past 80% of their `usage_limit`. */
    near_limit: number;
  };
}


/**
 * A subscription with the few joined columns the dashboard shows beside it. Not the whole `user`
 * row -- `username` is the only part worth seeing in a list, and the rest of that table has no
 * business being shipped here.
 */
export interface RevenueSubscription {
  subscription_id: string;
  user_id: string | null;
  username: string | null;
  pricing_id: string | null;
  pricing_name: string | null;
  pricing_type: string | null;
  stripe_subscription: string | null;
  date_of_entry: string;
  renewed: string | null;
  expires: string | null;
}

export type revenueResults = { error: string } | {
  pricing: Pricings;
  type_x_active: {[type: string]: number};
  pricing_id_x_active: {[pricing_id: string]: number};
  /** Active subscriptions whose `expires` falls inside the next 30 days. */
  renewals: RevenueSubscription[];
  /** Active subscriptions on a `trial` plan. */
  trials: RevenueSubscription[];
  /** Subscriptions created per day over the trailing window, as `Y-m-d` keys. */
  date_x_created: {[date: string]: number};
  unhandled_payment_routers: number;
}


export interface ApiErrorCount {
  class: string | null;
  function: string | null;
  total: number;
}

export type apiTrafficArguments = {
  /**
   * How far back to look. Bounded server side, because `audit_api` is the largest table in the
   * database and `date_of_entry` is the only index on it.
   */
  days?: number;
}

export type apiTrafficResults = { error: string } | {
  days: number;
  date_x_requests: {[date: string]: number};
  api_key_id_x_requests: {[api_key_id: string]: number};
  class_x_requests: {[class_name: string]: number};
  recent_requests: AuditApi[];
  date_x_errors: {[date: string]: number};
  error_counts: ApiErrorCount[];
  recent_errors: AuditError[];
}


/**
 * An api key as the dashboard sees it. The `key` column itself is deliberately absent: it is the
 * credential, and nothing on this page needs it to answer "who is near their limit".
 */
export interface DashboardApiKey {
  api_key_id: number;
  user_id: string | null;
  username: string | null;
  subscription_id: string | null;
  pricing_name: string | null;
  pricing_type: string | null;
  usage: number | null;
  usage_limit: number | null;
  read: number;
  write: number;
  hidden_access: number;
  rate_limiter: number;
  expires: string | null;
  last_reset: string | null;
  deleted: number;
}

export type apiKeysResults = { error: string } | {
  rows: DashboardApiKey[];
}
