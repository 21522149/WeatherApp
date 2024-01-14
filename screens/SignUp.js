import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import AppNavigation from '../navigation/appNavigation'
import HomeScreen from './HomeScreen'
import { useNavigation } from '@react-navigation/native'
export default function SignUp() {
    const navigation = useNavigation();
    return(
        
        <View className="flex justify-between h-full">
            <Image 
                blurRadius={70} 
                source={require('../assets/images/bg2.png')} 
                className="absolute w-full h-full" />

            <View className="mx-4 my-10">

                <View className="item-center my-10">
                    
                    <Text className="text-white text-xl font-bold text-center">Sign Up</Text>

                    <View className="space-y-2 mx-2">
                    
                        <Text className="text-white text-lg font-bold">Email:</Text>
                        <TextInput className="p-4 bg-white rounded-full mb-3" />
                    
                        <Text className="text-white text-lg font-bold">Password:</Text>
                        <TextInput className="p-4 bg-white rounded-full mb-3" />

                        <Text className="text-white text-lg font-bold">Comfirm password:</Text>
                        <TextInput className="p-4 bg-white rounded-full mb-3" />

                    </View>

                    <View>
                        <TouchableOpacity style={{backgroundColor: '#50C878'}} onPress={()=> navigation.navigate('Login')} className="my-6 rounded-full p-3 shadow-sm mx-2">
                            <Text className="text-center text-white text-lg font-bold">Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        </View>
    )
}