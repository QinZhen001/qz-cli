import { Command } from "commander"
import { runCommand as runCommandDemo } from "./demo"
import { runCommand as runCommandToken } from "./token"

const program = new Command()

program
  .name("rte-cli")
  .version("1.0.0")
  .description("RTE CLI is a command line tool to buzz your strings!")

program
  .command("demo")
  .description("Run demo xxxxxxxxxxxxxxxxxxx")
  // .argument("<string>", "string to split")
  // .option("--first", "display just the first substring")
  // .option("-s, --separator <char>", "separator character", ",")
  .action(() => {
    runCommandDemo()
  })

program
  .command("token")
  .description("Run token xxxxxxxxxxxxxxxxxxx")
  // .argument("<string>", "string to split")
  // .option("--first", "display just the first substring")
  // .option("-s, --separator <char>", "separator character", ",")
  .action((...args) => {
    runCommandToken(args)
  })

program.parse(process.argv)
