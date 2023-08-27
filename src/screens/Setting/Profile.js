import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

import { colors } from '../../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackBar from '../../components/Common/BackBar'
import ProfileBar from '../../components/Setting/ProfileBar'

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <BackBar title={"Hồ Sơ"} navigation={navigation} />
                <ProfileBar />
            </View>
            <View style={styles.bottom}>
                {/* Thong tin chung */}
                <View>
                    {/* title */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.title}>Thông tin chung</Text>
                        <Pressable>
                            <Text style={{ fontSize: 15, color: colors.primary, fontWeight: 'bold' }}>Sửa</Text>
                        </Pressable>
                    </View>

                    {/* name */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                        <View style={[styles.viewText, { marginRight: 5, flex: 1, }]}>
                            <Text style={styles.text}>Kiên</Text>
                        </View>
                        <View style={[styles.viewText, { marginLeft: 5, flex: 1, }]}>
                            <Text style={styles.text} >Võ</Text>
                        </View>
                    </View>

                    {/* Gioi tinh */}
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Nam</Text>
                    </View>

                    {/* birthDay */}
                    <View style={styles.viewText}>
                        <Text style={styles.text}>31-05-2002</Text>
                    </View>

                </View>
                {/* phone number */}
                <View>
                    <Text style={styles.title}>Số Điện Thoại</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                        <View style={[styles.viewText, { marginRight: 5, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image
                                source={require("../../assets/image/icon/vietNam.png")}
                                resizeMode='contain'
                                style={{ height: 25, width: 25, marginRight: 5 }} />
                            <Text style={styles.text}>+84</Text>
                        </View>
                        <View style={[styles.viewText, { marginLeft: 5, flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                            <Text style={styles.text} >0902431908</Text>
                            <Ionicons name='shield-checkmark' size={15} color={colors.green} />
                        </View>
                    </View>
                </View>

                {/* email */}
                <View>
                    <Text style={styles.title}>Email</Text>

                    <View style={[styles.viewText, { marginTop: 10 }]}>
                        <Text style={styles.text}>hvtrungkien@gmail.com</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    bottom: {
        flex: 3.5,
        backgroundColor: colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15
    },
    title: {
        fontSize: 18,
        color: colors.textPrimary,
        fontWeight: 'bold'
    },
    viewText: {
        backgroundColor: colors.white,
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.gray,
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        color: colors.textPrimary
    },

})