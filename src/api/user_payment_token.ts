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

import {
  User,
} from '../auth.ts';
import {
  UserPaymentToken,
  UserPaymentTokens,
} from '../payments.ts';

export type createBankAccountArguments = {
  account_number: string;
  routing_number: string;
  account_holder_name: string;
}

export type createBankAccountResults = { error: string } | { error: { message: string } } | {
  user: User;
  user_payment_token: UserPaymentToken;
}

export type createDebitCardArguments = {
  token: string;
}

export type createDebitCardResults = { error: string } | { error: { message: string } } | {
  user: User;
  user_payment_token: UserPaymentToken;
}

export type removeTokenArguments = {
  user_payment_token_id: string;
}

export type removeTokenResults = { error: string } | { error: { message: string } } | {
  user: User;
  user_payment_tokens: UserPaymentTokens;
}

export type setDefaultArguments = {
  user_payment_token_id: string;
}

export type setDefaultResults = { error: string } | {
  user: User;
}
