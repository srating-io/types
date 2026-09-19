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

export type readPlaybyPlayArguments = {
  game_id: string;
  organization_id?: string;
  division_id?: string;
}

// readPlaybyPlay only ever dispatches to the basketball table today (no football
// branch exists), and merges in the basketball-specific row per item.
export type readPlaybyPlayResults = Basketball.PlaybyPlays | { error: string };

export type getPlaybyPlayArguments = {
  game_id: string;
  organization_id?: string;
  division_id?: string;
}

export type getPlaybyPlayResults = Basketball.PlaybyPlay | { error: string };
