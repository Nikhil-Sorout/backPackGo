const express = require('express');
const { nearbyRestaurants, nearbyRestaurantsPics } = require('../controller/userController');
const dotenv = require('dotenv').config();
const router = express.Router();

// Using router
router.route('/places/restaurants').get(nearbyRestaurants);
router.route('/places/restaurants/pics/:id').get(nearbyRestaurantsPics)

module.exports = router;
