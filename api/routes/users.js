var express = require('express');
var router = express.Router();

const service = require('../services/users');


router.get('/', service.homepage);

router.put('/', service.addUser);

router.post('/', service.postUser);

router.get('/:id', service.getById);

router.patch('/:id', service.update);

router.delete('/id', service.delete);




module.exports = router;
