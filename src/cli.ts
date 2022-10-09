import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import Timer from './utils/timer'
import coloredString from './utils/coloredString'

console.log('hello useskit v0.1.1!')
const timer = new Timer()
const showReadyMessage = () => console.log(`
${coloredString(`Ready in ${timer.endTimer()}ms.`)}`)
timer.startTimer()

yargs(hideBin(process.argv))
  .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
    console.info(argv)
    showReadyMessage()
  })
  .demandCommand(1)
  .parse()
