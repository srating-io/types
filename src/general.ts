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

export interface Organization {
  organization_id: string;
  code: string;
  name: string;
  guid: string;
  inactive: number;
  deleted: number;
}

export type Organizations = {[organization_id: string]: Organization};

export interface Division {
  division_id: string;
  code: string;
  name: string;
  guid: string;
  inactive: number;
  deleted: number;
}

export type Divisions = {[division_id: string]: Division};

export interface Terminology {
  terminology_id: string;
  code: string;
  name: string;
  description: string;
  type: string;
  guid: string;
  inactive: number;
  deleted: number;
}

export type Terminologies = {[terminology_id: string]: Terminology};

/**
 * A slug an entity used to answer to. A slug is immutable once assigned, so this only fills up
 * from a game whose start_date moved and from a manual rename -- and a hit here is a 301, never a
 * render.
 */
export interface SlugRedirect {
  slug_redirect_id: string;
  type: 'team' | 'player' | 'coach' | 'conference' | 'game';
  /**
   * Set for a game, null otherwise, matching how the slug itself is scoped.
   */
  organization_id: string | null;
  slug: string;
  entity_id: string;
  guid: string;
  deleted: number;
}

export type SlugRedirects = {[slug_redirect_id: string]: SlugRedirect};

export interface Conference {
  conference_id: string;
  parent_conference_id: string;
  code: string;
  name: string;
  slug: string;
  guid: string;
  inactive: number;
  deleted: number;
}

export type Conferences = {[conference_id: string]: Conference};

export interface Team {
  team_id: string;
  char6: string;
  code: string;
  name: string;
  alt_name: string;
  slug: string;
  primary_color: string;
  secondary_color: string;
  guid: string;
  deleted: number;
  // not real columns on team -- commonly attached from a joined team_season_conference row
  conference_id?: string;
  division_id?: string;
}

export type Teams = {[team_id: string]: Team};

export interface TeamSeasonConference {
  team_season_conference_id: string;
  organization_id: string;
  team_id: string;
  season: number;
  conference_id: string;
  division_id: string;
  name: string;
  code: string;
  guid: string;
  deleted: number;
}

export type TeamSeasonConferences = {[team_season_conference_id: string]: TeamSeasonConference};


export interface ConferenceDivisionSeason {
  conference_division_season_id: string;
	organization_id: string;
	division_id: string;
	conference_id: string;
	season: number;
	guid: string;
  deleted: number;
}

export type ConferenceDivisionSeasons = {[conference_division_season_id: string]: ConferenceDivisionSeason};

