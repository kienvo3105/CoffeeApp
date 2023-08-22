export const itemCategory = [
    {
        id: 1,
        name: 'CÀ PHÊ TRUYỀN THỐNG',
        img: require("../image/category/1.png")
    },
    {
        id: 2, name: 'CÀ PHÊ PHA MÁY', img: require("../image/category/2.png")
    },
    {
        id: 3, name: "TRÀ", img: require("../image/category/3.png")
    },
    {
        id: 4, name: "ĐÁ XÂY", img: require("../image/category/4.png")
    },
    {
        id: 5,
        name: 'Cà phê tt',
        img: require("../image/category/1.png")
    },
    {
        id: 6, name: 'Cà phê máy', img: require("../image/category/2.png")
    },
    {
        id: 7, name: "Trà", img: require("../image/category/3.png")
    },
    {
        id: 8, name: "Đá xây", img: require("../image/category/4.png")
    }
]

export const itemProduct = {
    1: [{
        id: 3,
        title: 'Phin Sữa Đá',
        describe: 'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.',
        price: "$" + ((Math.floor(Math.random() * ((+5) - (+1) + 1)) + (+1)).toFixed()) + " ",
        image: require('../image/product/3.png'),
        category_id: 1
    }],
    2: [{
        id: 1,
        title: 'Trà Sen Vàng',
        describe: 'Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!',
        price: "$" + ((Math.floor(Math.random() * ((+5) - (+1) + 1)) + (+ 1)).toFixed()),
        image: require('../image/product/1.png'),
        category_id: 2
    }, {
        id: 2,
        title: 'FREEZE Trà Xanh',
        describe: 'Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!    ',
        price: "$" + ((Math.floor(Math.random() * ((+5) - (+1) + 1)) + (+1)).toFixed()) + " ",
        image: require('../image/product/2.png'),
        category_id: 2
    },
    {
        id: 4,
        title: 'Phin Sữa Đá',
        describe: 'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.',
        price: "$" + ((Math.floor(Math.random() * ((+5) - (+1) + 1)) + (+1)).toFixed()) + " ",
        image: require('../image/product/3.png'),
        category_id: 2
    }]
}

export const itemPromotion = [
    { id: 1, title: "GIAM 10k", date: "11/8 - 30-8", img: require("../image/promotion/1.jpg") },
    { id: 2, title: "MUA 1 TANG 1", date: "1/8 - 20-8", img: require("../image/promotion/1.jpg") },
    { id: 3, title: "TANG 10k", date: "5/8 - 15-8", img: require("../image/promotion/1.jpg") },
    { id: 4, title: "GIAM 10k", date: "11/8 - 30-8", img: require("../image/promotion/1.jpg") },
    { id: 5, title: "GIAM 10k", date: "11/8 - 30-8", img: require("../image/promotion/1.jpg") },
]

export const itemBestSeller = [
    { id: 1, title: "Freeze Trà Xanh", price: 55000, img: require("../image/category/4.png") },
    {
        id: 4,
        title: 'Cà phê tt',
        price: 30000,
        img: require("../image/category/1.png")
    },
    {
        id: 2, title: 'Cà phê máy', price: 32000, img: require("../image/category/2.png")
    },
    {
        id: 3, title: "Trà", price: 45000, img: require("../image/category/3.png")
    },
]