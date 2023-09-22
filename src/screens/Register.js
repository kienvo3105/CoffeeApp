import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Input } from "@rneui/base";
import { Button } from '@rneui/themed';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from '../constants/color';


const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.formInput}>
                <Input
                    inputStyle={styles.textInput}
                    labelStyle={styles.label}
                    label="Email"
                    leftIcon={<Icon name="account" size={20} />}
                    onChangeText={setEmail}
                    placeholder="Nhập Email"
                />
                <Input
                    inputStyle={styles.textInput}
                    labelStyle={styles.label}
                    label="Số điện thoại"
                    leftIcon={<Icon name="phone" size={20} />}
                    onChangeText={setPhone}
                    placeholder="Nhập số điện thoại"
                />
                <Input
                    inputStyle={styles.textInput}
                    label="Mật khẩu"
                    labelStyle={styles.label}
                    leftIcon={<Icon name="lock" size={18} />}
                    rightIcon={<Icon name={showPassword ? "eye" : "eye-off"} size={22} onPress={() => setShowPassword(!showPassword)} />}
                    onChangeText={setPassword}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={showPassword}

                />
                <Input
                    inputStyle={styles.textInput}
                    labelStyle={styles.label}
                    label="Xác nhận mật khẩu"
                    leftIcon={<Icon name="lock" size={18} />}
                    rightIcon={<Icon name={showRepeatPassword ? "eye" : "eye-off"} size={22} onPress={() => setShowRepeatPassword(!showPassword)} />}
                    onChangeText={setRepeatPassword}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={showRepeatPassword}
                    errorMessage={password !== repeatPassword && repeatPassword !== "" ? "Mật khẩu không chính xác" : ""}
                />
            </View>
            <Button
                title="Đăng kí"
                buttonStyle={{
                    backgroundColor: colors.primary,
                    // borderWidth: 2,
                    // borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    // width: 200,
                    marginHorizontal: 20,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
                disabled={email !== "" && password !== "" &&
                    phone !== "" && repeatPassword !== "" &&
                    repeatPassword === password
                    ? false : true}

            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 16 }}>Đã có tài khoản? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={[styles.textPress, { fontSize: 16 }]}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1e3b2',
    },
    formInput: {
        marginTop: "5%",
        marginHorizontal: 20
    },
    label: {
        color: colors.textPrimary,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInput: {
        color: colors.textPrimary,
        fontSize: 16
    },
    textPress: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 14
    },
})