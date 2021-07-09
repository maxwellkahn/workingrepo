const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show,

}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            title: 'All flights',
            flights,
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add a Flight'});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        // console.log(flight);
        res.redirect('flights');
    });
}

async function show(req, res) {
    // console.log('Are we there yet')
    const foundFlight = await Flight.findById(req.params.id)
    const foundTickets = await Ticket.find({flight: req.params.id})
    console.log('FOUND TICKETS', foundTickets)
    res.render('flights/show', {title: 'Flight Detail', flight: foundFlight, tickets: foundTickets})
        //  function(err, flight) {
        // Ticket.find({})
        // console.log('THIS IS THE FLIGHT ', flight)
        // res.render('flights/show', {title: 'Flight Detail', flight});
    // });
}