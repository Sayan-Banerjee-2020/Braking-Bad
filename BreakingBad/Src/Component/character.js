import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;



const CharectersList = (props) => {
    const HandelClick = () => {
        props.HandelFavouriteCharecter(props.CharecterID)
    }

    const HandelImageTouch = () => {
        let id = props.CharecterID
        props.HandelCharacterTouch(id)
    }
    return (
        <>
            <View style={styles.Container}>
                <TouchableOpacity style={styles.MyImageContainer} onPress={() => HandelImageTouch()}>
                    <Image
                        style={styles.MyImage}
                        source={{ uri: props.CahrecterImage }} />
                </TouchableOpacity>
                <View style={styles.SecondContainerMainView}>
                    <View style={styles.NameContainer}>
                        <Text style={styles.CharecterName}>{props.CahrecterName}</Text>
                        <Text style={styles.CharecterNickName}>{props.CharecterNickName}</Text>
                    </View>
                    <TouchableOpacity style={styles.SearchIcon} onPress={() => HandelClick()} >
                        {/* {HeartClicked == false ? */}
                        {props.FavouriteID.indexOf(props.CharecterID) !== -1 ?
                            <FontAwesome name="heart" size={24} style={{ alignSelf: "center" }} color="#18ca75" />
                            :
                            <Feather name="heart" size={24} style={{ alignSelf: "center" }} color="#ffffff" />
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
    MyImageContainer: {
        height: Deviceheight / 4,
        width: Devicewidth / 2.2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: "#070707"
    },
    MyImage: {
        resizeMode: 'contain',
        width: '100%',
        height: "100%",
    },
    SecondContainerMainView: {
        height: Deviceheight / 14,
        width: Devicewidth / 2.2,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: "#070707",
        flexDirection: "row"
    },
    NameContainer: {
        height: Deviceheight / 14,
        width: Devicewidth / 3,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        backgroundColor: "#070707",
        paddingTop: 10,
        paddingLeft: 11
    },
    CharecterName: {
        fontSize: 18,
        color: "#ffffff",
        textAlign: "left",
        fontWeight: "bold",
        fontFamily: 'Roboto-Light'
    },
    CharecterNickName: {
        fontSize: 15,
        color: "#ffffff",
        textAlign: "left",
        fontFamily: 'Roboto-Thin'
    },
    SearchIcon: {
        height: Deviceheight / 23,
        width: Devicewidth / 12,
        backgroundColor: "#070707",
        justifyContent: "center"
    },
})