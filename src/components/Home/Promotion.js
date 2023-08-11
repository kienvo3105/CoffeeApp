import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'
const Promotion = ({ title, url, date, handlePressItem }) => {
    return (
        <Pressable style={styles.container}
            onPress={handlePressItem}>
            <Image source={url} style={styles.image} resizeMode='cover' />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </Pressable>
    )
}

export default Promotion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 5,
    },
    image: {
        height: 120,
        width: 120
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.textPrimary
    },
    date: {
        fontSize: 10,
        color: colors.textExtra
    }
})