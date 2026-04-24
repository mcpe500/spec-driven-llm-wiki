# Getting Started

## Install

Place `spec-driven-llm-wiki/` inside a project.

```bash
cd spec-driven-llm-wiki/tools
npm install
```

Use `pnpm install` or `bun install` if preferred.

## First Checks

```bash
npm run validate-spec -- --all
npm run build-graph -- --no-infer
```

## First Agent Task

```text
@AGENTS.md tasknya adalah: [your task]
```

The agent should research the parent project, create a numbered spec, update wiki memory, and rebuild the graph when useful.
