import {View} from 'react-native';
import LaunchCardComponent from './LaunchCardComponent';

function RocketLaunchesComponent({launches}) {
  const launchCards = [];
  if (!launches) {
    return (
      <View>
        <Text>Error: launches not found</Text>
      </View>
    );
  }
  launches.forEach(launch => {
    launchCards.push(
      <LaunchCardComponent
        launch={launch}
        key={launch.Name}></LaunchCardComponent>,
    );
  });
  return <View>{launchCards}</View>;
}

export default RocketLaunchesComponent;
