import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const VideoList = (props) => {

    const { id, image, name, date } = props;

    return (
        <TouchableOpacity className='h-28 bg-white flex-row mx-5 px-3 pt-3 rounded-xl my-2'>
            <View className='justify-between w-2/3'>
                <Text className='font-bold text-sm shrink'>{name.substring(0, 40) + "..."}</Text>
                <Text className='text-[#939191]'>{date}</Text>
            </View>
            <View className='justify-center '>
                <Image source={image} />
            </View>
        </TouchableOpacity>
    )
}

export default VideoList