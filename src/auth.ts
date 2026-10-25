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

export interface User {
  user_id: string;
  username: string;
  display_name: string | null;
  stripe_customer: string;
  role_type_terminology_id: string | null;
  default_user_payment_token_id: string | null;
  date_of_entry: string;
  updated_at: string;
  guid: string;
  deleted: number;
}

export type Users = {[user_id: string]: User};

export interface Session {
  session_id: string;
  user_id: string;
  date_of_entry: string;
  expires_at: string;
  updated_at: string;
  guid: string;
  deleted: number;
}

export type Sessions = {[session_id: string]: Session};

export interface LoginCode {
  login_code_id: string;
  user_id: string;
  code: number;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type LoginCodes = {[login_code_id: string]: LoginCode};

export interface Secret {
  secret_id: string;
  expires: string;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type Secrets = {[secret_id: string]: Secret};

export interface ApiKey {
  api_key_id: number;
  key: string;
  user_id: string;
  subscription_id: string;
  usage: number;
  usage_limit: number;
  read: number;
  write: number;
  hidden_access: number;
  rate_limiter: number;
  expires: string;
  last_reset: string;
  guid: string;
  deleted: number;
}

export type ApiKeys = {[api_key_id: string]: ApiKey};

export interface Notification {
  notification_id: string;
  user_id: string;
  notification_type_terminology_id: string;
  title: string;
  message: string;
  table: string;
  id: string;
  sent: number;
  cleared: number;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type Notifications = {[notification_id: string]: Notification};
