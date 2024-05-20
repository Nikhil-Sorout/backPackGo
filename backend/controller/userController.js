const axios = require('axios');
const dotenv = require('dotenv');
const { response } = require('express');

// @desc Nearby Restaurants
// @route GET /api/places/restaurants
// @access public
const nearbyRestaurants = (async (req, res, next) => {
    try {
        // Requesting data from foursquare api using axios with headers including API key
        const response = await axios.get('https://api.foursquare.com/v3/places/search?categories=13065',
            {
                headers: {
                    accept: 'application/json',
                    Authorization: process.env.API_KEY
                }
            }
        )
        // console.log('Done')

        // Checking response status
        if (response.status === 200) {
            const responseData = response.data;
            // res.json(responseData);
            console.log(responseData);
            // returning data to the requested endpoint
            return res.status(200).json(responseData)
        }
        else {
            console.error('Non-200 status code recieved:', response.status);
            // returning error if the status code is not 200
            return res.status(response.status).json({ error: "Non-200 status code recieved" })
        }
    }
    catch (err) {
        console.error('Error', err.message);
        // Error status in case of internal server error
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

// @desc restaurants pics
// @route GET /api/places/restaurants/pics/:id
// @access public
const nearbyRestaurantsPics = async (req, res, next) => {
    // console.log('Hey I got your request')
    // return res.status(200).json({message: "Hey I got the request"})
    console.log(req.params.id);
    const fsq_id = await req.params.id;
    try {
        const response = await axios.get(`https://api.foursquare.com/v3/places/${fsq_id}/photos?limit=1&sort=POPULAR&classification=indoor`, {
            headers: {
                accept: 'application/json',
                Authorization: process.env.API_KEY
            }
        })
        if (response.status === 200) {
            const responseData = response.data;
            return res.status(200).json(responseData);
        }
        else {
            return res.status(response.status).json({ error: "Non-200 status code recieved" })
        }
    }
    catch (err) {
        console.log('Error: ', err.message);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

// @desc nearby activities
// @route GET /api/places/activities
// @access public
const nearbyActivities = async (req, res, next) => {
    try {
        const response = await axios.get('https://api.foursquare.com/v3/places/search?categories=10000', {
            headers: {
                accept: 'application/json',
                Authorization: process.env.API_KEY
            }
        })
        if (response.status == 200) {
            const responseData = response.data
            return res.json(responseData).status(response.status)
        }
        else {
            return res.status(response.status).json({ message: 'Non-200 status code recieved' })
        }
    }
    catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

// @desc nearby activities pics
// @route GET /api/places/activities/pics
// @access public

const nearbyActivitiesPics = async (req, res, next) => {
    try {
        const fsq_id = await req.params.id;
        const response = await axios.get(`https://api.foursquare.com/v3/places/${fsq_id}/photos?limit=1&sort=POPULAR&classification=indoor`,
            {
                headers: {
                    accept: 'application/json',
                    Authorization: process.env.API_KEY
                }
            }
        )
        if (response.status == 200) {
            const responseData = response.data;
            return res.status(200).json(responseData);
        }
        else {
            return res.status(response.status).json({ error: 'Non-200 status code recieved' })
        }
    }
    catch (err) {
        return res.status(500).json({ err: 'Internal Server Error' })
    }
}

// @desc nearby lodges
// @route GET /api/places/lodges
// @access public

const nearbyLodges = async (req, res, next) => {
    try {
        const response = await axios.get('https://api.foursquare.com/v3/places/search?categories=19009', {
            headers: {
                accept: 'application/json',
                Authorization: process.env.API_KEY
            }
        })
        if (response.status == 200) {
            const responseData = response.data
            return res.json(responseData).status(response.status)
        }
        else {
            return res.status(response.status).json({ message: 'Non-200 status code recieved' })
        }
    }
    catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

// @desc nearby lodges pics
// @route GET /api/places/lodges/pics
// @access public

const nearbyLodgesPics = async (req, res, next) => {
    try {
        const fsq_id = await req.params.id;
        const response = await axios.get(`https://api.foursquare.com/v3/places/${fsq_id}/photos?limit=1&sort=POPULAR&classification=indoor`,
            {
                headers: {
                    accept: 'application/json',
                    Authorization: process.env.API_KEY
                }
            }
        )
        if (response.status == 200) {
            const responseData = response.data;
            return res.status(200).json(responseData);
        }
        else {
            return res.status(response.status).json({ error: 'Non-200 status code recieved' })
        }
    }
    catch (err) {
        return res.status(500).json({ err: 'Internal Server Error' })
    }
}

// @desc search places
// @route GET /api/places/search/query
// @access public
const searchPlaces = async (req, res, next) => {
    try {
        const query = req.params.query;
        console.log(query);
        const response = await axios.get(`https://api.foursquare.com/v3/places/search?query=${query}`,
            {
                headers: {
                    accept: 'application/json',
                    Authorization: process.env.API_KEY
                }
            }
        )
        if (response.status == 200) {
            const data = response.data;
            return res.status(200).json(data);
        }
        else{
            return res.status(response.status).json({error: 'Non-200 status code recieved'})
        }
    }
    catch(err)
    {
        return res.status(500).json({error: 'Internal Server Error'})
    }
}

module.exports = {
    nearbyRestaurants, nearbyRestaurantsPics, nearbyActivities, nearbyActivitiesPics, nearbyLodges, nearbyLodgesPics, searchPlaces

};