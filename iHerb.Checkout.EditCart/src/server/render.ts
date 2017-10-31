import * as fs from 'fs';
import * as babel from 'babel-core';
import * as presetEs2015 from 'babel-preset-es2015';
import * as presetReact from 'babel-preset-react';
import * as presetStage0 from 'babel-preset-stage-0';
import * as ts from "typescript";
import tsPlugin from 'babel-plugin-transform-typescript';

export default (path) => {
    var text = fs.readFileSync(path, "utf8");
    try{
        // var pr = presetReact;
        // var pe = presetEs2015;
        // var ps = presetStage0;

        // var transform = babel.transform(text, {
        //     presets: [
        //         ...pr.presets,
        //         ...ps.presets
        //     ], 
        //     plugins: [
        //         "transform-typescript",
        //         ...pe.plugins,
        //         ...pr.plugins,
        //         ...ps.plugins,
        //     ], babelrc: false
        // });
        // var code = transform.code;
        let code = ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: 'es2015', } });
        return code
        
    }catch(ex) {
        var exception = ex;
        console.log(ex)
    }
}