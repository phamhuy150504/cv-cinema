import { https } from "./config";

export const bookingService = () => ({
    getInfoRoomTickets: (id) => https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`),
    postBookingTickets: (tickets) => https.post(`/api/QuanLyDatVe/DatVe`, tickets)
})