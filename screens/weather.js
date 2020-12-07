import React from 'react';
import {Text, Alert, StyleSheet, View} from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const apikey = process.env.REACT_APP_WEATHER_KEY;

const weatherOptions =  {
    Clear: {
        iconName: "weather-sunny"
        ,
        expression: "맑음"
        ,
        comment: "날씨만큼 기분좋은 하루 되세요!"
        ,
        commentadd: "md-happy",
    },
    Clouds: {
        iconName: "weather-cloudy"
        ,
        expression: "구름"
        ,
        commentadd: "md-musical-notes"  ,
        comment: "기분전환! 조금 신나는 음악은 어때요?"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy"
        ,
        expression: "천둥 번개"
        ,
        commentadd: "md-tv"  ,
        comment: "밖은 위험해! 집에서 영화 한 편!"
    },
    Drizzle: {
        iconName: "weather-partly-rainy"
        ,
        expression: "비 조금",
        commentadd: "md-paper-plane"  ,
        comment: "우산 꼭 챙기세요!"
    },
    Rain: {
        iconName: "weather-rainy"
        ,
        expression: "비",
        commentadd: "md-paper-plane"  ,
        comment: "우산 꼭 챙기세요!"
    },
    Snow: {
        iconName: "weather-snowy"
        ,
        expression: "눈",
        commentadd: "md-tablet-portrait"  ,
        comment: "지인에게 밖에 눈 온다고 알려주세요!"
    },
    Mist: {
        iconName: "weather-fog"
        ,
        expression: "옅은 안개",
        commentadd: "md-glasses"  ,
        comment: "안개 때문에 잘 안보여요! 조심하세요!"
    },
    Smoke: {
        iconName: "weather-fog"
        ,
        expression: "스모그",
        commentadd: "md-glasses"  ,
        comment: "스모그 때문에 잘 안보여요! 조심하세요!"
    },
    Haze: {
        iconName: "weather-hazy"
        ,
        expression: "흐림",
        commentadd: "md-glasses"  ,
        comment: "많이 흐려요!"
    },
    Dust: {
        iconName: "weather-cloudy-alert"
        ,
        expression: "먼지",
        commentadd: "md-hand"  ,
        comment: "잠깐! 마스크 챙기셨나요?"
    },
    Fog: {
        iconName: "weather-fog"
        ,
        expression: "안개",
        commentadd: "md-glasses"  ,
        comment: "안개 때문에 잘 안보여요! 조심하세요!"
    },
    Sand: {
        iconName: "weather-cloudy-alert"
        ,
        expression: "황사",
        commentadd: "md-hand"  ,
        comment: "잠깐! 마스크 챙기셨나요?"
    },
    Ash: {
        iconName: "weather-cloudy-alert"
        ,
        expression: "재 날림",
        commentadd: "md-hand"  ,
        comment: "잠깐! 마스크 챙기셨나요?"
    },
    Squall: {
        iconName: "weather-tornado"
        ,
        expression: "강한 돌풍",
        commentadd: "md-sad"  ,
        comment: "나가면 꼭 조심하세요!"
    },
    Tornado: {
        iconName: "weather-tornado"
        ,
        expression: "회오리",
        commentadd: "md-sad"  ,
        comment: "나가면 꼭 조심하세요!"
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
        this.setState({cond: data.weather[0].main, temp: data.main.temp, tempmax: data.main.temp_max, tempmin: data.main.temp_min});

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
        const {cond, temp, humidity, tempmax, tempmin } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={256} color="black" />
                    <Text style={styles.temptitle}>오늘의 날씨는 {weatherOptions[cond].expression} 입니다.</Text>
                    <Text style={styles.temptitle}>평균 기온 {temp}℃</Text>
                    <Text style={styles.temptitle}>최고 기온 {tempmax}℃</Text>
                    <Text style={styles.temptitle}>최저 기온 {tempmin}℃</Text>
                </View>

            <View style={styles.halfcontainer}>
                <Ionicons name={weatherOptions[cond].commentadd} size={48} color="black" />
                <Text style={styles.temptitle}> {weatherOptions[cond].comment} </Text>
                </View>

            </View>
        );
    };
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'white', 
        },
        playingSpace: {
            backgroundColor: 'white',
            borderColor: 'blue',
            borderWidth: 3,
          },
        halfcontainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        temptitle: {
            fontSize: 20,
        }
    }) 

