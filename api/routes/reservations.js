var express = require('express');
var router = express.Router();

const service = require('../services/reservations');

router.get('/', service.homepageres);

router.put('/', service.addReservation);

router.post('/', service.postReservation);

router.get('/:id',service.getById);

router.put('/add', service.add);

router.patch('/:id', service.update);

router.delete('/:id', service.delete);




module.exports = router;
