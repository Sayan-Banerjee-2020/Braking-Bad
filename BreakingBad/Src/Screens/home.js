import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CharecterList from '../Component/character';
import axios from "axios"
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AllCharacters: [],
      MyFavouriteIds: []
    }
  }
  state = this.state;
  componentDidMount() {

    axios.get(`https://www.breakingbadapi.com/api/characters`)
      .then(response => {
        console.log("my user Details response", response);
        if (response.status == 200) {
          this.setState({
            AllCharacters: response.data
          })
        }

      })
      .catch(error => {
        console.error(error.data)
      })
  }
  HandelSearch = () => {
    this.props.navigation.navigate('search')
  }
  HandelFavourite = () => {
    this.props.navigation.navigate('favourite')
  }
  HandelFavuriteClick = (FavouriteID) => {
    console.log("array", this.state.MyFavouriteIds);
    if(this.state.MyFavouriteIds.indexOf(FavouriteID) !== -1){
      this.state.MyFavouriteIds.splice(this.state.MyFavouriteIds.indexOf(FavouriteID),1)
    }
    else{
      this.state.MyFavouriteIds.push(FavouriteID)
    }
    this.setState({
      MyFavouriteIds:this.state.MyFavouriteIds
    })
    console.log("array11", this.state.MyFavouriteIds);
    AsyncStorage.setItem('FavArray', JSON.stringify(this.state.MyFavouriteIds))

  }
  GoToDeatails = (CharacterID) => {
    let res = this.state.AllCharacters.find(obj => { return obj.char_id === CharacterID })
    this.props.navigation.navigate('details', { "PressedCharacter": res })
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
                    ScreenName={"home"}
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
    color: "#ffffff",
    fontWeight: '600',
    textAlign: "left",
    fontFamily: "Roboto-Bold"
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