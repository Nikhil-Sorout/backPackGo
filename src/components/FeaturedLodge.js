import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard';
import axios from 'axios'
import LodgeCard from './LodgeCard';

const FeaturedLodge = () => {
    const [lodgeData, setLodgeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.7:5001/api/places/lodges')
                if (response.status == 200) {
                    setLodgeData(response.data.results);
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
                paddingVertical: 10
            }}>
            {lodgeData.map((lodge) =>
            (
                <LodgeCard
                    key={lodge.fsq_id}
                    id={lodge.fsq_id}
                    name={lodge.name}
                    address={lodge.location.formatted_address}
                    prefix_icon={lodge.categories[0].icon.prefix}
                    suffix_icon={lodge.categories[0].icon.suffix}
                    categories={lodge.categories}
                    geocodes={lodge.geocodes}
                    location={lodge.location}
                />
            ))}
        </ScrollView>
    )
}

export default FeaturedLodge