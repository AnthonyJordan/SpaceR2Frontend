import React from 'react';
import {View, StyleSheet, Text, Linking, TouchableOpacity} from 'react-native';
function PeopleComponent({people}) {
  async function handleButtonPress(name, craft) {
    await Linking.openURL(
      'https://www.google.com/search?q=' + name + '+' + craft,
    );
  }
  if (!people) {
    return (
      <View>
        <Text>Error: people not found</Text>
      </View>
    );
  }

  //splits people into arrays based on craft
  let personSort = [];
  people.forEach(person => {
    personSort[person.Craft]
      ? personSort[person.Craft].push(
          <TouchableOpacity
            key={person.Name}
            onPress={() => handleButtonPress(person.Name, person.Craft)}>
            <Text style={styles.personText}>{person.Name}</Text>
          </TouchableOpacity>,
        )
      : (personSort[person.Craft] = [
          <TouchableOpacity
            key={person.Name}
            onPress={() => handleButtonPress(person.Name, person.Craft)}>
            <Text style={styles.personText}>{person.Name}</Text>
          </TouchableOpacity>,
        ]);
  });

  let returnView = [];
  Object.keys(personSort).forEach(key =>
    returnView.push(
      <View style={styles.craft} key={key}>
        <Text style={styles.spaceCraftText}>Spacecraft:</Text>
        <Text style={styles.craftText}>{key}</Text>
        {personSort[key]}
      </View>,
    ),
  );

  return <View style={styles.container}>{returnView}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  spaceCraftText: {
    fontSize: 16,
    color: '#858585',
  },
  craft: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#48424d',
    margin: 10,
    opacity: 0.85,
  },
  craftText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#858585',
  },
  personText: {
    fontSize: 20,
    padding: 5,
    color: '#5b7deb',
    textDecorationLine: 'underline',
  },
});

export default PeopleComponent;
