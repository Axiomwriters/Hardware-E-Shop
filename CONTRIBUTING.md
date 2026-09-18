# Contributing to Nakuru Hardware Commerce Platform

## Branching Model

The repository uses a trunk-based-ish feature branch model:

```
main                          ← protected, stable, default branch
  ↓
feature/* | fix/* | chore/*   ← all work happens on short-lived branches
  ↓
Pull Request ⟶ CI ⟶ Review ⟶ Merge (squash)
  ↓
delete the feature branch
```

- `main` is **protected**: direct pushes are rejected, force-pushes and
  deletions are blocked, and every merge requires at least one approving review
  plus a green CI run.
- All work — features, bug fixes, chores, docs — is done on short-lived
  branches cut from the latest `main`.

## Branch Naming

| Prefix     | Purpose                                            |
| ---------- | -------------------------------------------------- |
| `feature/*` | New user-facing functionality (e.g. `feature/cart`) |
| `fix/*`    | Bug fixes                                          |
| `chore/*`  | Tooling, CI, dependencies, repository hygiene       |
| `docs/*`   | Documentation only                                 |
| `refactor/*` | Code restructuring without behavior change        |

Keep names lowercase, kebab-case, and descriptive.

## Workflow

1. Pull the latest `main`:
   `git switch main && git pull --ff-only`
2. Cut your branch:
   `git switch -c feature/your-feature`
3. Make focused commits. Follow the Conventional Commits style:
   - `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`
   - e.g. `feat(cart): add line-item quantity stepper`
4. Push and open a pull request against `main`:
   `git push -u origin feature/your-feature`
5. Fill in the PR description: what changed, why, and how it was verified.
6. Address review feedback. Keep the branch up to date with `main`
   (`git merge main` or rebase as instructed).
7. Your PR is merged with **squash merge**.
8. Delete the merged branch locally and on the remote.

## Code Quality Gates

Every pull request runs the CI pipeline (`.github/workflows/ci.yml`):

- `npm run lint` — ESLint
- `npm run typecheck` — `tsc --noEmit`
- `npm run build` — production build

The build must pass and the required CI check must be green before merge.

> Run the same checks locally before pushing. Node.js >= 20.9 and npm >= 10.

## Merge Strategy

`main` accepts **squash merges only** to keep history linear and readable.
The PR title becomes the squash-merge commit message and must follow
Conventional Commits.

## Repository Governance

- Only `main` and foundational `chore/*` bootstrap branches persist. Feature
  branches live for the lifetime of the PR only.
- Last-resort rollbacks on `main` use `git revert` — never force-push or
  rewrite shared history.
- Design decisions are recorded under `docs/decision-records/` as ADRs.