# Changesets

This folder contains changeset files that describe changes to the packages in this monorepo.

## How to use changesets

When you make changes to packages, create a changeset to describe them:

```bash
npm run changeset
```

This will prompt you to:
1. Select which packages have changes
2. Choose the semver bump type (major, minor, or patch)
3. Write a summary of the changes

The changeset will be committed along with your code changes.

## Version Bumping

All packages in the `@temp-monorepo-publish-testing` namespace are **linked** and **fixed** together, meaning:
- When you bump ANY package, ALL packages will receive the same version bump
- All packages will always have the same version number
- This ensures consistency across the entire monorepo

To version all packages based on changesets:

```bash
npm run version-packages
```

## Publishing

To publish all packages to npm:

```bash
npm run release
```

This will:
1. Build all packages
2. Publish them to npm
3. Create git tags
4. Push to GitHub

## Automated Releases

The GitHub Actions workflow automatically:
- Creates a release PR when changesets are pushed to main
- Publishes packages when the release PR is merged
- Creates GitHub releases with release notes
