import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
function ISSLocationComponent() {
  const [ISSLocation, setISSLocation] = useState({latitude: 0, longitude: 0});
  useEffect(() => {
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
    <View>
      <Text>ISS Location</Text>
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
      <Text>Longitude: {ISSLocation.longitude}</Text>
      <Text>Latitude: {ISSLocation.latitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mapView: {
    height: 400,
    width: 355,
  },
});

export default ISSLocationComponent;
