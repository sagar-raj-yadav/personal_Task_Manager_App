// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './features/store'; 
import TaskBoard from './pages/TaskBoard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskBoard">
          <Stack.Screen name="TaskBoard" component={TaskBoard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
