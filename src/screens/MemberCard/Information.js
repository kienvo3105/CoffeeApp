import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'

import ProfileBar from '../../components/Setting/ProfileBar'
import RatingCard from '../../components/Home/RatingCard'


const Information = () => {

    return (
        <View style={styles.container}>
            <ProfileBar />
            <View style={{ backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <Image source={require("../../assets/image/qrCode.png")} resizeMode='contain' style={{ height: 200, width: 200 }} />
                <RatingCard />
            </View>
        </View>
    )
}

export default Information

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: 50
        // justifyContent: 'center',
        // alignItems: 'center'

    }
})