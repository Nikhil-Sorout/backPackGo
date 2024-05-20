const express = require('express');
const { nearbyRestaurants, nearbyRestaurantsPics, nearbyActivities, nearbyActivitiesPics, nearbyLodges, nearbyLodgesPics, searchPlaces } = require('../controller/userController');
const dotenv = require('dotenv').config();
const router = express.Router();

// Using router
router.route('/places/restaurants').get(nearbyRestaurants);
router.route('/places/activities').get(nearbyActivities);
router.route('/places/lodges').get(nearbyLodges);
router.route('/places/search/:query').get(searchPlaces);
router.route('/places/restaurants/pics/:id').get(nearbyRestaurantsPics);
router.route('/places/activities/pics/:id').get(nearbyActivitiesPics);
router.route('/places/lodges/pics/:id').get(nearbyLodgesPics);

module.exports = router;
