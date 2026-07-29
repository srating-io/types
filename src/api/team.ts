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

import { getGamesResults } from "./game.ts";
import {
  Team,
} from '../general.ts';

export type loadTeamArguments = {
  organization_id: string;
  division_id: string;
  team_id: string;
  season: number;
}

export type loadTeamResults = Team & {
  conference_id?: string;
  stats?: {
    statistic_ranking_id: string;
    rank: number;
    elo_rank: number;
    wins: number;
    losses: number;
    kenpom_rank?: number;
    srs_rank?: number;
    ap_rank?: number;
    coaches_rank?: number;
    net_rank?: number;
  }
}

export type getScheduleArguments = {
  organization_id: string;
  division_id: string;
  team_id: string;
  season: number;
}

export type getScheduleResults = getGamesResults;
