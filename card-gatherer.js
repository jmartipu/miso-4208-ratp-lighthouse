'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToCard extends Gatherer {
    afterPass(passContext, loadData) {
            super.afterPass(passContext, loadData);
            const driver = passContext.driver;
            return driver.evaluateAsync('window.cardLoadTime')
                .then(cardLoadTime => {
                    if (!cardLoadTime){
                        throw new Error('Unable to find card load metrics in page');
                    }
                    return cardLoadTime;
                })
    }
}

module.exports = TimeToCard;