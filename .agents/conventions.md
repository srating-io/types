# @srating-io/types — conventions

## Naming
| Thing | Rule | Example |
| --- | --- | --- |
| a row | singular PascalCase interface | `interface Team` |
| a keyed map of rows | plural, `{[<table>_id: string]: Row}` | `type Teams` |
| endpoint input | `<functionName>Arguments` | `getGamesArguments` |
| endpoint output | `<functionName>Results` | `getGamesResults` |
| a namespace | PascalCase of the snake_case filename | `player_boxscore.ts` → `PlayerBoxscore` |

The function name must match the server method exactly — that is the only link between the two
sides. Irregular plurals already in the tree (`Oddsz`, `FantasyEntrys`) stay as they are.

## Adding a row type
Pick the module by domain: sport-agnostic → `general.ts`; a sport-specific table → the sport file,
extending the general base of the same name; otherwise `auth` / `fantasy` / `payments`.
Always add the singular interface **and** its keyed map together.

## Adding an endpoint type
Put it in `src/api/<class>.ts` (creating the file makes a new namespace), then use it on **both**
sides — the server method signature and the client call site. Nothing else checks the contract.

## Optional vs nullable
Model what the API actually returns, not what the schema declares. Columns the API hides are
absent; columns it nulls for unsubscribed callers are `| null`. When unsure, check the API class's
hidden / nullable / scramble column lists.

## Does it belong here?
No runtime values of any kind — an exported `const` or `enum` would break the declarations-only
build. Ids and seasons go in `@srating-io/common`. React prop types stay next to the component.
Types only one app uses stay in that app.
