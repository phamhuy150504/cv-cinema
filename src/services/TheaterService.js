import { https } from "./config";

export const theaterService = () => ({
    getInfoShowTimes: (id) => https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`) 
})