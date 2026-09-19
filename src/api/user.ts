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
  Notifications,
} from '../auth.ts';
import { loadAccountResults } from './billing.ts';

export type loadUserResults = {} | User;

export type loadResults = {} | {
  user: User;
  notifications: Notifications;
}

export type registerArguments = {
  username: string;
  password: string;
  confirm_password: string;
}

export type registerResults = { error: string } | false | string;

export type loginArguments = {
  username: string;
  password: string;
}

export type loginResults = false | string;

export type useLoginCodeArguments = {
  code: string;
  email: string;
}

export type useLoginCodeResults = { error: string } | false | string;

export type forgotPasswordArguments = {
  email: string;
}

export type forgotPasswordResults = { error: string } | false | true;

export type resetPasswordArguments = {
  password: string;
  confirm_password: string;
}

export type resetPasswordResults = boolean;

export type updateAccountArguments = {
  display_name?: string;
}

export type updateAccountResults = false | { error: string } | loadAccountResults;
