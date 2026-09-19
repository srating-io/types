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
  Players,
  PlayerTeamSeasons,
  Teams,
} from '../general.ts';
import { getGamesResults } from './game.ts';

export interface Favorite {
  favorite_id: string;
  user_id: string;
  json_team_ids: string[];
  json_player_ids: string[];
  json_game_ids: string[];
  guid: string;
  deleted: number;
}

export type loadFavoriteDataArguments = {
  season?: number;
}

export type loadFavoriteDataResults = {
  schedule: {} | getGamesResults;
  favorite: Partial<Favorite>;
  teams: {} | Teams;
  players: {} | Players;
  gamelog: {} | Basketball.PlayerBoxscores | Football.PlayerBoxscores | { error: string };
  player_team_seasons: {} | PlayerTeamSeasons;
}

export type getFavoriteResults = Partial<Favorite>;

export type updateFavoriteArguments = {
  team_id?: string;
  player_id?: string;
  game_id?: string;
}

export type updateFavoriteResults = Partial<Favorite>;
