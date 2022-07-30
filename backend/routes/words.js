const
{
    getWords,
    rank,
} = require('../controllers/words'),
router = require('express').Router(),
{routerWrapper} = require("../config/helper")


const routerData = {
    rank: {
        controller: rank,
        params: ['body']
    },
    getWords: {
        controller: getWords,
        params: ['query.count']
    }
}


router
.post('/rank', routerWrapper(routerData.rank.controller, routerData.rank.params))
.get('/', routerWrapper(routerData.getWords.controller, routerData.getWords.params))


module.exports = router;