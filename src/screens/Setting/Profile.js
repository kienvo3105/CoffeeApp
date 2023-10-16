import { StyleSheet, Text, View, Pressable, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import DatePicker from 'react-native-date-picker'

import { colors } from '../../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackBar from '../../components/Common/BackBar'
import ProfileBar from '../../components/Setting/ProfileBar'

import { useSelector, useDispatch } from 'react-redux'
import { userSelector } from '../../redux/selectors'
import userSlice from '../../redux/userSlice'
import { usePatch, useGet } from '../../api'

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isError: isErrorPatch, result: resultPatch, fetchPatch } = usePatch();
    const { isError: isErrorGet, result: resultGet, fetchGet } = useGet();
    const [isEditing, setIsEditing] = useState(false);
    const [type, setType] = useState("Sửa");
    const user = useSelector(userSelector);

    const dateOfBirth = user.dateOfBirth ? new Date(user.dateOfBirth) : null;

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [birthDay, setBirthDay] = useState(new Date());
    const [open, setOpen] = useState(false);


    const handleEditProfile = async () => {
        if (type === "Sửa") {
            setType("Lưu")
        } else {
            setIsEditing(true);
            await fetchPatch(`user/${user.id}`, { firstName, lastName, dateOfBirth: birthDay });
        }
    }

    useEffect(() => {
        const getUser = async () => {
            if (resultPatch?.errorCode === 0 && !isErrorPatch) {
                await fetchGet(`user/${user.id}`);
            }
        }
        getUser();
    }, [resultPatch])

    useEffect(() => {
        if (resultGet && !isErrorGet) {
            dispatch(userSlice.actions.userChange(resultGet.user));
            setIsEditing(false);
            setType("Sửa");
        }
    }, [resultGet])

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
                        <Pressable
                            onPress={handleEditProfile}>
                            <Text style={{ fontSize: 15, color: colors.primary, fontWeight: 'bold' }}>{type}</Text>
                        </Pressable>
                    </View>
                    {
                        (isEditing) ? <ActivityIndicator size={'large'} color={colors.primary} />
                            :
                            (type === "Sửa" ?
                                <View>
                                    {/* name */}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                        <View style={[styles.viewText, { marginRight: 5, flex: 1, }]}>
                                            <Text style={user.firstName ? styles.text : styles.nullText}>{user.firstName ? user.firstName : "Tên"}</Text>
                                        </View>
                                        <View style={[styles.viewText, { marginLeft: 5, flex: 1, }]}>
                                            <Text style={user.lastName ? styles.text : styles.nullText} >{user.lastName ? user.lastName : "Họ"}</Text>
                                        </View>
                                    </View>

                                    {/* birthDay */}
                                    <View style={styles.viewText}>
                                        <Text style={user.dateOfBirth ? styles.text : styles.nullText}>{user.dateOfBirth ? `${dateOfBirth.getDate()}-${dateOfBirth.getMonth() + 1}-${dateOfBirth.getFullYear()}` : 'Ngày sinh'}</Text>

                                    </View>
                                </View>
                                :
                                <View>
                                    {/* name */}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                        <TextInput style={[styles.viewText, { marginRight: 5, flex: 1, }, styles.text]}
                                            value={firstName}
                                            onChangeText={setFirstName} />
                                        <TextInput style={[styles.viewText, { marginRight: 5, flex: 1, }, styles.text]}
                                            value={lastName}
                                            onChangeText={setLastName} />
                                    </View>

                                    {/* birthDay */}
                                    {
                                        !user.dateOfBirth &&
                                        <View>
                                            <Pressable style={[styles.viewText, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]} onPress={() => setOpen(!open)}>
                                                <Text style={styles.text}>{`${birthDay.getDate()}-${birthDay.getMonth() + 1}-${birthDay.getFullYear()}`}</Text>
                                                <Ionicons name='today' color={colors.primary} size={18} />
                                            </Pressable>
                                            <DatePicker
                                                modal
                                                mode='date'
                                                open={open}
                                                date={birthDay}
                                                onConfirm={(date) => {
                                                    setOpen(false)
                                                    setBirthDay(date)
                                                }}
                                                onCancel={() => {
                                                    setOpen(false)
                                                }}
                                            />
                                        </View>
                                    }
                                </View>
                            )
                    }
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
                            <Text style={styles.text} >{user.phoneNumber}</Text>
                            <Ionicons name='shield-checkmark' size={15} color={colors.green} />
                        </View>
                    </View>
                </View>

                {/* email */}
                <View>
                    <Text style={styles.title}>Email</Text>

                    <View style={[styles.viewText, { marginTop: 10 }]}>
                        <Text style={styles.text}>{user.email}</Text>
                    </View>
                </View>
            </View>
        </View >
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
        height: 45,
        justifyContent: 'center'
        // width: '100%'
    },
    text: {
        fontSize: 15,
        color: colors.textPrimary
    },
    nullText: {
        fontSize: 15,
        color: colors.gray
    },
})