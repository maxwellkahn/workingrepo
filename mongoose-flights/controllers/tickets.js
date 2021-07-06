const Ticket = require('../modles/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    })
}