export interface Prediction {
  prediction_id: string;
  game_id: string;
  season: number;
  home_percentage: number;
  away_percentage: number;
  home_score: number;
  away_score: number;
  live: number;
  current: number;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type Predictions = {[prediction_id: string]: Prediction};

export interface Game {
  game_id: string;
  organization_id: string;
  division_id: string;
  season: number;
  game_type_terminology_id: string | null;
  away_team_id: string;
  home_team_id: string;
  network: string;
  away_score: number | null;
  home_score: number | null;
  status: string;
  current_period: string;
  clock: string;
  clock_last_updated_at: string;
  start_date: string;
  start_datetime: string;
  start_timestamp: number;
  slug: string;
  attendance: number;
  neutral_site: number;
  is_conf_game: number;
  boxscore: number;
  guid: string;
  deleted: number;
}

export type Games = {[game_id: string]: Game};

export interface Coach {
  coach_id: string;
  first_name: string;
  last_name: string;
  slug: string;
  deleted: number;
}

export type Coaches = {[coach_id: string]: Coach};

export interface CoachTeamSeason {
  coach_team_season_id: string;
  coach_id: string;
  team_id: string;
  season: number;
  start_date: string;
  end_date: string | null;
  guid: string;
  deleted: number
}

export type CoachTeamSeasons = {[coach_team_season_id: string]: CoachTeamSeason};

export interface CoachElo {
  coach_elo_id: string;
  parent_coach_elo_id: string;
  coach_id: string;
  game_id: string;
  season: number;
  elo: number;
  current: number;
  date_of_entry: string;
  updated_at: string;
  deleted: number;
}

export type CoachElos = {[coach_elo_id: string]: CoachElo};

export interface Elo {
  elo_id: string;
  parent_elo_id: string;
  team_id: string;
  game_id: string;
  season: number;
  elo: number;
  current: number;
  date_of_entry: string;
  updated_at: string;
  deleted: number;
}

export type Elos = {[elo_id: string]: Elo};


export interface PlayerElo {
  player_elo_id: string;
  parent_player_elo_id: string;
  player_id: string;
  game_id: string;
  season: number;
  elo: number;
  current: number;
  date_of_entry: string;
  updated_at: string;
  deleted: number;
}

export type PlayerElos = {[player_elo_id: string]: PlayerElo};

export interface Player {
  player_id: string;
  first_name: string;
  last_name: string;
  slug: string;
  position: string;
  height: string;
  weight: string;
  number: string;
  hometown: string;
  college?: string;
  draft_year?: string;
  draft_round?: string;
  draft_number?: string;
  class_year?: string;
  guid: string;
  deleted: number;
}

export type Players = {[player_id: string]: Player};

export interface PlayerTeamSeason {
  player_team_season_id: string;
  organization_id: string;
  division_id: string;
  player_id: string;
  team_id: string;
  season: number;
  position: string;
  height: string;
  weight: string;
  number: string;
  class_year: string;
  start_date: string;
  end_date: string;
  guid: string;
  deleted: number;
}

export type PlayerTeamSeasons = {[player_team_season_id: string]: PlayerTeamSeason};

export interface GamePulse {
  game_pulse_id: string;
  game_id: string;
  odds_id: string;
  away_score: number;
  home_score: number;
  current_period: string;
  clock: string;
  date_of_entry: string;
}

export type GamePulses = {[game_pulse_id: string]: GamePulse};

export interface GamePlayer {
  game_player_id: string;
  game_id: string;
  team_id: string;
  player_id: string;
  start: string;
  stop: string | null;
  period: string;
  date_of_entry: string;
}

export type GamePlayers = {[game_player_id: string]: GamePlayer};

export interface Odds {
  odds_id: string;
  game_id: string;
  money_line_away: number;
  money_line_home: number;
  spread_away: number;
  spread_home: number;
  over: number;
  under: number;
  json_bookmakers: Bookmakers | null;
  date_of_entry: string;
  live: number;
  current: number;
  deleted: number;
}

export type Oddsz = {[odds_id: string]: Odds};

export interface Bookmaker {
  title: string;
  key: string;
  money_line_away: number;
  money_line_home: number;
  spread_away: number;
  spread_home: number;
  over: number;
  under: number;
}

export type Bookmakers = {[key: string]: Bookmaker};

export interface CoachStatisticRanking {
  coach_statistic_ranking_id: string;
  parent_coach_statistic_ranking_id: string;
  organization_id: string;
  division_id: string;
  coach_statistic_id: string;
  season: number;
  coach_id: string;
  rating: number;
  rank: number;
  rank_delta_one: number;
  rank_delta_seven: number;
  elo: number;
  games: number;
  wins: number;
  losses: number;
  confwins: number;
  conflosses: number;
  nonconfwins: number;
  nonconflosses: number;
  neutralwins: number;
  neutrallosses: number;
  homewins: number;
  homelosses: number;
  roadwins: number;
  roadlosses: number;
  elo_sos: number;
  win_percentage: number;
  conf_win_percentage: number;
  nonconf_win_percentage: number;
  home_win_percentage: number;
  road_win_percentage: number;
  neutral_win_percentage: number;
  elo_rank: number;
  wins_rank: number;
  losses_rank: number;
  confwins_rank: number;
  conflosses_rank: number;
  nonconfwins_rank: number;
  nonconflosses_rank: number;
  neutralwins_rank: number;
  neutrallosses_rank: number;
  homewins_rank: number;
  homelosses_rank: number;
  roadwins_rank: number;
  roadlosses_rank: number;
  elo_sos_rank: number;
  win_percentage_rank: number;
  conf_win_percentage_rank: number;
  nonconf_win_percentage_rank: number;
  home_win_percentage_rank: number;
  road_win_percentage_rank: number;
  neutral_win_percentage_rank: number;
  date_of_rank: string;
  current: number;
  deleted: number;
}

export type CoachStatisticRankings = {[coach_statistic_ranking_id: string]: CoachStatisticRanking};


export interface RankingColumns {
  [key: string]: {
    id: string;
    numeric: boolean;
    label: string;
    tooltip: string;
    sort?: string;
    sticky?: boolean;
    disabled?: boolean;
  }
}

export interface BracketTeam {
  bracket_team_id: string;
  organization_id: string;
  division_id: string;
  season: number;
  team_id: string;
  region: string;
  round: number;
  seed: number;
  current: number;
  predicted: number;
  date_of_entry: string;
  guid: string;
  deleted: number;
}

export type BracketTeams = {[bracket_team_id: string]: BracketTeam};

export interface Boxscore {
  boxscore_id: string;
  organization_id: string;
  division_id: string;
  game_id: string;
  team_id: string;
  sport_boxscore_id: string;
  season: number;
  final: number;
  deleted: number;
}

export type Boxscores = {[boxscore_id: string]: Boxscore};

export interface PlayerBoxscore {
  player_boxscore_id: string;
  organization_id: string;
  division_id: string;
  game_id: string;
  team_id: string;
  player_id: string;
  sport_player_boxscore_id: string;
  season: number;
  final: number;
  deleted: number;
}

export type PlayerBoxscores = {[player_boxscore_id: string]: PlayerBoxscore};

export interface PlaybyPlay {
  play_by_play_id: string;
  organization_id: string;
  division_id: string;
  game_id: string;
  sport_play_by_play_id: string;
  team_id: string;
}

export type PlaybyPlays = {[play_by_play_id: string]: PlaybyPlay};

export interface StatisticRanking {
  statistic_ranking_id: string;
  organization_id: string;
  division_id: string;
  season: number;
  team_id: string;
  parent_statistic_ranking_id: string | null;
	last_game_id: string;
  sport_statistic_id: string;
  date_of_rank: string;
  updated_at: string;
  current: number;
  deleted: number;
}

export type StatisticRankings = {[statistic_ranking_id: string]: StatisticRanking};

export interface PlayerStatisticRanking {
  player_statistic_ranking_id: string;
  organization_id: string;
  division_id: string;
  season: number;
  team_id: string;
  player_id: string;
  player_team_season_id: string;
  parent_player_statistic_ranking_id: string | null;
  last_game_id: string;
  sport_player_statistic_id: string;
  date_of_rank: string;
	updated_at: string;
  current: number;
  deleted: number;
}

export type PlayerStatisticRankings = {[player_statistic_ranking_id: string]: PlayerStatisticRanking};

export interface ConferenceStatisticRanking {
  conference_statistic_ranking_id: string;
  organization_id: string;
  division_id: string;
  conference_id: string;
  season: number;
  parent_conference_statistic_ranking_id: string;
  sport_conference_statistic_id: string;
  date_of_rank: string;
  updated_at: string;
  current: number;
  deleted: number;
}

export type ConferenceStatisticRankings = {[conference_statistic_ranking_id: string]: ConferenceStatisticRanking};

export interface ConferencePlayerStatisticRanking {
  conference_player_statistic_ranking_id: string;
	organization_id: string;
	division_id: string;
	conference_id: string;
	season: number;
	sport_conference_player_statistic_id: string;
  date_of_rank: string;
	updated_at: string;
	current: number;
	deleted: number;   
}

export type ConferencePlayerStatisticRankings = {
  [conference_player_statistic_ranking_id: string]: ConferencePlayerStatisticRanking;
}

export interface LeagueStatisticRanking {
  league_statistic_ranking_id: string;
  organization_id: string;
  division_id: string;
  sport_league_statistic_id: string;
  season: number;
  date_of_rank: string;
  updated_at: string;
  current: number;
  deleted: number;
}

export type LeagueStatisticRankings = {[league_statistic_ranking_id: string]: LeagueStatisticRanking};

export interface LeaguePlayerStatisticRanking {
  league_player_statistic_ranking_id: string;
  organization_id: string;
  division_id: string;
  sport_league_player_statistic_id: string;
  season: number;
  date_of_rank: string;
  updated_at: string;
  current: number;
  deleted: number;
}

export type LeaguePlayerStatisticRankings = {[league_player_statistic_ranking_id: string]: LeaguePlayerStatisticRanking};