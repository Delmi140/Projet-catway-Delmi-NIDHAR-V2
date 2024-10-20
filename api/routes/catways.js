var express = require('express');
var router = express.Router();

const service = require('../services/catways');



router.get('/', service.homepagecatway);

router.put('/', service.addCatways);

router.post('/', service.postCatway);

router.get('/:id',service.getById);

router.put('/add', service.add);

router.patch('/:id', service.update);

router.delete('/:id', service.delete);


module.exports = router;

