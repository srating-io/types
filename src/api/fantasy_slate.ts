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
  Games,
  Oddsz,
  Predictions,
  Teams,
} from '../general.ts';
import {
  FantasySelections,
  FantasySlate,
  FantasySlates,
} from '../fantasy.ts';

export type loadArguments = {
  fantasy_slate_id: string;
}

/**
 * Everything one slate's screen needs. The games are read from `game` by the slate's date range
 * rather than stored on it, so a postponement moves the game out on its own.
 *
 * `predictions` and `oddsz` are both here because they are not interchangeable: a projection is
 * the better number but only CBB and CFB have one, so the nba falls back to the market line.
 */
export type loadResults = { error: string } | {
  fantasy_slate: FantasySlate;
  games: Games;
  teams: Teams;
  predictions: Predictions;
  oddsz: Oddsz;
  /**
   * The session user's own selections, plus every entry's once the slate has locked. A rival's
   * unlocked selection comes back with its team nulled rather than omitted, so the gui can show
   * that they have chosen without showing what.
   */
  fantasy_selections: FantasySelections;
  /**
   * Teams an entry can no longer take, because survivor only lets each be used once. Sent rather
   * than derived in the gui, since it is also what the strategy view reads.
   */
  fantasy_entry_id_x_used_team_ids: {[fantasy_entry_id: string]: string[]};
}

export type loadGroupSlatesArguments = {
  fantasy_group_id: string;
}

/** The slate strip: every window of the run, without any one window's games. */
export type loadGroupSlatesResults = { error: string } | {
  fantasy_slates: FantasySlates;
}
