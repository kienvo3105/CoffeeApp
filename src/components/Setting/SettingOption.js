import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../constants/color'

import { useNavigation } from '@react-navigation/native'

const SettingOption = ({ id, name, iconName, navigate }) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.container}
            onPress={() => navigation.navigate(navigate)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name={iconName} size={20} color={colors.primary} />
                <Text style={styles.text}>{name}</Text>
            </View>
            <Ionicons name='chevron-forward' size={20} color={colors.textPrimary} />
        </Pressable>
    )
}

export default SettingOption

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 5,
        marginBottom: 5,
        marginHorizontal: 20
    },
    text: {
        marginLeft: 10,
        fontSize: 15,
        color: colors.textPrimary
    }
})