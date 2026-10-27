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

import { PlayerTeamSeasons, Players } from '../general.ts';
import { FantasyEntryPrePicks } from '../fantasy.ts';

/**
 * The whole list is replaced on every call, in the order given, so a reorder cannot collide
 * with itself.
 */
export type setPrePicksArguments = {
  fantasy_entry_id: string;
  player_team_season_ids: string[];
}

export type setPrePicksResults = { error: string } | {
  fantasy_entry_pre_picks: FantasyEntryPrePicks;
  player_team_seasons: PlayerTeamSeasons;
  players: Players;
}
