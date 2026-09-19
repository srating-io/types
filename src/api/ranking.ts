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

export type loadArguments = {
  season: number;
  organization_id: string;
  division_id: string;
  fxn: string;
  career?: number;
  career_active?: number;
}

// dispatches to one of the (blacklisted) ranking functions by name via the generic
// cache handler, so the shape depends on which function was requested.
export type loadResults = { error: string } | unknown;

export type downloadArguments = {
  season: number;
  organization_id: string;
  division_id: string;
  view: string;
  career?: number;
  career_active?: number;
}

// dispatches to one of the (blacklisted) ranking functions by name, so the shape
// depends on which one was requested.
export type downloadResults = { error: string } | false | unknown;
