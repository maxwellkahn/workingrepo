const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    newSkill,
    create,
    delete : deleteSkill,
    edit
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id)
    });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    req.body.proficient = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        idx: req.params.id
    })
}