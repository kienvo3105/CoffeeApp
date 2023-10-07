import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../../constants/color'

import { useDispatch, useSelector } from 'react-redux';
import { branchSelectedSelector } from '../../redux/selectors';
import branchSlice from '../../redux/branchSlice';
import { useNavigation } from '@react-navigation/native';

const BranchItem = ({ item }) => {
    const dispatch = useDispatch();
    const branchSelected = useSelector(branchSelectedSelector);
    const navigation = useNavigation();
    const handleSelectBranch = () => {
        dispatch(branchSlice.actions.selectBranch(item));
        navigation.navigate("Oder");
    }

    return (
        <Pressable style={styles.container} onPress={handleSelectBranch}>
            <Image source={{ uri: item.image }} resizeMode='cover' style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.nameBranch}>{item.name}</Text>
                <Text style={styles.text}>{item.Address.houseNumber} {item.Address.street}{'\n'}{item.Address.commune}, {item.Address.district}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name='phone' size={17} color={colors.textExtra} style={{ marginRight: 5 }} />
                    <Text style={styles.text}>{item.Manager.phoneNumber}</Text>
                </View>
                {/* time opening */}
                <View style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1.5, flexDirection: 'row', paddingBottom: 5 }}>
                        <Text style={[styles.text, styles.around]}>Mở</Text>
                        <Text style={styles.text}>09:00 - 22:00</Text>
                    </View>
                    {branchSelected?.id === item.id &&
                        <View style={styles.select}>
                            <Text style={{ color: colors.white, fontSize: 12 }}>Lựa chọn hiện tại</Text>
                        </View>
                    }
                </View>
            </View>
        </Pressable>
    )
}

export default BranchItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // padding: 5,
        paddingLeft: 5,
        paddingTop: 5,
        backgroundColor: colors.white,
        marginHorizontal: 10,
        borderRadius: 8
    },
    image: {
        height: 90,
        width: 90,
        marginRight: 15
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'space-between'
    },
    nameBranch: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.textPrimary
    },
    text: {
        fontSize: 13,
        marginTop: 3
    },
    around: {
        marginRight: 10,
        backgroundColor: colors.green,
        paddingVertical: 1,
        paddingHorizontal: 5,
        borderRadius: 20,
        color: colors.white,
        fontWeight: 'bold'
    },
    select: {
        flex: 1,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8
    }
})