const router = require('express').Router();
const { Log } = require('../../models');
const {withAuth} = require('../../utils/auth')

//api/logs

//Create new log post for a Mission
router.post('/',  async (req, res) => {
    try {
        const logData = await Log.create({
            mission_id: req.body.mission_id,
            comment: req.body.comment,
        });
        res.status(200).json(logData);
    } catch (err) {
        res.status(400).json(err);
    }
  });

module.exports = router;