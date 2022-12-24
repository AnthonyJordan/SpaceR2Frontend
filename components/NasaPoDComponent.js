import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AutoDimensionImage, {
  imageDimensionTypes,
} from 'react-native-auto-dimensions-image';
function NasaPoDComponent({nasaPod}) {
  const imageUrl = nasaPod.hdurl ? nasaPod.hdurl : nasaPod.url;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>{nasaPod?.title}</Text>
      <AutoDimensionImage
        source={{
          uri: imageUrl,
          cache: 'default',
        }}
        dimensionType={imageDimensionTypes.WIDTH}
        dimensionValue={355}
        style={styles.image}
        defaultImageProps={{resizeMode: 'contain'}}
      />
      <View style={styles.descriptionView}>
        <Text style={styles.text}>{nasaPod?.explanation}</Text>
        <Text style={styles.text}>{nasaPod?.copyright}</Text>
        <Text style={styles.text}>{nasaPod?.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 5,
  },
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#d9d9d9',
    textAlign: 'center',
    fontSize: 18,
  },
  descriptionView: {
    backgroundColor: '#444345',
    opacity: 0.85,
    margin: 10,
    padding: 5,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 50,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 25,
  },
});

export default NasaPoDComponent;
