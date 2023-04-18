import { https } from "./config"

export const MovieService = () => ({
    getListMovie: () => https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05')
})