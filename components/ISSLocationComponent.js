import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
function ISSLocationComponent() {
  const [ISSLocation, setISSLocation] = useState({latitude: 0, longitude: 0});
  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json').then(r => {
      if (r.ok) {
        r.json().then(json => setISSLocation(json.iss_position));
      }
    });
    const interval = setInterval(() => {
      fetch('http://api.open-notify.org/iss-now.json').then(r => {
        if (r.ok) {
          r.json().then(json => setISSLocation(json.iss_position));
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>ISS Location</Text>
      <MapView
        style={styles.mapView}
        region={{
          latitude: parseFloat(ISSLocation.latitude),
          longitude: parseFloat(ISSLocation.longitude),
          latitudeDelta: 2,
          longitudeDelta: 2,
        }}>
        <Marker
          coordinate={{
            latitude: parseFloat(ISSLocation.latitude),
            longitude: parseFloat(ISSLocation.longitude),
          }}
          title={'ISS Location'}
        />
      </MapView>
      <Text style={[styles.text, styles.longLat]}>
        Longitude: {ISSLocation.longitude}
      </Text>
      <Text style={[styles.text, styles.longLat]}>
        Latitude: {ISSLocation.latitude}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mapView: {
    height: 400,
    width: 355,
  },
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#d2d5d9',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
  },
  longLat: {
    fontSize: 20,
  },
});

export default ISSLocationComponent;
