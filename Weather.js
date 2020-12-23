import React from 'react';
import propTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp}) {
  return(
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={86} name="weather-lightning-rainy" />
        <Text>{temp}</Text>
      </View>
    </View>
  )
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42
  }
})