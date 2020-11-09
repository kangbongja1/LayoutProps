import React from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';

function Home({navigation}) {
    return (
        <>
            <Image 
                source={require('../assets/frog-1371919.png')}
                style={{ width: 400, height: 400}}
            />
            <Button
                title="go to layout"
                onPress={() => navigation.navigate('Layout')}
            />
             <Button
                title="NextScreen"
                onPress={() => navigation.navigate('NextScreen')}
            />
        </>
    );
}

export default Home