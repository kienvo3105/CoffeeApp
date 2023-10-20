import * as Keychain from 'react-native-keychain';
import jwt_decode from "jwt-decode";


// Hàm chuyển số thành chuỗi định dạng "xxx.xxxđ"
export const formatCurrency = (value) => {
    // Kiểm tra xem value có phải là số không
    if (typeof value !== 'number') {
        return value; // Trả về nguyên giá trị nếu không phải số
    }

    // Sử dụng hàm toLocaleString để định dạng số và thêm đơn vị đồng (đ)
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};


export const checkToken = async () => {
    const credentials = await Keychain.getGenericPassword();
    let decoded = jwt_decode(credentials.password);
    const currentDate = new Date()
    if (!decoded || decoded.exp * 1000 - currentDate < 0)
        return false;
    return decoded.Info.id;
}

export const convertDate = (inputDate) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // hour12: false, // 24-hour format
    };
    const formatter = new Intl.DateTimeFormat('vi-VN', options);
    return formatter.format(inputDate);
}

export const convertFullDate = (inputDate) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false, // 24-hour format
    };
    const formatter = new Intl.DateTimeFormat('vi-VN', options);
    return formatter.format(inputDate);
}

