const express = require('express');
const { nearbyRestaurants, nearbyRestaurantsPics, nearbyActivities, nearbyActivitiesPics } = require('../controller/userController');
const dotenv = require('dotenv').config();
const router = express.Router();

// Using router
router.route('/places/restaurants').get(nearbyRestaurants);
router.route('/places/activities').get(nearbyActivities)
router.route('/places/restaurants/pics/:id').get(nearbyRestaurantsPics)
router.route('/places/activities/pics/:id').get(nearbyActivitiesPics)

module.exports = router;
