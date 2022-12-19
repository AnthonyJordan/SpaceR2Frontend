import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
function NasaPod({nasaPod}) {
  const imageUrl = nasaPod.hdurl ? nasaPod.hdurl : nasaPod.url;
  return (
    <View style={styles.container}>
      <Text>{nasaPod?.title}</Text>
      <Image
        style={styles.image}
        source={{uri: imageUrl}}
        resizeMode={'contain'}
      />
      <Text>{nasaPod?.explanation}</Text>
      <Text>{nasaPod?.copyright}</Text>
      <Text>{nasaPod?.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 355,
    height: 400,
  },
  container: {
    alignItems: 'center',
  },
});

export default NasaPod;
