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

/**
 * The entity kinds that have a slug, and so a url worth putting in a sitemap.
 */
export type SlugType = 'team' | 'player' | 'coach' | 'conference' | 'game';

export type getSlugsArguments = {
  type: SlugType;
  organization_id: string;
  division_id: string;
  /**
   * Games only, and required there. A sitemap that reached back through every season would be
   * mostly dead urls, so the caller names the seasons it wants.
   */
  seasons?: number[];
  limit: number;
  offset: number;
}

export type SlugRow = {
  slug: string;
  /**
   * Feeds <lastmod>. Null on the tables that have no updated_at, which the caller then omits
   * rather than guessing a date -- a wrong lastmod is worse than none.
   */
  updated_at: string | null;
}

export type getSlugsResults = SlugRow[];

export type getCountsArguments = {
  type: SlugType;
  organization_id: string;
  division_id: string;
  seasons?: number[];
}

/**
 * How many urls of this kind exist, so the sitemap knows how many shards to generate before it
 * starts paging through them.
 */
export type getCountsResults = {
  count: number;
}
