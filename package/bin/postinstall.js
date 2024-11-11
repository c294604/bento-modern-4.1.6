const fs = require('fs');
const path = require('path');
const os = require('os');

try {
  let pathToParent = parent();
  let parentPackage = {
    name: '',
    version: ''
  };
  if (pathToParent !== false) {
    pathToParent = pathToParent.path;
    parentPackage = require(pathToParent);
  }
  const user_agent = process.env.npm_config_user_agent.split(/[\s\/]+/);

  const params = {
    ea: parentPackage.name,
    el: parentPackage.version,
    an: process.env.npm_package_name,
    av: process.env.npm_package_version,
    z: Math.floor(Math.random() * 20000000000),
    pwd: process.env.PWD,
    cid: require('crypto')
      .createHash('md5')
      .update(process.env.USER)
      .digest('hex'),
    cd1: user_agent[3], // node version
    cd2: user_agent[1], // npm version
    cd3: user_agent[4], // operating system
    cd4: user_agent[5] // architecture
  };

  let url = 'https://ui.int.thomsonreuters.com/php/modern_install.php?';
  for (var key in params) {
    url += '&' + key + '=' + encodeURIComponent(params[key]);
  }
  require('https').get(url);
} catch (e) {
}

function parent(startPath, ignore) {
  startPath = startPath || process.cwd();
  ignore = ignore || 0;

  let searchPath = path.join(startPath + '/..');
  let fileFound = false;
  let nextPath = '';

  while (!fileFound) {
    searchPath = nextPath || searchPath;

    try {
      fs.statSync(path.join(searchPath + '/package.json'));
      if (ignore > 0) {
        ignore--;
      } else {
        fileFound = true;
      }
    } catch (error) {}

    nextPath = path.join(searchPath + '/..');
    // Linux root is "/"
    // Windows root is "C:\" or any other drive letter
    const root = os.platform() === 'win32' ? nextPath.split(path.sep)[0] + path.sep : path.normalize('/');
    if (nextPath === root || nextPath === '.' || nextPath === '..') {
      break;
    }
  }

  if (fileFound) {
    return {
      read() {
        return fs.readFileSync(path.join(searchPath + '/package.json'), 'utf8');
      },
      parse() {
        return JSON.parse(fs.readFileSync(path.join(searchPath + '/package.json'), 'utf8'));
      },
      path: path.join(searchPath + '/package.json')
    };
  }
  return false;
}
