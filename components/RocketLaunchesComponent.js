import {View} from 'react-native';
import LaunchCardComponent from './LaunchCardComponent';

function RocketLaunchesComponent({launches}) {
  const launchCards = [];
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
