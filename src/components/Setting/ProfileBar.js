import { Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../constants/color';
import { userSelector } from '../../redux/selectors'
import { useSelector } from 'react-redux'

const ProfileBar = () => {
    const user = useSelector(userSelector);
    return (
        <View style={{ flexDirection: 'row' }}>
            <Ionicons name='person-circle' size={100} color={colors.gray} />
            <View style={{ justifyContent: 'space-around' }}>
                <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold' }}>{user.firstName} {user.lastName} | PHIN BẠC</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome5 name="award" size={20} color={colors.white} />
                    <Text style={{ fontSize: 18, marginLeft: 10, color: colors.white }}>Coins: {user.coins}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileBar;