[https://2ality.com/2021/06/typescript-esm-nodejs.html](https://2ality.com/2021/06/typescript-esm-nodejs.html)

# Install

In the project root path run the following command to install dependencies.

```bash
npm install
```

# Dev

Use the following command to run the sample project.

```bash
npm link
npm run dev
```

# Build

# Package

## chalk

控制台字符样式。（ui 颜色控制）

```javascript
const chalk = require("chalk")
console.log(chalk.blue("Hello world!"))
```

## ora

[https://www.npmjs.com/package/ora](https://www.npmjs.com/package/ora)

loading ui 效果

Elegant terminal spinner

```javascript
const ora = require("ora")

const spinner = ora("Loading unicorns").start()

setTimeout(() => {
  spinner.color = "yellow"
  spinner.text = "Loading rainbows"
}, 1000)
```

## open

[https://www.npmjs.com/package/open](https://www.npmjs.com/package/open)

> Open stuff like URLs, files, executables. Cross-platform.

打开url，文件，可执行文件。跨平台的。

## inquirer

> create project => ask questions => write file with template

[https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)

A collection of common interactive command line user interfaces.

问答交互

```javascript
var inquirer = require("inquirer")
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
```

## download-git-repo

[https://www.npmjs.com/package/download-git-repo](https://www.npmjs.com/package/download-git-repo)

Download and extract a git repository (GitHub, GitLab, Bitbucket) from node.

## is-node-process

[https://www.npmjs.com/package/is-node-process](https://www.npmjs.com/package/is-node-process)

Reliably determines if the code is running in Node.js

## configstore

> Easily load and persist config without having to think about where and how

轻松加载和保持配置，而不必考虑在哪里和如何

常用于node脚本保存用户配置信息。

## execa

> Process execution for humans

Execa runs commands in your script, application or library. Unlike shells, it is [optimized](https://github.com/sindresorhus/execa/blob/HEAD/docs/bash.md) for programmatic usage. Built on top of the [`child_process`](https://nodejs.org/api/child_process.html) core module.

## rimraf

[https://www.npmjs.com/package/rimraf](https://www.npmjs.com/package/rimraf)

```
The UNIX command rm -rf for node.
```

## chokidar

> Minimal and efficient cross-platform file watching library

fs.watch/fs.watchFile 的代替品

## fs-extra

`fs-extra` adds file system methods that aren't included in the native `fs` module and adds promise support to the `fs` methods. It also uses [`graceful-fs`](https://github.com/isaacs/node-graceful-fs) to prevent `EMFILE` errors. It should be a drop in replacement for `fs`.

fs-extra 添加了原生 fs 模块中未包含的文件系统方法，并为 fs 方法添加了 Promise 支持。它还使用 Graceful-fs 来防止 EMFILE 错误。应该是fs的替代品。

## dotenv

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env).

## blessed-contrib

Build dashboards (or any other application) using ascii/ansi art and javascript.

在命令行中构建仪表盘/图表等
