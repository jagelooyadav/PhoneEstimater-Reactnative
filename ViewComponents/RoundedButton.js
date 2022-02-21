import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export class RoundedButton extends React.Component {
    render() {
        return (
                <View style={styles.button}>
                <Button title = {this.props.title} color = "red" />
                </View>
                );
    }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   button: {
      backgroundColor: '#00aeef',
      borderColor: 'red',
      borderWidth: 0,
      borderRadius: 20
   }
})


