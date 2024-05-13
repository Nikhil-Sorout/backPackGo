import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Artifika_400Regular, useFonts } from '@expo-google-fonts/artifika'
import { Ionicons } from '@expo/vector-icons'
import RestaurantCard from '../components/RestaurantCard'
import axios from 'axios'
import FeaturedRestaurants from '../components/FeaturedRows'

const HomeScreen = () => {


    const [fontsLoaded] = useFonts({
        Artifika_400Regular,
    })
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View className='items-center justify-center bg-gray-100'>
            <ImageBackground source={require('../../assets/homePagePic.jpg')} className='w-full h-72'>
                <Text className='text-white text-4xl left-2 top-16' style={{ fontFamily: "Artifika_400Regular" }}>Discover.{"\n"}<Text className='text-violet-900'>Plan.</Text>{"\n"}Wander.{"\n"}Your  <Text className='text-violet-900'>perfect{"\n"}</Text>trip, simplified.</Text>
            </ImageBackground>

            <View className='items-start justify-center p-4 bottom-4 bg-gray-200 w-11/12 rounded-xl' style={{ elevation: 4, shadowColor: 'darkviolet' }}>
                <TextInput placeholder='Searh for exciting places or activities nearby' className='' />
            </View>
            {/* Suggestions based on location of user */}
            {/* Restaurants */}
            <View className='bg-gray-100 w-full p-2'>
                <Text className='text-lg text-violet-900' style={{ fontFamily: 'Artifika_400Regular' }}>Restaurants</Text>
                {/* Featured restaurants */}
                <FeaturedRestaurants />


              
            </View>
            
        </View>
    )
}

export default HomeScreen




