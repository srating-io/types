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
  PlayerTeamSeasons,
  Players,
} from '../general.ts';
import {
  FantasyDraftOrders,
  FantasyEntryPlayers,
  FantasyGroup,
} from '../fantasy.ts';

export type pickArguments = {
  fantasy_draft_order_id: string;
  player_team_season_id: string;
}

export type pickResults = { error: string } | {
  fantasy_draft_orders: FantasyDraftOrders;
  fantasy_entry_players: FantasyEntryPlayers;
  player_team_seasons: PlayerTeamSeasons;
  players: Players;
  fantasy_group?: FantasyGroup;
}
