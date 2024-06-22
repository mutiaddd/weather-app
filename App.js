import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ActivityIndicator  } from 'react-native'
import WeatherSearch from './src/components/weatherSearch'
import WeatherInfo from './src/components/weatherInfo'
import axios from 'axios'
import { BASE_URL, REGION_URL } from "./src/constant"

const App = () => {
  const [regions, setRegions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('')

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />
      case 'success':
        return <WeatherInfo weatherData={weatherData} />
      case 'error':
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        )
      default:
        return
    }
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/${REGION_URL}`)
      .then((response) => setRegions(response.data))
      .catch((error) => console.log(error))
  }, []);

  const searchWeather = (location) => {
    setStatus('loading')
    
    const region = regions.find((region) => {
      return region.kecamatan.toLowerCase() === location.toLowerCase();
    });

        
    if(!region){
      setStatus("error");
      return
    }
      axios.get(`${BASE_URL}/${region.id}.json`)
        .then((response) => {
          const data = response.data[0];

          data.kecamatan = region.kecamatan;
          console.log(data);
          setWeatherData(data);
          setStatus('success')
        })
        .catch((error) => setStatus('error'));
    
    }
  

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.margintTop20}>{renderComponent()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  marginTop20: {
    marginTop: 20,
  },
})

export default App