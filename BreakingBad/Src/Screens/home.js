import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CharecterList from '../Component/character';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const CharecterLists = [
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

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MyFavouriteIds: []
    }
  }
  state = this.state;
  componentDidMount() {

  }
  HandelSearch = () => {
    this.props.navigation.navigate('search')
  }
  HandelFavourite = () => {
    this.props.navigation.navigate('favourite')
  }
  HandelFavuriteClick = (FavouriteID) => {
    console.log("my fav id ", FavouriteID);
    
  }
  GoToDeatails = (CharacterID) => {
    this.props.navigation.navigate('details', { "PressedCharacterID": CharacterID })
  }
  render() {
    return (
      <>
        <View style={styles.Container}>
          <StatusBar backgroundColor="#070707" barStyle="light-content" />

          {/* Header Section */}
          <View style={styles.HeaderMainCOntainer}>
            <Text style={styles.Headding}>The Breaking Bad</Text>
            <View style={styles.HeaderBthContainer}>
              <TouchableOpacity style={styles.SearchIcon} onPress={() => this.HandelSearch()}>
                <Feather name="search" size={24} style={{ alignSelf: "center" }} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.SearchIcon} onPress={() => this.HandelFavourite()}>
                <FontAwesome name="heart" size={24} style={{ alignSelf: "center" }} color="#18ca75" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Scroll Section */}
          <View style={styles.FlatlistContainer}>
            <FlatList
              data={CharecterLists}
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
                    ScreenName={"home"}
                    HandelFavouriteCharecter={(id) => this.HandelFavuriteClick(id)}
                    HandelCharacterTouch={(id) => this.GoToDeatails(id)}
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
    height: Deviceheight / 12,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    backgroundColor: "#070707",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  Headding: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: '600',
    textAlign: "left"
  },
  HeaderBthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Devicewidth / 4,
    backgroundColor: "#070707",
    padding: 5
  },
  SearchIcon: {
    height: Deviceheight / 23,
    width: Devicewidth / 12,
    backgroundColor: "#070707",
    justifyContent: "center"
  },
  FlatlistContainer: {
    padding: 5,
    width: Devicewidth,
    height: Deviceheight / 1.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#070707'
  },
})