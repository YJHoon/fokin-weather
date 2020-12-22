import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

// export default function App() {
//   return <Loading />
// }

export default class extends React.Component {
  state = {
    isLoading: true,

  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync(); 
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("위치를 찾을 수 없음", "테스트")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
