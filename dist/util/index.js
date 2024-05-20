"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.getPkgNameByFilterVersion =
  exports.execCommand =
  exports.clearConsole =
  exports.getTemplateSourceType =
  exports.printPkgVersion =
  exports.getPkgItemByKey =
  exports.getPkgVersion =
  exports.getRootPath =
    void 0
const child_process_1 = require("child_process")
const path = require("path")
function getRootPath() {
  return path.resolve(__dirname, "../../")
}
exports.getRootPath = getRootPath
function getPkgVersion() {
  return require(path.join(getRootPath(), "package.json")).version
}
exports.getPkgVersion = getPkgVersion
function getPkgItemByKey(key) {
  const packageMap = require(path.join(getRootPath(), "package.json"))
  if (Object.keys(packageMap).indexOf(key) === -1) {
    return {}
  } else {
    return packageMap[key]
  }
}
exports.getPkgItemByKey = getPkgItemByKey
function printPkgVersion() {
  const taroVersion = getPkgVersion()
  console.log(`👽 Buzz v${taroVersion}`)
  console.log()
}
exports.printPkgVersion = printPkgVersion
function getTemplateSourceType(url) {
  if (/^github:/.test(url) || /^gitlab:/.test(url) || /^direct:/.test(url)) {
    return "git"
  } else {
    return "url"
  }
}
exports.getTemplateSourceType = getTemplateSourceType
// interface FileStat {
//   name: string
//   isDirectory: boolean
//   isFile: boolean
// }
// export function readDirWithFileTypes (folder: string): FileStat[] {
//   const list = fs.readdirSync(folder)
//   const res = list.map(name => {
//     const stat = fs.statSync(path.join(folder, name))
//     return {
//       name,
//       isDirectory: stat.isDirectory(),
//       isFile: stat.isFile()
//     }
//   })
//   return res
// }
function clearConsole() {
  const readline = require("readline")
  if (process.stdout.isTTY) {
    const blank = "\n".repeat(process.stdout.rows)
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
  }
}
exports.clearConsole = clearConsole
function execCommand(params) {
  const { command, successCallback, failCallback } = params
  const child = child_process_1.exec(command)
  child.stdout.on("data", function (data) {
    successCallback === null || successCallback === void 0 ? void 0 : successCallback(data)
  })
  child.stderr.on("data", function (data) {
    failCallback === null || failCallback === void 0 ? void 0 : failCallback(data)
  })
}
exports.execCommand = execCommand
function getPkgNameByFilterVersion(pkgString) {
  const versionFlagIndex = pkgString.lastIndexOf("@")
  return versionFlagIndex === 0 ? pkgString : pkgString.slice(0, versionFlagIndex)
}
exports.getPkgNameByFilterVersion = getPkgNameByFilterVersion
//# sourceMappingURL=index.js.map
