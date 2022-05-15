let express = require('express');
let router = express.Router();
var counts = 0
var arr = []
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with,content-type');
    res.setHeader('Access-Conrol-Allow-Credentials', true);
    next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/question2', async function(req, res, next) {
    try {
        let answer = 'ABCD'
        let answers = 'ABCD'
        let random = req.body.random
        let position = 0
        let correct = 0
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === random[i]) {
                position += 1
            }
            for (let j = 0; j < answers.length; j++) {
                if (answers[j].includes(random[i])) {
                    correct += 1
                    answers = answers.replace(random[i], 1)
                }
            }

        }
        counts += 1
        arr.push({ Answer: random, Correct: correct, Position: position, Counts: counts })
        res.json(arr)
    } catch (e) {
        res.json(e)
    }

});

module.exports = router;