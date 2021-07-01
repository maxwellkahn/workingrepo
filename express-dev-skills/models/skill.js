const skills = [
    {skill: 'Juggle', proficient: true},
    {skill: 'Coding', proficient: true},
    {skill: 'Painting', proficient: true},
    {skill: 'Horseback Riding', proficient: false},
    {skill: 'Skateboarding', proficient: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    editOne
};

function getOne(id) {
    return skills[id]
}

function getAll() {
    return skills;
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(id) {
    skills.splice(id, 1)
}

function editOne(id, body) {
    skills[id] = body;
}