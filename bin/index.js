(async () => {
    try {
        const chalk = require('chalk');
        const cfg = require('./configuration');

        console.log(chalk`{red Hello!}\n`);
    } catch (error) {
        console.error(error.message);
    }
})();