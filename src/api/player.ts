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
import {
  PlayerTeamSeasons,
} from '../general.ts';

export type getSeasonsArguments = {
  player_id: string;
}

export type getSeasonsResults = PlayerTeamSeasons | { error: string };

export type getGameLogsArguments = {
  organization_id: string;
  division_id: string;
  player_id: string;
  season: number;
}

export type getGameLogsResults = Basketball.PlayerBoxscores | Football.PlayerBoxscores | { error: string };
