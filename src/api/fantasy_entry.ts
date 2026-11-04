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
  BracketTeams,
  PlayerTeamSeasons,
  Players,
  Games,
  Teams,
} from '../general.ts';
import {
  FantasyEntry,
  FantasyEntrys,
  FantasyGroup,
  FantasyGroupUser,
  FantasyGroupUsers,
  FantasyBracketSlots,
  FantasyDraftOrders,
  FantasyEntryPlayers,
  FantasyEntryPlayerStatisticRanking,
  FantasyRankings,
} from '../fantasy.ts';

export type createEntryArguments = {
  fantasy_group_id: string;
  name: string;
}

export type createEntryResults = { error: string } | {
  fantasy_entrys: FantasyEntrys;
  fantasy_group_users?: FantasyGroupUsers;
}

export type createBracketArguments = {
  fantasy_entry_id: string;
}

export type createBracketResults = { error: string } | FantasyBracketSlots;

export type loadArguments = {
  fantasy_entry_id: string;
}

export type loadResults = { error: string } | {
  fantasy_entry: FantasyEntry;
  fantasy_group: FantasyGroup;
  fantasy_entry_players: FantasyEntryPlayers | {};
  fantasy_bracket_slots: FantasyBracketSlots;
  bracket_teams: BracketTeams;
  player_team_seasons: PlayerTeamSeasons;
  players: Players;
  games: Games;
  fantasy_entry_player_statistic_rankings: {
    [fantasy_entry_player_statistic_ranking_id: string]: FantasyEntryPlayerStatisticRanking & (Basketball.PlayerStatisticRanking | Football.PlayerStatisticRanking);
  };
  teams: Teams;
  /** Per game scoring for the rostered players, over the games this entry counts. */
  player_boxscores: Basketball.PlayerBoxscores | Football.PlayerBoxscores;
  /** The whole group at `current`, so an entry can show its rank and who is either side of it. */
  fantasy_rankings: FantasyRankings;
  /** This entry only, without the `current` filter, for rank and points over time. */
  fantasy_ranking_history: FantasyRankings;
  /** Id and name only - enough to label a standings row, and nothing the page does not need. */
  fantasy_entrys: FantasyEntrys;
  /** This entry only, for the pick column and the draft recap. */
  fantasy_draft_orders: FantasyDraftOrders;
  /** The entry owner, name only. */
  fantasy_group_user: FantasyGroupUser | {};
  /**
   * Every drafted player in the group as `fantasy_entry_player_id` to its score, so a pick can be
   * ranked against the pool it came from. A projection rather than the joined stat rows, which are
   * what makes the group-wide payload heavy.
   */
  league_player_ratings: { [fantasy_entry_player_id: string]: number };
}
