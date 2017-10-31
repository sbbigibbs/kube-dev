const program = require('commander')
const colors = require('colors')
const os = require('os')
const format = require('util').format
import _ from 'lodash'
import buildCmd from './commands/build'
import startCmd from './commands/start'
import testCmd from './commands/test'
import haulCmd from './commands/haul'

program
  .version('1.0.0')
  .on('--help', function() {
    process.stdout.write([
      'Examples:',
      '',
      '  $ cli build'

    ].join(os.EOL))
  })

build(program)
start(program)
test(program)
haul(program)

// parse incoming arguments
program.parse(process.argv)
if (!process.argv.slice(2).length)
  program.help()

function build(prog) {
  let cmd = prog.command('build')
  cmd.description('Create the production build and print the deployment instructions.')
    .option('-m, --modules', 'Are we externalizing the react and react-dom libraries from the webpack bundle? If so, be sure to add the following script tags to load them. For example, https://npmcdn.com/react@15.6.1/dist/react.min.js and https://npmcdn.com/react-dom@15.6.1/dist/react-dom.min.js as values for src')
    .option('--library-target [STR]', 'What is the library target? Default is commonjs, but other values are commonjs2, amd and umd')
    .option('-o, --output <DIR>', 'Set the output build dir')
    .option('-s, --source <FILE>', 'Set the source for the build')
    .option('-e, --environment <environment>', 'Set the build environment')
    .option('--dotenv <FILE>', 'location of .env file, e.g., `.env`')
    .option('--public <DIR>', 'location of web root, e.g., `public`')
    .option('--html <FILE>', 'location of web html, e.g., `public/index.html`')
    .option('--src <DIR>', 'location of original javascript files, e.g., `src`')
    .option('--platforms <STR>', 'Platforms can be a comma separated list of platforms e.g., `android,ios,web,sketch`. Use default to output a bundle with no platform suffix extension.', list)
    .option('--public-url <URL>', 'public url, e.g., `/`')
    .option('--output-name <FILE>', 'Name of output filename, e.g., `bundle`')
    .option('--analyze', 'Generate report to realize what is really inside the bundle?')
    .action(() => {
      buildCmd(cmd.opts())
    })
    .on('--help', function () {
      process.stdout.write([
        '  Examples:',
        '',
        '    $ iherb-ui-tools build',
        '',
      ].join(os.EOL))
    })
}

function start(prog) {
  let cmd = prog.command('start')
  cmd.description('Creating development build and start webpack server')
    .option('-m, --modules', 'Are we externalizing the react and react-dom libraries from the webpack bundle? If so, be sure to add the following script tags to load them. For example, https://npmcdn.com/react@15.6.1/dist/react.min.js and https://npmcdn.com/react-dom@15.6.1/dist/react-dom.min.js as values for src')
    .option('--library-target [STR]', 'What is the library target? Default is commonjs, but other values are commonjs2, amd and umd')
    .option('-o, --output <output>', 'Set the output path')
    .option('-s, --source <source>', 'Set the source for the build')
    .option('-e, --environment <environment>', 'Set the build environment')
    .option('--dotenv <FILE>', 'location of .env file, e.g., `.env`')
    .option('--public <DIR>', 'location of web root, e.g., `public`')
    .option('--html <FILE>', 'location of web html, e.g., `public/index.html`')
    .option('--src <DIR>', 'location of original javascript files, e.g., `src`', list)
    .option('--platforms <STR>', 'Platforms can be a comma separated list of platforms e.g., `android,ios,web,sketch`. Use default to output a bundle with no platform suffix extension.', list)
    .option('--public-url <URL>', 'public url, e.g., `/`')
    .option('--output-name <FILE>', 'Name of output filename, e.g., `bundle`')
    .option('--module-resolver-alias-name <STR>', 'Name of module to alias, e.g., `@iherb/react-primitive-text-input`')
    .option('--module-resolver-alias-val <STR>', 'Value of module to alias, e.g., `./src`')
    .option('--no-start', 'Do not start the webpack server (only perform the dev builds)')
    .action(() => {
      startCmd(cmd.opts())
    })
    .on('--help', function () {
      process.stdout.write([
        '  Examples:',
        '',
        '    $ iherb-ui-tools start',
        '',
      ].join(os.EOL))
    })
}

function haul(prog) {
  let cmd = prog.command('haul')
  cmd.description('Creating development build and start webpack server')
    .option('-m, --modules', 'Are we externalizing the react and react-dom libraries from the webpack bundle? If so, be sure to add the following script tags to load them. For example, https://npmcdn.com/react@15.6.1/dist/react.min.js and https://npmcdn.com/react-dom@15.6.1/dist/react-dom.min.js as values for src')
    .option('--library-target [STR]', 'What is the library target? Default is commonjs, but other values are commonjs2, amd and umd')
    .option('-o, --output <output>', 'Set the output path')
    .option('-s, --source <source>', 'Set the source for the build')
    .option('-e, --environment <environment>', 'Set the build environment')
    .option('--dotenv <FILE>', 'location of .env file, e.g., `.env`')
    .option('--src <DIR>', 'location of original javascript files, e.g., `src`', list)
    .option('--platform <STR>', 'Platform e.g., `android`, `ios`, `web`, `sketch`. Use default to output a bundle with no platform suffix extension.')
    .option('--output-name <FILE>', 'Name of output filename, e.g., `bundle`')
    .action(() => {
      haulCmd(cmd.opts())
    })
    .on('--help', function () {
      process.stdout.write([
        '  Examples:',
        '',
        '    $ iherb-ui-tools haul',
        '',
      ].join(os.EOL))
    })
}

function test(prog) {
  let cmd = prog.command('test')
  cmd.description('Test a bundle')
    .action(() => {
      testCmd(cmd.opts())
    })
    .on('--help', function () {
      process.stdout.write([
        '  Examples:',
        '',
        '    $ iherb-ui-tools test',
        '',
      ].join(os.EOL))
    })
}

function list(val) {
  return _.map(val.split(','), (arg) => {
    return _.trim(arg)
  })
}
