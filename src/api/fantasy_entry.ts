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
  FantasyGroupUsers,
  FantasyBracketSlots,
  FantasyEntryPlayers,
  FantasyEntryPlayerStatisticRanking,
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
}
