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

import { FantasyEntryPlayerStatisticRanking } from '../fantasy.ts';
import * as Basketball from '../basketball.ts';
import * as Football from '../football.ts';

export type getStatsArguments = {
  organization_id: string;
} & Partial<FantasyEntryPlayerStatisticRanking>;

// getStats merges in the sport-specific `<sport>_player_statistic` row (a different
// table lineage than FantasyEntryPlayerStatisticRanking itself), so the result is an
// intersection of both, not just the base row.
export type getStatsResults =
  (FantasyEntryPlayerStatisticRanking & (Basketball.PlayerStatisticRanking | Football.PlayerStatisticRanking))
  | { error: string };
