import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Platform } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CultureImage, DrawerImage, ImageImage, LogoImage, MathImage, PubImage, SportImage, TvImage } from '../assets/images';
import { Video, AVPlaybackStatus } from 'expo-av';

const Home = (props) => {

    const navigation = useNavigation();
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const selections = [
        {
            id: '1',
            image: ImageImage,
            name: 'Santé',
        },
        {
            id: '2',
            image: SportImage,
            name: 'Sport',
        },
        {
            id: '3',
            image: MathImage,
            name: 'Culture',
        },
        {
            id: '4',
            image: CultureImage,
            name: 'Math',
        },
        {
            id: '5',
            image: CultureImage,
            name: 'Math',
        },
        {
            id: '6',
            image: CultureImage,
            name: 'Math',
        },
    ];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    })


    return (
        <SafeAreaView className='bg-[#dbd8d8] flex-1' style={{ paddingTop: Platform.OS ? 30 : '' }}>
            <View className='flex-row items-center justify-between pl-8 bg-[#FFFFFF]'>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                        <Image source={DrawerImage} />
                    </TouchableOpacity>
                </View>
                <Text className='font-bold text-xl'>Accueil</Text>
                <View>
                    <Image source={LogoImage} />
                </View>
            </View>

            <ScrollView>
                {/* Player video */}
                <View className='bg-[#fff]'>
                    <Video
                        ref={video}
                        className='w-full h-48'
                        source={{
                            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <View className='w-auto h-20 px-5 flex-row items-center bg-[##FFFFFF]'>
                        <Image source={TvImage} className='w-7 h-5 mr-4' />
                        <Text className='text-black text-base font-bold shrink'>Pêcher à bord des pirogues traditionnelles du Sénégal I SLICE
                        </Text>
                    </View>
                </View>

                <View className='mt-1 w-full h-22'>
                    <Image source={PubImage} className='w-full h-22' />
                </View>

                <View className='mt-7 px-2 flex-row items-center'>
                    <View className='w-6 border border-red-600 rotate-90'></View>
                    <Text className='font-bold text-xl'>Sélections</Text>
                </View>

                <View className='px-4 mt-4 flex-row justify-around flex-wrap'>
                    {selections.map((row, index) => {
                        return <TouchableOpacity onPress={() => navigation.navigate('VideoDetails', {
                            video: row
                        })} key={row.id}>
                            <View className='justify-center mb-3'>
                                <Image source={row.image} />
                                <Text className='font-bold text-lg self-center'>{row.name}</Text>
                            </View>
                        </TouchableOpacity>
                    })}

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;