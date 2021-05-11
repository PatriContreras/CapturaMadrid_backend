const router = require('express').Router();


const usersApiRouter = require('./api/users');
const eventsApiRouter = require('./api/events');

router.use('/users', usersApiRouter);
router.use('/events', eventsApiRouter);

module.exports = router;