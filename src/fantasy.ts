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

export interface FantasyPayoutRule {
  fantasy_payout_rule_id: string;
  code: string;
  name: string;
  description: string;
  json_payout_structure: object;
  ordinal: number;
  custom: number;
  guid: string;
  inactive: number;
  deleted: number;
}

export type FantasyPayoutRules = {[fantasy_payout_rule_id: string]: FantasyPayoutRule};

export interface FantasyPayout {
  fantasy_payout_id: string;
  fantasy_group_id: string;
  fantasy_entry_id: string;
  user_id: string;
  rank: number | null;
  amount: number;
  method: string | null;
  reference: string | null;
  paid_at: string | null;
  note: string | null;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyPayouts = {[fantasy_payout_id: string]: FantasyPayout};

export interface FantasyGroupInvite {
  fantasy_group_invite_id: string;
  fantasy_group_id: string;
  email: string;
  code?: string; // stripped
  joined: number;
  expires: string;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyGroupInvites = {[fantasy_group_invite_id: string]: FantasyGroupInvite};

export interface FantasyGroupUser {
  fantasy_group_user_id: string;
  fantasy_group_id: string;
  user_id: string;
  // not real columns -- attached from the joined user row where the member list is rendered
  email?: string;
  name?: string;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyGroupUsers = {[fantasy_group_user_id: string]: FantasyGroupUser};

export interface FantasyGroupComment {
  fantasy_group_comment_id: string;
  fantasy_group_id: string;
  comment_type_terminology_id: string;
  user_id: string;
  comment: string;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyGroupComments = {[fantasy_group_comment_id: string]: FantasyGroupComment};


export interface FantasyGroup {
  fantasy_group_id: string;
  owner_user_id: string;
  organization_id: string;
  division_id: string;
  season: number;
  name: string,
  fantasy_payout_rule_id: string | null,
  fantasy_group_type_terminology_id: string | null,
  draft_type_terminology_id: string | null,
  draft_scoring_terminology_id: string | null,
  start_date: string | null,
  end_date: string | null,
  draft_start_datetime: string | null,
  cap: number,
  entries: number | null,
  entries_per_user: number,
  free: number,
  entry_fee: number | null,
  open_invites: number,
  locked: number,
  private: number,
  started: number,
  drafted: number,
  finished: number,
  notified_24_hours: number,
  notified_15_mins: number,
  notified_finished: number,
  draft_time_per_user_in_seconds: number | null,
  draft_order_seed: string | null,
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyGroups = {[fantasy_group_id: string]: FantasyGroup};


export interface FantasyEntry {
  fantasy_entry_id: string;
  fantasy_group_id: string;
  user_id: string;
  name: string;
  paid: number;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyEntrys = {[fantasy_entry_id: string]: FantasyEntry};


export interface FantasyDraftOrder {
  fantasy_draft_order_id: string;
  parent_fantasy_draft_order_id: string;
  child_fantasy_draft_order_id: string | null;
  fantasy_entry_id: string;
  fantasy_group_id: string;
  fantasy_entry_player_id: string;
  round: number;
  pick: number;
  eligible: string;
  expires: string;
  notified: number;
  picked: number;
  guid: string;
  deleted: number;
}

export type FantasyDraftOrders = {[fantasy_draft_order_id: string]: FantasyDraftOrder};


export interface FantasyEntryPlayer {
  fantasy_entry_player_id: string;
  fantasy_group_id: string;
  fantasy_entry_id: string;
  player_team_season_id: string;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyEntryPlayers = {[fantasy_entry_player_id: string]: FantasyEntryPlayer};


export interface FantasyBracketSlot {
  fantasy_bracket_slot_id: string;
  first_parent_fantasy_bracket_slot_id: string;
  second_parent_fantasy_bracket_slot_id: string;
  child_fantasy_bracket_slot_id: string;
  fantasy_group_id: string;
  fantasy_entry_id: string;
  actual_first_team_id: string | null;
  actual_second_team_id: string | null;
  third_team_id: string | null;
  picked_first_team_id: string | null;
  picked_second_team_id: string | null;
  picked_winner_team_id: string | null;
  actual_winner_team_id: string | null;
  tie_breaker_total_score: number | null;
  game_id: string | null;
  region: string;
  round: number;
  slot: number;
  locked: number;
  picked: number;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyBracketSlots = {[fantasy_bracket_slot_id: string]: FantasyBracketSlot};


export interface FantasyRanking {
  fantasy_ranking_id: string;
  parent_fantasy_ranking_id: string;
  fantasy_group_id: string;
  fantasy_entry_id: string;
  date_of_rank: string;
  max: number;
  rank: number;
  rank_delta_one: number;
  rank_delta_seven: number;
  points: number;
  date_of_entry: string;
  updated_at: string;
  current: number;
  guid: string;
  deleted: number;
}

export type FantasyRankings = {[fantasy_ranking_id: string]: FantasyRanking};

export interface FantasyEntryPlayerStatisticRanking {
  fantasy_entry_player_statistic_ranking_id: string;
  parent_fantasy_entry_player_statistic_ranking_id: string;
  organization_id: string;
  division_id: string;
  season: number;
  fantasy_group_id: string;
  fantasy_entry_id: string;
  fantasy_entry_player_id: string;
  sport_player_statistic_id: string;
  date_of_rank: string;
  updated_at: string;
  current: number;
  guid: string;
  deleted: number;
}

export type FantasyEntryPlayerStatisticRankings = {[fantasy_entry_player_statistic_ranking_id: string]: FantasyEntryPlayerStatisticRanking};
