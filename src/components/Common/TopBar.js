import { StyleSheet, View } from 'react-native'
import React from 'react'

import { colors } from '../../constants/color'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const TopBar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.viewIcon}>
                <Ionicons name='person-circle-outline' size={40} color={colors.primary} onPress={() => navigation.navigate("Profile")} />
                <Ionicons name='search' size={40} color={colors.gray} onPress={() => navigation.navigate("Search")} />
            </View>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    viewIcon: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})