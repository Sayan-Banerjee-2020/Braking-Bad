import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CharecterList from '../Component/character';
import axios from "axios"

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export default class Favourite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AllCharacters: [],
      MyFavouriteIds: []
    }
  }
  state = this.state;
  componentDidMount() {
    this.GetCharacters()

  }
  GetCharacters = () => {
    axios.get(`https://www.breakingbadapi.com/api/characters`)
      .then(response => {
        console.log("my user Details response", response);
        if (response.status == 200) {
          this.setState({
            AllCharacters: response.data
          })
        }
        this.SetFavCharecter()
      })
      .catch(error => {
        console.error(error.data)
      })
  }
  SetFavCharecter = async() => {
    const MyFaouriteArray = await AsyncStorage.getItem('FavArray');
    this.setState({
      MyFavouriteIds: MyFaouriteArray
    })
  }
  HandelFavuriteClick = (FavouriteID) => {
    this.setState({
      MyFavouriteIds: this.state.MyFavouriteIds
    })
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
            <Text style={styles.Headding}>Favouries</Text>
            <View style={styles.HeaderBthContainer}>
              <TouchableOpacity style={styles.SearchIcon} onPress={() => this.props.navigation.navigate('home')}>
                <Fontisto name="close-a" size={16} style={{ alignSelf: "center" }} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Scroll Section */}
          <View style={styles.FlatlistContainer}>
            <FlatList
              data={this.state.AllCharacters}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={2}
              renderItem={({ item }) => (
                <View>
                  <CharecterList
                    CharecterID={item.char_id}
                    CahrecterImage={item.img}
                    CharecterNickName={item.nickname}
                    CahrecterName={item.name}
                    navigation={this.props.navigation}
                    ScreenName={"favourite"}
                    HandelFavouriteCharecter={(id) => this.HandelFavuriteClick(id)}
                    HandelCharacterTouch={(id) => this.GoToDeatails(id)}
                    FavouriteID={this.state.MyFavouriteIds}
                  />
                </View>
              )}
              keyExtractor={item => item.char_id}
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
    color: "#18ca75",
    fontWeight: '600',
    textAlign: "left",
    fontFamily: "Roboto-Bold"
  },
  HeaderBthContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
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