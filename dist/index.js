"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const commander_1 = require("commander")
const program = new commander_1.Command()
program
  .version("1.0.0")
  .description("Buzz CLI")
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
    console.log(`Hey, ${options.name}!`)
  })
program.parse(process.argv)
//# sourceMappingURL=index.js.map
