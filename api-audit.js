'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit{
    static get meta(){
        return{
            id: 'api-audit',
            title: 'Schedule api initialized and ready',
            failureTitle: 'Schedule api slow to initialize',
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'Schedule api initialized and ready',
            failureDescription: 'Schedule api slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' api is consumed.',
            requiredArtifacts: ['TimeToApi']
        };
    }

    static audit(artifacts){
        const loadedTime = artifacts.TimeToApi;
         const belowThreshold = loadedTime <= MAX_CARD_TIME;
         return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}
module.exports = LoadAudit;