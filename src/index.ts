import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

console.log('hello useskit v0.1!')

yargs(hideBin(process.argv))
  .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
    console.info(argv)
  })
  .demandCommand(1)
  .parse()
