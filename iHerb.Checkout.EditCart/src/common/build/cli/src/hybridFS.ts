import * as MemoryFS from "memory-fs";
import * as fs from 'fs';

class HybridFileSystem {
    mfs: any
    regex: RegExp

    constructor() {
        this.mfs = new MemoryFS(),
        this.regex = /((?:\.\w*)*)(\.\w+$)/;
    }

    existsSync(path) {
        var exists = !!this.mfs.meta(path);
        if(!exists)
            return fs.existsSync(path)

		return exists;
    }

    readdirSync(path) {
        if (!this.hasCache(path) && this.existsLocally(path)) {
            return fs.readdirSync(path);
        }
        return this.mfs.readdirSync(path); 
    }

    statSync(path) {
        if (!this.hasCache(path) && this.existsLocally(path)) {
            return fs.statSync(path);
        }
        return this.mfs.statSync(path);
    }

    readFileSync(path, optionsOrEncoding) {
        
        if (!this.hasCache(path) && this.existsLocally(path)) {
            return fs.readFileSync(path, optionsOrEncoding);
        }
        return this.mfs.readFileSync(path, optionsOrEncoding);
    }

    readlinkSync(path) {
        if (!this.hasCache(path) && this.existsLocally(path)) {
            return fs.readlinkSync(path);
        }
        return this.mfs.readlinkSync(path);
    }

    hasCache(path) {
        if(this.isModule(path) || this.isRelative(path))
            return false;
        return !!this.mfs.meta(path);
    }

    cacheFile(key, path) {
        this.mfs.writeFileSync(key,
            fs.readFileSync(path));
    }

    cacheDir(path) {
        this.mfs.mkdirpSync(path);
    }

    getPlatform(path) {
        return this.regex.exec(path)[1];
    }

    hasPlatform(path) {
        var expr = this.regex.exec(path);
        if(expr && expr[2])
            return true;

        return false;
    }

    resolve(request, exts, context) {
        return request.replace(/((?:\.\w*)*)(\.\w+$)/, this.replaceExts(exts, context))
    }

    replaceExts(exts, context) {
        
        return (match, p1, p2, offset, string) => {
            // if(context) {
            //     p2 = /((?:\.[^\.]*)*)(\.[^\.]+$)/.exec(context)[2];
            // }

            return this.resolvePlatform(string, match, exts, p2, p1) || 
                this.resolvePlatform(string, match, exts, p2);
        };
    }

    resolvePlatform(request, match, exts, ext = '', platform = '') {
        if(ext)
            return this.resolveExt(request, match, ext, platform);
        else
            return this.resolveExts(request, match, exts, platform);
    }

    resolveExt(request, match, ext = '', platform = '') {
        var req = request.replace(match, platform + ext);
        if(!this.isRelative(req) && this.existsSync(req))
            return platform + ext;
    }

    resolveExts(request, match, exts, platform = '') {
        exts.forEach(ext => {
            if(this.existsSync(request.replace(match, platform + ext))) {
                return platform + ext;
            }
        }, this);
    }

    existsLocally(path) {
        return fs.existsSync(path);
    }

    isRelative(path) {
        return /^\.+\//.test(path);
    }

    isAbsolute(path) {
        return /^[A-Za-z]:/.test(path);
    }

    isDir(path) {
        return /[\/|\\][^\.]*$/.test(path);
    }
    
    isFile(path) {
        return /\.[^\/|\\]+$/.test(path);
    }

    isModule(path) {
        return /node_modules/.test(path) || 
        (!this.isRelative(path) && !this.isAbsolute(path));
    }
}

Object.keys(MemoryFS.prototype).forEach(key => {
    if(!HybridFileSystem.prototype.hasOwnProperty(key)) {
        if(HybridFileSystem.prototype.hasOwnProperty(key + 'Sync')) {
            HybridFileSystem.prototype[key] = function(path, opt, callback){
                var result;

                if(!callback) {
                    callback = opt;
                    opt = undefined;
                }
                
                try {
                    result = this[key + 'Sync'](path, opt);
                } catch(e) {
                    setImmediate(function() {
                        callback(e);
                    });
                    return;
                }
                
                setImmediate(function() {
                    callback(null, result);
                });
            };
        } else {
            HybridFileSystem.prototype[key] = function(...args){ return this.mfs[key](...args) };
        }
    }
});



export default HybridFileSystem;