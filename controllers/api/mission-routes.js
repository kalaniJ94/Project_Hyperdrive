const router = require('express').Router();
const { Mission } = require('../../models');
const {withAuth} = require('../../utils/auth')

//api/missions

//Create new mission
router.post('/', /*withAuth,*/ async (req, res) => {
    try {
        const missionData = await Mission.create({
            user_id: req.session.user_id,
            planet_id: req.body.planet_id,
            status: req.body.planet_id,
        });
        res.status(200).json(missionData);
    } catch (err) {
        res.status(400).json(err);
    }
  });

module.exports = router;