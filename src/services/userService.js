import { https } from "./config";

export const userService = () => ({
    registerAccount: (account) => https.post('/api/QuanLyNguoiDung/DangKy', account),
    login: (account) => https.post('/api/QuanLyNguoiDung/DangNhap', account)
})