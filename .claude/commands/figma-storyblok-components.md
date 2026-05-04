---
description: Generate component JSON, snapshot the space, push via CLI.
---

Generate the proposed components as JSON under storyblok/components/. Walk the dependency graph: atoms first, then sections that reference them, then content types. Naming: lowercase_underscore.

Before pushing, snapshot the current space components by pulling them. Then push the new components via the CLI.
