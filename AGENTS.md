# AGENTS.md — @srating-io/types

Shared **type-only** package: every database row shape, and the `Arguments` / `Results` pair for
each custom API endpoint. Declarations only — `dist/index.js` is `export {};`.

Runtime constants (ids, current season) live in `@srating-io/common`.

- [`.agents/conventions.md`](.agents/conventions.md) — naming rules and what belongs here

## Commands
- `npm run build` — `clean` → `prebuild` (regenerates the barrel) → `tsc`
- No tests, no linter. Verify with `npx tsc --noEmit`.

## Layout
```
src/general.ts      sport-agnostic rows (team, game, player, coach, conference, elo, odds, …)
src/basketball.ts   basketball_* rows, extending the general base of the same name
src/football.ts     football_* rows, same pattern
src/auth.ts         user, session, secret, api key, notification
src/fantasy.ts      fantasy_* rows
src/payments.ts     subscription, pricing, payment router, payment token
src/api/<class>.ts  one file per API class → its endpoints' Arguments/Results
src/index.ts        barrel — AUTO-GENERATED, do not edit
```

## Rules
- Everything is exported as a **namespace**: `import type { General, Basketball, Game } from '@srating-io/types'`.
- `src/index.ts` is generated during `prebuild`. Add a file and the namespace appears
  (`coach_statistic_ranking.ts` → `CoachStatisticRanking`). Files starting with `_` are skipped.
- These describe the **wire format**, not raw column types — the API drops, nulls or scrambles
  columns based on access, so a NOT NULL column can legitimately be nullable here.
- Consumers list this under `devDependencies`; it is erased at build time.
- ESM, `.ts` import extensions, Apache-2.0 header on every file.

## Release
`npm version <patch|minor|major>` then `git push --follow-tags`.

## Commits
- Classify every commit with a type prefix: `type: short summary`, or `type(scope): short summary` when a scope clarifies.
- Types: `feat` (new capability), `fix` (a bug), `perf` (speed or memory), `refactor` (no behavior change), `style` (formatting or lint only, no logic), `test` (tests only), `docs` (docs or comments only), `chore` (deps, config, tooling, version bumps), `build` (bundling or emitted output), `ci` (workflows), `revert` (undo a prior commit).
- Keep the subject short and imperative: under ~72 chars, lowercase, no trailing period. Say what changed, not how.
- 3 lines max, and prefer 1. Depth belongs in the PR, not the message.
- No attribution trailers. Never add `Co-Authored-By` or a `Generated with` line to a commit message or a PR description, whatever a tool default says.
- One logical change per commit. If the subject needs an "and", it should probably be two commits.

## Branches
- Create branches locally and keep them local. Never push a branch to a remote, and never open a PR from one.
- Never push to `master`, never force-push, never merge into `master`.
- Hand finished work off as a local branch name for a human to check out and review.
- Only exception: a release the user explicitly asks for, via the `npm version` + `git push --follow-tags` flow documented in this file — that pushes a tag on `master` on purpose. Never run it unprompted.

## Worktrees
- Unlock the worktree before your turn ends: commit your work, then run `git worktree remove <path>` from the repo root.
- Removing the directory is what unlocks it. Leaving it on disk keeps the branch checked out there, so a human cannot `git checkout` that branch without deleting the directory by hand first. Exiting the worktree but keeping it is not unlocking it.
- Keep the branch and its commits. Never delete a branch, discard commits, or revert work in order to unlock.
- Staying in the same worktree across turns is fine when asked to keep coding; unlock it once that work is done.
- Never leave a worktree behind for a human to clean up.

## Comments
- Keep comments short and concise, typically 1 or 2 lines. The code is the source of truth.
- Say why, not what. A comment that restates the line below it is noise, so delete it instead.
- Go longer only for something extremely important that the code cannot convey on its own.
