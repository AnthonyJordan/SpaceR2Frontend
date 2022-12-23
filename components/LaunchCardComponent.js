import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
function LaunchCardComponent({launch}) {
  return (
    <View style={styles.container}>
      <Text>{launch.Name}</Text>
      <Text>{launch.Launch_Service_Provider?.Name}</Text>
      <Text>Status: {launch.Status?.Name}</Text>
      <Text>{launch.Window_start}</Text>
      <Text>{launch.Pad?.Location.Name}</Text>
      <Text>{launch.Pad?.Name}</Text>
      <Text>{launch.Mission?.Description}</Text>
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
    backgroundColor: '#bdbfbe',
  },
});

export default LaunchCardComponent;
