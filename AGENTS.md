# Project instructions

## Git workflow

- These instructions apply to this project and its subdirectories.
- The user has authorized committing and pushing completed work without asking for confirmation again.
- After completing each coding task, run the relevant checks, commit all changes belonging to that task on `main`, and immediately push `main` to the GitHub remote `origin`.
- This also applies to changes to project instructions and configuration.
- If working on another branch or in a worktree, safely integrate the completed task into `main` before pushing.
- Preserve unrelated user changes. Do not include secrets, credentials, or unrelated files in commits.
- Never force-push, discard user changes, or overwrite remote history to satisfy this workflow.
- If checks fail or a conflict, authentication error, branch protection, or other blocker prevents safe completion, report the blocker instead of claiming success.
- In the final response, state whether the commit and push succeeded.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
