import * as ora from "ora"
import * as inquirer from "inquirer"
import * as path from "path"
import * as chalk from "chalk"
import { spawn } from "child_process"
import * as fs from "fs-extra"
import { execCommand, download, Spinner, sleep } from "../internal/util"
import * as open from "open"
import { PROJECT_LIST, PROJECT_SOURCE } from "./constant"

export const runCommand = async () => {
  const answers = await ask()
  const { project } = answers
  await runProject(project)
}

const ask = async () => {
  return await inquirer.prompt([
    {
      type: "list",
      name: "project",
      message: "Please select the project",
      choices: PROJECT_LIST,
    },
  ])
}

const runProject = async (project: string) => {
  switch (project) {
    case "web":
      await runWebProject()
      break
    case "android":
      console.log("You selected android")
      break
  }
}

const runWebProject = async () => {
  // download
  const dirName = "API-Examples-Web"
  const cwd = process.cwd()
  const targetPath = path.join(cwd, dirName)
  const downloadSpinner = new Spinner(`downloading project from ${PROJECT_SOURCE.web}`)
  downloadSpinner.start()
  if (fs.pathExistsSync(targetPath)) {
    fs.removeSync(targetPath)
  }
  try {
    await download({
      sourceUrl: PROJECT_SOURCE.web,
      targetPath,
    })
    downloadSpinner.succeed("download success")
  } catch (err) {
    downloadSpinner.fail("download failed")
  }
  // install dependencies
  const installSpinner = new Spinner("intalling...")
  installSpinner.start()
  try {
    await execCommand({
      command: "npm install",
      cwd: targetPath,
    })
    installSpinner.succeed("install success")
  } catch (err) {
    installSpinner.fail("install failed")
  }
  // run dev
  const devSpinner = new Spinner("running...")
  devSpinner.start()
  try {
    spawn("npm run dev", {
      shell: true,
      cwd: targetPath,
    })
    await sleep(1000)
    devSpinner.succeed("run project success")
  } catch (err) {
    devSpinner.fail("run project failed")
  }
  // open url in browser
  const openSpinner = new Spinner("opening...")
  openSpinner.start()
  const url = "http://localhost:3001/index.html"
  try {
    await open(url)
    openSpinner.succeed(`open success: ${url}`)
  } catch (err) {
    openSpinner.fail("open failed")
  }
}
