import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'

const Coins = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 15, color: colors.textPrimary, fontWeight: 'bold', marginTop: 10, marginBottom: 30 }}>COINS</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require("../../assets/image/backgroundCoins.png")} resizeMode='contain' style={styles.frame} imageStyle={{ borderRadius: 10 }} >
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.white }}>0</Text>
                    <Text style={{ fontSize: 15, color: colors.white }}>coins</Text>
                </ImageBackground>

            </View>
        </View >
    )
}

export default Coins

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 30,
        shadowColor: colors.darkGray,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    frame: {
        // flex: 1,
        height: 80,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,

    }
})