import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Input } from "@rneui/base";
import { Button } from '@rneui/themed';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from '../constants/color';
import { usePost } from '../api/post';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { fetchPost, result, isError } = usePost();

    const handleOnPressLogin = async () => {
        fetchPost("auth/userLogin", { email, password });
    }

    useEffect(() => {
        console.log("result", result)
        if (result.errorCode && result.errorCode !== 0)
            Alert.alert("Lỗi đăng nhập!!", "Tài khoản hoặc mật khẩu không đúng!")
    }, [result])

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: 20 }}>

                <Image source={require("../assets/image/logoApp.png")} />
            </View>
            <View style={styles.formInput}>
                <Input
                    inputStyle={{ color: colors.textPrimary, fontSize: 16 }}
                    labelStyle={styles.label}
                    label="Email"
                    leftIcon={<Icon name="account" size={20} />}
                    onChangeText={setEmail}
                    placeholder="Nhập Email"
                />
                <Input
                    inputStyle={{ color: colors.textPrimary, fontSize: 16 }}
                    label="Mật khẩu"
                    labelStyle={styles.label}
                    leftIcon={<Icon name="lock" size={18} />}
                    rightIcon={<Icon name={showPassword ? "eye" : "eye-off"} size={22} onPress={() => setShowPassword(!showPassword)} />}
                    onChangeText={setPassword}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={!showPassword}

                />
                <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 15 }}><Text style={styles.textPress}>Quên mật khẩu?</Text></TouchableOpacity>
            </View>
            <Button
                title="Đăng nhập"
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
                disabled={email !== "" && password !== "" ? false : true}
                onPress={handleOnPressLogin}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 16 }}>Khách hàng mới? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={[styles.textPress, { fontSize: 16 }]}>Tạo một Tài khoản</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1e3b2',
    },
    formInput: {
        marginTop: "5%",
        marginHorizontal: 20
    },
    label: { color: colors.textPrimary, fontSize: 18, fontWeight: 'bold' },
    textPress: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 14
    },
})

// f1e3b2