const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create,
}

function newTicket(req, res) {   
        res.render('tickets/new', {
            flight: req.params.id,
            title: 'Add Ticket',
        });
        // console.log('FLIGHT ID: ', req.params.id)
}

function create(req, res) {
    const ticket = new Ticket(req.body)
    Flight.findById(req.params.id, function(err, flight) {
        // console.log('This is working?')
        ticket.save(function(err) {
            // console.log(ticket)
            res.redirect(`/flights/${flight._id}`)
        })
    })
}