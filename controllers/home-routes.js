const router = require('express').Router();
const { User, Mission, Planet, Log } = require('../models');
const withAuth = require('./../utils/auth');

// GET homepage data for the user
router.get('/', /*withAuth,*/ async (req, res) => {
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

        // Serialize creating an array of mission objects
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

// captains log --  TODO: scratch id, order ascending ID instead
router.get('/captainslog', async (req, res) => {
    try {
        const logData = await Mission.findAll( {
            include: [
                {
                    model: User
                },
                {
                    model: Log,
                    order: ['id', 'ASC']
                },
                {
                    model: Planet
                },
            ]
        });
        
        // Serialize
        const log = logData.map((log) => log.get({ plain: true }));
        res.render('captainslog', {
            ...log,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// hyperspace screen 
router.get('/hyperspace', async (req, res) => {
    try {
        res.render('hyperspace')
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// destination
router.get('/destination', async (req, res) => {
    try {
        const logData = await Mission.findAll( {
            include: [
                {
                    model: User
                },
                {
                    model: Log,
                    where: {id: req.params.id}
                },
                {
                    model: Planet
                },
            ]
        });
        
        // Serialize
        const log = logData.map((log) => log.get({ plain: true }));
        res.render('captainslog', {
            ...log,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// redirect to homepage if the user is already logged in
router.get('/login', (req, res) => {
    // if the user is already logged in redirect
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('login')
})


module.exports = router;