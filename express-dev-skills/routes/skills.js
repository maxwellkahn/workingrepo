var express = require('express');
var router = express.Router();
const skillsCtrl = ('../controllers/skills')

router.get('/', skillsCtrl.index);

module.exports = router;
