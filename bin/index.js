(async () => {
    try {
        const chalk = require('chalk');
        const boxen = require('boxen');
        const cfg = require('./configuration');

        console.log(`${boxen(chalk`{red Hello!}`, cfg.boxenOptions)}\n`);
    } catch (error) {
        console.error(error.message);
    }
})();