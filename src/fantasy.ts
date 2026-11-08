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
  // slate driven modes. Generic rather than survivor named, because the modes after it want the
  // same knobs -- only survivor_revivals is specific to one game.
  fantasy_slate_type_terminology_id: string | null,
  selections_per_slate: number,
  auto_select: number,
  survivor_revivals: number,
  // set only on the site's own free pools, null on a user league
  official_code: string | null,
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
  /**
   * Materialized by the slate resolver rather than derived from FantasySelections, because every
   * read path already has this row and a free pool can hold thousands of entries. The resolver
   * rebuilds the chain from the selections each run, so a stale flag cannot survive a cycle.
   */
  eliminated: number;
  eliminated_fantasy_slate_id: string | null;
  revivals_used: number;
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


/**
 * A player an entry wants drafted for it, in preference order, if the pick clock runs out.
 * Only ever returned to the entry's own owner -- the whole point is that rivals cannot see it.
 */
export interface FantasyEntryPrePick {
  fantasy_entry_pre_pick_id: string;
  fantasy_group_id: string;
  fantasy_entry_id: string;
  player_team_season_id: string;
  ordinal: number;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasyEntryPrePicks = {[fantasy_entry_pre_pick_id: string]: FantasyEntryPrePick};


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


/**
 * One repeating window of a group's run: a survivor week, a pick'em week, a streak day. The
 * group's own locked / started / drafted / finished are single shot and describe the whole run,
 * so the phase that repeats lives here instead.
 *
 * The games in a slate are deliberately not stored. They are read from `game` by the date range,
 * because a stored list goes stale the first time a game is postponed.
 */
export interface FantasySlate {
  fantasy_slate_id: string;
  fantasy_group_id: string;
  parent_fantasy_slate_id: string | null;
  ordinal: number;
  name: string | null;
  start_datetime: string;
  end_datetime: string;
  /** Selections stop here, which today is the first tip off of the slate. */
  lock_datetime: string;
  selections_required: number;
  locked: number;
  resolved: number;
  notified_24_hours: number;
  notified_1_hour: number;
  notified_resolved: number;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type FantasySlates = {[fantasy_slate_id: string]: FantasySlate};


/**
 * What one entry chose for one slate. Mode neutral on purpose: survivor writes one row per slate
 * and a weekly pick'em writes one per game, so a row is keyed by the game and not just the slate.
 *
 * Only ever returned for a rival entry once the slate has locked -- before that the api nulls the
 * chosen team, because seeing the field's selections early would decide the game.
 */
export interface FantasySelection {
  fantasy_selection_id: string;
  fantasy_group_id: string;
  fantasy_slate_id: string;
  fantasy_entry_id: string;
  game_id: string;
  /** Null on a rival's unlocked selection, and on any mode that selects players instead. */
  team_id: string | null;
  player_team_season_id: string | null;
  opponent_team_id: string | null;
  /**
   * 0 to 1, frozen when chosen so a revised projection cannot move the standings after the fact.
   * Matches prediction.home_percentage, which is a rate and not the percent its name implies.
   */
  win_probability: number | null;
  /** 1..selections_required on the slate. A later pick'em mode reuses it as a confidence rank. */
  ordinal: number;
  /** Survivor: this entry may never take this team again. The db enforces it, not the api. */
  exclusive_team: number;
  /** The deadline passed and the handler chose this, so the gui can say so. */
  auto: number;
  locked: number;
  /** Null until the game has a result. */
  correct: number | null;
  /** The chosen team's winning margin, for the standings tie break. */
  margin: number | null;
  revived: number;
  resolved: number;
  date_of_entry: string;
  updated_at: string;
  guid: string;
  deleted: number;
}

export type FantasySelections = {[fantasy_selection_id: string]: FantasySelection};


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
