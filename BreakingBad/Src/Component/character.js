import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;



const CharectersList = (props) => {

    const [HeartClicked, SetHeartClicked] = useState(props.ScreenName == "home" || props.ScreenName == "search" ? false : true);
    useEffect(() => {

    }, [])

    const HandelClick = () => {

        if (props.ScreenName == "home") {
            SetHeartClicked(true)
            let id =props.CharecterID
            props.HandelFavouriteCharecter(id)
        }
        else if (props.ScreenName == "search") {
            SetHeartClicked(true)
        }
        else if (props.ScreenName == "favourite") {
            SetHeartClicked(false)
        }
        else {
            null
        }
    }

    return (
        <>
            <View style={styles.Container}>
                <View style={{ height: Deviceheight / 4, width: Devicewidth / 2.2, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', backgroundColor: "#070707" }}>
                    <Image
                        style={styles.MyImage}
                        source={props.CahrecterImage} />
                </View>
                <View style={{ height: Deviceheight / 14, width: Devicewidth / 2.2, alignItems: 'center', justifyContent: 'space-around', alignSelf: 'center', backgroundColor: "#070707", flexDirection: "row" }}>
                    <View style={{ height: Deviceheight / 14, width: Devicewidth / 3, alignItems: 'flex-start', justifyContent: 'flex-start', alignSelf: 'center', backgroundColor: "#070707", paddingTop: 10, paddingLeft: 11 }}>
                        <Text style={{ fontSize: 18, color: "#ffffff", textAlign: "left", fontWeight: "bold" }}>{props.CahrecterName}</Text>
                        <Text style={{ fontSize: 15, color: "#ffffff", textAlign: "left" }}>{props.CharecterNickName}</Text>
                    </View>
                    <TouchableOpacity style={styles.SearchIcon} onPress={() => HandelClick()} >
                        {HeartClicked == false ?
                            <Feather name="heart" size={24} style={{ alignSelf: "center" }} color="#ffffff" />
                            :
                            <FontAwesome name="heart" size={24} style={{ alignSelf: "center" }} color="#18ca75" />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )

}

export default CharectersList;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#070707",
        height: Deviceheight / 3,
        width: Devicewidth / 2.15,
        marginBottom: 30,
        marginRight: 5
    },
    MyImage: {
        resizeMode: 'contain',
        width: '100%',
        height: "100%",
    },
    SearchIcon: {
        height: Deviceheight / 23,
        width: Devicewidth / 12,
        backgroundColor: "#070707",
        justifyContent: "center"
    },
})