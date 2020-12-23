import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

// export default function App() {
//   return <Loading />
// }

const API_KEY = "b56a7594f80c4213aaed4cb0d56a4030";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({ 
        isLoading: false, 
        temp: data.main.temp
      });
  };

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync(); 
      this.getWeather(latitude, longitude); 
    } catch (error) {
      Alert.alert("위치를 찾을 수 없음", "테스트")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>;
  }
}
