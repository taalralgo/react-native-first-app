import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../views/Home';
import VideoDetails from '../views/VideoDetails';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}

export default MyDrawer