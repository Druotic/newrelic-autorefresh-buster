# NewRelic Auto-Refresh Buster

## Intro

Using New Relic? Getting charged for auto-refreshing dashboards in the
background?

Enter... this silly tool that is incredibly simple (PRs welcome!).

On page load for newrelic dashboards, this script will run once per second
looking for a non-static configured time range. If detected, it will
auto-update the range to a static value so that the dashboard doesn't continue
to refresh.

Yes, it uses query selectors and this can break at any time in the future. You
have been warned.

## In Action

Automatically transform the dynamic (auto-refreshing) ranges to static ranges
to disable refreshing 💰💰💰

![See it in action!](./docs/recording.mp4)
