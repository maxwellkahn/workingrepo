const Skill = require('../models/skill');
const { router } = require('../server');

module.exports = {
    index,
};

router.get('/', function(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
});