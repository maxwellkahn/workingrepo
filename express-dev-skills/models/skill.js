const skills = [
    {skill: 'Juggle', proficient: true},
    {skill: 'Coding', proficient: true},
    {skill: 'Painting', proficient: true},
    {skill: 'Horseback Riding', proficient: false},
    {skill: 'Skateboarding', proficient: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id]
}