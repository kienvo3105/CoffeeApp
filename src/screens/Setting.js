import { StyleSheet, Text, View, Pressable, SectionList, Alert } from 'react-native'
import React from 'react'

import { colors } from '../constants/color'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SettingOption from '../components/Setting/SettingOption'

const options = [
    {
        id: 'account',
        title: 'Tài khoản',
        data: [{
            id: 'info',
            name: 'Hồ sơ',
            iconName: 'person'
        },
        {
            id: 'setting',
            name: 'Cài đặt',
            iconName: "settings-sharp"
        }]
    },
    {
        id: 'interact',
        title: 'Tương tác',
        data: [{
            id: "activity",
            name: "Hoạt động",
            iconName: "stopwatch"
        }]
    },
    {
        id: 'generalInformation',
        title: "Thông tin chung",
        data: [
            {
                id: 'Policies',
                name: 'Chính sách/Policies',
                iconName: 'newspaper'
            },
            {
                id: 'loyaltyProgram',
                name: 'CT Thành viên/Loyalty Program',
                iconName: 'newspaper'
            },
            {
                id: 'versionApp',
                name: 'Phiên bản Ứng dụng',
                iconName: 'information-circle'
            }]
    },
    {
        id: 'help',
        title: "Trung tâm trợ giúp",
        data: [{
            id: "faq",
            name: "Câu hỏi thường gặp",
            iconName: "help-circle"
        },
        {
            id: 'contact',
            name: 'Phản hồi & Hỗ trợ',
            iconName: 'chatbubble-ellipses-sharp'
        }]
    },
    {
        id: 'logOut',
        title: 'ĐĂNG XUẤT',
        data: []
    }
]

const Setting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* language */}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginTop: 20 }}>
                    <Pressable style={styles.language}>
                        <Text style={{ fontSize: 13, color: colors.white, marginRight: 4 }}>Tiếng Việt</Text>
                        <Entypo name='chevron-small-down' size={15} color={colors.white} />
                    </Pressable>
                </View>
                {/* info user */}
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='person-circle' size={100} color={colors.gray} />
                    <View style={{ justifyContent: 'space-around' }}>
                        <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold' }}>|PHIN BẠC</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome5 name="award" size={20} color={colors.white} />
                            <Text style={{ fontSize: 18, marginLeft: 10, color: colors.white }}>Coins: 0</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <SectionList
                    sections={options}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, }) => (<SettingOption {...item} />)}
                    renderSectionHeader={({ section: { title } }) => (
                        title === "ĐĂNG XUẤT" ?
                            <Pressable
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: colors.primary,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                    marginBottom: 20,
                                    marginHorizontal: 20
                                }}
                                onPress={() => Alert.alert("Đăng xuất", "Bạn có chắc chắn đăng xuất?", [{
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                { text: 'OK', onPress: () => console.log('OK Pressed') },])}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.white }}>{title}</Text>
                            </Pressable>
                            :
                            <Text style={styles.title}>{title}</Text>
                    )}
                    renderSectionFooter={() => (<View style={{ marginBottom: 20 }} />)}
                />
            </View>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    header: {
        flex: 1,
        backgroundColor: colors.primary
    },
    bottom: {
        flex: 3.5,
        backgroundColor: colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        // paddingHorizontal: 20
    },
    language: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 2,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: colors.white,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: colors.textPrimary,
        marginBottom: 10,
        marginHorizontal: 20
    }
})