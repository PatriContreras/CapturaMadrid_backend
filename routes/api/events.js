const { insertEvent } = require('../../models/event');

const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const event = await insertEvent(req.body);
        console.log(event);
        res.json(event)

    } catch (error) {
        console.log(error);
        res.json({ error: 'error al insertar el evento' })
    }
})

module.exports = router;