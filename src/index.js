import React from 'react';
import { createSwitchNavigator, createStackNavigator} from 'react-navigation';
import LoginForm from './components/Login';
import IdeaList from './components/idea-list';
import { Icon } from 'react-native-elements';
import { Home } from "./components/Home";
import { Posts } from "./components/Posts";


const AuthStack = createStackNavigator({
  Login: LoginForm
});

const AppStack = createStackNavigator({

  Ideas: {
    screen: IdeaList,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Your IdeaPad',
        headerRight: (
          <Icon 
            type='evilicon'
            name='plus'
            size={30}
            onPress={() => navigation.navigate('Home')}
            iconStyle={{paddingRight: 10}}
          />
        ),
        headerLeft: null
      };
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Posts: {
    screen: Posts,
    navigationOptions: {
      headerTitle: 'Posts'
    }
  }
});

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
);
