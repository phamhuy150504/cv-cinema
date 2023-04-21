import { https } from "./config"

export const MovieService = () => ({
    getListMovie: () => https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07'),
    getTheaterList: () => https.get('/api/QuanLyRap/LayThongTinLichChieuHeThongRap'),
    getBestMovie: () => https.get('/api/QuanLyPhim/LayDanhSachBanner')
})