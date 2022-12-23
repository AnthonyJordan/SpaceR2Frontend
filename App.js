/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavBarComponent from './components/NavBarComponent';
import NasaPoDComponent from './components/NasaPoDComponent';
import PeopleComponent from './components/PeopleComponent';
import ISSLocationComponent from './components/ISSLocationComponent';
import RocketLaunchesComponent from './components/RocketLaunchesComponent';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [nasaPod, setNasaPod] = useState(null);
  const [people, setPeople] = useState(null);
  const [launches, setLaunches] = useState(null);
  const [selection, setSelection] = useState(null);
  const [returnView, setReturnView] = useState(<></>);

  useEffect(() => {
    fetch(
      'http://spacer2backend.eba-mmnzm8qm.us-east-1.elasticbeanstalk.com/api/nasapod',
    ).then(r => {
      if (r.ok) {
        r.json()
          .then(json => setNasaPod(json.Value))
          .then(() => setSelection('nasapod'));
      }
    });
  }, []);

  useEffect(() => {
    fetch(
      'http://spacer2backend.eba-mmnzm8qm.us-east-1.elasticbeanstalk.com/api/people',
    ).then(r => {
      if (r.ok) {
        r.json().then(json => setPeople(json.Value));
      }
    });
  }, []);
  useEffect(() => {
    fetch(
      'http://spacer2backend.eba-mmnzm8qm.us-east-1.elasticbeanstalk.com/api/launches',
    ).then(r => {
      if (r.ok) {
        r.json().then(json => setLaunches(json.Value));
      }
    });
  }, []);

  useEffect(() => {
    if (selection == 'nasapod') {
      setReturnView(<NasaPoDComponent nasaPod={nasaPod} />);
    } else if (selection == 'people') {
      setReturnView(<PeopleComponent people={people} />);
    } else if (selection == 'launches') {
      setReturnView(<RocketLaunchesComponent launches={launches} />);
    } else if (selection == 'isslocation') {
      setReturnView(<ISSLocationComponent />);
    }
  }, [selection]);

  function onButtonPress(buttonPressed) {
    setSelection(buttonPressed);
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('./assets/Space_Shuttle_Columbia_launching.jpg')}>
        <ScrollView style={styles.returnWindown}>{returnView}</ScrollView>
      </ImageBackground>
      <NavBarComponent style={styles.navBar} onButtonPress={onButtonPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-end',
  },
  navBar: {
    flexBasis: '9%',
    zIndex: 1,
    position: 'fixed',
  },
  returnWindown: {
    flexBasis: '91%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default App;
