import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Artifika_400Regular, useFonts } from '@expo-google-fonts/artifika'
import { Ionicons } from '@expo/vector-icons'
import RestaurantCard from '../components/RestaurantCard'
import axios from 'axios'
import FeaturedRestaurants from '../components/FeaturedRestaurants'
import FeaturedActivities from '../components/FeaturedActivities'
import FeaturedLodge from '../components/FeaturedLodge'
import SearchBar from '../components/SearchBar'


const HomeScreen = () => {


    const [fontsLoaded] = useFonts({
        Artifika_400Regular,
    })
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View className='flex-1 items-center justify-center bg-gray-100'>
            
            {/* Background Image : Home Page */}
            <ImageBackground source={require('../../assets/homePagePic.jpg')} className='w-full h-72'>
                <Text className='text-white text-4xl left-2 top-16' style={{ fontFamily: "Artifika_400Regular" }}>Discover.{"\n"}<Text className='text-violet-900'>Plan.</Text>{"\n"}Wander.{"\n"}Your  <Text className='text-violet-900'>perfect{"\n"}</Text>trip, simplified.</Text>
            </ImageBackground>

            {/* Search bar */}

            <SearchBar />


            {/* Suggestions based on location of user */}

            <ScrollView className="" verical contentContainerStyle={{
                paddingHorizontal: 8,
                paddingVertical: 5
            }}>
                {/* Featured Activities */}
                <Text className='text-lg text-violet-900' style={{ fontFamily: 'Artifika_400Regular' }}>Activities</Text>
                <FeaturedActivities />

                {/* Featured restaurants */}
                <Text className='text-lg text-violet-900 mt-4' style={{ fontFamily: 'Artifika_400Regular' }}>Restaurants</Text>
                <FeaturedRestaurants />


                {/* Featured Lodges */}
                <Text className='text-lg text-violet-900 mt-4' style={{ fontFamily: 'Artifika_400Regular' }}>Lodges</Text>
                <FeaturedLodge />

            </ScrollView>

        </View>
    )
}

export default HomeScreen




