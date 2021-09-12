const express    = require('express')
const artistController = require('../controllers/artist')

const router = express.Router();

router.post('/', artistController.create);

router.get('/', artistController.read)
router.get('/:artistId', artistController.readbyId)
router.get('/:artistId', artistController.update)

module.exports = router;