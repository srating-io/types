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

import { PlayerBoxscore } from '../general.ts';
import * as Basketball from '../basketball.ts';
import * as Football from '../football.ts';

export type getPlayerBoxscoreArguments = {
  organization_id: string;
} & Partial<PlayerBoxscore>;

// getPlayerBoxscore merges in the sport-specific `<sport>_player_boxscore` row, so the
// result always carries the richer sport-specific shape, not just the base row.
export type getPlayerBoxscoreResults = Basketball.PlayerBoxscore | Football.PlayerBoxscore | { error: string };

export type readPlayerBoxscoreArguments = {
  organization_id: string;
} & Partial<PlayerBoxscore>;

export type readPlayerBoxscoreResults = Basketball.PlayerBoxscores | Football.PlayerBoxscores | { error: string };
