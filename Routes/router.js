const express = require('express')
const router = express.Router()

const getplayerstats = require('../Controllers/controller')

router.route("/").get(getplayerstats)

module.exports = router