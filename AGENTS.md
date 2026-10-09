# Project instructions

## Git workflow

- These instructions apply to this project and its subdirectories.
- Keep completed work local and run the relevant checks. Do not automatically commit or push after each task or change.
- Only publish or push to a remote repository when the user explicitly requests it. The previous standing authorization for automatic pushes has been revoked.
- This also applies to changes to project instructions and configuration.
- When the user explicitly requests publication, safely integrate the requested work into `main` before pushing to the GitHub remote `origin`.
- Preserve unrelated user changes. Do not include secrets, credentials, or unrelated files in commits.
- Never force-push, discard user changes, or overwrite remote history to satisfy this workflow.
- If checks fail or a conflict, authentication error, branch protection, or other blocker prevents safe completion, report the blocker instead of claiming success.
- In the final response, state that changes remain local, or report the commit and push result if publication was explicitly requested.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
