const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Mission, Planet, Log } = require('../models');
const withAuth = require('./../utils/auth');

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
        const habitablePlanets = await Mission.count({
            include: [
                {
                    model: User,
                    where: {id: req.session.user_id}
                },
                {
                    model: Planet,
                    where: {
                        habitable: true
                    }
                },
            ],
        })
        const missionCount = await Mission.count({
            include: [
                {
                    model: User,
                    where: {id: req.session.user_id}
                },
            ],
        })

        // Serialize creating an array of mission objects
        const missions = missionData.map((mission) => mission.get({ plain: true }));

        // render
        res.render('homepage', {
            missions,
            habitablePlanets,
            missionCount,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
})

// captains log
router.get('/captainslog', withAuth, async (req, res) => {
    try {
        const newMisssion = await Mission.findOne( {
            where: {
                id: 
                [sequelize.literal(`SELECT MAX(id) FROM mission WHERE user_id = ${req.session.user_id}`)]
                
              },
        });
        const habitablePlanets = await Mission.count({
            include: [
                {
                    model: User,
                    where: {id: req.session.user_id}
                },
                {
                    model: Planet,
                    where: {
                        habitable: true
                    }
                },
            ],
        })
        const missionCount = await Mission.count({
            include: [
                {
                    model: User,
                    where: {id: req.session.user_id}
                },
            ],
        })
        
        // Serialize
        const mission = newMisssion.get({ plain: true });
        res.render('captainslog', {
            // ...log,
            mission,
            habitablePlanets,
            missionCount,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// hyperspace screen 
router.get('/hyperspace', withAuth, async (req, res) => {
    try {
        const missionData = await Mission.findOne({
            where: {
                id: 
                [sequelize.literal(`SELECT MAX(id) FROM mission WHERE user_id = ${req.session.user_id}`)]
                
              },
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
        const habitablePlanets = await Mission.count({
            include: [
                {
                    model: User,
                    where: {id: req.session.user_id}
                },
                {
                    model: Planet,
                    where: {
                        habitable: true
                    }
                },
            ],
        })
        const missionCount = await Mission.count({
            include: [
                {
                    model: User,
                    where: {id: req.session.user_id}
                },
            ],
        })
        
        const mission = missionData.get({ plain: true });
        // console.log(...mission);
        console.log(mission);


        res.render('hyperspace',
        {  mission,
            habitablePlanets,
            missionCount,
            logged_in: req.session.logged_in
        })
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