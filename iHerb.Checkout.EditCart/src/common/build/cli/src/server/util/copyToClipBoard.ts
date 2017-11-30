var child_process = require('child_process');
var spawn = child_process.spawn;
var path = require('path');
var fs  = require('fs');

const xsel = path.join(__dirname, 'external/xsel');
fs.chmodSync(xsel, '0755');
/**
 * Copy the content to host system clipboard.
 * This is only supported on Mac and Windows for now.
 */
function copyToClipBoard(content) {
  switch (process.platform) {
  case 'darwin':
    var child = spawn('pbcopy', []);
    child.stdin.end(new Buffer(content, 'utf8'));
    return true;
  case 'win32':
    var child = spawn('clip', []);
    child.stdin.end(new Buffer(content, 'utf8'));
    return true;
  case 'linux':
    var child = spawn(xsel, ['--clipboard', '--input']);
    child.stdin.end(new Buffer(content, 'utf8'));
    return true;
  default:
    return false;
  }
}

module.exports = copyToClipBoard;
