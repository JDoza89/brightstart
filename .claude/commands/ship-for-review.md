---
description: Push branch, pause for Netlify, open PR, swap Storyblok preview URL.
---

Ship for review:

1. Commit and push a branch named figma-to-storyblok/<short-slug> to a new GitHub repo.
2. STOP and ask me to install the Netlify GitHub App on the repo. Wait for me to confirm "connected" before continuing.
3. Create a Netlify project for the repo and set required env vars (STORYBLOK_DELIVERY_API_TOKEN, STORYBLOK_REGION).
4. Open a PR via the GitHub MCP. Description should summarize the schemas, stories, and Figma source.
5. Wait for the Netlify Deploy Preview — poll deploy status until the preview URL is ready.
6. Update the Storyblok space's preview URL (space.domain) to the deploy-preview URL via the Storyblok Management API. Save the previous value so we can revert on merge.
