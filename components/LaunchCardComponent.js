import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
function LaunchCardComponent({launch}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.name]}>{launch.Name}</Text>
      <Text style={styles.text}>{launch.Launch_Service_Provider?.Name}</Text>
      <Text style={styles.text}>Status: {launch.Status?.Name}</Text>
      <Text style={[styles.text, styles.windowStart]}>
        Window Start: {launch.Window_start}
      </Text>
      <Text style={styles.text}>{launch.Pad?.Location.Name}</Text>
      <Text style={styles.text}>{launch.Pad?.Name}</Text>
      <Text style={styles.missionDesc}>Mission Description:</Text>
      <Text style={styles.text}>{launch.Mission?.Description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    backgroundColor: '#86b2c4',
    opacity: 0.85,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    paddingBottom: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  windowStart: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  missionDesc: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default LaunchCardComponent;
