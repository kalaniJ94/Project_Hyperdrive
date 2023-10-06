const router = require('express').Router();
const userRoutes = require('./user-routes');
const missionRoutes = require('./mission-routes');
const logRoutes = require('./log-routes');

router.use('/users', userRoutes);
router.use('/missions', missionRoutes);
router.use('/logs', logRoutes);

module.exports = router;