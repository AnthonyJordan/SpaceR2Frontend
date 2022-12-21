import React from 'react';
import {TouchableOpacity, View, StyleSheet, Image} from 'react-native';
function NavBarComponent({onButtonPress}) {
  function handleButtonPress(buttonPressed) {
    onButtonPress(buttonPressed);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleButtonPress('nasapod')}>
        <Image source={require('../assets/icons8-picture-64.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('people')}>
        <Image source={require('../assets/icons8-astronaut-64.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons8-rocket-64.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons8-space-station-64.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#a5a8a6',
    justifyContent: 'space-between',
  },
});

export default NavBarComponent;
