//
//
const router = require('express').Router()

const CF = require('../../conf/conf_app')


router.get('/', async (req, res) => {
    try {
        curDate = new Date()
        return res.send({
            appName: CF.app.name,
            port: CF.server.port,
            environment: CF.server.ENV,
            appVersion: CF.app.version,
            serverDate: curDate.getFullYear() + "-" + (curDate.getMonth() + 1) + "-" + curDate.getDate(),
            serverTime: curDate.toLocaleTimeString(),
            random: Math.random()
        })
    } catch (err) {
        return res.status(500).send(err)
    }
})


module.exports = router
