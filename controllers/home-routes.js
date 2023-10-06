const router = require('express').Router();
const { User, Mission, Planet, Log } = require('../models');
const withAuth = require('./utils/auth');

// GET homepage data for the user
router.get('/', withAuth, async (req, res) => {
    try {
        const missionData = await Mission.findAll({
            include: [
                {
                    model: User,
                    where: { id: req.session.user_id }
                },
                {
                    model: Planet,
                },
                {
                    model: Log,
                }
            ]
        });

        // Serialize creating ana rray of mission objects
        const missions = missionData.map((mission) => mission.get({ plain: true }));

        // render
        res.render('homepage', {
            missions,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;