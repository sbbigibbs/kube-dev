
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

function getAndroidAssetSuffix(scale) {
    switch (scale) {
      case 0.75: return 'ldpi';
      case 1: return 'mdpi';
      case 1.5: return 'hdpi';
      case 2: return 'xhdpi';
      case 3: return 'xxhdpi';
      case 4: return 'xxxhdpi';
    }
    throw new Error('no such scale');
  }
  
  function getAndroidDrawableFolderName(asset, scale) {
    var suffix = getAndroidAssetSuffix(scale);
    if (!suffix) {
      throw new Error(
        'Don\'t know which android drawable suffix to use for asset: ' +
        JSON.stringify(asset)
      );
    }
    const androidFolder = 'drawable-' + suffix;
    return androidFolder;
  }
  
  function getAndroidResourceIdentifier(asset) {
    var folderPath = getBasePath(asset);
    return (folderPath + '/' + asset.name)
      .toLowerCase()
      .replace(/\//g, '_')           // Encode folder structure in file name
      .replace(/([^a-z0-9_])/g, '')  // Remove illegal chars
      .replace(/^assets_/, '');      // Remove "assets_" prefix
  }
  
  function getBasePath(asset) {
    var basePath = asset.httpServerLocation;
    if (basePath[0] === '/') {
      basePath = basePath.substr(1);
    }
    return basePath;
  }

const assetPathUtils = {
    getAndroidAssetSuffix: getAndroidAssetSuffix,
    getAndroidDrawableFolderName: getAndroidDrawableFolderName,
    getAndroidResourceIdentifier: getAndroidResourceIdentifier,
    getBasePath: getBasePath
}

function getAssetDestPathAndroid(asset, scale) {
  const androidFolder = assetPathUtils.getAndroidDrawableFolderName(asset, scale);
  const fileName =  assetPathUtils.getAndroidResourceIdentifier(asset);
  return path.join(androidFolder, fileName + '.' + asset.type);
}

function getAssetDestPathIOS(asset, scale){
    const suffix = scale === 1 ? '' : '@' + scale + 'x';
    const fileName = asset.name + suffix + '.' + asset.type;
    return path.join(asset.httpServerLocation.substr(1), fileName);
  }

function saveAssets(
  assets,
  platform,
  assetsDest
) {
  if (!assetsDest) {
    console.warn('Assets destination folder is not set, skipping...');
    return Promise.resolve();
  }

  const getAssetDestPath = platform === 'android'
    ? getAssetDestPathAndroid
    : getAssetDestPathIOS;

  const filesToCopy = Object.create(null); // Map src -> dest
  assets
    .forEach(asset =>
      asset.scales.forEach((scale, idx) => {
        const src = asset.files[idx];
        const dest = path.join(assetsDest, getAssetDestPath(asset, scale));
        filesToCopy[src] = dest;
      })
    );

  return copyAll(filesToCopy);
}

function copyAll(filesToCopy) {
  const queue = Object.keys(filesToCopy);
  if (queue.length === 0) {
    return Promise.resolve();
  }

  //log('Copying ' + queue.length + ' asset files');
  return new Promise((resolve, reject) => {
    const copyNext = (error?) => {
      if (error) {
        return reject(error);
      }
      if (queue.length === 0) {
        //log('Done copying assets');
        resolve();
      } else {
        const src = queue.shift();
        const dest = filesToCopy[src];
        copy(src, dest, copyNext);
      }
    };
    copyNext();
  });
}

function copy(src, dest, callback) {
  const destDir = path.dirname(dest);
  mkdirp(destDir, err => {
    if (err) {
      return callback(err);
    }
    fs.createReadStream(src)
      .pipe(fs.createWriteStream(dest))
      .on('finish', callback);
  });
}

export default saveAssets;
