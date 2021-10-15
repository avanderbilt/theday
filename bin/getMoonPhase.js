const getMoonPhase = async (now) => {

    const suncalc = require('suncalc');
    const moment = require('moment');

    const startingMoonPhase = suncalc.getMoonIllumination(now.startOf('day')).phase;
    const endingMoonPhase = suncalc.getMoonIllumination(now.endOf('day')).phase;
    const currentMoonPhase = suncalc.getMoonIllumination(now).phase;

    const newMoonPhase = 0;
    const firstQuarterMoonPhase = 0.25;
    const fullMoonPhase = 0.5;
    const lastQuarterMoonPhase = 0.75;

    let moonPhase = '';

    if (startingMoonPhase > endingMoonPhase || (startingMoonPhase < newMoonPhase && endingMoonPhase > newMoonPhase)) {
        moonPhase = 'New Moon';
    } else if (startingMoonPhase < firstQuarterMoonPhase && endingMoonPhase > firstQuarterMoonPhase) {
        moonPhase = 'First Quarter';
    } else if (startingMoonPhase < fullMoonPhase && endingMoonPhase > fullMoonPhase) {
        moonPhase = 'Full Moon';
    } else if (startingMoonPhase < lastQuarterMoonPhase && endingMoonPhase > lastQuarterMoonPhase) {
        moonPhase = 'Last Quarter';
    } else if (currentMoonPhase < 0.25) {
        moonPhase = 'Waxing Crescent';
    } else if (currentMoonPhase < 0.5) {
        moonPhase = 'Waxing Gibbous';    
    } else if (currentMoonPhase < 0.75) {
        moonPhase = 'Waning Gibbous';    
    } else if (currentMoonPhase < 1) {
        moonPhase = 'Waning Crescent';
    }

    return moonPhase;
};
exports.getMoonPhase = getMoonPhase