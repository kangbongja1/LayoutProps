import React from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';

function NextScreen({navigation}) {
    return (
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    buttonContainer:{
        backgroundColor: 'black',
        borderRadius : 5,
        padding: 10,
        margin:20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
})

export default NextScreen