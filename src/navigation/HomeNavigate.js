import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import HowToPlay from '../views/HowToPlay';
import CreateTeams from '../views/CreateTeams';
import SettingsScreen from '../views/Settings';
import TeamMembers from '../views/TeamMembers';
import CurrentPlayer from '../views/CurrentPlayer';
import GameMultyWord from '../views/GameMultyWord';
import GameSingleWord from '../views/GameSingleWord';
import Answers from '../views/Answers';
import EndGame from '../views/EndGame';

const Stack = createNativeStackNavigator();

function HomeNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="HowToPlay"
          component={HowToPlay}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="CreateTeams"
          component={CreateTeams}
          options={{
            // headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            //headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="TeamMembers"
          component={TeamMembers}
          options={{
            //headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="CurrentPlayer"
          component={CurrentPlayer}
          options={{
            //headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="GameMultyWord"
          component={GameMultyWord}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="GameSingleWord"
          component={GameSingleWord}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Answers"
          component={Answers}
          options={{
            //headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="EndGame"
          component={EndGame}
          options={{
            headerShown: false,
            headerTransparent: false,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigate;