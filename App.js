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
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavBar from './components/NavBar';
import NasaPod from './components/NasaPoD';

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
    if (selection == 'nasapod') {
      setReturnView(<NasaPod nasaPod={nasaPod} />);
    }
  }, [selection]);

  function onButtonPress(buttonPressed) {
    setSelection(buttonPressed);
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.returnWindown}>{returnView}</ScrollView>
      <NavBar style={styles.navBar} onButtonPress={onButtonPress} />
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
  },
});

export default App;
