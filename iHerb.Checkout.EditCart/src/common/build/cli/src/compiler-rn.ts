import * as webpack from 'webpack';
import * as path from 'path'
import saveAssets from './assets'
import runServer from './server/server'

const Server = require('metro-bundler/src/Server');
const Terminal = require('metro-bundler/src/lib/Terminal');
const TerminalReporter = require('metro-bundler/src/lib/TerminalReporter');
const TransformCaching = require('metro-bundler/src/lib/TransformCaching');
const outputBundle = require('metro-bundler/src/shared/output/bundle');
const defaultAssetExts = require('metro-bundler/src/defaults').assetExts;
const defaultSourceExts = require('metro-bundler/src/defaults').sourceExts;
const defaultPlatforms = require('metro-bundler/src/defaults').platforms;
const defaultProvidesModuleNodeModules = require('metro-bundler/src/defaults').providesModuleNodeModules;
const config = require('metro-bundler/src/Config.js').DEFAULT;

function saveBundle(output, bundle, args) {
    return Promise.resolve(
        output.save(bundle, args, console.log)
    ).then(() => bundle);
}



function build(src, output, dev, watch) {
    var packagerInstance;
    var options
    var entryFile = path.resolve(process.cwd(), src);
    var outputPath = path.resolve(process.cwd(), output);
    var platform = 'android';

    const requestOpts = {
      entryFile: entryFile,
      sourceMapUrl: outputPath,
      dev: true,
      minify: true,
      platform: platform
    };
  
    // If a packager instance was not provided, then just create one for this
    // bundle command and close it down afterwards.
    var shouldClosePackager = false;
    if (!packagerInstance) {
      const assetExts = [];//(config.getAssetExts && config.getAssetExts()) || [];
      const sourceExts = [];//(config.getSourceExts && config.getSourceExts()) || [];
      const platforms = [];//(config.getPlatforms && config.getPlatforms()) || [];
  
      const transformModulePath = require.resolve('metro-bundler/src/transformer.js');
  
      const providesModuleNodeModules = defaultProvidesModuleNodeModules;
        const root = process.cwd();
      const terminal = new Terminal(process.stdout);
    
        options = {
            assetExts: defaultAssetExts.concat(assetExts),
            blacklistRE: config.getBlacklistRE(),
            projectRoots: [root],//config.getProjectRoots(),
            providesModuleNodeModules: providesModuleNodeModules,
            resetCache: true,//args.resetCache,
            reporter: new TerminalReporter(terminal),
            hot: true,
            sourceExts: defaultSourceExts.concat(sourceExts),//defaultSourceExts.concat(sourceExts),
            //transformCache: TransformCaching.useTempDir(),
            transformModulePath: config.getTransformModulePath(),
            //workerPath: null //config.getWorkerPath && config.getWorkerPath(),
            extraNodeModules: config.extraNodeModules,
            getTransformOptions: config.getTransformOptions,
            globalTransformCache: null,
            //hasteImpl: config.hasteImpl,
            //maxWorkers: args.maxWorkers,
            getPolyfills:() => [],
            platforms: defaultPlatforms.concat(platforms),
            postMinifyProcess: config.postMinifyProcess,
            postProcessModules: config.postProcessModules,
            postProcessBundleSourcemap: config.postProcessBundleSourcemap,
            transformCache: TransformCaching.useTempDir(),
            watch: true,
            workerPath: config.getWorkerPath(),
        };
    
        // packagerInstance = runServer({
        //     assetExts: options.assetExts,
        //     host: 'localhost',
        //     maxWorkers: 5,
        //     nonPersistent: !options.watch,
        //     platforms: options.platforms,
        //     port: 8081,
        //     projectRoots: options.projectRoots,
        //     resetCache: options.resetCache,
        //     sourceExts: options.sourceExts,
        //     verbose: true
        // }, config, startedCallback, readyCallback)
        const startedCallback = logReporter => {
          logReporter.update({
            type: 'initialize_packager_started',
            port: 8081,
            projectRoots: options.projectRoots,
          });
      
          process.on('uncaughtException', error => {
            logReporter.update({
              type: 'initialize_packager_failed',
              port: 8081,
              error,
            });
            console.log(error)
            process.exit(11);
          });
        };
      
        const readyCallback = logReporter => {
          logReporter.update({
            type: 'initialize_packager_done',
          });
        };

        packagerInstance = runServer({
          assetExts: options.assetExts,
          host: 'localhost',
          maxWorkers: 5,
          assetRegistryPath: path.join(root, 'node_modules/react-native'), 
          nonPersistent: !options.watch,
          platforms: options.platforms,
          port: 8081,
          projectRoots: options.projectRoots,
          resetCache: options.resetCache,
          sourceExts: options.sourceExts,
          verbose: true
        }, config, startedCallback, readyCallback) 
        shouldClosePackager = false;
    }

    // function buildBundle(packagerClient, requestOptions) {
    //     return packagerClient.buildBundleForHMR(Object.assign({},
    //     Server.DEFAULT_BUNDLE_OPTIONS,
    //     requestOptions, {
    //       isolateModuleIDs: true }), 'localhost', 8081);
      
    // }
   

    // const bundlePromise = outputBundle.build(packagerInstance, requestOpts)
    //   .then(bundle => {
    //     if (shouldClosePackager) {
    //       packagerInstance.end();
    //     }

        

    //     return saveBundle(outputBundle, bundle, {
    //         bundleOutput:path.join(outputPath, './bundle.android.js'),
    //         bundleEncoding:'utf8',
    //         dev:true,
    //         sourcemapOutput:path.join(outputPath, './bundle.android.map.js'),
    //         sourcemapSourceRoot:entryFile
    //     });
    //   });
  
    // // Save the assets of the bundle
    // const assets = bundlePromise
    //   .then(bundle => bundle.getAssets())
    //   .then(outputAssets => saveAssets(
    //     outputAssets,
    //     platform,
    //     outputPath
    //   ));

    
  
    // When we're done saving bundle output and the assets, we're done.
    //return packagerInstance;

}

export {
    build
}