import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard';
import axios from 'axios'

const FeaturedRestaurants = () => {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.4:5001/api/places/restaurants')
                if (response.status == 200) {
                    setRestaurantData(response.data.results);
                    console.log(response.data.results);
                }
                else {
                    console.log('Unable to fetch data: ', response.error)
                }
            }
            catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 0,
                paddingTop: 10
            }}>
            {restaurantData.map((restaurant) =>
            (
                <RestaurantCard
                    key={restaurant.fsq_id}
                    id={restaurant.fsq_id}
                    name={restaurant.name}
                    address={restaurant.location.formatted_address}
                    prefix_icon={restaurant.categories[0].icon.prefix}
                    suffix_icon={restaurant.categories[0].icon.suffix}
                    categories={restaurant.categories}
                    geocodes={restaurant.geocodes}
                    location={restaurant.location}
                />
            ))}
        </ScrollView>
    )
}

export default FeaturedRestaurants