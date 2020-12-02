import React from 'react';
import {Text, Alert, StyleSheet, View} from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const apikey = process.env.REACT_APP_WEATHER_KEY;

const weatherOptions =  {
    Clear: {
        iconName: "weather-sunny"
    },
    Clouds: {
        iconName: "weather-cloudy"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy"
    },
    Drizzle: {
        iconName: "weather-partly-rainy"
    },
    Rain: {
        iconName: "weather-rainy"
    },
    Snow: {
        iconName: "weather-snowy"
    },
    Mist: {
        iconName: "weather-fog"
    },
    Smoke: {
        iconName: "weather-fog"
    },
    Haze: {
        iconName: "weather-hazy"
    },
    Dust: {
        iconName: "weather-cloudy-alert"
    },
    Fog: {
        iconName: "weather-fog"
    },
    Sand: {
        iconName: "weather-cloudy-alert"
    },
    Ash: {
        iconName: "weather-cloudy-alert"
    },
    Squall: {
        iconName: "weather-tornado"
    },
    Tornado: {
        iconName: "weather-tornado"
    },


}

export default class Weather extends React.Component {

    state = {
        cond : "Clear"
    };

    getWeather = async(latitude, longitude) => {
        const {data } = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
        );
        console.log(data);
        console.log(data.main.temp); 
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
        console.log(data.weather[0].main);
        this.setState({cond: data.weather[0].main, temp: data.main.temp});

    }

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const location = await Location.getCurrentPositionAsync();
            console.log(location);
            console.log(location.coords.latitude, location.coords.longitude);

            this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch(error) {
            Alert.alert("Error", {error})
                }
    };

    

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {cond, temp} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={256} color="black" />
                    <Text style={styles.temptitle}>{temp}</Text>
                </View>

                <View style={styles.halfcontainer}></View>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temptitle: {
        fontSize: 48,
    }
})