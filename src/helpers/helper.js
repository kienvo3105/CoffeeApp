// Hàm chuyển số thành chuỗi định dạng "xxx.xxxđ"
export const formatCurrency = (value) => {
    // Kiểm tra xem value có phải là số không
    if (typeof value !== 'number') {
        return value; // Trả về nguyên giá trị nếu không phải số
    }

    // Sử dụng hàm toLocaleString để định dạng số và thêm đơn vị đồng (đ)
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

// Sử dụng hàm formatCurrency để chuyển số thành chuỗi định dạng "xxx.xxxđ"
const number = 1234567; // Số bạn muốn chuyển đổi
const formattedValue = formatCurrency(number);
console.log(formattedValue); // Kết quả: "1.234.567đ"
