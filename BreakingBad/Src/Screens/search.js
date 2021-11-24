import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, StatusBar, FlatList, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CharecterList from '../Component/character';
import axios from "axios"

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

]

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SearchContent: null,
      SearchCharacters: [],
      MyFavouriteIds: []
    }
  }
  state = this.state;
  HandelSearch = () => {
    axios.get(`https://www.breakingbadapi.com/api/characters`,{
      params:{
        name:this.state.SearchContent
      }
    })
      .then(response => {
        console.log("my user search response", response);
          if (response.status == 200) {
         this.setState({
          SearchCharacters:response.data
          })
          }      
      })
      .catch(error => {
        console.error(error.data)
      })
  }
  GoToDeatails = (CharacterID) => {
    let res = this.state.SearchCharacters.find(obj => { return obj.char_id === CharacterID })
    this.props.navigation.navigate('details', { "PressedCharacter": res })
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
  }
  render() {
    return (
      <>
        <View style={styles.Container}>
          <StatusBar backgroundColor="#242424" barStyle="light-content" />

          {/* Header Section */}
          <View style={styles.HeaderMainCOntainer}>
            {/* <Text style={styles.Headding}>Search</Text> */}
            <TextInput
              style={styles.SearchContainer}
              autoFocus={false}
              placeholder={'Search'}
              keyboardType={"default"}
              fontFamily={'Roboto-Light'}
              onChangeText={text =>
                this.setState({
                  SearchContent: text
                })}
              value={this.state.SearchContent}

            />
            <View style={styles.HeaderBthContainer}>
              <TouchableOpacity style={styles.SearchIcon} onPress={() => this.HandelSearch()} >
                <Fontisto name="search" size={24} style={{ alignSelf: "center" }} color="#ffffff" />

              </TouchableOpacity>
            </View>
          </View>

          {/* Scroll Section */}
          <View style={styles.FlatlistContainer}>
            <FlatList
              data={this.state.SearchCharacters}
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
                    ScreenName={"search"}
                    HandelCharacterTouch={(id) => this.GoToDeatails(id)}
                    HandelFavouriteCharecter={(id) => this.HandelFavuriteClick(id)}
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
    height: Deviceheight / 10,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    backgroundColor: "#242424",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  SearchContainer: {
    width: Devicewidth / 1.5,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: "center",
    fontSize: 30,
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
    paddingTop: 30,
    width: Devicewidth,
    height: Deviceheight / 1.11,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#070707'
  },
})