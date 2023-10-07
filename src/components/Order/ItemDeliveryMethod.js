import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { branchSelectedSelector } from '../../redux/selectors';

const ItemDeliveryMethod = ({ method, image, selected, handlePressSelect }) => {
    const navigation = useNavigation()
    const branchSelected = useSelector(branchSelectedSelector);
    return (
        <Pressable
            style={[styles.container, { borderColor: selected === method ? colors.primary : 'gray' }]}
            onPress={handlePressSelect}>
            <View style={styles.content}>
                <Image source={image} resizeMode='contain' style={styles.image} />
                <View>
                    <Text style={styles.method}>{method}</Text>
                    <Text style={styles.address}>
                        {`${branchSelected?.name}\n${branchSelected?.Address.houseNumber} ${branchSelected?.Address.street}\n${branchSelected?.Address.commune}, ${branchSelected?.Address.district}`}
                    </Text>
                </View>
            </View>
            <Pressable onPress={() => {
                handlePressSelect(method);
                navigation.navigate("SelectStoreScreen");
            }}>
                <Text style={styles.change}>Sửa</Text>
            </Pressable>
        </Pressable >
    )
}

export default ItemDeliveryMethod

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 2,
        // borderColor: colors.gray,
        marginVertical: 15,
        borderRadius: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    method: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: 5
    },
    address: {
        color: colors.textPrimary,
        fontSize: 13
    },
    change: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: 'bold'
    }
})