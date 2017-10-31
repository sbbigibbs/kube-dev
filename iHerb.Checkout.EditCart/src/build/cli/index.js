#!/usr/bin/env node
const program = require('commander');
const compiler = require('./src/compiler.js');

program
  .version('0.1.0')
  .arguments('<source>')
  .option('-m, --modules', 'is a module')
  .option('-o, --output <output>', 'set the output path')
  .option('-e, --environment <environment>', 'set the build environment')
  .option('-w, --watch', 'watch directory for changes')
  .option('--dev', 'run webpack dev server')
  .action((source, options) => {
    compiler.build(source, options.output, options.modules, options.dev, options.watch);
  })
  .parse(process.argv);