import { StyleSheet, ImageBackground, View, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../constants/color';
import { useNavigation } from '@react-navigation/native';

const RatingCard = () => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("MemberCardMenu")}>
            <LinearGradient colors={['#e2e2e2', '#afafaf', '#7c7c7c']} style={styles.card}>
                <View style={styles.col}>
                    <View style={styles.topLeft} >
                        <Text style={styles.textRank}>HẠNG BẠC</Text>
                    </View>
                    <View style={styles.bottomLeft}>
                        <FontAwesome5 name="award" size={20} color={colors.white} />
                        <Text style={styles.textCoin}>Coins: 0</Text>
                    </View>

                </View>
                <View style={[styles.col, { justifyContent: 'flex-end', alignItems: 'flex-end' }]}>
                    <View style={styles.topRight} />
                    <ImageBackground source={require('../../assets/image/coffe.png')} resizeMode='stretch' style={styles.bottomRight}>

                    </ImageBackground>
                </View>
            </LinearGradient>
        </Pressable>
    )
}

export default RatingCard

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "#f1e2b5",
        height: 200
    },
    col: {
        flex: 1,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        borderRadius: 20,
        height: '80%',
        width: '90%'
    },
    topLeft: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
        // backgroundColor: 'red', // Thay đổi màu sắc tùy ý
    },
    bottomLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        // backgroundColor: 'green', // Thay đổi màu sắc tùy ý
    },
    topRight: {
        flex: 1,
        // backgroundColor: 'blue', // Thay đổi màu sắc tùy ý
    },
    bottomRight: {
        flex: 1.5,
        // backgroundColor: 'yellow',
        marginBottom: 10,
        // marginLeft: 70,
        marginRight: 10,
        // height: 100,
        width: 120
    },
    textRank: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.white
    },
    textCoin: {
        paddingLeft: 10,
        fontSize: 15,
        color: colors.white
    }
})