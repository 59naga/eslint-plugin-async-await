Eslint Plugin Async/Await
---

<p align="right">
  <a href="https://npmjs.org/package/eslint-plugin-async-await">
    <img src="https://img.shields.io/npm/v/eslint-plugin-async-await.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/eslint-plugin-async-await">
    <img src="http://img.shields.io/travis/59naga/eslint-plugin-async-await.svg?style=flat-square">
  </a>
  <a href="https://ci.appveyor.com/project/59naga/eslint-plugin-async-await">
    <img src="https://img.shields.io/appveyor/ci/59naga/eslint-plugin-async-await.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/eslint-plugin-async-await/coverage">
    <img src="https://img.shields.io/codeclimate/github/59naga/eslint-plugin-async-await.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/eslint-plugin-async-await">
    <img src="https://img.shields.io/codeclimate/coverage/github/59naga/eslint-plugin-async-await.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/eslint-plugin-async-await">
    <img src="https://img.shields.io/gemnasium/59naga/eslint-plugin-async-await.svg?style=flat-square">
  </a>
</p>

Installation
---
```bash
npm install eslint-plugin-async-await --save
```

## Usage

### Via `.eslintrc` (Recommended)

**.eslintrc**

```json
{
  "plugins": ["async-await"],
  "rules": {
    "async-await/space-after-async": 2,
    "async-await/space-after-await": 2
  }
}
```

Rules
---
* `async-await/space-after-async`: disallow `async()=>{}`, fixing to `async ()=>{}`.
* `async-await/space-after-await`: disallow `await(foo)`, fixing to `await (foo)`.

> The `--fix` option on the [command line](http://eslint.org/docs/user-guide/command-line-interface#fix) automatically fixes problems reported by this rule.

Development
---
Requirement global
* NodeJS v5.10.0
* Npm v3.8.3

```bash
git clone https://github.com/59naga/eslint-plugin-async-await
cd eslint-plugin-async-await
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
