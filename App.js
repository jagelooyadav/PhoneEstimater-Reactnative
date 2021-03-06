import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoundedButton } from "./ViewComponents"
const Stack = createNativeStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome', headerShown: false }}
                />
            </Stack.Navigator>
            </NavigationContainer>
            );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
      marginTop: 0
  },
});

const HomeScreen = ({ navigation }) => {
  return (
          <View>
    <Text>Hello How are you</Text>
    <RoundedButton title = "Jageloo"/>
          </View>
  );
};
