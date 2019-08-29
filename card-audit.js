'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 5000;

class LoadAudit extends Audit{
    static get meta(){
        return{
            id: 'card-audit',
            title: 'Schedule card initialized and ready',
            failureTitle: 'Schedule Card slow to initialize',
            category: 'MyPerformance',
            name: 'card-audit',
            description: 'Schedule card initialized and ready',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is shown.',
            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts){
        const loadedTime = artifacts.TimeToCard;
         const belowThreshold = loadedTime <= MAX_CARD_TIME;
         return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}
module.exports = LoadAudit;