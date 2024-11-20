# ACM ICPC & W Break the Binary Website

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
[![GitHub Pages Status](https://github.com/break-the-binary/website25/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/break-the-binary/website25/actions/workflows/pages/pages-build-deployment)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)

Official Website for ACM ICPC & W Break the Binary.

Built using React. Uses [Chakra-UI](https://chakra-ui.com/) for components. Uses
GitHub pages for deployment; see
[`spa-github-pages`](https://github.com/rafgraph/spa-github-pages/tree/gh-pages)
for an example for hosting single pages apps on GitHub pages.

## Setup

Install [`git`](https://git-scm.com/downloads) and
[Node.js](https://nodejs.org/en).

Clone the repository:

```sh
git clone https://github.com/break-the-binary/website25
cd website25
```

We recommend using [`nvm`](https://github.com/nvm-sh/nvm) to manage Node.js
versions. An `.nvmrc` has already been provided (version `22.9.0`). Then,
install dependencies.

```sh
nvm use
npm ci
```

To start the development server, run the following in the `website25` directory:

```sh
npm start
```

This will start the development server on `http://localhost:3000/website25`.

## Deployment

GitHub actions automatically triggers a deploy on push to main.

## Contributing

Follow the [Code of conduct](/CODE_OF_CONDUCT.md).

Create branches and submit a pull requests. Please use
[`prettier`](https://prettier.io/) for code formatting. Respect
[`.editorconfig`](https://editorconfig.org/) rules.

If you are using Visual Studio Code, install the recommended extensions, and use
the provided workspace settings.
