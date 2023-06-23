[![Build Status](https://github.com/semantic-release/git/workflows/Test/badge.svg)](https://github.com/xoor-inc/mock-test-repo/actions?query=workflow:Production+branch:master)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Mock-repo

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Highlights

- Fully automated release
- Enforce [Semantic Versioning](https://semver.org) specification
- Automated changelog generation
- Enforced commit convention both with commit-lint or with commitizen cli
- Automated preview deploy on vercel
- Tests with jest and react-testing-library
- Component preview with storybook
- Integration with chromatic for UI testing
- Eslint and Prettier
- HTML streaming with react server components
- Styling with Tailwind and components variants with cva (class-variant-authority)
- Fully accesible components made with Radix
- Forms with react-hook-form and static type checking with zod
- Atomic design architecture

## Environment files

The project uses the services of Contentful and Hubspot, you can check the following resource:

- [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables) - keep the .env.example with the latest structure, please.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[Commitlint Documentation](https://commitlint.js.org/#/concepts-commit-conventions)

## Atomic design:

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are:

1. Atoms are UI elements that can’t be broken down any further and serve as the elemental building blocks of an interface.
2. Molecules are collections of atoms that form relatively simple UI components.
3. Organisms are relatively complex components that form discrete sections of an interface.
4. Templates place components within a layout and demonstrate the design’s underlying content structure.
5. Pages apply real content to templates and articulate variations to demonstrate the final UI and test the resilience of the design system.

<img src='https://atomicdesign.bradfrost.com/images/content/instagram-atomic.png'>

[Atomic design Documentation](https://atomicdesign.bradfrost.com/chapter-2/)

## semantic-release

<hr/>

automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.

This removes the immediate connection between human emotions and version numbers, strictly following the [Semantic Versioning](http://semver.org) specification and communicating the **impact** of changes to consumers.

> Trust us, this will change your workflow for the better. – [egghead.io](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-automating-releases-with-semantic-release)

### Commit message format

**semantic-release** uses the commit messages to determine the consumer impact of changes in the codebase.
Following formalized conventions for commit messages, **semantic-release** automatically determines the next [semantic version](https://semver.org) number, generates a changelog and publishes the release.

By default, **semantic-release** uses [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).
The commit message format can be changed with the [`preset` or `config` options](docs/usage/configuration.md#options) of the [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer#options) and [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator#options) plugins.

Tools such as [commitizen](https://github.com/commitizen/cz-cli) or [commitlint](https://github.com/conventional-changelog/commitlint) can be used to help contributors and enforce valid commit messages.

The table below shows which commit message gets you which release type when `semantic-release` runs (using the default configuration):

| Commit message                                                                                                                                                                                   | Release type                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release                                                                                           |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release                                                                                       |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer of the commit) |

### Automation with CI

**semantic-release** is meant to be executed on the CI environment after every successful build on the release branch.
This way no human is directly involved in the release process and the releases are guaranteed to be [unromantic and unsentimental](http://sentimentalversioning.org).

## What is commitlint

commitlint checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```
chore: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```

Common types according to [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

```bash

root
├── public
├── docs
├── src
│   ├── app
│   │   ├── [lang]
│   │   │   ├── page.ts
│   │   │   ├── about-us
│   │   │   │   └── page.ts
│   │   │   └── ...
│   │   ├── layout.ts -> page layout, must be outside [lang] to avoid unnecessary re rendering
│   │   ├── error.ts
│   │   ├── loading.ts
│   │   └── globals.css
│   ├── components
│   │   ├── atoms
│   │   │   ├── component
│   │   │   │   ├── Component.tsx
│   │   │   │   ├── Component.spect.tsx -> tests made with jest
│   │   │   │   ├── Component.stories.tsx -> stories made with storybook
│   │   │   │   ├── styles.ts -> Varians made with cva and tailwind
│   │   │   │   ├── mockedProps.ts -> Default props for storybook and jest (if needed)
│   │   │   │   └── index.ts
│   │   │   └── index.ts  -> Barrel file to help with path aliasing
│   │   ├── molecules
│   │   │   └── ...
│   │   ├── organisms
│   │   │   └── ...
│   │   ├── templates
│   │   │   └── ...
│   │   └── pages
│   │       └── ...
│   ├── i18n
│   └── middleware.ts
├── .lintstagedrc.cjs -> required, not touch unless absolutely necessary
├── .releaserc
├── commitlint.config.cjs
├── jest.config.mjs
├── next.config.js
├── postcss.config.js
├── README.md
└── tailwind.config.js

```
