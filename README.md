# NewRelic Auto-Refresh Buster Chrome Plugin

## Intro

Using New Relic? Getting charged for auto-refreshing dashboards in the
background? No More!

Enter... this silly plugin that is incredibly naive (PRs welcome).

## What it do tho?

On page load for newrelic dashboards, this script will run once per second
looking for a non-static configured time range. If detected, it will
auto-update the range to a static value so that the dashboard doesn't continue
to refresh.

Yes, it uses query selectors and this can break at any time in the future. No,
it is not tested. This is basically demoware. You have been warned.

## Installing

Not available in the Chrome Web Store (yet).

I'm not sure if something like this would get approved to go on the Chrome
web store... that takes weeks for approval and I'm pretty lazy. Would
they even approve something so trivial? Doubtful.

Anyway, you can install it manually in the meantime.

Clone this repository and see this [guide](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)
for instructions to install a local unpacked extension. I promise, it's not
difficult.

## In Action

Automatically transform the dynamic (auto-refreshing) ranges to static ranges
to disable refreshing 💰💰💰

https://github.com/Druotic/newrelic-autorefresh-buster/assets/1551522/9e7d8a48-bb2d-432b-b1f7-80cd72e966be
