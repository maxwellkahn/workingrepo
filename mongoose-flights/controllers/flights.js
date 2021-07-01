const Flight = require('../models/flight')

module.exports = {
    index,

}

function index(req, res){
    Flight.fint({}, function(err, flights) {
        res.render('flights/index', {
            flights,
        });
    });
}