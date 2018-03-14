const path = require('path');
const koaStatic = require('koa-static');

const currentDirectory = process.cwd();

module.exports = class staticWrapper {
  constructor(options = {}) {
    this.dirs = options.dirs || [path.join(currentDirectory, './public')];
  }

  setup(app) {
    this.dirs.forEach((dir) => {
      app.use(koaStatic(dir));
    });
  }
};
