const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('./utils/auth');

// Authorization middleware

// get all missions
// get total number of misions
router.get('/', withAuth, async (req, res) => {
    try {
        const missionData = await 
    } catch (error) {
        
    }
})

module.exports = router;