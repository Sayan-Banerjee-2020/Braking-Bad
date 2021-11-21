import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ImageBackground, StyleSheet, FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  },
  {
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

const SeasonList = [
  {
    id: '1',
    SeasonName: "Season 1"
  },
  {
    id: '2',
    SeasonName: "Season 2"
  },
  {
    id: '3',
    SeasonName: "Season 3"
  },
  {
    id: '4',
    SeasonName: "Season 4"
  },
  {
    id: '5',
    SeasonName: "Season 5"
  },
]
const OtherCharacter = [
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
]

export default class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MyCharacter: {}
    }
  }
  state = this.state;
  componentDidMount() {
    const MyID = this.props.route.params.PressedCharacterID
    let res = CharecterLists.find(obj => { return obj.id === MyID })
    this.setState({ MyCharacter: res })

  }

  render() {
    return (
      <>
        <View style={styles.Container}>

          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"always"}>
            <ImageBackground
              style={styles.ImageBackground}
              source={this.state.MyCharacter.Image} >
              {/* Header Section */}
              <View style={styles.HeaderMainCOntainer}>
                <TouchableOpacity style={styles.SearchIcon} onPress={() => this.props.navigation.navigate('home')}>
                  <AntDesign name="arrowleft" size={24} style={{ alignSelf: "center" }} color="#ffffff" />
                </TouchableOpacity>
                <View >
                  <TouchableOpacity style={styles.SearchIcon} onPress={() => this.props.navigation.navigate('home')}>
                    <FontAwesome name="heart" size={24} style={{ alignSelf: "center" }} color="#18ca75" />
                  </TouchableOpacity>
                </View>
              </View>
              {/* Profile Image section  */}
              <View style={styles.ProfileImagentainer}>
                <View style={styles.MyImageContainer}>
                  <Image
                    style={styles.MyImage}
                    source={this.state.MyCharacter.Image} />
                </View>
                <View style={styles.NameContainer}>
                  <Text style={styles.Name}>{this.state.MyCharacter.Name}</Text>
                  <Text style={styles.NickName}>{this.state.MyCharacter.NickName}</Text>
                </View>
              </View>
            </ImageBackground>
            {/* potrayed section */}
            <View style={styles.SecondCOntainer}>
              <View style={styles.PotrayedContainer}>
                <Text style={styles.Potrayed}>Potrayed</Text>
                <Text style={styles.PotrayedName}>Brayan Cranston</Text>
              </View>
              <View style={styles.DateContainer}>
                <Text style={styles.PotrayedName}>09-july-1958</Text>
                <View style={styles.ImageIcon} onPress={() => this.props.navigation.navigate('home')}>
                  <Image source={require('../Assets/Vector.png')} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                </View>
              </View>
            </View>
            {/* occupation section */}
            <View style={styles.ThirdCOntainer}>
              <Text style={styles.Potrayed}>Occupation</Text>
              <Text style={styles.HighSchool}>High School Chemistry Teacher</Text>
              <Text style={styles.HighSchool}>King Pin</Text>
            </View>
            {/* Appeared in section */}
            <View style={styles.ForthCOntainer}>
              <Text style={styles.Potrayed}>Appeared in</Text>
              {/* Scroll Section */}
              <View style={styles.SeasonListContainer}>
                <FlatList
                  data={SeasonList}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <View style={styles.SeacoonContentContainer}>
                      <Text style={styles.SeasonContent}>{item.SeasonName}</Text>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
            {/* Other Character section */}
            <View style={styles.OtherCharacterCOntainer}>
              <Text style={styles.OtherCharacter}> Other Characters</Text>
              <View style={styles.OtherCharacterListContainer}>
                <FlatList
                  data={OtherCharacter}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <View style={styles.OtherCharacterContent}>
                      <View style={styles.OtherCharacterImageContainer}>
                        <Image
                          style={styles.OtherImage} source={item.Image} />
                      </View>
                      <View style={styles.othernameContainer}>
                        <Text style={styles.OtherName}>{item.Name}</Text>
                        <Text style={styles.OtherNickName}>{item.NickName}</Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#070707",
  },
  ImageBackground: {
    height: Deviceheight / 1.6,
    width: Devicewidth,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  MyImage: {
    resizeMode: 'contain',
    width: '100%',
    height: "100%",
    borderRadius: 2
  },
  NameContainer: {
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
    paddingLeft: 11
  },
  Name: {
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold"
  },
  NickName: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center"
  },
  HeaderMainCOntainer: {
    height: Deviceheight / 12,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  SearchIcon: {
    height: Deviceheight / 23,
    width: Devicewidth / 12,
    // backgroundColor: "#070707",
    justifyContent: "center"
  },
  ProfileImagentainer: {
    height: Deviceheight / 1.83,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 20,
    paddingTop: 110
  },
  MyImageContainer: {
    height: Deviceheight / 4,
    width: Devicewidth / 2.2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 2
  },
  SecondCOntainer: {
    height: Deviceheight / 12,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    backgroundColor: '#070707',
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 15
  },
  Potrayed: {
    fontSize: 22,
    color: "#18ca75",
    fontWeight: '600',
    textAlign: "left"
  },
  PotrayedName: {
    fontSize: 16,
    color: "#fff",
    textAlign: "left"
  },
  PotrayedContainer: {
    justifyContent: 'flex-start',
    width: Devicewidth / 2,
    // backgroundColor: "blue",
    padding: 5
  },
  DateContainer: {
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: Devicewidth / 3.3,
    // backgroundColor: "red",
    padding: 5,
    paddingTop: 20
  },
  ImageIcon: {
    height: Deviceheight / 40,
    width: Devicewidth / 20,
    backgroundColor: "#070707",
    justifyContent: "center"
  },
  ThirdCOntainer: {
    height: Deviceheight / 9,
    width: Devicewidth,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    backgroundColor: '#070707',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  HighSchool: {
    fontSize: 16,
    color: "#fff",
    textAlign: "left",
    marginTop: 5
  },
  ForthCOntainer: {
    height: Deviceheight / 10,
    width: Devicewidth,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    backgroundColor: '#070707',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  SeasonListContainer: {
    paddingRight: 15,
    marginTop: 10,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#070707'
  },
  SeacoonContentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "grey",
    marginTop: 10
  },
  SeasonContent: {
    textAlign: "center",
    fontSize: 18,
  },
  OtherCharacterCOntainer: {
    height: Deviceheight / 2.3,
    width: Devicewidth,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 50,
  },
  OtherCharacter: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: '600',
    textAlign: "left",
    paddingHorizontal: 16,
    marginBottom: 10
  },
  OtherCharacterListContainer: {
    marginTop: 10,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  OtherCharacterContent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#070707",
    height: Deviceheight / 3,
    width: Devicewidth / 2.15,
    marginBottom: 30,
    marginRight: 5
  },
  OtherCharacterImageContainer: {
    height: Deviceheight / 4,
    width: Devicewidth / 2.2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  OtherImage: {
    resizeMode: 'contain',
    width: '100%',
    height: "100%",
  },
  othernameContainer: {
    height: Deviceheight / 14,
    width: Devicewidth / 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingTop: 10,
    paddingLeft: 17
  },
  OtherName: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "left",
    fontWeight: "bold"
  },
  OtherNickName: {
    fontSize: 15,
    color: "#ffffff",
    textAlign: "left"
  },
})