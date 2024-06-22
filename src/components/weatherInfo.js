import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { WEATHER_ICON } from "../constant"

const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>The weather of {weatherData.kecamatan}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{weatherData.tempC} C</Text>
      <Text style={[styles.temperature, styles.marginTop0]}>{weatherData.tempF} F</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{ uri: WEATHER_ICON + "/" + weatherData.kodeCuaca + ".png" }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.text, styles.bold]}>{weatherData.cuaca}</Text>
      </View>
      <Text style={styles.text}>{weatherData.jamCuaca}</Text>
      
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Humidity :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.humidity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginTop0: {
    marginTop: 0,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
})

export default WeatherInfo