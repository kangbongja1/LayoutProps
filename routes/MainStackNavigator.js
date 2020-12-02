import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from "../screens/layout"
import Home from "../screens/home"
import NextScreen from "../screens/NextScreen"
import Weather from "../screens/weather"

const Nav = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home' >
                <Nav.Screen 
                    name = "Home" 
                    component = {Home} 
                    options={{ title: 'home Screen'}} 
                />

                <Nav.Screen 
                    name = "Layout" 
                    component = {Layout} 
                    options={{ title: 'layout Screen'}} 
                />

                <Nav.Screen 
                    name = "NextScreen" 
                    component = {NextScreen} 
                    options={{ title: 'NextScreen'}} 
                />     
                      <Nav.Screen
                      name = "weather" 
                component = {Weather} 
                options={{ title: 'weather screen'}} 
            />       
            </Nav.Navigator>
        </NavigationContainer>

    )
}

export default MainStackNavigator