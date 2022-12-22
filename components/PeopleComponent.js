import React from 'react';
import {View, StyleSheet, Text, Linking, TouchableOpacity} from 'react-native';
function PeopleComponent({people}) {
  async function handleButtonPress(name, craft) {
    await Linking.openURL(
      'https://www.google.com/search?q=' + name + '+' + craft,
    );
  }

  //splits people into arrays based on craft
  let personSort = [];
  people.forEach(person => {
    personSort[person.Craft]
      ? personSort[person.Craft].push(
          <TouchableOpacity
            key={person.Name}
            onPress={e => handleButtonPress(person.Name, person.Craft)}>
            <Text style={styles.personText}>{person.Name}</Text>
          </TouchableOpacity>,
        )
      : (personSort[person.Craft] = [
          <TouchableOpacity
            key={person.Name}
            onPress={e => handleButtonPress(person.Name, person.Craft)}>
            <Text style={styles.personText}>{person.Name}</Text>
          </TouchableOpacity>,
        ]);
  });

  let returnView = [];
  Object.keys(personSort).forEach(key =>
    returnView.push(
      <View style={styles.craft} key={key}>
        <Text>Spacecraft:</Text>
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
    backgroundColor: '#babfbb',
  },
  craft: {
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  craftText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  personText: {
    fontSize: 20,
    padding: 5,
  },
});

export default PeopleComponent;
