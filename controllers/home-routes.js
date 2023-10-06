const router = require('express').Router();
const { User, Mission, Planet, Log } = require('../models');
const withAuth = require('./utils/auth');

// Authorization middleware

// get all missions
// get total number of misions
router.get('/', withAuth, async (req, res) => {
    try {
        const missionData = await Mission.findAll({
            include: [
                {
                    model: User,
                    where: { id: req.session.user_id}
                },
                {
                    model: Mission,
                    where: { id: req.session.user_id}
                },
                {
                    model: Planet,
                    where: { id: req.session.user_id}
                },
                {
                    model: Log,
                    where: { id: req.session.user_id}
                }
            ]
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;