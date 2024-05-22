import * as ora from "ora"
import * as inquirer from "inquirer"
import * as download from "download-git-repo"
import * as path from "path"
import * as chalk from "chalk"
import * as fs from "fs-extra"

export const runCommand = async () => {
  // const spinner = ora("Loading unicorns")

  console.log(chalk.green("Hello, Agora!"))

  // spinner.start()

  // setTimeout(() => {
  //   spinner.color = "yellow"
  //   spinner.text = "Loading rainbows"
  // }, 1000)

  // setTimeout(() => {
  //   spinner.stop()
  // }, 2000)

  runWebProject()

  // const answers = await inquirer.prompt([
  //   {
  //     type: "list",
  //     name: "project",
  //     message: "Please select the project",
  //     choices: ["web", "android", "ios", "macOS", "windows", "electron", "flutter", "react-native"],
  //   },
  // ])
  // const { project } = answers
  // switch (project) {
  //   case "web":
  //     console.log("You selected web")
  //     runWebProject()
  //     break
  //   case "android":
  //     console.log("You selected android")
  //     break
  // }
}

const runWebProject = () => {
  // const sourceUrl = "github:NervJS/taro-project-templates#v3.6-rs"
  const sourceUrl = "github:AgoraIO/API-Examples-Web#new"
  const name = "API-Examples-Web"
  const cwd = process.cwd()
  const targetPath = path.join(cwd, name)
  if (fs.pathExistsSync(targetPath)) {
    fs.removeSync(targetPath)
  }

  const spinner = ora(`downloading project from ${sourceUrl}`).start()

  download(sourceUrl, targetPath, { clone: false }, async (error) => {
    if (error) {
      console.log(error)
      spinner.color = "red"
      spinner.fail(chalk.red("download failed"))
      if (fs.pathExistsSync(targetPath)) {
        fs.removeSync(targetPath)
      }
    }
    spinner.color = "green"
    spinner.succeed(`${chalk.green("download success")}`)
  })
}
