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

import { ApiKeys } from '../auth.ts';
import {
  Subscription,
  Subscriptions,
  Pricings,
  UserPaymentTokens,
  PaymentRouter,
} from '../payments.ts';
import {
  FantasyGroupUsers,
  FantasyGroups,
} from '../fantasy.ts';
import { loadUserResults } from './user.ts';

export type loadAccountResults = {} | {
  subscription: Subscriptions;
  pricing: Pricings;
  api_key: ApiKeys;
  user: loadUserResults;
  fantasy_group_user: FantasyGroupUsers;
  fantasy_group: FantasyGroups;
  user_payment_token: UserPaymentTokens;
}

export type createFantasyGroupEntryArguments = {
  fantasy_group_id: string;
  name: string;
}

// paymentIntent comes straight from the Stripe SDK; kept as unknown here so this
// shared package doesn't need to depend on stripe's types.
export type createFantasyGroupEntryResults =
  { error: string }
  | { error: { message: string } }
  | {
    paymentIntent: unknown;
    payment_router: PaymentRouter | null;
    email: string;
  };

export type createSubscriptionArguments = {
  priceId: string;
  email: string;
}

export type createSubscriptionResults =
  { error: { message: string } }
  | {
    type: 'setup' | 'payment';
    clientSecret: string | null | undefined;
    session_id: string;
  };

export type cancelSubscriptionArguments = {
  subscription_id: string;
}

export type cancelSubscriptionResults = {} | Subscription;

export type createTrialArguments = {
  email: string;
}

export type createTrialResults = { error: { message: string } } | { session_id: string | null };
