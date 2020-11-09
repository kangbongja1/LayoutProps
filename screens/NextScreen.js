import React from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';

function NextScreen({navigation}) {
    return (
        <>
            <Image 
                source={require('../assets/android.jpg')}
                style={{ width: 400, height: 400}}
            />
            <Button
                title="go to layout"
                onPress={() => navigation.navigate('Layout')}
            />
            <Button
                title="go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </>
    );
}

export default NextScreen