import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [placesData, setPlacesData] = useState([]);
    const Navigation = useNavigation();
    const searchPlace = async () => {
        try {
            console.log(search);
            if (search != '') {

                const response = await axios.get(`http://192.168.1.7:5001/api/places/search/${search}`);
                if (response.status == 200) {
                    const data = response.data.results;
                    console.log(data);
                    setPlacesData(data);
                }
                else {
                    console.log("Error: ", err.message)
                }
            }
            else{
                setPlacesData(null);
                console.log(placesData);
            }

        }
        catch (err) {
            console.log("Unable to fetch data: ", err.message);
        }
    }


    return (
        <View className='flex-row items-center justify-between p-4 bottom-4 bg-gray-200 w-11/12 rounded-xl' style={{ elevation: 4, shadowColor: 'darkviolet' }}>
            <TextInput value={search} onChangeText={(text) => { setSearch(text) }} placeholder='Searh for exciting places or activities nearby' className='' />
            <TouchableOpacity onPress={() => {
                searchPlace();
                Navigation.navigate('SearchScreen', { placesData })
            }}>
                <Ionicons name='arrow-forward-circle-outline' size={30} color={'darkviolet'} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar;