import { ScrollView, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ActitvityCard from './ActitvityCard';
const FeaturedActivities = () => {
    const [actData, setActData] = useState([]);
    
    const fetchData = async()=>{
        try{
            const response = await axios.get('http://192.168.1.7:5001/api/places/activities')
            if(response.status == 200)
                {
                    const responseData = response.data;
                    // console.log(responseData.results);
                    setActData(responseData.results);
                }
            else{
                console.log("Unable to fetch data : ", response.error)
            }
        }
        catch(err)
        {
            console.log("Error: ",err.message);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 0,
                paddingVertical: 10
            }}>
            {actData.map((activity) =>
            (
                <ActitvityCard
                    key={activity.fsq_id}
                    id={activity.fsq_id}
                    name={activity.name}
                    address={activity.location.formatted_address}
                    prefix_icon={activity.categories[0].icon.prefix}
                    suffix_icon={activity.categories[0].icon.suffix}
                    categories={activity.categories}
                    geocodes={activity.geocodes}
                    location={activity.location}
                />
            ))}
        </ScrollView>
    )
}

export default FeaturedActivities