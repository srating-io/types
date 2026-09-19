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

export type searchArguments = {
  name: string;
  organization_id: string;
  division_id: string;
  team?: number;
  player?: number;
  coach?: number;
}

export interface SearchTeamResult {
  team_id: string;
  char6: string;
  code: string;
  name: string;
  alt_name: string | null;
  primary_color: string | null;
}

export interface SearchPlayerResult {
  player_id: string;
  first_name: string;
  last_name: string;
  begin: number;
  end: number;
  relevance_score: number;
}

export interface SearchCoachResult {
  coach_id: string;
  first_name: string;
  last_name: string;
  begin: number;
  end: number;
}

export type searchResults = {
  teams: null | SearchTeamResult[];
  players: null | SearchPlayerResult[];
  coaches: null | SearchCoachResult[];
}
