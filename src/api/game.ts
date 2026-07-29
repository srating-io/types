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
  Game,
  Odds,
  Teams,
  Prediction,
} from '../general.ts';

export type getGamesArguments = {
  organization_id?: string; // todo make required
  division_id?: string; // todo make required
  start_date?: string;
  season?: number;
  home_team_id?: string;
  away_team_id?: string;
  game_id?: string;
}

export type getGamesResults = {
  [game_id: string]: Game & {
    odds: {
      pre: null | Odds;
      live: null | Odds;
    },
    teams: Teams;
  }
}

export type getScoresArguments = {
  organization_id?: string; // todo make required
  division_id?: string; // todo make required
  start_date?: string;
  season?: number;
  home_team_id?: string;
  away_team_id?: string;
  game_id?: string;
}

export type getScoresResults = {
  [game_id: string]: {
    game_id: string;
    away_score: number | null;
    home_score: number | null;
    clock: string;
    current_period: string;
    status: string;
    prediction?: Prediction;
    odds: {
      pre: null | Odds;
      live: null | Odds;
    }
  }
}
