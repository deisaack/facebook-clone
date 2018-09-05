import React from 'react';
import { createSwitchNavigator, createStackNavigator} from 'react-navigation';
import Login from './components/Login';
import { Icon } from 'react-native-elements';
import Home from "./components/Home";
import Posts from "./components/Posts";
import Signup from "./components/Signup";
import User from "./components/User";


const AuthStack = createStackNavigator(
    {
      Signup: {
          screen: Signup,
          navigationOptions: ({navigation}) => {
              return {
                  title: 'Signup',
                  headerLeft: null
              };
          }
      },
      Login: Login
    },
    {
        initialRouteName: "Login"
    }
    );

const AppStack = createStackNavigator(
    {
      Ideas: {
        screen: Home,
        navigationOptions: ({navigation}) => {
          return {
            title: 'Your IdeaPad',
            headerRight: (
              <Icon
                type='evilicon'
                name='plus'
                size={30}
                onPress={() => navigation.navigate('Post')}
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
      },
        User: User
    },
    {
        initialRouteName: "User"
    }
);

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'App'
  }
);
