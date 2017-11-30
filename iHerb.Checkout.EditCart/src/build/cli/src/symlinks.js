var fs = require('fs'),
    path = require('path');

module.exports = (lookupFolder) => {
  const timeStart = Date.now();
  const folders = fs.readdirSync(lookupFolder);

  const resolvedSymlinks = {};
  folders.forEach(folder => {
    const visited = [];
    
    let symlink = path.resolve(lookupFolder, folder);
    while (fs.lstatSync(symlink).isSymbolicLink()) {
      const index = visited.indexOf(symlink);
      if (index !== -1) {
        throw Error(
          `Infinite symlink recursion detected:\n  ` +
            visited.slice(index).join(`\n  `)
        );
      }
      visited.push(symlink);
      symlink = path.resolve(
        path.dirname(symlink),
        fs.readlinkSync(symlink)
      );
    }

    if (visited.length && folder && symlink) {
      resolvedSymlinks[folder] = symlink;
    }
  });

  const timeEnd = Date.now();
  console.log(`Scanning ${folders.length} folders for symlinks in ${lookupFolder} (${timeEnd - timeStart}ms)`);
  console.log(resolvedSymlinks);
  return resolvedSymlinks;
};

const rootExists = (roots, child) => {
  return roots.some(root => isDescendant(root, child));
}

const isDescendant = (root, child) => {
  return root === child || child.startsWith(root + path.sep);
}
