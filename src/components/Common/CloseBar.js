import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
const CloseBar = ({ title, navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} >
                <Ionicons name='close' size={35} color={colors.textPrimary} />
            </Pressable>

            <Text style={{ fontSize: 20, color: colors.textPrimary, fontWeight: 'bold' }}>{title}</Text>

            <Pressable onPress={() => navigation.goBack()} >
                <Ionicons name='search' size={30} color={colors.gray} />
            </Pressable>

        </View >
    )
}

export default CloseBar

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 10,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
})