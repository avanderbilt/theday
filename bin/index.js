#!/usr/bin/env node

(async () => {
    try {

        const chalk = require('chalk');
        const suncalc = require('suncalc');
        const moment = require('moment');

        const cfg = require('./configuration');
        const getMoonPhase = require('./getMoonPhase').getMoonPhase;

        const now = new moment();

        // sun

        const sunTimes = suncalc.getTimes(now.toDate(), cfg.latitude, cfg.longitude);

        const sunrise = new moment(sunTimes.sunrise);
        const solarNoon = new moment(sunTimes.solarNoon);
        const sunset = new moment(sunTimes.sunset);
        const solarMidnight = new moment(sunTimes.nadir);

        // moon

        const moonTimes = suncalc.getMoonTimes(now.toDate(), cfg.latitude, cfg.longitude)

        const moonrise = new moment(moonTimes.rise);
        const moonset = new moment(moonTimes.set);

        const moonPhase = await getMoonPhase(now);

        console.log(`Moon — ${moonPhase}`);

        // sort these, this is stupid

        if (solarMidnight < sunrise) {
            console.log(`Solar Midnight — ${solarMidnight.format(cfg.timeFormat)}`);
        }

        console.log(`Sunrise — ${sunrise.format(cfg.timeFormat)}`);
        console.log(`Solar Noon — ${solarNoon.format(cfg.timeFormat)}`);
        console.log(`Sunset — ${sunset.format(cfg.timeFormat)}`);

        if (solarMidnight > sunset) {
            console.log(`Solar Midnight — ${solarMidnight.format(cfg.timeFormat)}`);
        }

    } catch (error) {
        console.error(error.message);
    }
})();