const skills = [
    {skill: 'Active Listening', mastered: true},
    {skill: 'HTML', mastered: true},
    {skill: 'CSS', mastered: true},
    {skill: 'Javascript', mastered: true},
    {skill: 'Express', mastered: false},
    {skill: 'Juggling', mastered: false},
    {skill: 'Cooks a Mean Egg', mastered: true}
    
];

module.exports = {
    getAll,
};

function getAll() {
    return skills;
}