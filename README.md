# Riverr GraphQL API Documentation

This directory contains the Docusaurus project for the Riverr GraphQL API documentation.

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

## Generating Documentation

The documentation is automatically generated from the GraphQL schema.

### 1. Update Schema

If the API schema has changed, first run the schema generation script from the **root** of the main repository:

```bash
# From root of riverr-graphql-openapi
npm run generate-docs-schema
```

This updates `documentation/schema.graphql`.

### 2. Build Site

Build the documentation site:

```bash
npm run build
```

This command will:

1.  Run `docusaurus graphql-to-doc` to generate markdown files in `docs/reference`.
2.  Run `docusaurus build` to build the static site.

## Development

Start the development server:

```bash
npm start
```

This serves the site at `http://localhost:3000`.

## Deployment to GitHub Pages

The site is configured for GitHub Pages deployment.

1.  Update `docusaurus.config.ts` if needed:
    - `organizationName`: Your GitHub organization or username.
    - `projectName`: The repository name.
    - `url`: The URL of your GitHub Pages site (e.g., `https://username.github.io`).
    - `baseUrl`: The base URL (e.g., `/riverr-graphql-openapi/`).

2.  Deploy:
    ```bash
    GIT_USER=<YourGitHubUsername> npm run deploy
    ```
