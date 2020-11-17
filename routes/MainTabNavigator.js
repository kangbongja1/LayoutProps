import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Layout from "../screens/layout"
import Home from "../screens/home"
import NextScreen from "../screens/NextScreen"

const Tab = createBottomTabNavigator();

function MainTabNavigator(){
    return(
        <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' >
            <Tab.Screen 
                name = "Home" 
                component = {Home} 
                options={{ title: 'home'}} 
            />

            <Tab.Screen 
                name = "Layout" 
                component = {Layout} 
                options={{ title: 'layout'}} 
            />

            <Tab.Screen 
                name = "NextScreen" 
                component = {NextScreen} 
                options={{ title: 'NextScreen'}} 
            />      
        </Tab.Navigator>
    </NavigationContainer>


    )
}

export default MainTabNavigator