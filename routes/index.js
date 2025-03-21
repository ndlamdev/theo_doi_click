const express = require('express');
const router = express.Router();
const fs = require('node:fs');

const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: "numeric",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});
/* GET home page. */
router.get('/', function (req, res, next) {
    const action = req.query.action;
    const message = `Hành động: ${action}\t|\tThời gian: ${formatter.format(Date.now())}\t|\tIp: ${req.ip}\n`
    console.log(message)

    try {
        fs.writeFileSync('./hanh_dong.txt', message, {flag: 'a+'});
    } catch (err) {
        console.error(err);
    }

    res.send("")
});

module.exports = router;
