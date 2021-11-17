import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;



export default class Details extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <View style={styles.Container}>
          <View style={{ height: Deviceheight / 8, width: Devicewidth / 1.2, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={{fontSize:20,color:"#000"}}>details</Text>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})