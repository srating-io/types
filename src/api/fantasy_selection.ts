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

import { Teams } from '../general.ts';
import { FantasyEntry, FantasySelections, FantasySlates } from '../fantasy.ts';

/**
 * Choose a team for a slate. The api resolves the game's opponent and freezes the win probability
 * itself -- a caller supplying either could pick its own odds.
 *
 * Re-choosing replaces the entry's existing selection for the same slot rather than adding one,
 * so the gui does not have to clear first.
 */
export type selectArguments = {
  fantasy_slate_id: string;
  fantasy_entry_id: string;
  game_id: string;
  team_id: string;
  /** Which slot on a multi-selection slate. Defaults to 1, which is every survivor slate today. */
  ordinal?: number;
}

export type selectResults = { error: string } | {
  fantasy_selections: FantasySelections;
}

/**
 * Undo a selection before the slate locks. Soft deleting the row is what frees the team again,
 * because the no-reuse unique key ignores deleted rows.
 */
export type clearArguments = {
  fantasy_selection_id: string;
}

export type clearResults = { error: string } | {
  fantasy_selections: FantasySelections;
}

export type loadEntryArguments = {
  fantasy_entry_id: string;
}

/**
 * One entry's whole run, slate by slate, for its history and strategy views.
 *
 * Carries the same visibility rule as `fantasy_slate.load`: a selection on a slate that has not
 * locked comes back with its team nulled unless the entry belongs to the caller. Without that,
 * opening a rival's entry page was a way to read their live pick.
 */
export type loadEntryResults = { error: string } | {
  fantasy_entry: FantasyEntry;
  fantasy_selections: FantasySelections;
  /** The slates the selections sit on, so a run can be read in the order it was played. */
  fantasy_slates: FantasySlates;
  /** The chosen teams, so a run names them rather than printing their ids. */
  teams: Teams;
  /** Teams this entry has spent, so the strategy view can show what is left. */
  used_team_ids: string[];
}
