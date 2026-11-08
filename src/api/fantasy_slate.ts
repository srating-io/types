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
  Teams,
  GameOutlook,
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
 */
export type loadResults = { error: string } | {
  fantasy_slate: FantasySlate;
  games: Games;
  teams: Teams;
  /**
   * The model's read on each game, resolved by the api rather than handed over as Prediction, Odds
   * and Elo rows, so the gui does not have to know which source to prefer and the nba -- market
   * lines but no projections -- needs no case of its own.
   *
   * The win probability inside is null for a caller without a subscription, because Prediction and
   * Odds null it themselves; the elo derived favorite is not, so a free entry can still see who
   * the model likes. That split is the paid line, and it is deliberate.
   */
  game_id_x_game_outlook: {[game_id: string]: GameOutlook};
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
