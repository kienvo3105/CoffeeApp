import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'

const nameBranch = "Satramart 3/2";
const address = "460 3 Tháng 2, P.12, Q.10";

const ItemDeliveryMethod = ({ method, image, selected, handlePressSelect }) => {
    return (
        <Pressable
            style={[styles.container, { borderColor: selected === method ? colors.primary : 'gray' }]}
            onPress={handlePressSelect}>
            <View style={styles.content}>
                <Image source={image} resizeMode='contain' style={styles.image} />
                <View>
                    <Text style={styles.method}>{method}</Text>
                    <Text style={styles.address}>
                        {nameBranch + "\n" + address}
                    </Text>
                </View>
            </View>
            <Text style={styles.change}>Sửa</Text>
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