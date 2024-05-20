import { Command } from "commander"
import { run } from "./run"

const program = new Command()

program
  .name("buzz-cli")
  .version("1.0.0")
  .description("Buzz CLI is a command line tool to buzz your strings!")

program
  .command("run")
  .description("Run description xxxxxxxxxxxxxxxxxxx")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    run(str, options)
  })

// program.command('create')
// ...

program.parse(process.argv)
