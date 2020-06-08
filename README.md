# egg-dingtalk-bot

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-dingtalk-bot.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-dingtalk-bot
[travis-image]: https://img.shields.io/travis/eggjs/egg-dingtalk-bot.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-dingtalk-bot
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-dingtalk-bot.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-dingtalk-bot?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-dingtalk-bot.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-dingtalk-bot
[snyk-image]: https://snyk.io/test/npm/egg-dingtalk-bot/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-dingtalk-bot
[download-image]: https://img.shields.io/npm/dm/egg-dingtalk-bot.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-dingtalk-bot

<!--
Description here.
-->

## Install

```bash
$ npm i egg-dingtalk-bot --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.dingtalkBot = {
  enable: true,
  package: 'egg-dingtalk-bot',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.dingtalkBot = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
