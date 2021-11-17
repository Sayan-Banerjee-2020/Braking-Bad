import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CharecterList from '../Component/character';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const DriverLists = [
  {
    id: '1',
    Name: "Walter White",
    NickName: 'Heisenberg',
    Image: require('../Assets/walter.png')
  },
  {
    id: '2',
    Name: "Jesse Pinkman",
    NickName: "Cap n' Cook",
    Image: require('../Assets/pinkman.png')
  },
  {
    id: '3',
    Name: "Skyler White",
    NickName: 'Sky',
    Image: require('../Assets/skyler.png')
  },
  {
    id: '4',
    Name: "Mike Ehrmantraut",
    NickName: 'Mike',
    Image: require('../Assets/mike.png')
  },
  {
    id: '5',
    Name: "Walter White",
    NickName: 'Heisenberg',
    Image: require('../Assets/walter.png')
  },
  {
    id: '6',
    Name: "Jesse Pinkman",
    NickName: "Cap n' Cook",
    Image: require('../Assets/pinkman.png')
  },
  {
    id: '7',
    Name: "Skyler White",
    NickName: 'Sky',
    Image: require('../Assets/skyler.png')
  },
  {
    id: '8',
    Name: "Mike Ehrmantraut",
    NickName: 'Mike',
    Image: require('../Assets/mike.png')
  }, {
    id: '9',
    Name: "Walter White",
    NickName: 'Heisenberg',
    Image: require('../Assets/walter.png')
  },
  {
    id: '10',
    Name: "Jesse Pinkman",
    NickName: "Cap n' Cook",
    Image: require('../Assets/pinkman.png')
  },
  {
    id: '11',
    Name: "Skyler White",
    NickName: 'Sky',
    Image: require('../Assets/skyler.png')
  },
  {
    id: '14',
    Name: "Mike Ehrmantraut",
    NickName: 'Mike',
    Image: require('../Assets/mike.png')
  },
  {
    id: '15',
    Name: "Jesse Pinkman",
    NickName: "Cap n' Cook",
    Image: require('../Assets/pinkman.png')
  },
]

export default class Search extends Component {
  componentDidMount=async()=> {
    // const value = await AsyncStorage.getItem('FavouriteCharacter');
    // const MyFavouriteCharecterID = this.props.route.params.CharecterId;
    // console.log("my_id", MyFavouriteCharecterID);
  }

  render() {
    return (
      <>
      <View style={styles.Container}>
        <StatusBar backgroundColor="#242424" barStyle="light-content" />

        {/* Header Section */}
        <View style={styles.HeaderMainCOntainer}>
          <Text style={styles.Headding}>Search</Text>
          <View style={styles.HeaderBthContainer}>
            <TouchableOpacity style={styles.SearchIcon} onPress={() => this.props.navigation.navigate('home')} >
              <Fontisto name="close-a" size={16} style={{ alignSelf: "center" }} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Scroll Section */}
        <View style={styles.FlatlistContainer}>
          <FlatList
            data={DriverLists}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            renderItem={({ item }) => (
              <View>
                <CharecterList
                  CharecterID={item.id}
                  CahrecterImage={item.Image}
                  CharecterNickName={item.NickName}
                  CahrecterName={item.Name}
                  navigation={this.props.navigation}
                  ScreenName={"search"}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
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
},
HeaderMainCOntainer: {
  height: Deviceheight / 10,
  width: Devicewidth,
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'flex-start',
  backgroundColor: "#242424",
  flexDirection: "row",
  paddingHorizontal: 20
},
Headding: {
  fontSize: 24,
  color: "#787878",
  textAlign: "left"
},
HeaderBthContainer: {
  flexDirection: "row",
  justifyContent: 'flex-end',
  width: Devicewidth / 4,
  backgroundColor: "#242424",
  padding: 5
},
SearchIcon: {
  height: Deviceheight / 23,
  width: Devicewidth / 12,
  backgroundColor: "#242424",
  justifyContent: "center"
},
FlatlistContainer: {
  padding: 5,
  paddingTop:30,
  width: Devicewidth,
  height: Deviceheight / 1.11,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#070707'
},
})