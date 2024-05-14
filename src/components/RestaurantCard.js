import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const RestaurantCard = ({ id, name, address, prefix_icon, suffix_icon, categories, geocodes, location }) => {
    // const [imgData, setImgData] = useState([]);
    const [img, setImg] = useState();
    useEffect(() => {
        const fetchPics = async () => {
            try {
                const response = await axios.get(`http://192.168.1.4:5001/api/places/restaurants/pics/${id}`)

                if (response.status == 200 && response.data.length > 0) {
            
                    // directly using the fetched data
                    const data = response.data[0];

                    // checking if the data is null or not and then setting the img state
                    if (data.prefix && data.suffix) {
                        setImg({ uri: data.prefix + '144x176' + data.suffix })
                    }

                }
            }
            catch (err) {
                console.log(err.message);
            }
        }

        fetchPics();
    }, [])
    // alternate if the image is not available i.e icons
    const altImg = { uri: prefix_icon + 'bg_120' + suffix_icon }


    return (
        <TouchableOpacity className='h-48 w-40 rounded-lg mr-2 '>
            {/* If the image is available */}
            {img && <Image source={img} className=' h-full w-full rounded-lg' />}
            {/* If the image is not available */}
            {!img && <Image source={altImg} className='h-full w-full rounded-lg' />}
            <Text className='font-bold text-md bottom-20 left-1 text-white'>{name}</Text>
            <Text className='text-xs text-white left-1 bottom-20'>{address}</Text>
        </TouchableOpacity>



    )
}

export default RestaurantCard