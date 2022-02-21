import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export class RoundedButton extends React.Component {
    render() {
        return (
                <View style={ this.props.buttonStyle == "primary" ? styles.primaryButton : styles.secondaryButton }>
                <Button title = {this.props.title}
                color = {this.props.buttonStyle == "primary" ? "white" : "#ED3F6E"}
                />
                </View>
                );
    }
}

const styles = StyleSheet.create({
   primaryButton: {
      backgroundColor: '#ED3F6E',
      borderColor: '#ED3F6E',
      borderWidth: 0,
      borderRadius: 24.0,
      height: 48.0
   },
   secondaryButton: {
   backgroundColor: 'white',
   borderColor: '#ED3F6E',
   borderWidth: 1.0,
   borderRadius: 24.0,
   height: 48.0
}
})


