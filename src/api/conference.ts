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

import * as Basketball from '../basketball.ts';
import * as Football from '../football.ts';

export type getConferencePredictionArguments = {
  organization_id: string;
  conference_id: string;
  season: string | number;
}

export type getConferencePredictionResults =
  { error: string }
  | ((Basketball.StatisticRankings | Football.StatisticRankings) & Record<string, { hasAccess: boolean }>);
