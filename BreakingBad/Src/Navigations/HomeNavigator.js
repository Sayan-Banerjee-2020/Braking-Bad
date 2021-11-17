import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/home';
import Favourite from '../Screens/favourite';
import Details from '../Screens/details';
import Search from '../Screens/search';


const Stack = createStackNavigator();


export default class SplashNavigator extends Component {
    render() {
        return (

            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="home" component={Home} initialRouteName="home" />
                <Stack.Screen name="favourite" component={Favourite}/>
                <Stack.Screen name="details" component={Details}/>
                <Stack.Screen name="search" component={Search}/>
            </Stack.Navigator>


        )
    }
}