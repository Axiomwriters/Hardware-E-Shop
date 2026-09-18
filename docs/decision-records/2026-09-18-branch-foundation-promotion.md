# ADR 001 — Promote Foundation to a Protected `main`

- **Status:** Accepted
- **Date:** 2026-09-18

## Context

The repository was created with `chore/repository-foundation` as its default
branch (a workaround at repository bootstrap). This drifted from the intended
architecture documented in the README:

```
main                          ← protected, stable
  ↓
feature/*                     ← work happens here, merged via PR
```

The foundation phase (scaffold + polish) had been merged into
`chore/repository-foundation` via PR #1, so that branch represented the single
authoritative, stable state of the project. Before Phase 1 work
(`feature/database-foundation`, `feature/api-foundation`, etc.) could begin, the
repository branching model had to match the documented one.

## Decision

- Promote `chore/repository-foundation` to a new `main` branch at the same
  commit (`437fac3`). The promotion is a pure ref alias — no history is
  rewritten.
- Make `main` the GitHub default branch.
- Protect `main`: require a pull request with at least one approving review,
  dismiss stale reviews, require conversation resolution, block force-pushes,
  block deletions, and enforce for administrators.
- Add a CI pipeline (`lint` + `typecheck` + `build`) gated on pull requests
  targeting `main`, and require it as a status check.
- Retain `chore/repository-foundation` as a read-only historical branch; it
  remains fully merged — `main` and `chore/repository-foundation` point at the
  identical commit.
- Archive the original operational note (`Fixes`) as this decision record.

## Consequences

- Direct pushes to `main` are rejected; all changes land via pull request and
  must pass CI before merge.
- Feature branches are cut from `main`, matching the README workflow.
- `chore/repository-foundation` is kept for continuity; it will not receive new
  commits.
- The repository now has a clean, enforceable branching model before Phase 1
  feature work begins.