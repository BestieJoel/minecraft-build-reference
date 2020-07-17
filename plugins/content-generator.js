const BroccoliPlugin = require('broccoli-plugin');
const walkSync = require('walk-sync');

module.exports = class ContentGenerator extends BroccoliPlugin {
  build() {
    const data = [];

    this.inputPaths.forEach((dir) => {
      walkSync(dir)
        .filter(path => path.endsWith('.json'))
        .forEach(path => {
          const cleanPath = path.replace('.json', '')
          const content = JSON.parse(this.input.readFileSync(path));
          const pathSplit = cleanPath.split('/');

          data.push({
            id: pathSplit.join('---'),
            path: cleanPath,
            content
          });
        });
    });

    this.output.mkdirSync('assets');
    this.output.writeFileSync('assets/data.js', `window.data = ${JSON.stringify(data)};`);
  }
}
