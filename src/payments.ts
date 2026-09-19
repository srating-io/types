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

export interface Subscription {
  subscription_id: string;
  user_id: string;
  pricing_id: string;
  stripe_subscription: string;
  date_of_entry: string;
  updated_at: string;
  expires: string;
  renewed: string;
  guid: string;
  deleted: number;
}

export type Subscriptions = {[subscription_id: string]: Subscription};

export interface PaymentRouter {
  payment_router_id: string;
  stripe_object: string;
  stripe_id: string;
  table: string;
  id: string;
  date_of_entry: string;
  handled: number;
  guid: string;
  deleted: number;
}

export type PaymentRouters = {[payment_router_id: string]: PaymentRouter};

export interface Pricing {
  pricing_id: string;
  stripe_pricing_id: string;
  test_stripe_pricing_id: string;
  code: string;
  name: string;
  description: string;
  type: 'api' | 'picks' | 'trial';
  usage_limit: number;
  read: number;
  guid: string;
  deleted: number;
}

export type Pricings = {[pricing_id: string]: Pricing};

export interface UserPaymentToken {
  user_payment_token_id: string;
  user_id: string;
  token: string;
  type: string;
  json_data: object;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type UserPaymentTokens = {[user_payment_token_id: string]: UserPaymentToken};
