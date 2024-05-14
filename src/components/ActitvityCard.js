import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ActitvityCard = ({ id, name, address, prefix_icon, suffix_icon, categories, geocodes, location }) => {
    const [img, setImg] = useState();



    useEffect(() => {
        const fetchPics = async () => {
            try {
                const response = await axios(`http://192.168.1.4:5001/api/places/activities/pics/${id}`)
                if (response.status == 200) {
                    const responseData = response.data[0];
                    console.log(response.data[0]);
                    if (responseData.prefix && responseData.suffix) {
                        setImg({ uri: responseData.prefix + '144x176' + responseData.suffix })
                    }
                }
                else {
                    console.log('Unable to fetch data: ', response.error);
                }
            }
            catch (err) {
                console.log('Error: ', err.message);
            }
        }
        fetchPics()
    }, [])


    const altImg = { uri: prefix_icon + 'bg_120' + suffix_icon };
    console.log('AltImg: ', altImg)

    return (
        <TouchableOpacity className='h-48 w-40 rounded-lg mr-2'>
            {/* If the image is available */}
            {img && <Image source={img} className=' h-full w-full rounded-lg' />}
            {/* If the image is not available */}
            {!img && <Image source={altImg} className='h-full w-full rounded-lg  ' />}
            


            <Text className='font-bold text-md bottom-20 left-1 text-white'>{name}</Text>
            <Text className='text-xs left-1 bottom-20 text-white'>{address}</Text>
        </TouchableOpacity >
    )
}

export default ActitvityCard