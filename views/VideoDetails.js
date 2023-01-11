import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { BackImage, LogoImage, VideoImage } from '../assets/images';
import VideoList from '../components/VideoList';

const VideoDetails = ({ route }) => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    });

    const { video } = route.params;
    const videos = [
        {
            id: '1',
            name: "Sénégal, Saint Louis. Guet N'Dar, le quartier des garçons jouant sur banque du fleuve Sénégal",
            date: '12 mai 2023',
            image: VideoImage,
        },
        {
            id: '2',
            name: "Sénégal, Saint Louis. Guet N'Dar, le quartier des garçons jouant sur banque du fleuve Sénégal",
            date: '12 mai 2023',
            image: VideoImage,
        },
        {
            id: '3',
            name: "Sénégal, Saint Louis. Guet N'Dar, le quartier des garçons jouant sur banque du fleuve Sénégal",
            date: '12 mai 2023',
            image: VideoImage,
        },
        {
            id: '4',
            name: "Sénégal, Saint Louis. Guet N'Dar, le quartier des garçons jouant sur banque du fleuve Sénégal",
            date: '12 mai 2023',
            image: VideoImage,
        },
        {
            id: '5',
            name: "Sénégal, Saint Louis. Guet N'Dar, le quartier des garçons jouant sur banque du fleuve Sénégal",
            date: '12 mai 2023',
            image: VideoImage,
        },
        {
            id: '6',
            name: "Sénégal, Saint Louis. Guet N'Dar, le quartier des garçons jouant sur banque du fleuve Sénégal",
            date: '12 mai 2023',
            image: VideoImage,
        },
        {
            id: '6',
            name: "Sénégal, Saint Louis. Guet N'Dar, le quartier des garçons jouant sur banque du fleuve Sénégal",
            date: '12 mai 2023',
            image: VideoImage,
        },
        {
            id: '7',
            name: "Sénégal, Saint Louis. Guet N'Dar, le quartier des garçons jouant sur banque du fleuve Sénégal",
            date: '12 mai 2023',
            image: VideoImage,
        },
    ];

    return (
        <SafeAreaView className='bg-[#dbd8d8] flex-1' style={{ paddingTop: Platform.OS ? 30 : '' }}>
            <View className='flex-row w-full h-14 items-center justify-between pl-8 bg-[#FFFFFF]'>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={BackImage} />
                    </TouchableOpacity>
                </View>
                <Text className='font-bold text-xl'>{video.name}</Text>
                <View>
                    <Image source={LogoImage} />
                </View>
            </View>

            <ScrollView className='mt-3'>
                {videos.map((row, index) => {
                    return <VideoList id={row.id} name={row.name} date={row.date} image={row.image} key={index} />
                })}
            </ScrollView>

        </SafeAreaView>
    )
}

export default VideoDetails