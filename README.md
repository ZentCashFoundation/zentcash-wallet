# Zent Cash Wallet

![Download Count](https://img.shields.io/github/downloads/ZentCashFoundation/zentcash-wallet/total.svg)
![Open Issue Count](https://img.shields.io/github/issues/ZentCashFoundation/zentcash-wallet)
![License](https://img.shields.io/github/license/ZentCashFoundation/zentcash-wallet)
![Version](https://img.shields.io/github/v/release/ZentCashFoundation/zentcash-wallet)

### Master Build Status

![Master Build Status](https://github.com/ZentCashFoundation/zentcash-wallet/workflows/Build%20Zent%20Cash%20Wallet/badge.svg?branch=main)

### Development Build Status

![Development Build Status](https://github.com/ZentCashFoundation/zentcash-wallet/workflows/Build%20Zent%20Cash%20Wallet/badge.svg?branch=dev)

<img src="https://raw.githubusercontent.com/ZentCashFoundation/zentcash-wallet/dev/screenshots/screenshot.png">
<p>
  Zent Cash Wallet is a Zent Cash wallet that uses <a href="http://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, and <a href="https://github.com/ZentCashFoundation/zentcash-wallet-backend-js">ZentCash-Wallet-Backend-JS</a>.
</p>

## Installing

**Check out the full tutorial on how to install and use this wallet at the [official Zent Cash docs page](https://docs.zent.cash/guides/wallets/using-zentcash-wallet)!**

## Development Setup (All Platforms)

### Dependencies

#### You will need the following dependencies installed before you can proceed to the "Setup" step:

-   Node.JS (latest LTS 14.x) https://nodejs.org/

-   Yarn https://yarnpkg.com/en/

-   Git https://git-scm.com/downloads

Tip: If you already have a different version of node.js installed besides 14.x, try using [Node Version Manager](https://github.com/nvm-sh/nvm#install--update-script).

#### Setup

First, clone the repo via git:

```bash
git clone https://github.com/ZentCashFoundation/zentcash-wallet.git
```

And then install the dependencies with yarn.

```bash
$ cd zentcash-wallet
$ yarn
```

Run the wallet.

```bash
$ yarn start
```

### Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

### Packaging

To package apps for the local platform:

```bash
$ yarn package
```
