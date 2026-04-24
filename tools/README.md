# Tools

Run commands from this directory.

## Install

```bash
npm install
pnpm install
bun install
```

## Commands

```bash
npm run typecheck
npm run validate-spec -- --all
npm run build-graph -- --no-infer
npm run viz-component -- <component-id>
npm run lint-repo
```

Core deterministic graph and validation logic does not require `.env` secrets.

## Community Detection

The implementation attempts to load a local `jlouvain`-compatible package when present, then falls back to the built-in connected-component grouping. The fallback keeps graph generation deterministic even when no Louvain package is installed.
