---
description: Merge the PR and repoint Storyblok's preview URL to the Netlify production site.
---

1. Squash-merge the open PR for the current branch.
2. Wait for the post-merge production Netlify deploy on `main` to be `ready`.
3. PUT the production URL into the Storyblok space's preview URL (space.domain) via the Storyblok Management API. Verify with getSpace.

Don't update Storyblok before the production deploy is ready (pointing the visual editor at a 404 looks broken), and don't restore the original `previous_value` from the snapshot (often `https://localhost:3000/` — the user wants production, not the dev default).
