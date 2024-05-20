import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SearchCard from '../components/SearchCard';

const SearchScreen = ({ placesData }) => {
    console.log(placesData);
    const Navigation = useNavigation();
    return (
        <SafeAreaView className='bg-gray-100'>
            <TouchableOpacity className='' onPress={()=>{Navigation.goBack()}}>
                <Ionicons name='arrow-back-circle' className='absolute' size={40} color={'darkviolet'} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 10,
                paddingVertical: 10
            }}>
                <SearchCard />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SearchScreen