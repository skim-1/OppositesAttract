import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../components/home';
import Survey from '../components/Survey';
import Accept from '../components/Accept';
import Friends from '../components/Friends';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false

      }
    }
  },
  Survey: {
    screen: Survey,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false
      }
    }
  },
  Accept: {
    screen: Accept,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false
      }
    }
  },
  Friends: {
    screen: Friends,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false
      }
    }
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
