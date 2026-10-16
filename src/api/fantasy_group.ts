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
  Players,
} from '../general.ts';
import {
  FantasyGroup,
  FantasyGroups,
  FantasyGroupUsers,
  FantasyGroupInvites,
  FantasyGroupComments,
  FantasyEntrys,
  FantasyRankings,
  FantasyDraftOrders,
  FantasyEntryPlayers,
  FantasyEntryPlayerStatisticRanking,
} from '../fantasy.ts';

export type createGroupArguments = Partial<Omit<FantasyGroup, 'fantasy_group_id' | 'owner_user_id' | 'guid' | 'deleted' | 'date_of_entry'>>;

export type createGroupResults = { error: string } | FantasyGroup;

/**
 * What an owner may change after the fact. Deliberately narrow: the sport, season, league type,
 * draft style, entry fee and payout rule are what people join and pay on, so they are fixed.
 * Omitting a key leaves it alone.
 */
export type updateGroupArguments = {
  fantasy_group_id: string;
  name?: string;
  start_date?: string | null;
  end_date?: string | null;
  draft_start_datetime?: string | null;
  draft_time_per_user_in_seconds?: number | null;
  cap?: number;
  entries?: number | null;
  entries_per_user?: number;
  open_invites?: number;
  private?: number;
}

export type updateGroupResults = { error: string } | FantasyGroup;

export type sendInvitesArguments = {
  fantasy_group_id: string;
  emails: string;
}

export type sendInvitesResults = { error: string } | FantasyGroupInvites;

export type leaveArguments = {
  fantasy_group_id: string;
}

export type leaveResults = { error: string } | loadResults;

export type removeArguments = {
  fantasy_group_id: string;
}

export type removeResults = { error: string } | boolean;

export type lockArguments = {
  fantasy_group_id: string;
}

export type lockResults = { error: string } | {
  fantasy_group: FantasyGroup;
  fantasy_draft_orders: FantasyDraftOrders;
}

export type finishArguments = {
  fantasy_group_id: string;
}

export type finishResults = { error: string } | {
  fantasy_group: FantasyGroup;
}

export type loadArguments = {
  fantasy_group_id: string;
}

export type loadResults = { error: string } | {
  isOwner: boolean;
  fantasy_group: FantasyGroup;
  fantasy_group_users: FantasyGroupUsers;
  fantasy_group_invites: FantasyGroupInvites;
  fantasy_entrys: FantasyEntrys;
  fantasy_rankings: FantasyRankings;
  fantasy_group_comments: FantasyGroupComments;
  fantasy_draft_orders: FantasyDraftOrders;
  fantasy_entry_players: FantasyEntryPlayers;
  player_team_seasons: PlayerTeamSeasons;
  players: Players;
  fantasy_entry_player_statistic_rankings: {
    [fantasy_entry_player_statistic_ranking_id: string]: FantasyEntryPlayerStatisticRanking & (Basketball.PlayerStatisticRanking | Football.PlayerStatisticRanking);
  };
}

export type loadHomeArguments = {
  organization_id: string;
  division_id: string;
  season: number;
}

export type loadHomeResults = { error: string } | {
  fantasy_groups: FantasyGroups;
  fantasy_group_users: FantasyGroupUsers;
  fantasy_entrys: FantasyEntrys;
}
