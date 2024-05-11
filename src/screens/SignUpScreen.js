import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Ionicons from '@expo/vector-icons';
import { AntDesign, Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    // const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPswd, setShowPswd] = useState(false);
    const Navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1 bg-gray-100 '>
            <View className='justify-center items-center bg-white rounded-3xl'>
                <View className='flex justify-center items-center gap-2 mt-5'>
                    <Image source={require('../../assets/main_logo.png')} className="h-44 w-44" />
                    <Text className='text-gray-400'>Welcome To</Text>
                    <Text className='text-xl font-bold'>Backpack Go</Text>
                </View>
                <View className='justify-center items-center'>
                    <Text className='text-lg font-semibold'>Sign Up</Text>
                    <Text className='w-48 text-center mt-2 text-gray-400'>
                        Hey, Enter your details to set up your travel bag
                    </Text>
                </View>
                <View className='flex justify-center items-center gap-4 mt-4'>
                    <TextInput placeholder='Email Address' placeholderTextColor={"gray"} className=' rounded-xl px-3 py-2 w-72 text-gray-400 bg-gray-100' onChangeText={(email) => { setEmail(email) }} value={email}
                    />
                    <TextInput placeholder='Username' placeholderTextColor={"gray"} className=' rounded-xl px-3 py-2 w-72 text-gray-400 bg-gray-100' onChangeText={(userName) => { setUserName(userName) }} value={userName}
                    />
                    {/* <TextInput placeholder='Phone Number' placeholderTextColor={"gray"} className=' rounded-xl px-3 py-2 w-72 text-gray-400 bg-gray-100' onChangeText={(phone)=>{setPhone(phone)}} value={phone} inputMode='numeric'
            /> */}
                    {/* <TextInput placeholder='Password' placeholderTextColor={"gray"} className=' rounded-xl px-3 py-2 w-72 text-gray-400 bg-gray-100' onChangeText={(passowrd) => { setPassword(password) }} value={password}
                    /> */}
                    <View className='flex w-72'>
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={!showPswd}
                        value={password}
                        onChangeText={(password) => { setPassword(password) }} className=" rounded-xl px-3 py-2 w-72 text-gray-400 bg-gray-100" />
                    <TouchableOpacity className='absolute right-3 top-2.5' onPress={() => { setShowPswd(!showPswd) }}>
                        {showPswd && <Feather name='eye' size={20} color={'#7563F6'} />}
                        {!showPswd && <Feather name='eye-off' size={20} color={'#7563F6'} />}

                    </TouchableOpacity>
                </View>
                </View>

                <TouchableOpacity className='bg-[#7563F6] px-4 py-4 rounded-xl w-36 mt-4 mb-2'>
                    <Text className='text-center text-white font-semibold'>SIGN UP</Text>
                </TouchableOpacity>

            </View>
            
            <View className='flex justify-center items-center gap-4'>
                <AntDesign name='minus' size={30} color={"red"} />
                
                    <Text className='text-[#7563F6] font-semibold'>Already Have An Account?</Text>
                    <TouchableOpacity onPress={()=>{Navigation.navigate('LoginScreen')}} className='w-28 bg-[#A0FBE6] py-2 px-4 rounded-xl'>
                        <Text className='text-center font-bold opacity-60'>LOG IN</Text>
                    </TouchableOpacity>
                <Text className='text-gray-400'>Or Sign Up With</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/Google_Logo.png')} className='h-10 w-10 bg-white rounded-full' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen